// src/components/vip/VIPPackageCustomization.tsx
'use client'
import { useState } from 'react'

interface VIPPackageCustomizationProps {
  selectedDate: string
  onComplete: (beers: string[]) => void
  onBack: () => void
}

const VIPPackageCustomization = ({ selectedDate, onComplete, onBack }: VIPPackageCustomizationProps) => {
  const [selectedBeers, setSelectedBeers] = useState<string[]>([])

  const beerOptions = [
    { name: 'Coors Light', description: 'Light and refreshing', cases: 0 },
    { name: 'Coors Banquet', description: 'Original golden lager', cases: 0 },
    { name: 'Busch Light', description: 'Smooth light beer', cases: 0 },
    { name: 'Busch', description: 'Classic American lager', cases: 0 },
    { name: 'White Claw Variety', description: 'Assorted hard seltzers', cases: 0 },
    { name: 'Twisted Tea', description: 'Hard iced tea', cases: 0 },
  ]

  const [beerSelection, setBeerSelection] = useState(beerOptions)

  const updateBeerCount = (index: number, change: number) => {
    setBeerSelection(prev => {
      const newSelection = [...prev]
      const newCount = Math.max(0, newSelection[index].cases + change)
      newSelection[index] = { ...newSelection[index], cases: newCount }
      return newSelection
    })
  }

  const getTotalCases = () => {
    return beerSelection.reduce((total, beer) => total + beer.cases, 0)
  }

  const handleComplete = () => {
    const selectedBeerNames = beerSelection
      .filter(beer => beer.cases > 0)
      .map(beer => `${beer.cases} case${beer.cases > 1 ? 's' : ''} of ${beer.name}`)
    
    onComplete(selectedBeerNames)
  }

  return (
    <div className="bg-gray-900 border border-white/10 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Customize Your VIP Package</h3>
        <p className="text-white/70">Selected Date: <span className="text-white font-semibold">{selectedDate}</span></p>
      </div>

      <div className="mb-8">
        <div className="bg-black/50 border border-white/20 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-white mb-2">Package Includes:</h4>
          <ul className="text-white/70 space-y-1">
            <li>• Premium VIP seating area</li>
            <li>• 2 cases of beer (your choice below)</li>
            <li>• Variety of chips and pretzels</li>
            <li>• Dedicated VIP service</li>
          </ul>
        </div>

        <h4 className="text-xl font-semibold text-white mb-4">
          Select Your Beer (2 cases total)
          <span className="text-sm font-normal text-white/70 ml-2">
            - {getTotalCases()}/2 cases selected
          </span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {beerSelection.map((beer, index) => (
            <div key={beer.name} className="bg-black/30 border border-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h5 className="text-white font-semibold">{beer.name}</h5>
                  <p className="text-white/60 text-sm">{beer.description}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateBeerCount(index, -1)}
                    disabled={beer.cases === 0}
                    className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  
                  <span className="text-white font-semibold w-8 text-center">
                    {beer.cases}
                  </span>
                  
                  <button
                    onClick={() => updateBeerCount(index, 1)}
                    disabled={getTotalCases() >= 2 && beer.cases === 0}
                    className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getTotalCases() > 2 && (
          <div className="mt-4 p-3 bg-red-900/50 border border-red-500/50 rounded-lg">
            <p className="text-red-200 text-sm">
              Please select exactly 2 cases total. You currently have {getTotalCases()} cases selected.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition-colors"
        >
          ← Back to Calendar
        </button>
        
        <button
          onClick={handleComplete}
          disabled={getTotalCases() !== 2}
          className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Continue to Payment →
        </button>
      </div>
    </div>
  )
}

export default VIPPackageCustomization
