/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/dev_downy' : '',
  assetPrefix: isProd ? '/dev_downy' : '',
  images: {
    unoptimized: true
  }
}
