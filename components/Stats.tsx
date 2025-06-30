"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Stats() {
  const { t } = useLanguage()

  const stats = [
    {
      number: "99.9%",
      label: t("stats.accuracy"),
    },
    {
      number: "<3с",
      label: t("stats.response"),
    },
    {
      number: "24/7",
      label: t("stats.monitoring"),
    },
    {
      number: "5000+",
      label: t("stats.installations"),
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{t("stats.title")}</h2>
          <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto px-4">{t("stats.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-red-100 text-sm sm:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
