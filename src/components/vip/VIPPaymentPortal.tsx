// src/components/vip/VIPPaymentPortal.tsx
'use client'
import { useState } from 'react'

interface VIPPaymentPortalProps {
  selectedDate: string
  selectedBeers: string[]
  onBack: () => void
  onReset: () => void
}

const VIPPaymentPortal = ({ selectedDate, selectedBeers, onBack, onReset }: VIPPaymentPortalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    zipCode: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
    }, 2000)
  }

  if (showSuccess) {
    return (
      <div className="bg-gray-900 border border-white/10 rounded-lg p-8 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
        <p className="text-white/70 text-lg mb-6">
          Your VIP reservation has been successfully booked for {selectedDate}.
        </p>
        
        <div className="bg-black/50 border border-white/20 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
          <h4 className="text-white font-semibold mb-4">Booking Details:</h4>
          <div className="space-y-2 text-white/70 text-sm">
            <p><span className="text-white">Date:</span> {selectedDate}</p>
            <p><span className="text-white">Package:</span> VIP Experience</p>
            <p><span className="text-white">Beer Selection:</span></p>
            <ul className="ml-4 space-y-1">
              {selectedBeers.map((beer, index) => (
                <li key={index}>• {beer}</li>
              ))}
            </ul>
            <p><span className="text-white">Total Paid:</span> $300.00</p>
          </div>
        </div>

        <p className="text-white/70 text-sm mb-6">
          A confirmation email has been sent to {formData.email}.<br />
          We'll contact you 24 hours before your reservation with final details.
        </p>

        <button
          onClick={onReset}
          className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded transition-colors"
        >
          Book Another VIP Experience
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 border border-white/10 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">Complete Your Booking</h3>
        
        {/* Order Summary */}
        <div className="bg-black/50 border border-white/20 rounded-lg p-4 mb-6">
          <h4 className="text-white font-semibold mb-3">Order Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-white/70">
              <span>Date:</span>
              <span>{selectedDate}</span>
            </div>
            <div className="text-white/70">
              <span>Beer Selection:</span>
              <ul className="ml-4 mt-1 space-y-1">
                {selectedBeers.map((beer, index) => (
                  <li key={index} className="text-xs">• {beer}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/20 pt-2 mt-3">
              <div className="flex justify-between text-white font-semibold text-lg">
                <span>Total:</span>
                <span>$300.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
            />
          </div>
        </div>

        {/* Payment Method Selection */}
        <div>
          <h4 className="text-white font-semibold mb-4">Payment Method</h4>
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`px-4 py-2 rounded border transition-colors ${
                paymentMethod === 'card' 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white border-white/20 hover:border-white/50'
              }`}
            >
              Credit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod('paypal')}
              className={`px-4 py-2 rounded border transition-colors ${
                paymentMethod === 'paypal' 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white border-white/20 hover:border-white/50'
              }`}
            >
              PayPal
            </button>
          </div>

          {paymentMethod === 'card' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none md:col-span-2"
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
              />
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-black/50 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/50 focus:outline-none md:col-span-2"
              />
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div className="bg-black/50 border border-white/20 rounded-lg p-6 text-center">
              <p className="text-white/70 mb-4">You'll be redirected to PayPal to complete your payment.</p>
              <div className="text-4xl">💳</div>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6 border-t border-white/20">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition-colors"
          >
            ← Back to Customize
          </button>
          
          <button
            type="submit"
            disabled={isProcessing}
            className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                Processing...
              </>
            ) : (
              `Complete Booking - $300.00`
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default VIPPaymentPortal
