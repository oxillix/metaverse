/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  // TODO: this is not best practice, but the list of errors and warnings is too long to fix right now.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
