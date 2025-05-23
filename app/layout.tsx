import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script"; // 👈 Thêm dòng này

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thước Lỗ Ban - Công cụ đo lường phong thủy",
  description:
    "Ứng dụng tính toán kích thước phong thủy theo nguyên tắc Thước Lỗ Ban truyền thống",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* 👇 Nhúng file JS ở đây */}
        <Script src="/waiting.js" strategy="afterInteractive" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
