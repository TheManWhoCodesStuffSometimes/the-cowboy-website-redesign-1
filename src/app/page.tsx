// src/app/page.tsx
import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      {/* Quick preview of what's coming */}
      <section className="bg-neutral-900 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-400 mb-8">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/50 border border-amber-600/30">
              <h3 className="text-xl font-semibold text-white mb-2">Live Music Calendar</h3>
              <p className="text-amber-100">See upcoming shows and concerts</p>
            </div>
            <div className="p-6 bg-black/50 border border-amber-600/30">
              <h3 className="text-xl font-semibold text-white mb-2">VIP Experience</h3>
              <p className="text-amber-100">Book your premium night out</p>
            </div>
            <div className="p-6 bg-black/50 border border-amber-600/30">
              <h3 className="text-xl font-semibold text-white mb-2">Photo Gallery</h3>
              <p className="text-amber-100">Relive the legendary moments</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
