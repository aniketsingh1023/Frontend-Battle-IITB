"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Heart, Target, Zap, Award, Rocket } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const values = [
    {
      icon: Trophy,
      title: "INDIVIDUAL AND TEAM",
      image: "/ferrari-4.jpeg",
      description:
        "Every Ferrari represents the perfect harmony between individual excellence and team collaboration. Our craftsmen and engineers work together to create automotive masterpieces that embody both personal passion and collective expertise.",
      points: [
        "Handcrafted excellence by master artisans",
        "Collaborative engineering innovation",
        "Personal attention to every detail",
        "Team-driven performance optimization",
      ],
    },
    {
      icon: Zap,
      title: "TRADITION AND INNOVATION",
      image: "/ferrari-2.jpeg",
      description:
        "Ferrari bridges 75+ years of racing heritage with cutting-edge technology. We honor our legendary past while pioneering the future of automotive excellence through continuous innovation and technological advancement.",
      points: [
        "75+ years of racing heritage",
        "Cutting-edge hybrid technology",
        "Formula 1 derived innovations",
        "Sustainable performance solutions",
      ],
    },
    {
      icon: Heart,
      title: "PASSION AND ACHIEVEMENT",
      image: "/ferrari-1.jpeg",
      description:
        "Passion drives every Ferrari creation, from the roar of our engines to the precision of our design. Our achievements on track and road reflect the unwavering dedication to excellence that defines the Ferrari spirit.",
      points: [
        "16 Formula 1 Constructors' Championships",
        "Iconic road car innovations",
        "Uncompromising quality standards",
        "Emotional connection with enthusiasts",
      ],
    },
  ]

  const achievements = [
    { number: "75+", label: "Years of Excellence", icon: Award },
    { number: "16", label: "F1 Championships", icon: Trophy },
    { number: "243", label: "Grand Prix Wins", icon: Target },
    { number: "10", label: "Le Mans Victories", icon: Rocket },
  ]

  const customers = [
    { name: "Scuderia Ferrari", logo: "/ferrari-logo.png" },
    { name: "Ferrari Challenge", logo: "/ferrari-logo.png" },
    { name: "Ferrari Corse Clienti", logo: "/ferrari-logo.png" },
    { name: "Ferrari Esports", logo: "/ferrari-logo.png" },
    { name: "Ferrari Academy", logo: "/ferrari-logo.png" },
    { name: "Ferrari Museum", logo: "/ferrari-logo.png" },
  ]

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <Image
            src="/ferrari-hero.jpeg"
            alt="Ferrari Heritage"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              animate={{
                textShadow: ["0 0 0px #ff2800", "0 0 20px #ff2800", "0 0 0px #ff2800"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ABOUT US
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Born of the spirit of racing, Ferrari epitomizes the power of a lifelong passion and the beauty of
              achieving human excellence, creating timeless icons for the road and track.
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-20 w-4 h-4 bg-red-600 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-40 left-20 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-40"
        />
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">OUR VALUES</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-red-600 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={value.image || "/placeholder.svg"}
                        alt={value.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="p-2 bg-red-600 rounded-full">
                            <value.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{value.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>

                      <div className="space-y-3">
                        {value.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + pointIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                            <span className="text-sm text-gray-700">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 border border-red-600/20 rounded-full"
        />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Badge className="bg-red-600 text-white mb-6 text-sm px-4 py-2">HERITAGE</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">THE FOUNDATION OF THE FERRARI BRAND</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ferrari was born from Enzo Ferrari's passion for racing and his vision to create the ultimate driving
                machines. Our foundation rests on three pillars: racing excellence, technological innovation, and
                Italian craftsmanship.
              </p>
              <div className="space-y-4">
                {[
                  "Founded in 1947 by Enzo Ferrari",
                  "Racing DNA in every creation",
                  "Handcrafted in Maranello, Italy",
                  "Continuous innovation since day one",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3">DISCOVER MORE</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <Image
                src="/ferrari-3.jpeg"
                alt="Ferrari Foundation"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-red-600/20 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">RACING ACHIEVEMENTS</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our track record speaks for itself - decades of dominance in motorsport
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 },
                  }}
                  className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors"
                >
                  <achievement.icon className="w-10 h-10 text-yellow-400" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-5xl font-bold mb-2 text-yellow-400"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-white/90 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Showcase Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #ff2800 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">OUR ECOSYSTEM</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ferrari extends beyond cars - we're a complete ecosystem of racing, experiences, and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 hover:bg-red-600/20 rounded-xl p-6 transition-all duration-300 border border-white/10 hover:border-red-600/50">
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 mx-auto mb-4 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                  <p className="text-center text-sm text-gray-400 group-hover:text-white transition-colors">
                    {customer.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mt-20 text-center"
          >
            {[
              { number: "200,000+", label: "Ferrari Owners Worldwide" },
              { number: "70+", label: "Countries Served" },
              { number: "98%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={stat.label} whileHover={{ scale: 1.05 }} className="relative group">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                  className="absolute inset-0 bg-red-600/20 rounded-full"
                />
                <div className="relative bg-red-600/10 rounded-full p-8 border border-red-600/30 group-hover:border-red-600/60 transition-colors">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-red-500 mb-2"
                    animate={{
                      textShadow: ["0 0 0px #ff2800", "0 0 10px #ff2800", "0 0 0px #ff2800"],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-4">STAY CONNECTED</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the Ferrari family and be the first to know about our latest innovations, events, and exclusive
              experiences.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-l-lg text-black bg-white border-none focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Button className="bg-red-600 hover:bg-red-700 px-8 rounded-l-none">SUBSCRIBE</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
