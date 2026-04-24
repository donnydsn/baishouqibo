import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "白手启播 - 以教代学 · 指数变现 · 改写人生",
  description: "最低成本，最短时间，教会小白教会更多小白做直播。纯聊天知识分享，不卖货不卖课，全然利他，零风险参与，通过指数增长的变现体系快速搞钱创富。",
  keywords: ["白手启播", "直播教学", "以教代学", "指数增长", "分润体系", "变现", "副业", "创业"],
  openGraph: {
    title: "白手启播 - 以教代学 · 指数变现 · 改写人生",
    description: "最低成本，最短时间，教会小白教会更多小白做直播。1带9出3，指数增长变现体系。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f1f5f9]">
        {/* Background Glow Effects */}
        <div className="bg-glow bg-glow-1" />
        <div className="bg-glow bg-glow-2" />
        <div className="bg-glow bg-glow-3" />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
