"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star, Filter } from "lucide-react"
import Image from "next/image"

export default function StorePage() {
  const categories = [
    "All Products",
    "Fragrances",
    "Gaming Accessories",
    "Racing Gear",
    "Collectibles",
    "Apparel",
    "Limited Edition",
  ]

  const products = [
    {
      id: 1,
      name: "Ferrari Fragrance Collection",
      category: "Fragrances",
      price: "$89.99",
      originalPrice: "$120.00",
      image: "/product-1.jpeg",
      rating: 4.8,
      isNew: false,
      isLimited: false,
      description: "Premium Ferrari fragrances for the modern enthusiast",
    },
    {
      id: 2,
      name: "Ferrari Gaming Mouse Limited Edition",
      category: "Gaming",
      price: "$149.99",
      image: "/product-3.jpeg",
      rating: 4.9,
      isNew: true,
      isLimited: true,
      description: "Professional gaming mouse with Ferrari design",
    },
    {
      id: 3,
      name: "F1 Steering Wheel Replica",
      category: "Collectibles",
      price: "$899.99",
      image: "/product-4.jpeg",
      rating: 5.0,
      isNew: false,
      isLimited: true,
      description: "Authentic F1 steering wheel replica with full functionality",
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Ferrari Store</h1>
            <p className="text-xl opacity-90 mb-8">Official Ferrari merchandise and collectibles</p>
            <Badge variant="secondary" className="bg-yellow-400 text-black text-lg px-4 py-2">
              Free Shipping on Orders Over $200
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-all duration-300 font-medium"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
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
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && <Badge className="bg-green-600 text-white animate-pulse">NEW</Badge>}
                        {product.isLimited && <Badge className="bg-purple-600 text-white">LIMITED</Badge>}
                      </div>

                      {/* Wishlist Button */}
                      <div className="absolute top-4 right-4">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Quick Add to Cart */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <Button className="w-full bg-red-600 hover:bg-red-700 shadow-lg">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-xs border-red-600 text-red-600">
                          {product.category}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-red-600">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
