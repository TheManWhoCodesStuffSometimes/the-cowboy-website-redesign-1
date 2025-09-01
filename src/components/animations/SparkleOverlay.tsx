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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Generate sparkles - fewer on mobile for performance
    const generateSparkles = () => {
      const sparkleCount = isMobile ? 12 : 25
      const newSparkles: Sparkle[] = []
      
      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100, // Random x position (percentage)
          y: -10, // Start above viewport
          size: Math.random() * (isMobile ? 2 : 3) + 1, // Smaller on mobile
          duration: Math.random() * 3 + (isMobile ? 3 : 4), // Shorter duration on mobile
          delay: Math.random() * (isMobile ? 3 : 5), // Less delay variation on mobile
        })
      }
      setSparkles(newSparkles)
    }

    if (typeof window !== 'undefined') {
      generateSparkles()
    }
  }, [isMobile])

  // Don't render anything on server or if no sparkles generated
  if (sparkles.length === 0) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    )
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute bg-white rounded-full opacity-0 animate-sparkle-fall"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
            boxShadow: isMobile 
              ? '0 0 4px rgba(255, 255, 255, 0.4)' 
              : '0 0 6px rgba(255, 255, 255, 0.6)',
          }}
        />
      ))}
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  )
}

export default SparkleOverlay
