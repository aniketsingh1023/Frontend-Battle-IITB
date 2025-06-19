"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Italian Grand Prix 2025",
      date: "September 7, 2025",
      time: "14:00 CET",
      location: "Autodromo Nazionale Monza, Italy",
      category: "Formula 1",
      price: "From €150",
      image: "/events-1.jpeg",
      description: "Experience the passion of Ferrari fans at the legendary Monza circuit",
      capacity: "50,000 spectators",
      status: "tickets-available",
    },
    {
      id: 2,
      title: "Ferrari Challenge World Finals",
      date: "October 28, 2025",
      time: "All Day",
      location: "Mugello Circuit, Italy",
      category: "Ferrari Challenge",
      price: "From €75",
      image: "/events-2.jpeg",
      description: "The ultimate Ferrari one-make racing championship finale",
      capacity: "15,000 spectators",
      status: "selling-fast",
    },
    {
      id: 3,
      title: "Victory Celebration Event",
      date: "November 15, 2025",
      time: "19:00 CET",
      location: "Maranello, Italy",
      category: "Special Event",
      price: "Invitation Only",
      image: "/events-3.jpeg",
      description: "Celebrate Ferrari's racing victories with exclusive access",
      capacity: "500 VIP guests",
      status: "invitation-only",
    },
    {
      id: 4,
      title: "F1 Pit Lane Experience",
      date: "Multiple Dates",
      time: "Race Weekend",
      location: "Various F1 Circuits",
      category: "VIP Experience",
      price: "From €2,500",
      image: "/events-4.jpeg",
      description: "Behind-the-scenes access to Ferrari F1 team operations",
      capacity: "20 guests per session",
      status: "premium",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "tickets-available":
        return "bg-green-500"
      case "selling-fast":
        return "bg-orange-500"
      case "invitation-only":
        return "bg-purple-500"
      case "premium":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "tickets-available":
        return "Tickets Available"
      case "selling-fast":
        return "Selling Fast"
      case "invitation-only":
        return "Invitation Only"
      case "premium":
        return "Premium Experience"
      default:
        return "Available"
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Ferrari Racing Events</h1>
            <p className="text-xl opacity-90 mb-8">Experience the thrill of Ferrari racing worldwide</p>
            <Badge variant="secondary" className="bg-yellow-400 text-black text-lg px-4 py-2">
              2025 Season Now Open
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Racing Events</h2>
            <p className="text-gray-600">Join us at the most exciting Ferrari racing events around the world</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-500 hover:shadow-red-500/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getStatusColor(event.status)} text-white`}>
                          {getStatusText(event.status)}
                        </Badge>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-black/70 text-white border-none">
                          {event.category}
                        </Badge>
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="w-5 h-5 mr-3 text-red-500" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-5 h-5 mr-3 text-red-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-5 h-5 mr-3 text-red-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="w-5 h-5 mr-3 text-red-500" />
                          <span>{event.capacity}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-red-600">{event.price}</span>
                          {event.status === "selling-fast" && (
                            <p className="text-sm text-orange-600 font-medium">Limited tickets remaining!</p>
                          )}
                        </div>
                        <Button
                          className={`${
                            event.status === "invitation-only"
                              ? "bg-purple-600 hover:bg-purple-700"
                              : "bg-red-600 hover:bg-red-700"
                          } transition-all duration-300 group-hover:scale-105`}
                          disabled={event.status === "invitation-only"}
                        >
                          {event.status === "invitation-only" ? "Invitation Only" : "Book Now"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Racing Heritage</h2>
            <p className="text-gray-300">75+ years of racing excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "16", label: "F1 Championships" },
              { number: "243", label: "Grand Prix Wins" },
              { number: "10", label: "Le Mans Victories" },
              { number: "75+", label: "Years of Racing" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
