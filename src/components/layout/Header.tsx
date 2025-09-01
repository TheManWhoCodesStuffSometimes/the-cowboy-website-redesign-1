// src/components/layout/Header.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const leftNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' }
  ]

  const rightNavItems = [
    { name: 'VIP', href: '/vip' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ]

  const allNavItems = [...leftNavItems, ...rightNavItems]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="w-full bg-black/95 backdrop-blur-sm fixed top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-center max-w-4xl mx-auto relative">
          
          {/* Mobile: VIP and Events on left */}
          <div className="flex md:hidden space-x-4">
            <Link
              href="/vip"
              className="text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wider uppercase text-xs"
            >
              VIP
            </Link>
            <Link
              href="/events"
              className="text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wider uppercase text-xs"
            >
              Events
            </Link>
          </div>

          {/* Desktop Left Navigation - positioned closer to center */}
          <div className="hidden md:flex space-x-12 absolute left-0">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wider uppercase text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo - Responsive sizing */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/images/branding/cowboy_logo.jpg"
                alt="The Cowboy Saloon Logo"
                width={220}
                height={140}
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Right Navigation - positioned closer to center */}
          <div className="hidden md:flex space-x-12 absolute right-0">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wider uppercase text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-gray-300 transition-colors duration-300 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-5 h-5 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu - Slide down animation */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="pt-4 pb-4 border-t border-white/10 mt-4">
            <div className="grid grid-cols-1 gap-3">
              {allNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wider uppercase text-sm py-3 px-4 hover:bg-white/5 rounded"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-white/20 text-center">
              <p className="text-white/70 text-sm mb-1">Wed - Sat | 5:30 PM - 2:00 AM</p>
              <p className="text-white/50 text-xs uppercase tracking-wide">Under New Ownership!</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
