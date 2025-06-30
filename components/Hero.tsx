"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Eye } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
export default function Hero() {
  const { t } = useLanguage()
  const { theme } = useTheme()


  const videos = ["https://kkaugnzpqtxplejvbequ.supabase.co/storage/v1/object/sign/paqir/video_1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNmYzNDljOS1kZDRjLTRlNjItYTI5MC1jMzBjNTFmN2Q5MDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXFpci92aWRlb18xLm1wNCIsImlhdCI6MTc1MTExODUyMywiZXhwIjoxNzgyNjU0NTIzfQ.99w3hv1gNhqjv123nZIxHbnyagVAVFkikrIPx6d5WZI","https://kkaugnzpqtxplejvbequ.supabase.co/storage/v1/object/sign/paqir/video_2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNmYzNDljOS1kZDRjLTRlNjItYTI5MC1jMzBjNTFmN2Q5MDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXFpci92aWRlb18yLm1wNCIsImlhdCI6MTc1MTExODE1MywiZXhwIjoxNzgyNjU0MTUzfQ.U5pKPe6ckK2Dn9uJTKEFzkhPEpjk500faIz1h5DXpVM", "https://kkaugnzpqtxplejvbequ.supabase.co/storage/v1/object/sign/paqir/video_3.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNmYzNDljOS1kZDRjLTRlNjItYTI5MC1jMzBjNTFmN2Q5MDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXFpci92aWRlb18zLm1wNCIsImlhdCI6MTc1MTExODYwOCwiZXhwIjoxNzgyNjU0NjA4fQ.4SIY75u7LYgi-oILc7ZXPH0mMy0qKBqDX1Dijn7gFzc"]
  const [currentVideo, setCurrentVideo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, 15000) // 10 seconds per video
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
    {/* Video Background */}
    <video
      key={videos[currentVideo]} // VERY IMPORTANT
      src={videos[currentVideo]}
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />

    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

    <section className="relative z-20 flex items-center justify-center min-h-screen px-4 pt-24 pb-20">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Main EFDS Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 sm:mb-16"
        >
          <div className="mt-10 max-w-6xl mx-auto flex justify-center ">
                      <Image
                        src="/assets/logo.png"
                        alt="Fire Detection Scheme"
                        width={120}
                        height={120}
                        className="rounded-xl shadow-lg object-cover"
                      />
                    </div>
          <h1 className="text-responsive-3xl font-black text-transparent bg-gradient-to-br from-red-500 via-orange-500 to-red-600 bg-clip-text leading-none">
            EFDS
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 sm:mb-12"
        >
          <h2
            className={`text-responsive-xl font-bold mb-4 sm:mb-6 ${
              theme === "dark" ? "text-foreground" : "text-white"
            }`}
          >
            {t("hero.title")}
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
              theme === "dark" ? "text-muted-foreground" : "text-white"
            }`}
          >
            {t("hero.subtitle")}
          </p>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {[
            { icon: Shield, text: t("hero.feature1") },
            { icon: Zap, text: t("hero.feature2") },
            { icon: Eye, text: t("hero.feature3") },
          ].map((feature, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 rounded-full px-4 sm:px-6 py-2 sm:py-3 border transition-all duration-300 hover:shadow-lg ${
                theme === "dark"
                  ? "bg-muted/50 border-border"
                  : "bg-white/80 border-gray-200 shadow-sm hover:shadow-enhanced"
              }`}
            >
              <feature.icon className="w-4 sm:w-5 h-4 sm:h-5 text-red-600" />
              <span
                className={`text-xs sm:text-sm font-medium ${theme === "dark" ? "text-foreground" : "text-gray-900"}`}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <Link href="/products">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("hero.cta1")}
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 ${
                theme === "dark"
                  ? "border-border hover:bg-muted"
                  : "border-gray-300 hover:bg-gray-50 text-gray-800 hover:shadow-3xl shadow-sm hover:shadow-enhanced"
              }`}
            >
              {t("hero.cta2")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
    </div>
  )
}
