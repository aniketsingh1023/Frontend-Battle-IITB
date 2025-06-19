"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Settings, Eye, Heart, Gauge, Timer, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function CarsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const categories = [
    "All Models",
    "Supercars",
    "GT & Sports Cars",
    "Icona Series",
    "Special Series",
    "Configure & Buy",
    "Pre-Owned",
  ]

  const featuredCars = [
    {
      id: 1,
      name: "SF90 Stradale",
      category: "Supercar",
      price: "From $625,000",
      power: "1000 HP",
      acceleration: "2.5s 0-60mph",
      topSpeed: "211 mph",
      engine: "V8 Hybrid",
      image: "/ferrari-1.jpeg",
      description: "The pinnacle of Ferrari innovation with hybrid V8 technology",
      isNew: true,
      featured: true,
    },
    {
      id: 2,
      name: "LaFerrari",
      category: "Hypercar",
      price: "From $1,400,000",
      power: "963 HP",
      acceleration: "2.4s 0-60mph",
      topSpeed: "217 mph",
      engine: "V12 Hybrid",
      image: "/ferrari-2.jpeg",
      description: "The ultimate expression of Ferrari's Formula 1 technology",
      isNew: false,
      featured: true,
    },
    {
      id: 3,
      name: "296 GTB",
      category: "GT Sports Car",
      price: "From $320,000",
      power: "830 HP",
      acceleration: "2.9s 0-60mph",
      topSpeed: "205 mph",
      engine: "V6 Hybrid",
      image: "/ferrari-3.jpeg",
      description: "Pure V6 hybrid excellence in a stunning package",
      isNew: true,
      featured: true,
    },
  ]

  const cars = [
    {
      id: 1,
      name: "SF90 Stradale",
      category: "Supercar",
      price: "From $625,000",
      power: "1000 HP",
      acceleration: "2.5s 0-60mph",
      topSpeed: "211 mph",
      engine: "V8 Hybrid",
      image: "/ferrari-1.jpeg",
      description: "The pinnacle of Ferrari innovation with hybrid V8 technology",
      isNew: true,
      featured: true,
    },
    {
      id: 2,
      name: "LaFerrari",
      category: "Hypercar",
      price: "From $1,400,000",
      power: "963 HP",
      acceleration: "2.4s 0-60mph",
      topSpeed: "217 mph",
      engine: "V12 Hybrid",
      image: "/ferrari-2.jpeg",
      description: "The ultimate expression of Ferrari's Formula 1 technology",
      isNew: false,
      featured: true,
    },
    {
      id: 3,
      name: "296 GTB",
      category: "GT Sports Car",
      price: "From $320,000",
      power: "830 HP",
      acceleration: "2.9s 0-60mph",
      topSpeed: "205 mph",
      engine: "V6 Hybrid",
      image: "/ferrari-3.jpeg",
      description: "Pure V6 hybrid excellence in a stunning package",
      isNew: true,
      featured: false,
    },
    {
      id: 4,
      name: "F8 Tributo",
      category: "Supercar",
      price: "From $280,000",
      power: "720 HP",
      acceleration: "2.9s 0-60mph",
      topSpeed: "211 mph",
      engine: "V8 Twin-Turbo",
      image: "/ferrari-4.jpeg",
      description: "The most powerful V8 in Ferrari history",
      isNew: false,
      featured: false,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCars.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCars.length) % featuredCars.length)
  }

  const currentCar = featuredCars[currentSlide]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Carousel Section */}
      <section className="relative h-screen bg-gradient-to-br from-red-600 via-red-700 to-black text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={currentCar.image || "/placeholder.svg"}
              alt={currentCar.name}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="w-16 h-16 bg-black/30 hover:bg-black/50 text-white border border-white/20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="w-16 h-16 bg-black/30 hover:bg-black/50 text-white border border-white/20 backdrop-blur-sm"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {featuredCars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-red-600 scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Car Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className="text-white space-y-8"
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center space-x-4"
                    >
                      <Badge className="bg-red-600 text-white">FEATURED</Badge>
                      {currentCar.isNew && <Badge className="bg-green-600 text-white animate-pulse">NEW</Badge>}
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-6xl md:text-8xl font-bold tracking-tight"
                    >
                      {currentCar.name}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white/90 text-xl leading-relaxed"
                    >
                      {currentCar.description}
                    </motion.p>
                  </div>

                  {/* Specs Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 gap-8"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <div>
                          <p className="text-white/60 text-sm">Power</p>
                          <p className="text-2xl font-bold">{currentCar.power}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Settings className="w-5 h-5 text-yellow-400" />
                        <div>
                          <p className="text-white/60 text-sm">Engine</p>
                          <p className="text-xl font-semibold">{currentCar.engine}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Timer className="w-5 h-5 text-yellow-400" />
                        <div>
                          <p className="text-white/60 text-sm">0-60mph</p>
                          <p className="text-2xl font-bold">{currentCar.acceleration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Gauge className="w-5 h-5 text-yellow-400" />
                        <div>
                          <p className="text-white/60 text-sm">Top Speed</p>
                          <p className="text-xl font-semibold">{currentCar.topSpeed}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex space-x-4"
                  >
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 group">
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Configure Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      Book Test Drive
                    </Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Right Side - Price Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex justify-center lg:justify-end"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-white border border-white/20 shadow-2xl"
                  >
                    <div className="text-center">
                      <p className="text-sm text-white/80 mb-2">Starting Price</p>
                      <motion.p
                        className="text-4xl font-bold mb-4"
                        animate={{
                          textShadow: ["0 0 0px #ff2800", "0 0 10px #ff2800", "0 0 0px #ff2800"],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {currentCar.price}
                      </motion.p>
                      <p className="text-white/70 text-sm">*Price may vary by region</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.05 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-[8rem] md:text-[15rem] font-bold text-white leading-none select-none text-center"
            style={{ transform: "translateY(20%)" }}
          >
            FERRARI
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Explore Our Lineup</h2>
            <p className="text-gray-600">Discover the complete Ferrari range</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white hover:bg-red-600 hover:text-white rounded-full transition-all duration-300 font-medium shadow-md border border-gray-200 hover:border-red-600 hover:shadow-lg hover:shadow-red-500/20"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Cars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-red-500 hover:shadow-red-500/20 overflow-hidden bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={car.name}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Enhanced Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-red-600 text-white shadow-lg">{car.category}</Badge>
                        {car.isNew && <Badge className="bg-green-600 text-white animate-pulse shadow-lg">NEW</Badge>}
                        {car.featured && <Badge className="bg-yellow-500 text-black shadow-lg">FEATURED</Badge>}
                      </div>

                      {/* Enhanced Wishlist Button */}
                      <div className="absolute top-4 right-4">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>

                      {/* Enhanced Hover Actions */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button size="sm" className="bg-white text-black hover:bg-gray-100 shadow-lg">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                              <Settings className="w-4 h-4 mr-1" />
                              Configure
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">{car.name}</h3>
                      <p className="text-gray-600 mb-4">{car.description}</p>

                      {/* Enhanced Quick Specs */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors"
                        >
                          <p className="text-gray-500 group-hover:text-red-600">Power</p>
                          <p className="font-bold text-red-600">{car.power}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors"
                        >
                          <p className="text-gray-500 group-hover:text-red-600">0-60mph</p>
                          <p className="font-bold">{car.acceleration}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors"
                        >
                          <p className="text-gray-500 group-hover:text-red-600">Top Speed</p>
                          <p className="font-bold">{car.topSpeed}</p>
                        </motion.div>
                      </div>

                      <div className="flex justify-between items-center">
                        <motion.span
                          className="text-2xl font-bold text-red-600"
                          animate={{
                            textShadow: ["0 0 0px #ff2800", "0 0 5px #ff2800", "0 0 0px #ff2800"],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {car.price}
                        </motion.span>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-red-600 hover:bg-red-700 shadow-lg">Learn More</Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-4">Ready to Own a Ferrari?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the thrill of Ferrari ownership. Configure your dream car or schedule a test drive today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 shadow-lg">
                  Configure Your Ferrari
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8"
                >
                  Find a Dealer
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
