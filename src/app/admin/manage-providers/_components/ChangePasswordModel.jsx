"use client";

import { useState } from "react";

export default function ChangePasswordModal({ isOpen, onClose, id }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    console.log("Saving password changes:", formData);
    // Handle save logic here
    onClose(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="bg-[#6DA40A] text-white p-4 rounded-t-lg flex items-center justify-between">
          <h2 className="text-lg font-medium">
            Change store's admin panel password
          </h2>
          <button
            onClick={() => onClose(false)}
            className="text-white hover:text-gray-200 p-1 cursor-pointer"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Admin panel
          </h3>

          {/* Form Container */}
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] placeholder-gray-600"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] placeholder-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveChanges}
            className="w-full bg-[#6DA40A] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#6ea40abe] focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] focus:ring-offset-2 cursor-pointer"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
