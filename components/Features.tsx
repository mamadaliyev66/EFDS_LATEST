"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Bell, Wifi, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTheme } from "next-themes"

export default function Features() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const features = [
    {
      icon: Shield,
      title: t("features.advanced.title"),
      description: t("features.advanced.description"),
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: t("features.realtime.title"),
      description: t("features.realtime.description"),
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Eye,
      title: t("features.monitoring.title"),
      description: t("features.monitoring.description"),
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Bell,
      title: t("features.alerts.title"),
      description: t("features.alerts.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wifi,
      title: t("features.wireless.title"),
      description: t("features.wireless.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: BarChart3,
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section
      className={`py-16 sm:py-24 px-4 relative overflow-hidden  ${
        theme === "dark"
          ? "bg-gradient-to-br from-background via-muted/20 to-background "
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50 "
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ff0000 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #ff6600 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2
            className={`text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent`}
          >
            {t("features.title")}
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              theme === "dark" ? "text-muted-foreground" : "text-gray-600"
            }`}
          >
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full transition-all duration-500 border-0 overflow-hidden relative ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl"
                    : "bg-white/80 backdrop-blur-sm hover:shadow-enhanced-lg border border-gray-200"
                }`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="pb-4 relative">
                  <div
                    className={`w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}
                  >
                    <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <CardTitle
                    className={`text-lg sm:text-xl font-bold group-hover:text-red-600 transition-colors ${
                      theme === "dark" ? "text-foreground" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription
                    className={`text-sm sm:text-base leading-relaxed ${
                      theme === "dark" ? "text-muted-foreground" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
