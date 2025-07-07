"use client"

export default function DeleteProviderModal({ isOpen, onClose, provider }) {

  const handleDelete = () => {
    console.log("Deleting provider:", provider)
    // Handle delete logic here
    onClose(false)
  }

  const handleCancel = () => {
    onClose(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="bg-red-500 text-white p-4 rounded-t-lg flex items-center justify-between">
          <h2 className="text-lg font-medium">Delete Provider</h2>
          <button onClick={()=>onClose(false)} className="text-white hover:text-gray-200 p-1 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          {/* Provider Info */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
              {provider?.image ? (
                <img
                  src={provider.image || "/placeholder.svg"}
                  alt={provider?.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h4m6 0h2M7 15h10"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center space-x-3">
              <h3 className="text-lg font-semibold text-gray-900">{provider?.name || "ABC"}</h3>
              <span className="bg-[#6DA40A] text-white px-3 py-1 rounded-full text-sm font-medium">
                {provider?.type || "Cleaner"}
              </span>
            </div>
          </div>

          {/* Confirmation Text */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-red-500 mb-2">Are you sure to delete this provider?</h4>
            <p className="text-gray-500">All data, services and providers will be lost.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleCancel}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
