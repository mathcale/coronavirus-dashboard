const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    COVID19_DASH_NOVEL_ENDPOINT: process.env.COVID19_DASH_NOVEL_ENDPOINT,
    COVID19_DASH_WORLD_MAP_ENDPOINT: process.env.COVID19_DASH_WORLD_MAP_ENDPOINT,
    COVID19_DASH_NEWS_ENDPOINT: process.env.COVID19_DASH_NEWS_ENDPOINT,
  },
};

module.exports = withPlugins([withImages], nextConfig);
