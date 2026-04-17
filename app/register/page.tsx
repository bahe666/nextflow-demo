"use client";

import { useState } from "react";
import Link from "next/link";
import { validateEmail } from "@/lib/validation";

type FormStatus = "idle" | "loading" | "success" | "error-email" | "error-password-short" | "error-password-mismatch" | "error-duplicate" | "error-network";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !validateEmail(email)) {
      setStatus("error-email");
      return;
    }
    if (password.length < 8) {
      setStatus("error-password-short");
      return;
    }
    if (password !== confirmPassword) {
      setStatus("error-password-mismatch");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      if (email === "test@example.com") {
        setStatus("error-duplicate");
        return;
      }
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            欢迎加入 NextFlow！
          </h1>
          <p className="text-gray-500 mb-8">
            我们已发送确认邮件到你的邮箱，请查收。
          </p>
          <Link href="/" className="text-blue-700 hover:underline font-medium">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-blue-700">
            NextFlow
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">
            创建你的 NextFlow 账号
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱
              </label>
              <input
                type="email"
                placeholder="请输入工作邮箱"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                密码
              </label>
              <input
                type="password"
                placeholder="至少 8 位，建议包含数字和字母"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setStatus("idle"); }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                确认密码
              </label>
              <input
                type="password"
                placeholder="再次输入密码"
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); setStatus("idle"); }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
              />
            </div>

            {status === "error-email" && (
              <p className="text-red-600 text-sm">请输入有效的邮箱地址</p>
            )}
            {status === "error-password-short" && (
              <p className="text-red-600 text-sm">密码至少需要 8 位</p>
            )}
            {status === "error-password-mismatch" && (
              <p className="text-red-600 text-sm">两次输入的密码不一致</p>
            )}
            {status === "error-duplicate" && (
              <p className="text-red-600 text-sm">该邮箱已注册，请直接登录</p>
            )}
            {status === "error-network" && (
              <p className="text-red-600 text-sm">网络异常，请稍后重试</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                isLoading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-700 text-white hover:bg-blue-800"
              }`}
            >
              {isLoading ? (
                <span>注册中...</span>
              ) : (
                <span>立即注册</span>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          已有账号？
          <Link href="#" className="text-blue-700 hover:underline ml-1">
            立即登录
          </Link>
        </p>
      </div>
    </div>
  );
}
