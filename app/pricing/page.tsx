"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "基础版",
    price: "免费",
    description: "适合个人和小团队起步",
    features: ["最多 3 名成员", "10 个项目", "基础任务管理"],
    cta: "免费开始使用",
    popular: false,
  },
  {
    name: "专业版",
    price: "¥99/月",
    description: "适合快速成长的团队",
    features: ["不限成员数", "不限项目数", "高级协作功能", "数据分析报告"],
    cta: "立即体验",
    popular: true,
  },
  {
    name: "企业版",
    price: "定制报价",
    description: "适合大型企业和特殊需求",
    features: ["专属客户成功经理", "私有化部署选项", "SLA 服务保障"],
    cta: "联系销售",
    popular: false,
  },
];

const faqs = [
  {
    question: "可以中途取消吗？",
    answer: "可以随时取消，无违约金。",
  },
  {
    question: "支持哪些支付方式？",
    answer: "支持微信支付、支付宝和银行转账。",
  },
  {
    question: "数据安全怎么保障？",
    answer: "所有数据均存储在国内服务器，符合数据安全法规。",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
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

      {/* 定价区域 */}
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
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-blue-700 text-white ring-4 ring-blue-200 scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                    最受欢迎
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-3xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </p>
                <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg className={`w-5 h-5 ${plan.popular ? "text-blue-200" : "text-blue-700"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? "bg-white text-blue-700 hover:bg-gray-100"
                      : "bg-blue-700 text-white hover:bg-blue-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            常见问题
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-500">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
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
