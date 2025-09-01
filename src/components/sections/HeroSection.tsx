// src/components/sections/HeroSection.tsx
import Image from 'next/image'
import SparkleOverlay from '../animations/SparkleOverlay'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero/BFC01110-Enhanced-NR-2.jpg"
          alt="Live music at The Cowboy Saloon"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Sparkle Overlay */}
      <SparkleOverlay />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
            <span className="text-amber-400">LARAMIE'S</span>
            <br />
            <span className="text-shadow-lg">LEGENDARY</span>
            <br />
            <span className="text-red-500">GOOD-TIME</span>
            <br />
            <span className="text-shadow-lg">HEADQUARTERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            From two-steppin' to toe-tappin', live music to cold drinks - 
            we've been keeping boots scootin' for generations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 border border-red-500">
              Upcoming Shows
            </button>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 border border-amber-500">
              Book VIP
            </button>
          </div>

          {/* Hours Display */}
          <div className="mt-12 p-6 bg-black/50 backdrop-blur-sm border border-amber-600/30 max-w-md mx-auto">
            <h3 className="text-amber-400 text-lg font-semibold mb-2 uppercase tracking-wide">Hours</h3>
            <p className="text-white text-lg">
              <span className="font-semibold">Wednesday - Saturday</span>
              <br />
              5:30 PM - 2:00 AM
            </p>
            <p className="text-amber-300 text-sm mt-2 font-medium uppercase tracking-wide">
              Under New Ownership!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
