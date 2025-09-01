// src/components/sections/HeroSection.tsx
import Image from 'next/image'
import SparkleOverlay from '../animations/SparkleOverlay'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero/hero_image.jpg"
          alt="Live music at The Cowboy Saloon"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Sparkle Overlay */}
      <SparkleOverlay />

      {/* Hero Content - Moved down to reveal "The Cowboy" sign */}
      <div className="relative z-10 h-full flex items-end justify-center pb-32">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            <span className="text-white">LARAMIE&apos;S</span>
            <br />
            <span className="text-shadow-lg">LEGENDARY</span>
            <br />
            <span className="text-red-500">GOOD-TIME</span>
            <br />
            <span className="text-shadow-lg">HEADQUARTERS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            From two-steppin&apos; to toe-tappin&apos;, live music to cold drinks - 
            we&apos;ve been keeping boots scootin&apos; for generations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 border border-red-500">
              Upcoming Shows
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 border border-white">
              Book VIP
            </button>
          </div>

          {/* Hours Display */}
          <div className="mt-12 p-6 bg-black/70 backdrop-blur-sm border border-white/20 max-w-md mx-auto">
            <h3 className="text-white text-lg font-semibold mb-2 uppercase tracking-wide">Hours</h3>
            <p className="text-white text-lg">
              <span className="font-semibold">Wednesday - Saturday</span>
              <br />
              5:30 PM - 2:00 AM
            </p>
            <p className="text-red-500 text-sm mt-2 font-medium uppercase tracking-wide">
              Under New Ownership!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
