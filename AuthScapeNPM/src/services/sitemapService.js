/**
 * AuthScape Sitemap Service
 * Provides automatic sitemap.xml generation by fetching from AuthScape API
 */

/**
 * Generates a sitemap XML response by fetching from the AuthScape API
 * @param {Object} req - Next.js request object
 * @param {Object} res - Next.js response object
 * @param {string} apiUri - The AuthScape API base URI (from process.env.apiUri)
 * @returns {Promise<void>}
 */
export async function generateSitemap(req, res, apiUri) {
  try {
    const host = req.headers.host;

    let domain;
    if (host.includes("localhost")) {
      domain = "http://" + host;
    } else {
      domain = "https://" + host;
    }

    const encodedDomain = encodeURIComponent(domain);
    const apiUrl = `${apiUri}/api/Sitemap?domain=${encodedDomain}`;

    console.log('Fetching sitemap from:', apiUrl);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const sitemap = await response.text();

    console.log('Sitemap fetched successfully, length:', sitemap.length);

    // Set headers BEFORE writing
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

    // Write and end the response
    res.write(sitemap);
    res.end();

  } catch (error) {
    console.error('AuthScape Sitemap Error:', error);

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`Error generating sitemap: ${error.message || error}`);
    res.end();
  }
}

export default {
  generateSitemap
};
