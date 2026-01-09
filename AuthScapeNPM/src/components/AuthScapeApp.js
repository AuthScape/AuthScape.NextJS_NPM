import React, { useState, useRef, useEffect, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useSearchParams, usePathname } from "next/navigation";
import axios from "axios";
import querystring from "query-string";
import Router from "next/router";
import GA4React from "ga-4-react";
import { create } from "zustand";
import { clarity } from "react-microsoft-clarity";

// ---- optional: import your cookie util if not global ----
// import { setCookie } from "cookies-next";
// import { apiService } from "@/services/api"; // wherever yours lives

// Decorate a user object with role/permission helpers (idempotent)
function ensureUserHelpers(u) {
  if (!u || typeof u !== "object") return u;

  // Avoid redefining on every call
  if (typeof u.hasRole === "function" &&
      typeof u.hasRoleId === "function" &&
      typeof u.hasPermission === "function") {
    return u;
  }

  const rolesArr = Array.isArray(u.roles) ? u.roles : [];
  const permsArr = Array.isArray(u.permissions) ? u.permissions : [];

  // defineProperty keeps them non-enumerable
  Object.defineProperty(u, "hasRole", {
    value: function hasRole(name) {
      if (!name) return false;
      return rolesArr.some(r => r?.name === name);
    },
    writable: false
  });

  Object.defineProperty(u, "hasRoleId", {
    value: function hasRoleId(id) {
      if (id === undefined || id === null) return false;
      return rolesArr.some(r => r?.id === id);
    },
    writable: false
  });

  Object.defineProperty(u, "hasPermission", {
    value: function hasPermission(name) {
      if (!name) return false;
      return permsArr.includes(name);
    },
    writable: false
  });

  return u;
}

export function AuthScapeApp({
  Component,
  layout,
  loadingLayout,
  signInLoadingComponent,
  pageProps,
  muiTheme = {},
  store = {},
  enforceLoggedIn = false,
  enableAuth = true,
}) {
  const [frontEndLoadedState, setFrontEndLoadedState] = useState(false);
  const [isLoadingShow, setIsLoadingShow] = useState(false);
  const [signedInUserState, setSignedInUserState] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const loadingAuth = useRef(false);
  const signedInUser = useRef(null);
  const queryCodeUsed = useRef(null);
  const ga4React = useRef(null);

  const searchParams = useSearchParams();
  const queryCode = searchParams.get("code");
  const pathname = usePathname();

  // ----- PKCE Sign-in (browser-only) -----
  const signInValidator = async (codeFromQuery) => {
    if (queryCodeUsed.current === codeFromQuery) return;
    queryCodeUsed.current = codeFromQuery;

    if (typeof window === "undefined") return;

    setIsSigningIn(true);

    const codeVerifier = window.localStorage.getItem("verifier");
    if (!codeFromQuery || !codeVerifier) {
      // No code or verifier - redirect to login
      window.localStorage.clear();
      module.exports.authService().login();
      return;
    }

    const headers = { "Content-Type": "application/x-www-form-urlencoded" };

    const body = querystring.stringify({
      code: codeFromQuery,
      grant_type: "authorization_code",
      redirect_uri: window.location.origin + "/signin-oidc",
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      code_verifier: codeVerifier,
    });

    try {
      const response = await axios.post(
        process.env.authorityUri + "/connect/token",
        body,
        { headers }
      );

      const domainHost = window.location.hostname.split(".").slice(-2).join(".");

      window.localStorage.removeItem("verifier");

      // NOTE: replace setCookie below with your implementation if different
      await setCookie("access_token", response.data.access_token, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        domain: domainHost,
        secure: true,
      });
      await setCookie("expires_in", response.data.expires_in, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        domain: domainHost,
        secure: true,
      });
      await setCookie("refresh_token", response.data.refresh_token, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        domain: domainHost,
        secure: true,
      });

      const redirectUri = window.localStorage.getItem("redirectUri") || "/";
      window.localStorage.clear();

      // Navigate to the redirect URI - use window.location for a clean page load
      // This ensures all state is properly initialized on the target page
      window.location.href = redirectUri;
    } catch (exp) {
      console.error("PKCE sign-in failed", exp);
      // Invalid code - clear storage and redirect to login
      window.localStorage.clear();
      setIsSigningIn(false);
      module.exports.authService().login();
    }
  };

  // ----- GA + Clarity -----
  async function initGA(G) {
    if (typeof window !== "undefined" && !GA4React.isInitialized() && G) {
      ga4React.current = new GA4React(G, { debug_mode: !process.env.production });
      try {
        await ga4React.current.initialize();
      } catch (error) {
        console.error(error);
      }
    }
  }

  const logEvent = (category, action, label) => {
    if (ga4React.current) ga4React.current.event(action, label, category);
    // your DB analytics can go here if desired
  };

  const databaseDrivenPageView = (pathName) => {
    if (process.env.enableDatabaseAnalytics !== "true") return;
    if (typeof window === "undefined") return;
    if (pathName === "/signin-oidc") return;

    const host = window.location.protocol + "//" + window.location.host;

    // Use module.exports to access sibling exports in babel bundle
    module.exports.apiService().post("/Analytics/PageView", {
      userId: signedInUser.current?.id,
      locationId: signedInUser.current?.locationId,
      companyId: signedInUser.current?.companyId,
      uri: pathName,
      host,
    });
  };

  // ----- Auth init (runs once) -----
  useEffect(() => {
    if (queryCode) {
      signInValidator(queryCode);
      return;
    }

    if (!loadingAuth.current) {
      loadingAuth.current = true;

      if (enableAuth) {
        // Use module.exports to access sibling exports in babel bundle
        module.exports.apiService().GetCurrentUser().then((usr) => {
          signedInUser.current = ensureUserHelpers(usr);
          setSignedInUserState(signedInUser.current);
          setFrontEndLoadedState(true);
        }).catch(() => {
          // no user / anonymous
          signedInUser.current = null;
          setSignedInUserState(null);
          setFrontEndLoadedState(true);
        });
      } else {
        setFrontEndLoadedState(true);
      }
    }
  }, [queryCode, enableAuth]);

  // ----- Analytics init -----
  useEffect(() => {
    if (!frontEndLoadedState || typeof window === "undefined") return;

    if (pageProps.googleAnalytics4Code) {
      initGA(pageProps.googleAnalytics4Code);
    } else if (process.env.googleAnalytics4) {
      initGA(process.env.googleAnalytics4);
    }

    if (pageProps.microsoftClarityCode) {
      clarity.init(pageProps.microsoftClarityCode);
    } else if (process.env.microsoftClarityTrackingCode) {
      clarity.init(process.env.microsoftClarityTrackingCode);
    }

    databaseDrivenPageView(window.location.pathname);

    const handler = (url) => {
      ga4React.current?.pageview(url);
      databaseDrivenPageView(url);
    };
    Router.events.on("routeChangeComplete", handler);
    return () => Router.events.off("routeChangeComplete", handler);
  }, [frontEndLoadedState, pageProps.googleAnalytics4Code, pageProps.microsoftClarityCode]);

  // ----- Enforce login (client) -----
  useEffect(() => {
    if (
      enforceLoggedIn &&
      pathname !== "/signin-oidc" &&
      frontEndLoadedState &&
      !signedInUserState
    ) {
      // Use module.exports to access sibling exports in babel bundle
      module.exports.authService().login();
    }
  }, [signedInUserState, enforceLoggedIn, frontEndLoadedState, pathname]);

  // Stable getter for current user (with helpers)
  const currentUser = useMemo(() => ensureUserHelpers(signedInUser.current), [signedInUserState]);

  const useStore = create(() => store);

  // ----- Render (SSR-safe; always output page so <title> is visible) -----

  // Default sign-in loading component if none provided
  const defaultSignInLoading = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #e0e0e0',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{ marginTop: '16px', color: '#666' }}>Signing in...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  // Show loading screen when signing in
  if (isSigningIn) {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
          />
        </Head>
        <ThemeProvider theme={muiTheme}>
          {signInLoadingComponent || defaultSignInLoading}
        </ThemeProvider>
      </>
    );
  }

  const pageContent = layout
    ? layout({
        children: (
          <Component
            {...pageProps}
            currentUser={currentUser}
            loadedUser={frontEndLoadedState}
            setIsLoading={setIsLoadingShow}
            logEvent={logEvent}
            store={useStore}
            toast={toast}
          />
        ),
        currentUser,
        setIsLoading: setIsLoadingShow,
        logEvent,
        toast,
        store: useStore,
        pageProps,
      })
    : (
      <Component
        {...pageProps}
        currentUser={currentUser}
        loadedUser={frontEndLoadedState}
        setIsLoading={setIsLoadingShow}
        logEvent={logEvent}
        store={useStore}
        toast={toast}
      />
    );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
      </Head>

      <ThemeProvider theme={muiTheme}>
        {pageContent}
        <ToastContainer />
      </ThemeProvider>

      {loadingLayout && loadingLayout(isLoadingShow)}
    </>
  );
}
