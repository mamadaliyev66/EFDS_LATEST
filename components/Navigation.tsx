"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image";

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    // { href: "/products", label: t("nav.products") },
    { href: "/technology", label: t("nav.technology") },
    { href: "/contact", label: t("nav.contact") },
  ]

  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        theme === "dark"
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:ml-none ml-20">
        <div className="flex items-center justify-between h-16">
           {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo.png"
              alt="EFDS Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span
              className={`text-xl font-bold ${
                theme === "dark" ? "text-foreground" : "text-gray-900"
              }`}
            >
              EFDS
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  pathname === item.href
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : theme === "dark"
                      ? "text-muted-foreground"
                      : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`transition-colors ${
                theme === "dark"
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`transition-colors ${
                theme === "dark"
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
