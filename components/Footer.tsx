export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-bold text-lg mb-2">数灵伙伴</h3>
            <p className="text-sm">你的AI数字伙伴</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-3">产品</h4>
              <ul className="space-y-2">
                <li>特性</li>
                <li>下载</li>
                <li>定价</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">资源</h4>
              <ul className="space-y-2">
                <li>文档</li>
                <li>教程</li>
                <li>博客</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">关于</h4>
              <ul className="space-y-2">
                <li>团队</li>
                <li>联系我们</li>
                <li>隐私政策</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © 2025 数灵伙伴. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 