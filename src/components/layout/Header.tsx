// src/components/layout/Header.tsx
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
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

  return (
    <header className="w-full bg-black/90 backdrop-blur-sm fixed top-0 z-50 border-b border-amber-900/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Left Navigation */}
          <div className="hidden md:flex space-x-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-amber-100 hover:text-amber-400 transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/images/branding/The Cowboy Saloon Logo.jpg"
                alt="The Cowboy Saloon Logo"
                width={180}
                height={120}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex space-x-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-amber-100 hover:text-amber-400 transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-amber-100 hover:text-amber-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - We'll enhance this later */}
        <div className="md:hidden mt-4 pb-4">
          <div className="grid grid-cols-2 gap-4">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-amber-100 hover:text-amber-400 transition-colors duration-300 font-medium tracking-wide uppercase text-sm text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
