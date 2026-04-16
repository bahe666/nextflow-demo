import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-700">NextFlow</span>
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-blue-700 transition-colors">
              功能
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-700 transition-colors">
              定价
            </Link>
            <Link href="/register" className="px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-50 transition-colors">
              登录
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            让团队协作效率提升 3 倍
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            NextFlow 是专为远程团队设计的智能工作流工具，帮助你从混乱的任务管理中解放出来
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3 text-white bg-blue-700 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              免费开始使用
            </Link>
            <Link
              href="/register"
              className="px-8 py-3 text-blue-700 bg-blue-50 rounded-lg font-medium hover:bg-blue-100 transition-colors"
            >
              立即体验
            </Link>
          </div>
        </div>
      </section>

      {/* 功能介绍 */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            为什么选择 NextFlow
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">智能任务分配</h3>
              <p className="text-gray-500 leading-relaxed">
                根据团队成员的工作状态和技能，自动推荐最合适的任务分配方案
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">实时协作看板</h3>
              <p className="text-gray-500 leading-relaxed">
                所有人都能看到最新进展，告别&ldquo;你有没有看我发的消息&rdquo;
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">数据驱动复盘</h3>
              <p className="text-gray-500 leading-relaxed">
                每次迭代结束后自动生成效率报告，一眼看出哪里拖慢了进度
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-20 px-6 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">准备好了吗？</h2>
          <Link
            href="/register"
            className="inline-block px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            免费开始使用
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          © 2026 NextFlow. 保留所有权利。
        </div>
      </footer>
    </div>
  );
}
