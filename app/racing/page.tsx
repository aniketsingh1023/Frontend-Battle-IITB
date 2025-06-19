"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RacingPage() {
  const categories = ["Formula 1", "WEC", "GT Racing", "Corse Clienti", "Ferrari Challenge", "Esports", "Heritage"]

  const racingHighlights = [
    {
      title: "F1 Championship 2025",
      image: "/placeholder.svg?height=300&width=400",
      description: "Follow Scuderia Ferrari's season",
    },
    {
      title: "Le Mans Victory",
      image: "/placeholder.svg?height=300&width=400",
      description: "3rd consecutive win at Le Mans",
    },
    {
      title: "Ferrari Challenge Series",
      image: "/placeholder.svg?height=300&width=400",
      description: "One-make racing championship",
    },
  ]

  return (
    <div className="h-screen overflow-hidden flex">
      {/* Sidebar Navigation */}
      <div className="w-80 bg-black text-white flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <Image src="/ferrari-logo.png" alt="Ferrari Logo" width={32} height={32} className="w-8 h-8" />
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Racing Header */}
        <div className="px-6 py-4">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">RACING</h2>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-6">
          <div className="space-y-2">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href="#"
                  className="flex items-center justify-between py-3 text-white hover:text-red-400 transition-colors group"
                >
                  <span className="text-lg">{category}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        <div className="h-full flex">
          {/* Hero Section */}
          <div className="flex-1 relative">
            <div className="absolute inset-0">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Ferrari F1 Car"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="p-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-6xl font-bold text-white mb-4">RACING HERITAGE</h1>
                  <p className="text-white/90 text-xl mb-6">75+ Years of Racing Excellence</p>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                    DISCOVER MORE
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Racing Highlights */}
          <div className="w-96 bg-gray-100 flex flex-col">
            {racingHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-1 relative group cursor-pointer overflow-hidden"
              >
                <Image
                  src={highlight.image || "/placeholder.svg"}
                  alt={highlight.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                    <p className="text-white/80 text-sm">{highlight.description}</p>
                    <ChevronRight className="w-6 h-6 text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
