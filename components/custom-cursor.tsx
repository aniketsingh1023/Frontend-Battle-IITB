"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 bg-red-600 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
        boxShadow: "0 0 10px rgba(255, 40, 0, 0.8)",
      }}
    />
  )
}
