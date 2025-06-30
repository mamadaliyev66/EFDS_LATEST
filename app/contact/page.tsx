"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import ModernSidebar from "@/components/ModernSidebar"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock } from "lucide-react"
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "efds.ai@mail.ru",
      description: t("contact.email_desc"),
    },
    {
      icon: MapPin,
      title: t("contact.address_title"),
      value: t("contact.address"),
      description: t("contact.address_desc"),
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      value: t("contact.hours_value"),
      description: t("contact.hours_desc"),
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <ModernSidebar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-red-600/10 to-orange-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              {t("contact.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full bg-gradient-to-br from-white via-orange-50 to-red-50 dark:from-background dark:via-zinc-900 dark:to-zinc-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center pt-12">
                    <div className="w-16 h-16 bg-red-600 group-hover:bg-orange-500 transition-colors duration-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-zinc-900 -mt-12 mb-4 z-10">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardContent className="pb-8 px-6 flex flex-col items-center text-center">
                      <h3 className="font-bold text-xl mb-2 text-red-700 dark:text-orange-400 group-hover:text-orange-600 transition-colors duration-300">{info.title}</h3>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{info.value}</p>
                      <p className="text-sm text-gray-500 dark:text-zinc-300">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            {/* Telegram and WhatsApp as Card */}
            <div className="grid  grid-cols-1 md:grid-cols-1 gap-8 max-w-xl mx-auto">
              <Card className="flex items-center mx-auto justify-center bg-gradient-to-br from-blue-400 to-blue-600 shadow-xl rounded-2xl p-0">
                <a
                  href="https://t.me/efds_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full h-full px-8 py-6 text-white text-lg font-semibold hover:bg-blue-700 transition-colors rounded-2xl"
                >
                  <FaTelegramPlane className="w-8 h-8 mr-4" /> Telegram
                </a>
              </Card>
              {/* <Card className="flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 shadow-xl rounded-2xl p-0">
                <a
                  href="https://wa.me/48501661377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full h-full px-8 py-6 text-white text-lg font-semibold hover:bg-green-700 transition-colors rounded-2xl"
                >
                  <FaWhatsapp className="w-8 h-8 mr-4" /> WhatsApp
                </a>
              </Card> */}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
