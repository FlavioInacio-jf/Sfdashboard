/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  options: {
    sourcemaps: 'development'
  },
  images: {
    domains: ['images.unsplash.com']
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  typescript: {
    ignoreBuildErrors: true
  }
};
