"use client";

import { useState } from "react";

export default function AssignProviderModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  const providers = [
    {
      id: 1,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 2,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 3,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 4,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
    {
      id: 5,
      name: "Maria jones",
      location: "Dhaka, Bangladesh",
      avatar: "/assets/user.png",
      available: true,
    },
  ];

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAssign = (providerId) => {
    console.log("Assigning provider:", providerId);

    onClose(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <button
              onClick={() => onClose(false)}
              className="mr-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-gray-900">
              Assign provider
            </h2>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="search for provider"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] text-gray-600 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Providers List */}
        <div className="flex-1 overflow-y-auto">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="p-4 border-b border-gray-100 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={provider.avatar || "/placeholder.svg"}
                  alt={provider.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{provider.name}</h3>
                  <p className="text-sm text-gray-500">{provider.location}</p>
                </div>
              </div>
              <button
                onClick={() => handleAssign(provider.id)}
                disabled={!provider.available}
                className={`border border-gray-200 rounded-lg px-8 py-2 font-medium transition-colors ${
                  provider.available
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                Assign
              </button>
            </div>
          ))}

          {filteredProviders.length === 0 && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No providers found
              </h3>
              <p className="text-gray-500">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
