import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">FERRARI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Racing since 1947. The prancing horse continues to lead innovation in automotive excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <div className="space-y-2">
              <Link href="/cars" className="block text-gray-400 hover:text-red-400 transition-colors">
                Sports Cars
              </Link>
              <Link href="/racing" className="block text-gray-400 hover:text-red-400 transition-colors">
                Racing
              </Link>
              <Link href="/wearables" className="block text-gray-400 hover:text-red-400 transition-colors">
                Collections
              </Link>
              <Link href="/events" className="block text-gray-400 hover:text-red-400 transition-colors">
                Experiences
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="/support" className="block text-gray-400 hover:text-red-400 transition-colors">
                Customer Service
              </Link>
              <Link href="/support" className="block text-gray-400 hover:text-red-400 transition-colors">
                FAQ
              </Link>
              <Link href="/support" className="block text-gray-400 hover:text-red-400 transition-colors">
                Contact Us
              </Link>
              <Link href="/support" className="block text-gray-400 hover:text-red-400 transition-colors">
                Live Chat
              </Link>
            </div>
          </div>

          {/* Newsletter */}

        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400">
              <Youtube className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400">
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Ferrari S.p.A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
