/**
 * AuthScape Sitemap - App Router Implementation
 * This file contains the complete sitemap logic for Next.js App Router (Route Handlers)
 * Users will import and call createSitemapRoute from their app/sitemap.xml/route.js file
 */

/**
 * Creates a sitemap route handler with the provided API URI
 * @param {string} apiUri - The AuthScape API base URI (from process.env.apiUri)
 * @returns {Function} GET route handler function
 */
export function createSitemapRoute(apiUri) {
  return async function GET(request) {
    try {
      // Get the domain from the request
      const url = new URL(request.url);
      const protocol = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
      const host = request.headers.get('host') || url.host;

      // Determine protocol based on host
      let domain;
      if (host.includes("localhost")) {
        domain = "http://" + host;
      } else {
        domain = "https://" + host;
      }

      if (!apiUri) {
        console.error('AuthScape Sitemap Error: apiUri is not configured in environment variables');
        return new Response('Sitemap configuration error: API URI not set. Please ensure apiUri is defined in your next.config.js env object or .env.local file.', {
          status: 500,
          headers: {
            'Content-Type': 'text/plain',
          },
        });
      }

      // URL encode the domain for the API request
      const encodedDomain = encodeURIComponent(domain);
      const apiUrl = `${apiUri}/api/Sitemap?domain=${encodedDomain}`;

      console.log('Fetching sitemap from:', apiUrl);
      console.log('Domain being sent:', domain);
      console.log('Encoded domain:', encodedDomain);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        console.error('API Response Status:', response.status);
        console.error('API Response StatusText:', response.statusText);
        const errorBody = await response.text();
        console.error('API Response Body:', errorBody);
        throw new Error(`API request failed with status ${response.status}: ${errorBody}`);
      }

      // Get the sitemap XML
      const sitemap = await response.text();

      console.log('Sitemap fetched successfully, length:', sitemap.length);

      // Return the XML response with appropriate headers
      return new Response(sitemap, {
        status: 200,
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
      });
    } catch (error) {
      console.error('AuthScape Sitemap Error:', error);

      return new Response(`Error generating sitemap: ${error.message || error}`, {
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  };
}
