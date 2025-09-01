// src/app/vip/page.tsx
'use client'
import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import VIPBookingCalendar from '@/components/vip/VIPBookingCalendar'
import VIPPackageCustomization from '@/components/vip/VIPPackageCustomization'
import VIPPaymentPortal from '@/components/vip/VIPPaymentPortal'

export default function VIPPage() {
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedBeers, setSelectedBeers] = useState<string[]>([])

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setBookingStep(2)
  }

  const handlePackageCustomization = (beers: string[]) => {
    setSelectedBeers(beers)
    setBookingStep(3)
  }

  const resetBooking = () => {
    setBookingStep(1)
    setSelectedDate('')
    setSelectedBeers([])
  }

  return (
    <Layout>
      {/* VIP Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            VIP EXPERIENCE
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Elevate your night at The Cowboy with our exclusive VIP section. 
            Premium seating, personalized service, and an unforgettable experience.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What&apos;s Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-black/50 border border-white/10">
              <div className="text-4xl mb-4">🍺</div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Beverages</h3>
              <p className="text-white/70">2 cases of your choice beer selection</p>
            </div>
            
            <div className="text-center p-6 bg-black/50 border border-white/10">
              <div className="text-4xl mb-4">🥨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Snacks & Food</h3>
              <p className="text-white/70">Variety of chips, pretzels, and bar snacks</p>
            </div>
            
            <div className="text-center p-6 bg-black/50 border border-white/10">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Seating</h3>
              <p className="text-white/70">Elevated VIP section with the best views</p>
            </div>
            
            <div className="text-center p-6 bg-black/50 border border-white/10">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-white mb-2">Exclusive Service</h3>
              <p className="text-white/70">Dedicated staff and personalized attention</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-white/10 border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-2">VIP Package Price</h3>
              <p className="text-4xl font-bold text-white">$300</p>
              <p className="text-white/70 mt-2">Per Night | Wednesday - Saturday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Book Your VIP Experience</h2>
            <div className="flex justify-center space-x-8 text-sm uppercase tracking-wide">
              <div className={`flex items-center ${bookingStep >= 1 ? 'text-white' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${bookingStep >= 1 ? 'bg-white text-black' : 'bg-gray-700'}`}>1</div>
                Select Date
              </div>
              <div className={`flex items-center ${bookingStep >= 2 ? 'text-white' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${bookingStep >= 2 ? 'bg-white text-black' : 'bg-gray-700'}`}>2</div>
                Customize
              </div>
              <div className={`flex items-center ${bookingStep >= 3 ? 'text-white' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${bookingStep >= 3 ? 'bg-white text-black' : 'bg-gray-700'}`}>3</div>
                Payment
              </div>
            </div>
          </div>

          {bookingStep === 1 && (
            <VIPBookingCalendar onDateSelect={handleDateSelect} />
          )}

          {bookingStep === 2 && (
            <VIPPackageCustomization 
              selectedDate={selectedDate}
              onComplete={handlePackageCustomization}
              onBack={() => setBookingStep(1)}
            />
          )}

          {bookingStep === 3 && (
            <VIPPaymentPortal 
              selectedDate={selectedDate}
              selectedBeers={selectedBeers}
              onBack={() => setBookingStep(2)}
              onReset={resetBooking}
            />
          )}
        </div>
      </section>
    </Layout>
  )
}
