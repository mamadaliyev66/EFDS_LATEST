"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import ModernSidebar from "@/components/ModernSidebar"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Thermometer, Radio, Monitor, Plane, Camera } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"

type Product = {
  icon: React.ElementType
  image: string
  title: string
  description: string
  features: string[]
}

export default function Products() {
  const { t } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    // {
    //   icon: Shield,
    //   image: "https://www.milesight-iot.com/wp-content/uploads/2020/06/Smart-IoT-Based-Sensor-Networks-For-Intelligent-CO2-Monitoring-and-Reliable-Forest-Fire-Detection.jpg",
    //   title: t("products.smoke.title"),
    //   description: t("products.smoke.description"),
    //   features: [t("products.smoke.feature1"), t("products.smoke.feature2"), t("products.smoke.feature3")],
    // },
    {
      icon: Thermometer,
      image: "https://assets.bosch.com/media/en/global/stories/early_forest_fire_detection_sensors/system-infographic_res_400x225.webp",
      title: t("products.heat.title"),
      description: t("products.heat.description"),
      features: [t("products.heat.feature1"), t("products.heat.feature2"), t("products.heat.feature3")],
    },
    // {
    //   icon: Radio,
    //   image: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-021-03882-9/MediaObjects/41598_2021_3882_Fig1_HTML.jpg",
    //   title: t("products.wireless.title"),
    //   description: t("products.wireless.description"),
    //   features: [t("products.wireless.feature1"), t("products.wireless.feature2"), t("products.wireless.feature3")],
    // },
    {
      icon: Monitor,
      image: "https://www.asmag.com/thumbnail.ashx?max=500&file=/upload/pic/case/41224.3714354.jpg",
      title: t("products.control.title"),
      description: t("products.control.description"),
      features: [t("products.control.feature1"), t("products.control.feature2"), t("products.control.feature3")],
    },
    {
      icon: Plane,
      image: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2017_46/2226401/171114-wildfire-drone-mn-1600.jpg",
      title: t("products.drone.title"),
      description: t("products.drone.description"),
      features: [
        t("products.drone.feature1"),
        t("products.drone.feature2"),
        t("products.drone.feature3")
      ],
    },
    {
      icon: Camera,
      image: "https://www.earthtoolsmaker.org/images/projects/early_forest_fire_detection/cover.png",
      title: t("products.camera.title"),
      description: t("products.camera.description"),
      features: [
        t("products.camera.feature1"),
        t("products.camera.feature2"),
        t("products.camera.feature3")
      ],
    },
  ]

  return (
    <PageTransition>
      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setSelectedProduct(null)}>
          <div className="relative bg-background rounded-lg shadow-2xl max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600 focus:outline-none"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-96 object-cover rounded-t-lg" />
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                  <selectedProduct.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold">{selectedProduct.title}</h2>
              </div>
              <p className="text-lg mb-6">{selectedProduct.description}</p>
              <ul className="space-y-3">
                {selectedProduct.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

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
              {t("products.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              {t("products.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="h-full hover:scale-105 focus:scale-105 active:scale-105 transition-transform duration-500 hover:z-30 hover:shadow-2xl hover:ring-4 hover:ring-red-200/40 hover:ring-offset-2 hover:ring-offset-background cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{product.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
