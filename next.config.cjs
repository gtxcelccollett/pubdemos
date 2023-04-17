/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.experiments = {
        topLevelAwait: true,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
