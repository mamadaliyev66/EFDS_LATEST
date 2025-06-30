"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-xl">EFDS</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">{t("footer.description")}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>efds.ai@mail.ru</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{t("contact.address")}</span>
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="font-semibold mb-4">{t("footer.products")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-red-600 transition-colors">
                  {t("footer.smoke_detectors")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-red-600 transition-colors">
                  {t("footer.heat_sensors")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-red-600 transition-colors">
                  {t("footer.control_panels")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-red-600 transition-colors">
                  {t("footer.monitoring")}
                </Link>
              </li>
            </ul>
          </div> */}

{/*           <div>
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-red-600 transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-red-600 transition-colors">
                  {t("nav.technology")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600 transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EFDS. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
