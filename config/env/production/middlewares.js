export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'", 
            "data:", 
            "blob:", 
            `https://kinsman.sfo2.digitaloceanspaces.com`, 
            "dl.airtable.com", 
            "market-assets.strapi.io"
          ],
            "media-src": [
            "'self'", 
            "data:", 
            "blob:", 
            `https://kinsman.sfo2.digitaloceanspaces.com`, 
            "dl.airtable.com", 
            "market-assets.strapi.io"
        ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
