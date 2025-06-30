"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 2000) // Reduced from 3000ms to 2000ms
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="fire-transition"
            className={`fixed inset-0 z-[10000] flex items-center justify-center ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Fire Loader - Dark Mode */}
            {theme === "dark" && (
              <div className="fire-loader-dark">
                <div className="flames">
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
              </div>
            )}

            {/* Fire Loader - Light Mode */}
            {theme === "light" && (
              <div className="fire-loader-light">
                <div className="fire">
                  <div className="fire-left">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                  </div>
                  <div className="fire-center">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                  </div>
                  <div className="fire-right">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                  </div>
                  <div className="fire-bottom">
                    <div className="main-fire"></div>
                  </div>
                </div>
              </div>
            )}

            <style jsx>{`
              /* Dark Mode Fire Loader */
              .fire-loader-dark {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -25%);
                height: 20vw;
                width: 20vw;
              }

              .flames {
                position: absolute;
                bottom: 40%;
                left: 50%;
                width: 60%;
                height: 60%;
                transform: translateX(-50%) rotate(45deg);
              }

              .flame {
                position: absolute;
                right: 0%;
                bottom: 0%;
                width: 0%;
                height: 0%;
                background-color: #ffdc01;
                border-radius: 1vw;
              }

              .flame:nth-child(2n + 1) {
                animation: flameodd 1.5s ease-in infinite;
              }

              .flame:nth-child(2n) {
                animation: flameeven 1.5s ease-in infinite;
              }

              .flame:nth-child(1) {
                animation-delay: 0s;
              }

              .flame:nth-child(2) {
                animation-delay: 0.375s;
              }

              .flame:nth-child(3) {
                animation-delay: 0.75s;
              }

              .flame:nth-child(4) {
                animation-delay: 1.125s;
              }

              @keyframes flameodd {
                0%, 100% {
                  width: 0%;
                  height: 0%;
                  background-color: #ffdc01;
                  z-index: 1000000;
                  right: 0%;
                  bottom: 0%;
                }
                25% {
                  width: 100%;
                  height: 100%;
                  right: 1%;
                  bottom: 2%;
                }
                40% {
                  background-color: #fdac01;
                  z-index: 1000000;
                }
                100% {
                  background-color: #f73b01;
                  z-index: -10;
                  right: 150%;
                  bottom: 170%;
                }
              }

              @keyframes flameeven {
                0%, 100% {
                  width: 0%;
                  height: 0%;
                  background-color: #ffdc01;
                  z-index: 1000000;
                  right: 0%;
                  bottom: 0%;
                }
                25% {
                  width: 100%;
                  height: 100%;
                  right: 2%;
                  bottom: 1%;
                }
                40% {
                  background-color: #fdac01;
                  z-index: 1000000;
                }
                100% {
                  background-color: #f73b01;
                  z-index: -10;
                  right: 170%;
                  bottom: 150%;
                }
              }

              /* Light Mode Fire Loader */
              .fire-loader-light {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }

              .fire {
                position: relative;
                width: 100px;
                height: 100px;
                background-color: transparent;
              }

              @keyframes scaleUpDown {
                0%,
                100% {
                  transform: scaleY(1) scaleX(1);
                }
                50%,
                90% {
                  transform: scaleY(1.1);
                }
                75% {
                  transform: scaleY(0.95);
                }
                80% {
                  transform: scaleX(0.95);
                }
              }

              @keyframes shake {
                0%,
                100% {
                  transform: skewX(0) scale(1);
                }
                50% {
                  transform: skewX(5deg) scale(0.9);
                }
              }

              @keyframes particleUp {
                0% {
                  opacity: 0;
                }
                20% {
                  opacity: 1;
                }
                80% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                  top: -100%;
                  transform: scale(0.5);
                }
              }

              @keyframes glow {
                0%,
                100% {
                  background-color: #ef5a00;
                }
                50% {
                  background-color: #ff7800;
                }
              }

              .fire-center {
                position: absolute;
                height: 100%;
                width: 100%;
                animation: scaleUpDown 3s ease-out infinite;
                animation-fill-mode: both;
              }

              .fire-center .main-fire {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: radial-gradient(
                  farthest-corner at 10px 0,
                  #d43300 0%,
                  #ef5a00 95%
                );
                transform: scaleX(0.8) rotate(45deg);
                border-radius: 0 40% 60% 40%;
                filter: drop-shadow(0 0 10px #d43322);
              }

              .fire-center .particle-fire {
                position: absolute;
                top: 60%;
                left: 45%;
                width: 10px;
                height: 10px;
                background-color: #ef5a00;
                border-radius: 50%;
                filter: drop-shadow(0 0 10px #d43322);
                animation: particleUp 2s ease-out 0s infinite;
                animation-fill-mode: both;
              }

              .fire-right {
                height: 100%;
                width: 100%;
                position: absolute;
                animation: shake 2s ease-out 0s infinite;
                animation-fill-mode: both;
              }

              .fire-right .main-fire {
                position: absolute;
                top: 15%;
                right: -25%;
                width: 80%;
                height: 80%;
                background-color: #ef5a00;
                transform: scaleX(0.8) rotate(45deg);
                border-radius: 0 40% 60% 40%;
                filter: drop-shadow(0 0 10px #d43322);
              }

              .fire-right .particle-fire {
                position: absolute;
                top: 45%;
                left: 50%;
                width: 15px;
                height: 15px;
                background-color: #ef5a00;
                transform: scaleX(0.8) rotate(45deg);
                border-radius: 50%;
                filter: drop-shadow(0 0 10px #d43322);
                animation: particleUp 2s ease-out 0s infinite;
                animation-fill-mode: both;
              }

              .fire-left {
                position: absolute;
                height: 100%;
                width: 100%;
                animation: shake 3s ease-out 0s infinite;
                animation-fill-mode: both;
              }

              .fire-left .main-fire {
                position: absolute;
                top: 15%;
                left: -20%;
                width: 80%;
                height: 80%;
                background-color: #ef5a00;
                transform: scaleX(0.8) rotate(45deg);
                border-radius: 0 40% 60% 40%;
                filter: drop-shadow(0 0 10px #d43322);
              }

              .fire-left .particle-fire {
                position: absolute;
                top: 10%;
                left: 20%;
                width: 10%;
                height: 10%;
                background-color: #ef5a00;
                border-radius: 50%;
                filter: drop-shadow(0 0 10px #d43322);
                animation: particleUp 3s infinite ease-out 0s;
                animation-fill-mode: both;
              }

              .fire-bottom .main-fire {
                position: absolute;
                top: 30%;
                left: 20%;
                width: 75%;
                height: 75%;
                background-color: #ff7800;
                transform: scaleX(0.8) rotate(45deg);
                border-radius: 0 40% 100% 40%;
                filter: blur(10px);
                animation: glow 2s ease-out 0s infinite;
                animation-fill-mode: both;
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5, delay: isTransitioning ? 1.5 : 0 }} // Reduced delay from 2.5s to 1.5s
      >
        {children}
      </motion.div>
    </>
  )
}
