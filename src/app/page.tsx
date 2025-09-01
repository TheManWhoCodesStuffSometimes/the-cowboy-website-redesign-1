// src/app/page.tsx
import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      {/* Quick preview of what's coming */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900/50 border border-white/10 hover:border-white/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">Live Music Calendar</h3>
              <p className="text-white/70">See upcoming shows and concerts</p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-white/10 hover:border-white/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">VIP Experience</h3>
              <p className="text-white/70">Book your premium night out</p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-white/10 hover:border-white/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">Photo Gallery</h3>
              <p className="text-white/70">Relive the legendary moments</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
