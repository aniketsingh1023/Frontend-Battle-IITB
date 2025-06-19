"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Settings, Eye, Heart, Gauge, Timer } from "lucide-react"
import Image from "next/image"

export default function CarsPage() {
  const categories = [
    "All Models",
    "Supercars",
    "GT & Sports Cars",
    "Icona Series",
    "Special Series",
    "Configure & Buy",
    "Pre-Owned",
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

  const featuredCar = cars.find((car) => car.featured) || cars[0]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Featured Car */}
      <section className="relative h-screen bg-gradient-to-br from-red-600 via-red-700 to-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={featuredCar.image || "/placeholder.svg"}
            alt={featuredCar.name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full" />
          <div className="absolute top-40 right-40 w-2 h-2 bg-yellow-400/40 rounded-full" />
          <div className="absolute bottom-40 right-60 w-3 h-3 bg-white/30 rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Car Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
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
                    {featuredCar.isNew && <Badge className="bg-green-600 text-white">NEW</Badge>}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight"
                  >
                    {featuredCar.name}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-white/90 text-xl leading-relaxed"
                  >
                    {featuredCar.description}
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
                        <p className="text-2xl font-bold">{featuredCar.power}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white/60 text-sm">Engine</p>
                        <p className="text-xl font-semibold">{featuredCar.engine}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Timer className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white/60 text-sm">0-60mph</p>
                        <p className="text-2xl font-bold">{featuredCar.acceleration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Gauge className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-white/60 text-sm">Top Speed</p>
                        <p className="text-xl font-semibold">{featuredCar.topSpeed}</p>
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
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
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

              {/* Right Side - Price */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-white border border-white/20">
                  <div className="text-center">
                    <p className="text-sm text-white/80 mb-2">Starting Price</p>
                    <p className="text-4xl font-bold mb-4">{featuredCar.price}</p>
                    <p className="text-white/70 text-sm">*Price may vary by region</p>
                  </div>
                </div>
              </motion.div>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white hover:bg-red-600 hover:text-white rounded-full transition-all duration-300 font-medium shadow-md border border-gray-200 hover:border-red-600"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-red-500 hover:shadow-red-500/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={car.name}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-red-600 text-white">{car.category}</Badge>
                        {car.isNew && <Badge className="bg-green-600 text-white animate-pulse">NEW</Badge>}
                        {car.featured && <Badge className="bg-yellow-500 text-black">FEATURED</Badge>}
                      </div>

                      {/* Wishlist Button */}
                      <div className="absolute top-4 right-4">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                            <Settings className="w-4 h-4 mr-1" />
                            Configure
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">{car.name}</h3>
                      <p className="text-gray-600 mb-4">{car.description}</p>

                      {/* Quick Specs */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                        <div className="text-center">
                          <p className="text-gray-500">Power</p>
                          <p className="font-bold text-red-600">{car.power}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500">0-60mph</p>
                          <p className="font-bold">{car.acceleration}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500">Top Speed</p>
                          <p className="font-bold">{car.topSpeed}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-red-600">{car.price}</span>
                        <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
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
              <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8">
                Configure Your Ferrari
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8"
              >
                Find a Dealer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
