
module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
            s3Options:{
          
          endpoint: env('DO_SPACE_ENDPOINT','https://sfo2.digitaloceanspaces.com'),
          region: env('DO_SPACE_REGION'),
          credentials:{
          accessKeyId: env('DO_SPACE_ACCESS_KEY'),
          secretAccessKey: env('DO_SPACE_SECRET_KEY'),
          }
             }, // <--- Add your DigitalOcean Space region here
          params: {
            Bucket: env('DO_SPACE_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
          introspection: true
        },
      },
    },
    "strapi-chatgpt": {
        enabled: true,
      },
  });