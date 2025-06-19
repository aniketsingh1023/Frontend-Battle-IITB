"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function LoadingScreen() {
  const [count, setCount] = useState(100)
  const [showGo, setShowGo] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setShowGo(true)
          return 1
        }
        return prev - 1
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-600 via-red-700 to-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Ferrari Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-2xl">
            <Image src="/ferrari-logo.png" alt="Ferrari Logo" width={80} height={80} className="w-20 h-20" />
          </div>
          <h1 className="text-white text-3xl font-bold tracking-wider">FERRARI</h1>
        </motion.div>

        {/* Countdown */}
        <AnimatePresence mode="wait">
          {!showGo ? (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-center"
            >
              <motion.div
                key={count}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-yellow-400 text-6xl font-bold mb-4"
              >
                {count}%
              </motion.div>
              <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300"
                  initial={{ width: "100%" }}
                  animate={{ width: `${100 - count}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="go"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  textShadow: ["0 0 0px #facc15", "0 0 20px #facc15", "0 0 0px #facc15"],
                }}
                transition={{ duration: 0.8, repeat: 1 }}
                className="text-yellow-400 text-8xl font-bold"
              >
                GO
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/60 text-sm mt-8 tracking-widest"
        >
          STARTING ENGINES...
        </motion.p>
      </div>
    </div>
  )
}
