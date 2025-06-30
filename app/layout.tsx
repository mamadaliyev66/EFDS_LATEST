import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "EFDS - Система Раннего Обнаружения Пожара",
  description: "Передовые системы раннего обнаружения пожара с ИИ и инфракрасными технологиями",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
          <Analytics />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="efds-theme">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
