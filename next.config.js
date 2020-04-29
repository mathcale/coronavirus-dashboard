const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');

const nextConfig = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    COVID19_DASH_NOVEL_ENDPOINT: process.env.COVID19_DASH_NOVEL_ENDPOINT,
    COVID19_DASH_WORLD_MAP_ENDPOINT: process.env.COVID19_DASH_WORLD_MAP_ENDPOINT,
    COVID19_DASH_NEWS_ENDPOINT: process.env.COVID19_DASH_NEWS_ENDPOINT,
    COVID19_DASH_BRAZIL_ENDPOINT: process.env.COVID19_DASH_BRAZIL_ENDPOINT,
    COVID19_DASH_FB_APP_ID: process.env.COVID19_DASH_FB_APP_ID,
  },
};

module.exports = withPlugins([
  withImages,
  [withPWA, {
    pwa: {
      dest: 'public',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts',
            expiration: {
              maxEntries: 4,
              maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
            }
          }
        },
        {
          urlPattern: /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'font-awesome',
            expiration: {
              maxEntries: 1,
              maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
            }
          }
        },
        {
          urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-font-assets',
            expiration: {
              maxEntries: 4,
              maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
            }
          }
        },
        {
          urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-image-assets',
            expiration: {
              maxEntries: 64,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /\.(?:js)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-js-assets',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /\.(?:css|less)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-style-assets',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /\.(?:json|xml|csv)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-data-assets',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /.*/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'others',
            expiration: {
              maxEntries: 16,
              maxAgeSeconds: 3600
            }
          }
        }
      ]
    },
  }],
], nextConfig);
