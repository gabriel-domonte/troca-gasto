import type { NextConfig } from 'next'

const repoName = 'troca-gasto'

const nextConfig: NextConfig = {
  output: 'export',
  cacheComponents: false,

  basePath:
    process.env.NODE_ENV === 'production'
      ? `/${repoName}`
      : '',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
}

export default nextConfig