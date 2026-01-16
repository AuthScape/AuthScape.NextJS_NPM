import React, { useState, useRef, useEffect, useMemo, createContext, useContext, useCallback } from "react";
import { ToastContainer, toast, Bounce, Slide, Zoom, Flip } from "react-toastify";
import Head from "next/head";

// Re-export toast and transitions so pages can import from authscape
export { toast, Bounce, Slide, Zoom, Flip };
import { useSearchParams, usePathname } from "next/navigation";
import axios from "axios";
import querystring from "query-string";
import Router from "next/router";
import GA4React from "ga-4-react";
import { create } from "zustand";
import { clarity } from "react-microsoft-clarity";
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HubConnectionBuilder, LogLevel, HttpTransportType } from '@microsoft/signalr';
import Cookies from 'js-cookie';

// ============================================================================
// Cookie utility function
// ============================================================================
const setCookie = (name, value, options = {}) => {
  return new Promise((resolve) => {
    let cookieString = `${name}=${value};`;
    if (options.maxAge) cookieString += `max-age=${options.maxAge};`;
    if (options.path) cookieString += `path=${options.path};`;
    if (options.domain) cookieString += `domain=${options.domain};`;
    if (options.secure) cookieString += `secure;`;
    document.cookie = cookieString;
    resolve();
  });
};

// ============================================================================
// Error Tracking Service
// ============================================================================
let errorTrackingSessionId = null;
let errorTrackingUserId = null;
let errorTrackingInitialized = false;

function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getOrCreateSessionId() {
  if (typeof window === 'undefined') return null;

  let storedSessionId = sessionStorage.getItem('errorTrackingSessionId');

  if (!storedSessionId) {
    storedSessionId = sessionStorage.getItem('analyticsSessionId') || generateGuid();
    sessionStorage.setItem('errorTrackingSessionId', storedSessionId);
  }

  return storedSessionId;
}

function initializeErrorTracking(currentUser = null) {
  if (currentUser && currentUser.id) {
    errorTrackingUserId = currentUser.id;
  }

  errorTrackingSessionId = getOrCreateSessionId();
  errorTrackingInitialized = true;
}

export async function logError(errorData) {
  if (!errorTrackingSessionId && typeof window !== 'undefined') {
    errorTrackingSessionId = getOrCreateSessionId();
  }

  const error = {
    message: errorData.message || 'Unknown error',
    errorType: errorData.errorType || 'JavaScriptError',
    stackTrace: errorData.stackTrace || '',
    url: errorData.url || (typeof window !== 'undefined' ? window.location.href : ''),
    componentName: errorData.componentName || null,
    userId: errorTrackingUserId || null,
    sessionId: errorTrackingSessionId || null,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
    ipAddress: '',
    metadata: errorData.metadata || null
  };

  try {
    const response = await module.exports.apiService().post('/ErrorTracking/LogError', error);
    if (response && response.status !== 200) {
      console.error('Error tracking API returned:', response.status);
    }
  } catch (err) {
    console.error('Failed to send error to tracking system:', err.message);
  }
}

export function setErrorTrackingUserId(newUserId) {
  errorTrackingUserId = newUserId;
}

// ============================================================================
// AppThemeProvider
// ============================================================================
const ThemeContext = createContext();

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return { mode: 'light', toggleTheme: () => {} };
  }
  return context;
};

const AppThemeProvider = ({ children, customTheme }) => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('themeMode');
      if (savedMode) {
        setMode(savedMode);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', mode);
    }
  }, [mode]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', newMode);
    }
  };

  const theme = customTheme || createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#0098e5', light: '#4db8ff', dark: '#006ba6' },
            secondary: { main: '#44596e', light: '#6b7f94', dark: '#2d3d4f' },
            background: { default: '#f5f8fa', paper: '#ffffff' },
            text: { primary: '#1a202c', secondary: '#4a5568' },
            divider: 'rgba(0, 0, 0, 0.12)',
          }
        : {
            primary: { main: '#2196f3', light: '#42a5f5', dark: '#1976d2' },
            secondary: { main: '#90caf9', light: '#bbdefb', dark: '#42a5f5' },
            background: { default: '#121212', paper: '#1e1e1e' },
            text: { primary: '#ffffff', secondary: '#b0b0b0' },
            divider: 'rgba(255, 255, 255, 0.12)',
            action: { hover: 'rgba(255, 255, 255, 0.08)', selected: 'rgba(255, 255, 255, 0.16)' },
          }),
    },
    typography: { fontFamily: 'Poppins, sans-serif' },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            ...(mode === 'dark' && { backgroundColor: '#1e1e1e', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }),
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              ...(mode === 'dark' && {
                '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.4)' },
                '&.Mui-focused fieldset': { borderColor: '#2196f3' },
              }),
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { ...(mode === 'dark' && { borderColor: 'rgba(255, 255, 255, 0.23)' }) },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: { ...(mode === 'dark' && { borderColor: 'rgba(255, 255, 255, 0.12)' }) },
        },
      },
    },
  });

  return React.createElement(
    ThemeContext.Provider,
    { value: { mode, toggleTheme } },
    React.createElement(
      MuiThemeProvider,
      { theme },
      React.createElement(CssBaseline),
      children
    )
  );
};

// ============================================================================
// NotificationProvider
// ============================================================================
const NotificationContext = createContext();

let globalConnection = null;
let globalUserId = null;
let globalIsInitialized = false;

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    return {
      notifications: [],
      unreadCount: 0,
      isConnected: false,
      markAsRead: () => {},
      markAllAsRead: () => {},
      deleteNotification: () => {},
      clearAll: () => {},
      refresh: () => {}
    };
  }
  return context;
}

function NotificationProvider({ children, currentUser, apiService }) {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  const markAsRead = useCallback(async (notificationId) => {
    try {
      await apiService().post('/Notification/MarkAsRead', { notificationId });
      setNotifications(prev =>
        prev.map(n => n.id === notificationId ? { ...n, isRead: true, readAt: new Date() } : n)
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  }, [apiService]);

  const markAllAsRead = useCallback(async () => {
    try {
      await apiService().post('/Notification/MarkAllAsRead');
      setNotifications(prev => prev.map(n => ({ ...n, isRead: true, readAt: new Date() })));
      setUnreadCount(0);
    } catch (err) {
      console.error('Failed to mark all as read:', err);
    }
  }, [apiService]);

  const deleteNotification = useCallback(async (notificationId) => {
    try {
      await apiService().delete(`/Notification/DeleteNotification?id=${notificationId}`);
      setNotifications(prev => {
        const notification = prev.find(n => n.id === notificationId);
        if (notification && !notification.isRead) {
          setUnreadCount(count => Math.max(0, count - 1));
        }
        return prev.filter(n => n.id !== notificationId);
      });
    } catch (err) {
      console.error('Failed to delete notification:', err);
    }
  }, [apiService]);

  const clearAll = useCallback(async () => {
    try {
      await apiService().delete('/Notification/ClearAllNotifications');
      setNotifications([]);
      setUnreadCount(0);
    } catch (err) {
      console.error('Failed to clear notifications:', err);
    }
  }, [apiService]);

  const fetchNotifications = useCallback(async () => {
    try {
      const [notifResponse, countResponse] = await Promise.all([
        apiService().get('/Notification/GetNotifications?unreadOnly=false&take=50'),
        apiService().get('/Notification/GetUnreadCount')
      ]);
      if (notifResponse.status === 200) {
        setNotifications(notifResponse.data);
      }
      if (countResponse.status === 200) {
        setUnreadCount(countResponse.data.count);
      }
    } catch (err) {
      console.error('Failed to fetch notifications:', err);
    }
  }, [apiService]);

  useEffect(() => {
    const userId = currentUser?.id;
    if (!userId) return;

    const fetchData = async () => {
      try {
        const [notifResponse, countResponse] = await Promise.all([
          apiService().get('/Notification/GetNotifications?unreadOnly=false&take=50'),
          apiService().get('/Notification/GetUnreadCount')
        ]);
        if (notifResponse.status === 200) {
          setNotifications(notifResponse.data);
        }
        if (countResponse.status === 200) {
          setUnreadCount(countResponse.data.count);
        }
      } catch (err) {
        console.error('Failed to fetch notifications:', err);
      }
    };

    if (globalIsInitialized && globalUserId === userId && globalConnection) {
      setIsConnected(globalConnection.state === 'Connected');
      fetchData();
      return;
    }

    if (globalConnection && globalUserId !== userId) {
      globalConnection.stop();
      globalConnection = null;
      globalIsInitialized = false;
    }

    globalUserId = userId;
    globalIsInitialized = true;

    const apiBaseUrl = process.env.apiUri || 'http://localhost:54218';
    const hubUrl = `${apiBaseUrl}/notifications`;

    // Get access token for SignalR authentication
    const accessToken = Cookies.get('access_token') || '';

    const connection = new HubConnectionBuilder()
      .withUrl(hubUrl, {
        accessTokenFactory: () => accessToken,
        transport: HttpTransportType.WebSockets | HttpTransportType.LongPolling
      })
      .withAutomaticReconnect([0, 2000, 5000, 10000, 30000])
      .configureLogging(LogLevel.Warning)
      .build();

    globalConnection = connection;

    connection.on('OnNotificationReceived', (notification) => {
      setNotifications(prev => [notification, ...prev]);
      setUnreadCount(prev => prev + 1);

      const description = notification.message || notification.categoryName || '';
      toast.info(
        React.createElement('div', null,
          React.createElement('strong', null, notification.title),
          description && React.createElement('div', { style: { fontSize: '0.9em', marginTop: '4px' } }, description)
        ),
        {
          onClick: () => {
            if (notification.linkUrl) {
              window.location.href = notification.linkUrl;
            }
          }
        }
      );
    });

    connection.onreconnecting(() => setIsConnected(false));
    connection.onreconnected(() => { setIsConnected(true); fetchData(); });
    connection.onclose(() => setIsConnected(false));

    const startConnection = async () => {
      try {
        await connection.start();
        setIsConnected(true);
        await connection.invoke('JoinUserNotifications', userId);
        if (currentUser?.companyId) {
          await connection.invoke('JoinCompanyNotifications', currentUser.companyId);
        }
        if (currentUser?.locationId) {
          await connection.invoke('JoinLocationNotifications', currentUser.locationId);
        }
        await fetchData();
      } catch (err) {
        console.error('Failed to connect to NotificationHub:', err.message);
        await fetchData();
      }
    };

    startConnection();
  }, [currentUser?.id, currentUser?.companyId, currentUser?.locationId, apiService]);

  const value = {
    notifications,
    unreadCount,
    isConnected,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll,
    refresh: fetchNotifications
  };

  return React.createElement(NotificationContext.Provider, { value }, children);
}

// ============================================================================
// User Helpers
// ============================================================================
function ensureUserHelpers(u) {
  if (!u || typeof u !== "object") return u;

  if (typeof u.hasRole === "function" &&
      typeof u.hasRoleId === "function" &&
      typeof u.hasPermission === "function") {
    return u;
  }

  const rolesArr = Array.isArray(u.roles) ? u.roles : [];
  const permsArr = Array.isArray(u.permissions) ? u.permissions : [];

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

// ============================================================================
// AuthScapeApp Component
// ============================================================================
export function AuthScapeApp({
  Component,
  layout,
  loadingLayout,
  signInLoadingComponent,
  pageProps,
  muiTheme = null,
  store = {},
  enforceLoggedIn = false,
  enableAuth = true,
  enableNotifications = true,
  enableErrorTracking = true,
  toastConfig = {},
  onUserLoaded = null,
}) {
  const [frontEndLoadedState, setFrontEndLoadedState] = useState(false);
  const [isLoadingShow, setIsLoadingShow] = useState(false);
  const [signedInUserState, setSignedInUserState] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const loadingAuth = useRef(false);
  const signedInUser = useRef(null);
  const queryCodeUsed = useRef(null);
  const ga4React = useRef(null);
  const errorTrackingInitializedRef = useRef(false);

  const searchParams = useSearchParams();
  const queryCode = searchParams.get("code");
  const pathname = usePathname();

  const signInValidator = async (codeFromQuery) => {
    if (queryCodeUsed.current === codeFromQuery) return;
    queryCodeUsed.current = codeFromQuery;

    if (typeof window === "undefined") return;

    setIsSigningIn(true);

    const codeVerifier = window.localStorage.getItem("verifier");
    if (!codeFromQuery || !codeVerifier) {
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

      window.location.href = redirectUri;
    } catch (exp) {
      console.error("PKCE sign-in failed", exp);
      window.localStorage.clear();
      setIsSigningIn(false);
      module.exports.authService().login();
    }
  };

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
  };

  const databaseDrivenPageView = (pathName) => {
    if (process.env.enableDatabaseAnalytics !== "true") return;
    if (typeof window === "undefined") return;
    if (pathName === "/signin-oidc") return;

    const host = window.location.protocol + "//" + window.location.host;

    module.exports.apiService().post("/Analytics/PageView", {
      userId: signedInUser.current?.id,
      locationId: signedInUser.current?.locationId,
      companyId: signedInUser.current?.companyId,
      uri: pathName,
      host,
    });
  };

  useEffect(() => {
    if (queryCode) {
      signInValidator(queryCode);
      return;
    }

    if (!loadingAuth.current) {
      loadingAuth.current = true;

      if (enableAuth) {
        module.exports.apiService().GetCurrentUser().then((usr) => {
          signedInUser.current = ensureUserHelpers(usr);
          setSignedInUserState(signedInUser.current);
          setFrontEndLoadedState(true);

          // Initialize error tracking with user info
          if (enableErrorTracking && usr && !errorTrackingInitializedRef.current) {
            initializeErrorTracking(usr);
            errorTrackingInitializedRef.current = true;
          }

          if (onUserLoaded && usr) {
            onUserLoaded(usr);
          }
        }).catch((err) => {
          signedInUser.current = null;
          setSignedInUserState(null);
          setFrontEndLoadedState(true);
        });
      } else {
        setFrontEndLoadedState(true);
      }
    }
  }, [queryCode, enableAuth, enableErrorTracking]);

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

  useEffect(() => {
    if (
      enforceLoggedIn &&
      pathname !== "/signin-oidc" &&
      frontEndLoadedState &&
      !signedInUserState
    ) {
      module.exports.authService().login();
    }
  }, [signedInUserState, enforceLoggedIn, frontEndLoadedState, pathname]);

  const currentUser = useMemo(() => ensureUserHelpers(signedInUser.current), [signedInUserState]);

  const useStore = create(() => store);

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

  if (isSigningIn) {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
          />
        </Head>
        <AppThemeProvider customTheme={muiTheme}>
          {signInLoadingComponent || defaultSignInLoading}
        </AppThemeProvider>
      </>
    );
  }

  const defaultToastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "colored",
    ...toastConfig
  };

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

  const wrappedContent = enableNotifications && currentUser ? (
    <NotificationProvider
      currentUser={currentUser}
      apiService={module.exports.apiService}
    >
      {pageContent}
    </NotificationProvider>
  ) : pageContent;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
      </Head>

      <AppThemeProvider customTheme={muiTheme}>
        {wrappedContent}
      </AppThemeProvider>

      <ToastContainer {...defaultToastConfig} />
      {loadingLayout && loadingLayout(isLoadingShow)}
    </>
  );
}
