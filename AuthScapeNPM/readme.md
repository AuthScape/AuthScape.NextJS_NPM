# AuthScape NPM Package

Complete authentication and user management solution for Next.js applications.

## Installation

```bash
npm install authscape
```

## Quick Start

See the main [AuthScape Documentation](https://authscape.com/docs) for complete setup instructions.

## Features

### Core Features
- OAuth2/PKCE Authentication
- Multi-tenant support
- User management
- Role-based permissions
- Analytics integration (GA4, Microsoft Clarity)
- Material-UI components

### Components
- Document Manager
- File Uploader
- Rich Text Editor
- Data Tables
- Stripe Payment Integration
- Google Maps Integration
- And more...

## Additional Features

### Sitemap Generation (NEW!)

Automatically generate SEO-friendly sitemaps for your Next.js application.

**Automatic setup on install:**

When you run `npm install authscape`, a sitemap is automatically configured at `/sitemap.xml` that syncs with your AuthScape content.

- Supports both Pages Router and App Router
- Automatically detects your Next.js project structure
- Works with both `pages/` and `src/pages/` layouts
- Works with both `app/` and `src/app/` layouts

**To disable:** Simply delete the auto-generated file:
- Pages Router: `pages/sitemap.xml.js`
- App Router: `app/sitemap.xml/route.js`

## Environment Variables

Required environment variables in your `.env.local`:

```env
apiUri=https://your-authscape-api.com
authorityUri=https://your-auth-server.com
client_id=your-client-id
client_secret=your-client-secret
```

Optional analytics:

```env
googleAnalytics4=G-XXXXXXXXXX
microsoftClarityTrackingCode=xxxxxxxxxx
enableDatabaseAnalytics=true
```

## Usage Example

```javascript
// pages/_app.js
import { AuthScapeApp } from 'authscape';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthScapeApp
      Component={Component}
      pageProps={pageProps}
      enforceLoggedIn={false}
      enableAuth={true}
    />
  );
}

export default MyApp;
```

## Documentation

- [AuthScape Docs](https://authscape.com/docs) - Complete documentation

## Support

For issues or questions, contact AuthScape support or visit [authscape.com](https://authscape.com).

## License

ISC
