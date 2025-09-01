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
    <header className="w-full bg-black/95 backdrop-blur-sm fixed top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center max-w-4xl mx-auto relative">
          {/* Left Navigation - positioned closer to center */}
          <div className="hidden md:flex space-x-12 absolute left-0">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium tracking-wider uppercase text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo - Made Larger */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/images/branding/cowboy_logo.jpg"
                alt="The Cowboy Saloon Logo"
                width={220}
                height={140}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation - positioned closer to center */}
          <div className="hidden md:flex space-x-12 absolute right-0">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium tracking-wider uppercase text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden absolute right-4 text-white hover:text-red-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pb-4">
          <div className="grid grid-cols-2 gap-4">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium tracking-wider uppercase text-sm text-center"
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
