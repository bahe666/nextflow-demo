import type { NextConfig } from "next";
import { withLingo } from "@lingo.dev/compiler/next";

const nextConfig: NextConfig = {};

export default async function (): Promise<NextConfig> {
  return await withLingo(nextConfig, {
    sourceRoot: "./app",
    sourceLocale: "zh",
    targetLocales: ["en"],
    models: {
      "*:*": "openai:anthropic/claude-opus-4.6",
    },
    prompt: `Translate from {SOURCE_LOCALE} to {TARGET_LOCALE}.
Follow these terminology rules strictly:
- NextFlow → NextFlow (keep as-is, it's a brand name)
- 免费开始使用 → Get Started Free
- 立即体验 → Try for Free
- 注册 → Sign Up
- 登录 → Sign In
- 企业版 → Enterprise
- 基础版 → Starter
- 专业版 → Professional
- 注册成功 → Welcome aboard
- 网络异常 → Something went wrong`,
  });
}
