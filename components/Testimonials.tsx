"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t("testimonials.client1.name"),
      role: t("testimonials.client1.role"),
      company: t("testimonials.client1.company"),
      content: t("testimonials.client1.content"),
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "АП",
    },
    {
      name: t("testimonials.client2.name"),
      role: t("testimonials.client2.role"),
      company: t("testimonials.client2.company"),
      content: t("testimonials.client2.content"),
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "МС",
    },
    {
      name: t("testimonials.client3.name"),
      role: t("testimonials.client3.role"),
      company: t("testimonials.client3.company"),
      content: t("testimonials.client3.content"),
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      initials: "ЕК",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-red-50/20 to-background dark:from-background dark:via-red-950/20 dark:to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 text-red-600 border-red-600">
            {t("testimonials.badge")}
          </Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-red-600/20">
                  <Quote className="w-8 h-8" />
                </div>

                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg leading-relaxed text-muted-foreground mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-red-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: t("testimonials.stats.installations") },
              { value: "99.9%", label: t("testimonials.stats.satisfaction") },
              { value: "24/7", label: t("testimonials.stats.support") },
              { value: "15+", label: t("testimonials.stats.years") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
