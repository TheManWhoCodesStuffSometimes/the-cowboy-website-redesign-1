// src/components/animations/SparkleOverlay.tsx
'use client'
import { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const SparkleOverlay = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    // Generate sparkles
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < 25; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100, // Random x position (percentage)
          y: -10, // Start above viewport
          size: Math.random() * 3 + 1, // Size between 1-4px
          duration: Math.random() * 3 + 4, // Duration between 4-7 seconds
          delay: Math.random() * 5, // Delay between 0-5 seconds
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-0 animate-sparkle-fall"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
          }}
        />
      ))}
      
      {/* Subtle gradient overlay to blend the sparkles better */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  )
}

export default SparkleOverlay
