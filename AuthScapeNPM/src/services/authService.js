import Cookies from 'js-cookie';

export const authService = () => {

    return {

        dec2hex: (dec) => {
            return ('0' + dec.toString(16)).slice(-2)
        },
        generateRandomString: () => {
            var array = new Uint32Array(56/2);
            window.crypto.getRandomValues(array);
            return Array.from(array, authService().dec2hex).join('');
        },
        sha256: (plain) => {
            const encoder = new TextEncoder();
            const data = encoder.encode(plain);
            return window.crypto.subtle.digest('SHA-256', data);
        },
        base64urlencode: (a) => {
            var str = "";
            var bytes = new Uint8Array(a);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
            str += String.fromCharCode(bytes[i]);
            }
            return btoa(str)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
        },
        challenge_from_verifier: async (v) => {
            let hashed = await authService().sha256(v);
            let base64encoded = authService().base64urlencode(hashed);
            return base64encoded;
        },
        inviteUsers: async (inviteRequests) => {

            var host = window.location.protocol + "//" + window.location.host;

            let response = await apiService().post(process.env.authorityUri + "/Invite/InviteUsers",
                {
                    requests: inviteRequests,
                    host: host
                }
            );

            return response;
        },
        inviteUser: async (inviteRequest) => {

            let inviteRequests = [];
            inviteRequests.push(inviteRequest);

            var host = window.location.protocol + "//" + window.location.host;

            let response = await apiService().post(
                process.env.authorityUri + "/Invite/InviteUsers",
                {
                    requests: inviteRequests,
                    host: host
                }
            );

            return response;
        },
        // Resolves the provider's OIDC endpoints from its discovery document so the SPA works against
        // any standards-compliant issuer (AuthScape's OpenIddict IDP *or* Keycloak) instead of
        // hardcoding OpenIddict's /connect/* paths. Cached on window for the session.
        resolveOidcConfig: async () => {
            if (typeof window !== "undefined" && window.__authscape_oidc) {
                return window.__authscape_oidc;
            }
            const res = await fetch(process.env.authorityUri.replace(/\/$/, "") + "/.well-known/openid-configuration");
            if (!res.ok) {
                throw new Error("OIDC discovery failed (" + res.status + ") at " + process.env.authorityUri);
            }
            const cfg = await res.json();
            if (typeof window !== "undefined") {
                window.__authscape_oidc = cfg;
            }
            return cfg;
        },
        login: async (redirectUserUri = null, deviceId = null) => {

            let state = authService().generateRandomString();

            if (redirectUserUri != null)
            {
                localStorage.setItem("redirectUri", redirectUserUri);
            }

            let verifier = authService().generateRandomString();
            var challenge = await authService().challenge_from_verifier(verifier);

            window.localStorage.setItem("verifier", verifier);

            let redirectUri = window.location.origin + "/signin-oidc";

            const oidc = await authService().resolveOidcConfig();
            // Scope is configurable so each provider gets the scopes its clients expose
            // (OpenIddict adds "api1"; Keycloak typically just the standard set).
            const scope = process.env.oauthScope || "openid profile email offline_access";

            let loginUri = oidc.authorization_endpoint
                + "?response_type=code"
                + "&state=" + state
                + "&client_id=" + encodeURIComponent(process.env.client_id)
                + "&scope=" + encodeURIComponent(scope)
                + "&redirect_uri=" + encodeURIComponent(redirectUri)
                + "&code_challenge=" + challenge
                + "&code_challenge_method=S256";

            if (deviceId)
            {
                loginUri += "&deviceId=" + deviceId; // will be for chrome extention and mobile apps later
            }

            window.location.href = loginUri;
        },
        signUp: async (redirectUrl = null) => {

            const returnUrl = redirectUrl == null ? window.location.href : redirectUrl;
            localStorage.setItem("redirectUri", returnUrl);

            // Keycloak hosts registration at its own endpoint (authorization endpoint with
            // "/auth" → "/registrations"); the AuthScape OpenIddict IDP uses a Razor page.
            try {
                const oidc = await authService().resolveOidcConfig();
                if (oidc.issuer && oidc.issuer.indexOf("/realms/") !== -1 && oidc.authorization_endpoint) {
                    const scope = process.env.oauthScope || "openid profile email offline_access";
                    const redirectUri = window.location.origin + "/signin-oidc";
                    const regUri = oidc.authorization_endpoint.replace("/protocol/openid-connect/auth", "/protocol/openid-connect/registrations");
                    window.location.href = regUri
                        + "?response_type=code"
                        + "&client_id=" + encodeURIComponent(process.env.client_id)
                        + "&scope=" + encodeURIComponent(scope)
                        + "&redirect_uri=" + encodeURIComponent(redirectUri);
                    return;
                }
            } catch (e) { /* fall through to the legacy AuthScape IDP path */ }

            window.location.href = process.env.authorityUri + "/Identity/Account/Register?returnUrl=" + returnUrl;
        },
        manageAccount: async () => {

            // Keycloak exposes a self-service account console at {issuer}/account; the AuthScape
            // OpenIddict IDP uses its own Razor management page.
            try {
                const oidc = await authService().resolveOidcConfig();
                if (oidc.issuer && oidc.issuer.indexOf("/realms/") !== -1) {
                    window.location.href = oidc.issuer.replace(/\/$/, "") + "/account";
                    return;
                }
            } catch (e) { /* fall through to the legacy AuthScape IDP path */ }

            window.location.href = process.env.authorityUri + "/Identity/Account/Manage";
        },
        logout: async (redirectUri = null) => {

            let domainHost = window.location.hostname.split('.').slice(-2).join('.');

            Cookies.remove('access_token', { path: '/', domain: domainHost, secure: (typeof window !== "undefined" && window.location.protocol === "https:") });
            Cookies.remove('refresh_token', { path: '/', domain: domainHost, secure: (typeof window !== "undefined" && window.location.protocol === "https:") });
            Cookies.remove('expires_in', { path: '/', domain: domainHost, secure: (typeof window !== "undefined" && window.location.protocol === "https:") });

            // Drop the cached signed-in user so the next sign-in never reads a stale identity.
            try { if (typeof window !== "undefined") window.sessionStorage.removeItem("authscape_current_user"); } catch (e) { /* ignore */ }

            const target = redirectUri == null ? window.location.href : redirectUri;

            let endSession = process.env.authorityUri + "/connect/logout";
            try {
                const oidc = await authService().resolveOidcConfig();
                if (oidc.end_session_endpoint) endSession = oidc.end_session_endpoint;
            } catch (e) { /* use legacy default */ }

            // Standards-compliant RP-initiated logout (Keycloak) uses post_logout_redirect_uri +
            // client_id; the legacy AuthScape OpenIddict IDP uses ?redirect=.
            if (endSession.indexOf("/connect/logout") === -1) {
                window.location.href = endSession
                    + "?post_logout_redirect_uri=" + encodeURIComponent(target)
                    + "&client_id=" + encodeURIComponent(process.env.client_id);
            } else {
                window.location.href = endSession + "?redirect=" + target;
            }
        },
    }
}