"use client";

import { useState } from "react";
import Link from "next/link";

function PlanCard({
  children,
  popular,
}: {
  children: React.ReactNode;
  popular?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 ${
        popular
          ? "bg-blue-700 text-white ring-4 ring-blue-200 scale-105"
          : "bg-white border border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: React.ReactNode;
  answer: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-6 pb-4 text-gray-500">{answer}</div>}
    </div>
  );
}

function CheckIcon({ popular }: { popular?: boolean }) {
  return (
    <svg className={`w-5 h-5 ${popular ? "text-blue-200" : "text-blue-700"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-700">NextFlow</Link>
          <div className="flex items-center gap-8">
            <Link href="/#features" className="text-gray-600 hover:text-blue-700 transition-colors">
              功能
            </Link>
            <span className="text-blue-700 font-medium">定价</span>
            <Link href="/register" className="px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-50 transition-colors">
              登录
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              选择适合你团队的方案
            </h1>
            <p className="text-lg text-gray-500">
              所有方案均支持 14 天免费试用，无需信用卡
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 基础版 */}
            <PlanCard>
              <h3 className="text-xl font-bold mb-2 text-gray-900">基础版</h3>
              <p className="text-3xl font-bold mb-2 text-gray-900">免费</p>
              <p className="text-sm mb-6 text-gray-500">适合个人和小团队起步</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><CheckIcon /><span className="text-sm text-gray-600">最多 3 名成员</span></li>
                <li className="flex items-center gap-2"><CheckIcon /><span className="text-sm text-gray-600">10 个项目</span></li>
                <li className="flex items-center gap-2"><CheckIcon /><span className="text-sm text-gray-600">基础任务管理</span></li>
              </ul>
              <Link href="/register" className="block text-center py-3 rounded-lg font-medium transition-colors bg-blue-700 text-white hover:bg-blue-800">
                免费开始使用
              </Link>
            </PlanCard>

            {/* 专业版 */}
            <PlanCard popular>
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                最受欢迎
              </span>
              <h3 className="text-xl font-bold mb-2 text-white">专业版</h3>
              <p className="text-3xl font-bold mb-2 text-white">¥99/月</p>
              <p className="text-sm mb-6 text-blue-100">适合快速成长的团队</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><CheckIcon popular /><span className="text-sm text-blue-100">不限成员数</span></li>
                <li className="flex items-center gap-2"><CheckIcon popular /><span className="text-sm text-blue-100">不限项目数</span></li>
                <li className="flex items-center gap-2"><CheckIcon popular /><span className="text-sm text-blue-100">高级协作功能</span></li>
                <li className="flex items-center gap-2"><CheckIcon popular /><span className="text-sm text-blue-100">数据分析报告</span></li>
              </ul>
              <Link href="/register" className="block text-center py-3 rounded-lg font-medium transition-colors bg-white text-blue-700 hover:bg-gray-100">
                立即体验
              </Link>
            </PlanCard>

            {/* 企业版 */}
            <PlanCard>
              <h3 className="text-xl font-bold mb-2 text-gray-900">企业版</h3>
              <p className="text-3xl font-bold mb-2 text-gray-900">定制报价</p>
              <p className="text-sm mb-6 text-gray-500">适合大型企业和特殊需求</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><CheckIcon /><span className="text-sm text-gray-600">专属客户成功经理</span></li>
                <li className="flex items-center gap-2"><CheckIcon /><span className="text-sm text-gray-600">私有化部署选项</span></li>
                <li className="flex items-center gap-2"><CheckIcon /><span className="text-sm text-gray-600">SLA 服务保障</span></li>
              </ul>
              <Link href="/register" className="block text-center py-3 rounded-lg font-medium transition-colors bg-blue-700 text-white hover:bg-blue-800">
                联系销售
              </Link>
            </PlanCard>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            常见问题
          </h2>
          <div className="space-y-4">
            <FaqItem
              question="可以中途取消吗？"
              answer="可以随时取消，无违约金。"
              open={openFaq === 0}
              onToggle={() => setOpenFaq(openFaq === 0 ? null : 0)}
            />
            <FaqItem
              question="支持哪些支付方式？"
              answer="支持微信支付、支付宝和银行转账。"
              open={openFaq === 1}
              onToggle={() => setOpenFaq(openFaq === 1 ? null : 1)}
            />
            <FaqItem
              question="数据安全怎么保障？"
              answer="所有数据均存储在国内服务器，符合数据安全法规。"
              open={openFaq === 2}
              onToggle={() => setOpenFaq(openFaq === 2 ? null : 2)}
            />
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          © 2026 NextFlow. 保留所有权利。
        </div>
      </footer>
    </div>
  );
}
