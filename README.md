# NextFlow Demo — Lingo.dev 自动化国际化演示

本项目演示了 [Lingo.dev](https://lingo.dev) 编译器如何在 Next.js 项目中实现"只写中文代码，自动生成英文版网站"。

## 技术栈

| 技术 | 说明 |
|------|------|
| **Next.js 15** | React 全栈框架 |
| **TypeScript** | 类型安全的 JavaScript |
| **Tailwind CSS** | 原子化 CSS 工具 |
| **@lingo.dev/compiler** | 构建时自动翻译编译器 |
| **Vitest** | 单元测试框架 |
| **Playwright** | E2E 端到端测试框架 |

## 项目结构

```
nextflow-demo/
├── app/
│   ├── layout.tsx          # 根布局（包裹 LingoProvider）
│   ├── page.tsx            # 首页（中文）
│   ├── globals.css         # 全局样式
│   ├── pricing/page.tsx    # 定价页（中文）
│   ├── register/page.tsx   # 注册页（中文）
│   └── lingo/              # Lingo.dev 翻译缓存（自动生成）
├── lib/
│   └── validation.ts       # 邮箱校验工具函数
├── middleware.ts            # URL 路径路由（/en → 设置 locale cookie）
├── next.config.ts          # Next.js + Lingo.dev 配置
├── __tests__/              # 单元测试
├── e2e/                    # E2E 测试
├── .env.local              # API Key（不提交到 Git）
└── vitest.config.ts        # Vitest 配置
```

## Lingo.dev 工作原理

源代码中所有页面文字都是中文硬编码，不使用任何 i18n 库（如 react-intl、i18next 等）。Lingo.dev 编译器在构建时自动扫描 JSX 中的文本，通过 AI 翻译引擎生成英文版本，并将翻译结果缓存到 `.next/en.json` 中。

运行时，LingoProvider 根据用户的 locale cookie 决定展示源语言还是翻译后的内容。整个过程对开发者透明 — 你只需要用母语写代码。

术语一致性通过 `prompt` 配置实现：在翻译指令中嵌入品牌术语表，确保"免费开始使用"始终翻译为"Get Started Free"而非其他变体。

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 翻译构建

```bash
npm run build   # 构建并自动翻译
npm run start   # 预览生产版本
```

- 访问 `/` 查看中文版
- 访问 `/en` 查看英文版

## 运行测试

```bash
npm test         # 单元测试
npm run test:e2e # E2E 测试（需要先 build + start）
```

## 环境变量

在 `.env.local` 中配置（不要提交到 Git）：

```
OPENAI_API_KEY=你的 API Key
OPENAI_BASE_URL=你的 API Base URL
```

## 部署

推荐部署到 Vercel。在 Vercel 的环境变量中配置 `OPENAI_API_KEY` 和 `OPENAI_BASE_URL`。
