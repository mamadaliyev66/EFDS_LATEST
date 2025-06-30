"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import ModernSidebar from "@/components/ModernSidebar"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Wifi, Cloud, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import ImageViewer from "./ImageViewer"
import Image from "next/image"

export default function Technology() {
  const { t } = useLanguage()

  const technologies = [
    {
      icon: Cpu,
      title: t("technology.ai.title"),
      description: t("technology.ai.description"),
    },
    {
      icon: Wifi,
      title: t("technology.iot.title"),
      description: t("technology.iot.description"),
    },
    {
      icon: Cloud,
      title: t("technology.cloud.title"),
      description: t("technology.cloud.description"),
    },
    {
      icon: Smartphone,
      title: t("technology.mobile.title"),
      description: t("technology.mobile.description"),
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <ModernSidebar />

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-red-600/10 to-orange-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              {t("technology.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              {t("technology.subtitle")}
            </motion.p>
          </div>

          {/* Scheme Image */}
          <div className="mt-10 max-w-6xl mx-auto flex justify-center">
            <Image
              src="/assets/scheme.png"
              alt="Fire Detection Scheme"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                          <tech.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{tech.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{tech.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Viewer Section */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <ImageViewer />
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
