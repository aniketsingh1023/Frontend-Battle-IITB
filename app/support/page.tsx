"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Search } from "lucide-react"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How do I schedule a test drive?",
      answer:
        "You can schedule a test drive by contacting your local Ferrari dealer or using our online booking system. Test drives are available for qualified customers and require a valid driver's license and proof of insurance.",
    },
    {
      question: "What is included in Ferrari warranty?",
      answer:
        "Ferrari vehicles come with a comprehensive 3-year unlimited mileage warranty covering all mechanical and electrical components. Extended warranty options are also available.",
    },
    {
      question: "How often should I service my Ferrari?",
      answer:
        "Ferrari recommends annual service intervals or every 12,500 miles, whichever comes first. Regular maintenance is crucial for optimal performance and warranty coverage.",
    },
    {
      question: "Can I customize my Ferrari order?",
      answer:
        "Yes, Ferrari offers extensive customization options through our Tailor Made program. You can personalize colors, materials, and various aesthetic elements to create your unique Ferrari.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Ferrari Financial Services offers various financing and leasing options with competitive rates. Contact your dealer for personalized financing solutions.",
    },
    {
      question: "How do I join Ferrari track events?",
      answer:
        "Ferrari owners can participate in exclusive track events through our Corse Clienti program. Events are announced through our owner communications and dealer network.",
    },
  ]

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7 Available",
      action: "Start Chat",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with a specialist",
      availability: "Mon-Fri 8AM-8PM EST",
      action: "Call Now",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24hrs",
      action: "Send Email",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Customer Support</h1>
            <p className="text-xl opacity-90">We're here to help with all your Ferrari needs</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">Choose the best way to reach our support team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-500 hover:shadow-red-500/20">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-red-100 dark:bg-red-900/30 rounded-full w-fit group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <method.icon className="w-8 h-8 text-red-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                    <p className="text-gray-600 dark:text-gray-300">{method.description}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${method.color}`}>
                      <Clock className="w-4 h-4 inline mr-1" />
                      {method.availability}
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">{method.action}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Find quick answers to common questions</p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-lg border-2 hover:border-red-500 transition-colors duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search terms or contact our support team directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Can't find what you're looking for? Send us a detailed message and we'll get back to you.
              </p>
            </div>

            <Card className="border-2 hover:border-red-500 transition-colors duration-300">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Please provide details about your inquiry..." rows={6} />
                  </div>

                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full shadow-2xl animate-pulse">
          <MessageCircle className="w-6 h-6 mr-2" />
          Need Help?
        </Button>
      </div>
    </div>
  )
}
