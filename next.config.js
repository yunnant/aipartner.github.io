/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // GitHub Pages不支持图片优化
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

module.exports = nextConfig 