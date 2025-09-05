/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/dev_downy/trip',
  assetPrefix: '/dev_downy/trip',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig