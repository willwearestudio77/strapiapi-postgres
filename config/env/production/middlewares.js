module.exports = ({ env }) => [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'cdn.jsdelivr.net',
            'strapi.io',
            'dl.airtable.com',
            'kinsman.sfo2.digitaloceanspaces.com',
          ],
        },
      },
    },
  },
];
