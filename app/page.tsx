"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="h-screen overflow-hidden">
      {/* Main Hero Section - Full Screen, No Scroll */}
      <section className="relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/ferrari-hero.jpeg"
            alt="Ferrari Hero Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full" />
          <div className="absolute top-40 right-40 w-2 h-2 bg-yellow-400/40 rounded-full" />
          <div className="absolute bottom-40 right-60 w-3 h-3 bg-white/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-6 h-6 border-2 border-yellow-400/30 rounded-full" />
        </div>

        {/* Main Content - Centered */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-8 text-center lg:text-left"
              >
                {/* Description */}
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/95 text-lg leading-relaxed font-medium"
                  >
                    A car like no other. A pure fusion of science and art in automotive form.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-white/85 text-base"
                  >
                    The Speedtail in Ferrari's first ever Hyper-Gt.
                  </motion.p>
                </div>

                {/* Ferrari Brand Text */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-8xl md:text-9xl font-bold tracking-tight text-white drop-shadow-2xl"
                >
                  Ferrari
                </motion.h1>
              </motion.div>

              {/* Right Side - Car Specifications */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative flex justify-center lg:justify-end"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Large Background Text - Properly Positioned */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.08 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-bold text-white leading-none select-none text-center"
            style={{ transform: "translateY(20%)" }}
          >
            Speed
          </motion.div>
        </div>

        {/* Side Navigation Icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 space-y-6"
        >
          <div className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/70 transition-colors cursor-pointer backdrop-blur-sm">
            <div className="w-2 h-2 bg-current rounded-full" />
          </div>
          <div className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/70 transition-colors cursor-pointer backdrop-blur-sm">
            <div className="w-2 h-2 bg-current rounded-full" />
          </div>
          <div className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/70 transition-colors cursor-pointer backdrop-blur-sm">
            <div className="w-2 h-2 bg-current rounded-full" />
          </div>
        </motion.div>

        {/* Top Right Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute top-24 right-8"
        >
          <div className="bg-red-600/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
            ICONIC DESIGN
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/70 cursor-pointer backdrop-blur-sm bg-black/20 rounded-full p-2"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Bottom Left Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 left-8"
        >
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 text-white border border-white/20">
            <p className="text-sm text-white/80">Heritage Collection</p>
            <p className="font-semibold">1984 - 1996</p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
