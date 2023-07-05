/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

export default {
  mode: "universal",
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
};
