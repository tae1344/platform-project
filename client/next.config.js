/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.optimization.providedExports = true;

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src/"),
    };

    return config;
  },
};
