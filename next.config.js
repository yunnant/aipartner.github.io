/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // GitHub Pages不支持图片优化
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/baidu_verify_codeva-InI8p1ia95.html',
        destination: '/api/baidu-verify'
      },
    ]
  }
}

module.exports = nextConfig 