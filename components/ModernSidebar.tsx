"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Home, Info, Package, Cpu, Phone, Menu, X, Shield, ChevronRight, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import Image from "next/image";


export default function ModernSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()
  const { theme } = useTheme()

  const menuItems = [
    { href: "/", icon: Home, label: t("nav.home") },
    { href: "/about", icon: Info, label: t("nav.about") },
    // { href: "/products", icon: Package, label: t("nav.products") },
    { href: "/technology", icon: Cpu, label: t("nav.technology") },
    { href: "/contact", icon: Phone, label: t("nav.contact") },
  ]

  const contactInfo = [
    { icon: Phone, label: "+7 (495) 123-45-67" },
    { icon: Mail, label: "info@efds.ru" },
    { icon: MapPin, label: "Москва, Россия" },
  ]

  return (
    <>
      {/* Sidebar Toggle Button */}
      <motion.button
        className={`fixed top-2 left-6 z-50 w-12 h-12 rounded-xl flex items-center justify-center shadow-enhanced transition-all duration-300 ${
          theme === "dark"
            ? "bg-background/80 backdrop-blur-md border border-border hover:shadow-xl"
            : "bg-white/90 backdrop-blur-md border border-gray-200 hover:shadow-enhanced-lg hover:bg-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? (
            <X className="w-5 h-5 text-gray-700 dark:text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700 dark:text-foreground" />
          )}
        </motion.div>
      </motion.button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed left-0 top-0 h-full w-80 z-50 shadow-enhanced-lg ${
              theme === "dark"
                ? "bg-background/95 backdrop-blur-xl border-r border-border"
                : "bg-white/95 backdrop-blur-xl border-r border-gray-200"
            }`}
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className={`p-6 sm:p-8 border-b ${theme === "dark" ? "border-border" : "border-gray-200"}`}>
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo.png"
              alt="EFDS Logo"
              width={50}
              height={32}
              className="rounded-lg"
            />
            
          </Link>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                      EFDS
                    </h2>
                    <p className={`text-sm ${theme === "dark" ? "text-muted-foreground" : "text-gray-600"}`}>
                      Fire Detection System
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex-1 p-4 sm:p-6">
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                          pathname === item.href
                            ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
                            : theme === "dark"
                              ? "hover:bg-muted text-muted-foreground hover:text-foreground"
                              : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            pathname === item.href ? "rotate-90" : "group-hover:translate-x-1"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Section */}
                
              </div>

            
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
