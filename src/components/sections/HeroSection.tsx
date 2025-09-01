// src/components/sections/HeroSection.tsx
import Image from 'next/image'
import Link from 'next/link'
import SparkleOverlay from '../animations/SparkleOverlay'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image - Mobile optimized positioning */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero/hero_image.jpg"
          alt="Live music at The Cowboy Saloon"
          fill
          className="object-cover object-center md:object-center sm:object-[center_20%]"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Sparkle Overlay - Reduced on mobile */}
      <div className="hidden md:block">
        <SparkleOverlay />
      </div>
      
      {/* Mobile subtle sparkle overlay */}
      <div className="md:hidden absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Hero Content - Mobile responsive positioning */}
      <div className="relative z-10 h-full flex items-center md:items-end justify-center px-4 pb-8 md:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 md:px-0 text-shadow-lg">
            From two-steppin&apos; to toe-tappin&apos;, live music to cold drinks - 
            we&apos;ve been keeping boots scootin&apos; for generations
          </p>

          {/* Action Buttons - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12">
            <Link href="/events">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-6 md:px-8 py-4 text-base md:text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 border border-white min-h-[48px] shadow-lg">
                Upcoming Shows
              </button>
            </Link>
            <Link href="/vip">
              <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-4 text-base md:text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 border border-white min-h-[48px] shadow-lg">
                Book VIP
              </button>
            </Link>
          </div>

          {/* Hours Display - Mobile responsive */}
          <div className="mx-auto p-4 md:p-6 bg-black/80 md:bg-black/70 backdrop-blur-sm border border-white/30 md:border-white/20 max-w-sm md:max-w-md rounded-lg md:rounded-none">
            <h3 className="text-white text-base md:text-lg font-semibold mb-2 uppercase tracking-wide">Hours</h3>
            <p className="text-white text-base md:text-lg">
              <span className="font-semibold">Wednesday - Saturday</span>
              <br />
              5:30 PM - 2:00 AM
            </p>
            <p className="text-white text-xs md:text-sm mt-2 font-medium uppercase tracking-wide">
              Under New Ownership!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
