import axios from 'axios'
import querystring from 'query-string';
import fileDownload from 'js-file-download';
import Cookies from 'js-cookie';

// ---------------------------------------------------------------------------
// Signed-in user cache (client-side only)
// ---------------------------------------------------------------------------
// Caches the result of GetCurrentUser in sessionStorage to avoid re-calling
// /UserManagement on every hard page reload. The entry is KEYED BY THE ACCESS
// TOKEN: company/location/impersonation context lives in the token claims, so
// switching context issues a new token -> new key -> the stale entry is never
// read. Cleared on logout, and bounded by a short TTL as a backstop. This is
// purely per-browser; it has no effect on the server handling many users.
const CURRENT_USER_CACHE_KEY = 'authscape_current_user';
const CURRENT_USER_TTL_MS = 60 * 1000; // 60s backstop

const readCurrentUserCache = (token) => {
    if (typeof window === 'undefined' || !token) return null;
    try {
        const raw = window.sessionStorage.getItem(CURRENT_USER_CACHE_KEY);
        if (!raw) return null;
        const entry = JSON.parse(raw);
        if (entry.t !== token) return null;                 // different token => different context
        if (!entry.exp || entry.exp < Date.now()) return null; // TTL backstop
        return entry.u;
    } catch (e) {
        return null;
    }
};

const writeCurrentUserCache = (token, user) => {
    if (typeof window === 'undefined' || !token) return;
    try {
        window.sessionStorage.setItem(
            CURRENT_USER_CACHE_KEY,
            JSON.stringify({ t: token, u: user, exp: Date.now() + CURRENT_USER_TTL_MS })
        );
    } catch (e) { /* sessionStorage unavailable (private mode / quota) — skip caching */ }
};

// Clear the cached signed-in user. Call after impersonation / company / location
// switches, and it is also called automatically on logout and when no token exists.
export const invalidateCurrentUser = () => {
    if (typeof window === 'undefined') return;
    try { window.sessionStorage.removeItem(CURRENT_USER_CACHE_KEY); } catch (e) { /* ignore */ }
};

const setupDefaultOptions = async (ctx = null) => {
    let defaultOptions = {};
    if (ctx == null) {
        let accessToken = Cookies.get('access_token') || '';

        if (accessToken !== null && accessToken !== undefined && accessToken != "") {
            defaultOptions = {
                headers: {
                    Authorization: "Bearer " + accessToken
                }
            };
        } else {
            defaultOptions = {
                headers: {},
            };
        }
    } else {
        defaultOptions = {
            headers: {},
        };
    }

    return defaultOptions;
}

const RefreshToken = async (originalRequest, instance) => {
    try {
        let accessToken = Cookies.get('access_token') || '';
        let refreshToken = Cookies.get('refresh_token') || '';

        if (!refreshToken) {
            return false;
        }

        // Resolve the token endpoint from OIDC discovery so refresh works against either provider
        // (OpenIddict's /connect/token or Keycloak's /protocol/openid-connect/token). Cached on window.
        let oidc = (typeof window !== "undefined" && window.__authscape_oidc) || null;
        if (!oidc) {
            const discoveryRes = await fetch(process.env.authorityUri.replace(/\/$/, "") + "/.well-known/openid-configuration");
            oidc = await discoveryRes.json();
            if (typeof window !== "undefined") window.__authscape_oidc = oidc;
        }

        const refreshBody = {
            grant_type: 'refresh_token',
            client_id: process.env.client_id,
            refresh_token: refreshToken
        };
        // Only send a client secret for confidential clients; public SPA clients (e.g. Keycloak) must not.
        if (process.env.client_secret) {
            refreshBody.client_secret = process.env.client_secret;
        }

        let response = await instance.post(oidc.token_endpoint,
            querystring.stringify(refreshBody), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + accessToken
            }
        });

        if (response != null && response.status == 200) {
            let domainHost = window.location.hostname.split('.').slice(-2).join('.');
            originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access_token;

            Cookies.set('access_token', response.data.access_token, {
                expires: 365,
                path: '/',
                domain: domainHost,
                secure: (typeof window !== "undefined" && window.location.protocol === "https:")
            });

            Cookies.set('expires_in', String(response.data.expires_in), {
                expires: 365,
                path: '/',
                domain: domainHost,
                secure: (typeof window !== "undefined" && window.location.protocol === "https:")
            });

            Cookies.set('refresh_token', response.data.refresh_token, {
                expires: 365,
                path: '/',
                domain: domainHost,
                secure: (typeof window !== "undefined" && window.location.protocol === "https:")
            });

            return true;
        }

        return false;
    } catch (err) {
        return false;
    }
}

export const apiService = (ctx = null) => {
    let env = process.env.stage;
    if (env == "development") {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }

    let baseUri = process.env.apiUri + "/api";

    const instance = axios.create({
        baseURL: baseUri,
        params: {}
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalConfig = error.config;
            if (error.response) {
                if (error.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    const refreshed = await RefreshToken(originalConfig, instance);
                    if (refreshed) {
                        return instance.request(originalConfig);
                    }
                    return Promise.reject(error);
                }

                if (error.response.status === 400) {
                    const reqUrl = error.response.config.url || "";
                    const isTokenEndpoint = reqUrl.includes("/connect/token") || reqUrl.includes("/protocol/openid-connect/token");
                    if (isTokenEndpoint) {
                        let domainHost = window.location.hostname.split('.').slice(-2).join('.');
                        Cookies.remove('access_token', { path: '/', domain: domainHost, secure: (typeof window !== "undefined" && window.location.protocol === "https:") });
                        Cookies.remove('refresh_token', { path: '/', domain: domainHost, secure: (typeof window !== "undefined" && window.location.protocol === "https:") });
                        Cookies.remove('expires_in', { path: '/', domain: domainHost, secure: (typeof window !== "undefined" && window.location.protocol === "https:") });
                    }
                    return Promise.reject(error);
                }
            }
            return Promise.reject(error);
        }
    );

    return {
        get: async (url, options = {}) => {
            try {
                let defaultOptions = await setupDefaultOptions(ctx);
                return await instance.get(url, { ...defaultOptions, ...options });
            } catch (error) {
                return error.response;
            }
        },
        post: async (url, data, options = {}) => {
            try {
                let defaultOptions = await setupDefaultOptions(ctx);
                return await instance.post(url, data, { ...defaultOptions, ...options });
            } catch (error) {
                return error.response;
            }
        },
        put: async (url, data, options = {}) => {
            try {
                let defaultOptions = await setupDefaultOptions(ctx);
                return await instance.put(url, data, { ...defaultOptions, ...options });
            } catch (error) {
                return error.response;
            }
        },
        delete: async (url, options = {}) => {
            try {
                let defaultOptions = await setupDefaultOptions(ctx);
                return await instance.delete(url, { ...defaultOptions, ...options });
            } catch (error) {
                return error.response;
            }
        },
        GetCurrentUser: async (forceRefresh = false) => {
            try {
                let accessToken = Cookies.get('access_token') || null;

                if (!accessToken) {
                    invalidateCurrentUser();
                    return null;
                }

                if (!forceRefresh) {
                    const cached = readCurrentUserCache(accessToken);
                    if (cached) return cached;
                }

                let defaultOptions = await setupDefaultOptions(null);
                const response = await instance.get('/UserManagement', defaultOptions);
                if (response != null && response.status == 200) {
                    writeCurrentUserCache(accessToken, response.data);
                    return response.data;
                }
            } catch (exp) {
                // Token invalid or expired
            }
            return null;
        },
        DownloadFile: async (url, fileName, completed, method = "get", data = {}, mimeType = "application/octet-stream", passData = false) => {
            try {
                let defaultOptions = {};
                let options = { responseType: "blob" };

                let response = null;
                if (method == "get") {
                    response = await instance.get(url, { ...defaultOptions, ...options });
                } else if (method == "post") {
                    response = await instance.post(url, data, { ...defaultOptions, ...options });
                }

                if (response != null && response.status === 200) {
                    if (!passData) {
                        fileDownload(response.data, fileName, mimeType);
                        if (completed !== undefined) {
                            completed();
                        }
                    } else {
                        completed(response.data);
                    }
                }
            } catch (error) {
                console.error(error);
                if (completed !== undefined) {
                    completed();
                }
            }
        }
    }
}
