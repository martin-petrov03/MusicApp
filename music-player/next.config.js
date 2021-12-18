/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:3000"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
