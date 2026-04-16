import type { Metadata } from "next";
import localFont from "next/font/local";
import { LingoProvider } from "@lingo.dev/compiler/react/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextFlow - 智能工作流工具",
  description: "专为远程团队设计的智能工作流工具，帮助你从混乱的任务管理中解放出来",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${geistSans.variable} antialiased`}>
        <LingoProvider>
          {children}
        </LingoProvider>
      </body>
    </html>
  );
}
