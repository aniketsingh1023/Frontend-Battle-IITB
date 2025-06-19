"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Search, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      {/* Compact Rounded Navbar */}
      <div className="bg-red-600 rounded-full px-8 py-4 shadow-2xl backdrop-blur-md border border-red-500/20">
        <div className="flex items-center justify-between space-x-8">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-white text-sm font-medium">
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              HOME
            </Link>
            <Link href="/events" className="hover:text-yellow-300 transition-colors">
              EVENTS
            </Link>
            <Link href="/cars" className="hover:text-yellow-300 transition-colors">
              AUTOMOTIVE
            </Link>
          </div>

          {/* Search Icon (Left) */}
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 lg:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Center Ferrari Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-yellow-400 rounded-full p-2 shadow-lg">
              <Image src="/ferrari-logo.png" alt="Ferrari Logo" width={24} height={24} className="w-6 h-6" />
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-white text-sm font-medium">
            <Link href="/store" className="hover:text-yellow-300 transition-colors">
              STORE
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">
              ABOUT
            </Link>
          </div>

          {/* Menu Icon (Right) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-red-600 text-white border-red-500">
              <div className="flex flex-col space-y-6 mt-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-yellow-300 transition-colors py-2"
                >
                  HOME
                </Link>
                <Link
                  href="/events"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-yellow-300 transition-colors py-2"
                >
                  EVENTS
                </Link>
                <Link
                  href="/cars"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-yellow-300 transition-colors py-2"
                >
                  AUTOMOTIVE
                </Link>
                <Link
                  href="/store"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-yellow-300 transition-colors py-2"
                >
                  STORE
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-yellow-300 transition-colors py-2"
                >
                  ABOUT
                </Link>
                <div className="pt-4 border-t border-white/20">
                  <Button
                    variant="ghost"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-white hover:bg-white/20 w-full justify-start"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                    Toggle Theme
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}
