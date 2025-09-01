// src/components/vip/VIPBookingCalendar.tsx
'use client'
import { useState } from 'react'

interface VIPBookingCalendarProps {
  onDateSelect: (date: string) => void
}

const VIPBookingCalendar = ({ onDateSelect }: VIPBookingCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Get current date for availability logic
  const today = new Date()
  
  // Generate calendar days for current month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 41) // 6 weeks
    
    for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
      days.push(new Date(day))
    }
    
    return days
  }

  const isOperatingDay = (date: Date) => {
    const day = date.getDay()
    return day >= 3 && day <= 6 // Wednesday (3) to Saturday (6)
  }

  const isAvailable = (date: Date) => {
    return date >= today && isOperatingDay(date) && Math.random() > 0.3 // Mock availability
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const navigateMonth = (direction: number) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      newMonth.setMonth(prev.getMonth() + direction)
      return newMonth
    })
  }

  const days = getDaysInMonth(currentMonth)

  return (
    <div className="bg-gray-900 border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => navigateMonth(-1)}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h3 className="text-2xl font-bold text-white">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        
        <button 
          onClick={() => navigateMonth(1)}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-white/60 font-medium text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          const isCurrentMonth = date.getMonth() === currentMonth.getMonth()
          const available = isAvailable(date)
          const isToday = date.toDateString() === today.toDateString()
          
          return (
            <button
              key={index}
              onClick={() => available && onDateSelect(formatDate(date))}
              disabled={!available}
              className={`
                p-3 text-center rounded transition-all duration-200 min-h-[48px]
                ${!isCurrentMonth ? 'text-gray-600' : ''}
                ${isToday ? 'ring-2 ring-white' : ''}
                ${available 
                  ? 'bg-white text-black hover:bg-gray-200 font-semibold' 
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              <div className="text-sm">{date.getDate()}</div>
              {available && isCurrentMonth && (
                <div className="text-xs mt-1">Available</div>
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/70 text-sm">
          VIP section is available Wednesday - Saturday, 5:30 PM - 2:00 AM
        </p>
        <div className="flex justify-center space-x-6 mt-4 text-xs">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white rounded mr-2"></div>
            <span className="text-white/70">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-700 rounded mr-2"></div>
            <span className="text-white/70">Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VIPBookingCalendar
