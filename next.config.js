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
    },
  }],
], nextConfig);
