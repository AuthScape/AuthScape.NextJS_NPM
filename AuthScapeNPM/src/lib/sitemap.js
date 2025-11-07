/**
 * AuthScape Sitemap - Pages Router Implementation
 * This file contains the complete sitemap logic for Next.js Pages Router
 * Users will import and call createSitemapHandler from their pages/sitemap.xml.js file
 */

// Empty component - sitemap is generated server-side only
export function Sitemap() {
  return null;
}

/**
 * Creates a sitemap handler with the provided API URI
 * @param {string} apiUri - The AuthScape API base URI (from process.env.apiUri)
 * @returns {Function} getServerSideProps function
 */
export function createSitemapHandler(apiUri) {
  return async function getServerSideProps({ req, res }) {
    try {
      // Get the domain from the request
      const protocol = req.headers['x-forwarded-proto'] || 'http';
      const host = req.headers.host;
      const domain = `${protocol}://${host}`;

      // URL encode the domain for the API request
      const encodedDomain = encodeURIComponent(domain);

      if (!apiUri) {
        console.error('AuthScape Sitemap Error: apiUri is not configured in environment variables');
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Sitemap configuration error: API URI not set. Please ensure apiUri is defined in your next.config.js env object or .env.local file.');
        res.end();
        return { props: {} };
      }

      let response = await fetch(`${apiUri}/api/Sitemap?domain=${encodedDomain}`);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      // Generate the sitemap XML
      const sitemap = await response.text();

      // Set the appropriate headers for XML
      res.setHeader('Content-Type', 'text/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

      // Send the XML response
      res.write(sitemap);
      res.end();

      return {
        props: {},
      };
    } catch (error) {
      console.error('AuthScape Sitemap Error:', error);

      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Error generating sitemap');
      res.end();

      return {
        props: {},
      };
    }
  };
}
