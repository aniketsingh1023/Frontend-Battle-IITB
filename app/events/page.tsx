"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, MapPin, Award, Target } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const victories = [
    {
      id: 1,
      number: "01",
      title: "ITALIAN GRAND PRIX VICTORY",
      subtitle: "MONZA CIRCUIT DOMINATION",
      year: "2024",
      date: "September 1, 2024",
      location: "Autodromo Nazionale Monza, Italy",
      description:
        "Ferrari secured a stunning 1-2 finish at the legendary Monza circuit, with Charles Leclerc leading Carlos Sainz across the finish line in front of the passionate Tifosi.",
      image: "/events-1.jpeg",
      stats: {
        position: "1st & 2nd",
        laps: "53 Laps",
        time: "1:20:27.511",
      },
    },
    {
      id: 2,
      number: "02",
      title: "FERRARI CHALLENGE WORLD FINALS",
      subtitle: "CHAMPIONSHIP GLORY AT MUGELLO",
      year: "2024",
      date: "October 27, 2024",
      location: "Mugello Circuit, Italy",
      description:
        "The Ferrari Challenge World Finals concluded with spectacular racing as drivers from around the globe competed for the ultimate prize in Ferrari's one-make championship series.",
      image: "/events-2.jpeg",
      stats: {
        participants: "180 Drivers",
        countries: "35 Nations",
        races: "12 Finals",
      },
    },
    {
      id: 3,
      number: "03",
      title: "VICTORY CELEBRATION GALA",
      subtitle: "MARANELLO CHAMPIONS NIGHT",
      year: "2024",
      date: "November 15, 2024",
      location: "Maranello, Italy",
      description:
        "An exclusive celebration of Ferrari's 2024 racing achievements, bringing together drivers, team members, and VIP guests for an unforgettable evening of triumph.",
      image: "/events-3.jpeg",
      stats: {
        guests: "500 VIPs",
        trophies: "25 Awards",
        celebration: "Historic",
      },
    },
    {
      id: 4,
      number: "04",
      title: "F1 CONSTRUCTORS CHAMPIONSHIP",
      subtitle: "SEASON FINALE TRIUMPH",
      year: "2024",
      date: "December 8, 2024",
      location: "Abu Dhabi, UAE",
      description:
        "Ferrari clinched the Constructors' Championship in a thrilling season finale, marking their return to the top of Formula 1 after years of determination and innovation.",
      image: "/events-4.jpeg",
      stats: {
        points: "759 Points",
        wins: "12 Victories",
        podiums: "28 Podiums",
      },
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/events-1.jpeg"
            alt="Ferrari Victories"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Badge className="bg-red-600 text-white mb-6 text-lg px-6 py-2">VICTORIES</Badge>
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6"
              animate={{
                textShadow: ["0 0 0px #ff2800", "0 0 30px #ff2800", "0 0 0px #ff2800"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              FERRARI TRIUMPHS
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Celebrating our greatest moments of victory and championship glory
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-32 right-20 w-6 h-6 bg-red-600 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-40 left-20 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-40"
        />
      </section>

      {/* Victories Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {victories.map((victory, index) => (
            <motion.div
              key={victory.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-32 last:mb-0"
            >
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content Side */}
                <motion.div
                  className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileInView={{ x: index % 2 === 1 ? [100, 0] : [-100, 0] }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {/* Large Number */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    <span className="text-[12rem] md:text-[16rem] font-bold text-red-600/20 leading-none select-none">
                      {victory.number}
                    </span>
                    <div className="absolute top-8 left-8">
                      <Badge className="bg-red-600 text-white text-sm px-4 py-2 mb-4">{victory.year}</Badge>
                      <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">{victory.title}</h2>
                      <h3 className="text-xl md:text-2xl text-red-400 font-medium mb-6">{victory.subtitle}</h3>
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">{victory.description}</p>

                    {/* Event Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-red-500" />
                        <span className="text-gray-300">{victory.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-red-500" />
                        <span className="text-gray-300">{victory.location}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                      {Object.entries(victory.stats).map(([key, value], statIndex) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + statIndex * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-2xl font-bold text-red-500 mb-1">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  whileInView={{
                    scale: [0.8, 1],
                    rotate: [index % 2 === 1 ? 5 : -5, 0],
                  }}
                  transition={{ duration: 1, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={victory.image || "/placeholder.svg"}
                      alt={victory.title}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating Trophy Icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-6 right-6 p-3 bg-red-600/90 rounded-full backdrop-blur-sm"
                    >
                      <Trophy className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-4 -left-4 w-8 h-8 border-2 border-red-600/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-400/20 rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Championship Stats */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">2024 SEASON HIGHLIGHTS</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A year of unprecedented success and championship glory
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Trophy, number: "12", label: "Race Victories", color: "text-yellow-400" },
              { icon: Award, number: "28", label: "Podium Finishes", color: "text-white" },
              { icon: Target, number: "759", label: "Championship Points", color: "text-yellow-400" },
              { icon: Calendar, number: "24", label: "Races Completed", color: "text-white" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                  className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors"
                >
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </motion.div>
                <motion.div
                  className={`text-5xl font-bold mb-2 ${stat.color}`}
                  animate={{
                    textShadow: ["0 0 0px currentColor", "0 0 20px currentColor", "0 0 0px currentColor"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6">BE PART OF THE NEXT VICTORY</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us for upcoming events and experience the thrill of Ferrari racing firsthand
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg">
              VIEW UPCOMING EVENTS
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
