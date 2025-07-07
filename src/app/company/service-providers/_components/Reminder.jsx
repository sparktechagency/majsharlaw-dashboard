"use client"

export default function ReminderModal({ isOpen, onClose, appointment }) {
  const defaultAppointment = {
    service: "Cleaning",
    provider: "Md. Abid",
    timeRemaining: "30 minutes",
  }

  const appointmentData = appointment || defaultAppointment

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <h2 className="text-lg font-medium">Reminder</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 p-1 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Bell Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto relative">
              <svg className="w-full h-full text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22Z" />
              </svg>
              {/* Bell clapper */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-600">Appointment in {appointmentData.timeRemaining}</h3>
            <p className="text-gray-700 leading-relaxed">
              There is a booking for {appointmentData.service} with {appointmentData.provider}. Appoint appropriate
              service provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
