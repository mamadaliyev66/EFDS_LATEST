"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Factory, Home, TreePine, Building, Truck, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Link from "next/link"

export default function IndustrySolutions() {
  const { t } = useLanguage()

  const solutions = [
    {
      icon: TreePine,
      title: t("solutions.forest.title"),
      description: t("solutions.forest.description"),
      features: [t("solutions.forest.feature1"), t("solutions.forest.feature2"), t("solutions.forest.feature3")],
      color: "from-green-500 to-emerald-600",
      image: "🌲",
      badge: t("solutions.forest.badge"),
    },
    {
      icon: Factory,
      title: t("solutions.industrial.title"),
      description: t("solutions.industrial.description"),
      features: [
        t("solutions.industrial.feature1"),
        t("solutions.industrial.feature2"),
        t("solutions.industrial.feature3"),
      ],
      color: "from-blue-500 to-indigo-600",
      image: "🏭",
      badge: t("solutions.industrial.badge"),
    },
    {
      icon: Home,
      title: t("solutions.residential.title"),
      description: t("solutions.residential.description"),
      features: [
        t("solutions.residential.feature1"),
        t("solutions.residential.feature2"),
        t("solutions.residential.feature3"),
      ],
      color: "from-purple-500 to-pink-600",
      image: "🏠",
      badge: t("solutions.residential.badge"),
    },
    {
      icon: Building,
      title: t("solutions.commercial.title"),
      description: t("solutions.commercial.description"),
      features: [
        t("solutions.commercial.feature1"),
        t("solutions.commercial.feature2"),
        t("solutions.commercial.feature3"),
      ],
      color: "from-orange-500 to-red-600",
      image: "🏢",
      badge: t("solutions.commercial.badge"),
    },
    {
      icon: Truck,
      title: t("solutions.transport.title"),
      description: t("solutions.transport.description"),
      features: [
        t("solutions.transport.feature1"),
        t("solutions.transport.feature2"),
        t("solutions.transport.feature3"),
      ],
      color: "from-cyan-500 to-blue-600",
      image: "🚛",
      badge: t("solutions.transport.badge"),
    },
    {
      icon: Zap,
      title: t("solutions.energy.title"),
      description: t("solutions.energy.description"),
      features: [t("solutions.energy.feature1"), t("solutions.energy.feature2"), t("solutions.energy.feature3")],
      color: "from-yellow-500 to-orange-600",
      image: "⚡",
      badge: t("solutions.energy.badge"),
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            {t("solutions.badge")}
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {t("solutions.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("solutions.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="pb-4 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl">{solution.image}</div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-red-600 transition-colors">
                      {solution.title}
                    </CardTitle>
                    <Badge variant="secondary" className={`bg-gradient-to-r ${solution.color} text-white border-0`}>
                      {solution.badge}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {solution.description}
                  </CardDescription>

                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* <Link href="/products">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300"
                    >
                      {t("solutions.learn_more")}
                    </Button>
                  </Link> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
