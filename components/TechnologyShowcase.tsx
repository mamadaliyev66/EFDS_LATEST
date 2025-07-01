"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Camera, Cpu, Wifi, Cloud, Smartphone, Zap, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function TechnologyShowcase() {
  const { t } = useLanguage()

  const technologies = [
    {
      icon: Thermometer,
      title: t("tech.infrared.title"),
      description: t("tech.infrared.description"),
      features: [t("tech.infrared.feature1"), t("tech.infrared.feature2"), t("tech.infrared.feature3")],
      color: "from-red-500 to-orange-500",
      badge: t("tech.infrared.badge"),
    },
    {
      icon: Camera,
      title: t("tech.thermal.title"),
      description: t("tech.thermal.description"),
      features: [t("tech.thermal.feature1"), t("tech.thermal.feature2"), t("tech.thermal.feature3")],
      color: "from-purple-500 to-pink-500",
      badge: t("tech.thermal.badge"),
    },
    {
      icon: Cpu,
      title: t("tech.ai.title"),
      description: t("tech.ai.description"),
      features: [t("tech.ai.feature1"), t("tech.ai.feature2"), t("tech.ai.feature3")],
      color: "from-blue-500 to-cyan-500",
      badge: t("tech.ai.badge"),
    },
    {
      icon: Wifi,
      title: t("tech.iot.title"),
      description: t("tech.iot.description"),
      features: [t("tech.iot.feature1"), t("tech.iot.feature2"), t("tech.iot.feature3")],
      color: "from-green-500 to-emerald-500",
      badge: t("tech.iot.badge"),
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ff0000 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #ff6600 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 text-red-600 border-red-600">
            {t("tech.badge")}
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {t("tech.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("tech.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
                    >
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 border-0"
                    >
                      {tech.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {tech.description}
                  </CardDescription>

                  <div className="space-y-3">
                    {tech.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advanced Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: t("tech.advanced.speed"), value: "<0.01s" },
              { icon: Shield, title: t("tech.advanced.accuracy"), value: "90-95%" },
              { icon: Cloud, title: t("tech.advanced.coverage"), value: "24/7" },
              { icon: Smartphone, title: t("tech.advanced.integration"), value: "100%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
