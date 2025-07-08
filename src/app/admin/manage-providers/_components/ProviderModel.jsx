"use client";

import { useState } from "react";
import ServicesList from "./ServiceList";

export default function ProviderModal({ isOpen, onClose, provider }) {
  const [activeSection, setActiveSection] = useState("about");

  if (!isOpen) return null;

  const {
    name,
    image,
    location,
    rating,
    reviewsCount,
    categories,
    about,
    phone,
    employees,
    experience,
    historyItems,
  } = provider;

  const StatusBadge = ({ status }) => {
    const isInProgress = status === "In progress";
    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          isInProgress ? "bg-blue-500 text-white" : "bg-[#6DA40A] text-white"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
        {status}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      {activeSection === "about" && (
        <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative p-6 text-center border-b">
            <button
              onClick={() => onClose(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full cursor-pointer"
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

            <div className="mb-4">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <div className="flex items-center justify-center text-gray-500 mb-2">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {location}
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 fill-current ${
                        i < rating ? "" : "text-gray-300"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold">{rating.toFixed(1)}</span>
                <span className="text-gray-500 ml-1">({reviewsCount})</span>
              </div>
              <div className="flex justify-center space-x-2">
                {categories.length > 0 ? (
                  categories.map((cat, i) => (
                    <span
                      key={i}
                      className="bg-[#6DA40A] text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">N/A</span>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* About Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    About
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {about ? about : "N/A"}
                  </p>
                </div>

                {/* Overview Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Overview
                  </h3>
                  <div className="space-y-3">
                    <OverviewItem icon="phone" text={phone} />
                    <OverviewItem icon="map" text={location} />
                    <OverviewItem
                      icon="users"
                      text={`${employees} employees`}
                    />
                    <OverviewItem
                      icon="briefcase"
                      text={`${experience} in business`}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Previous history
                    </h3>
                    <button
                      onClick={() => setActiveSection("service-list")}
                      className="text-gray-500 hover:text-gray-700 text-sm border border-gray-200 rounded-lg px-8 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      See all
                    </button>
                  </div>
                  <div className="space-y-3">
                    {historyItems.length > 0 ? (
                      historyItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src="/assets/user.png"
                              alt={item.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {item.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {item.location}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.date}
                              </p>
                            </div>
                          </div>
                          <StatusBadge status={item.status} />
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">
                        No history available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "service-list" && (
        <ServicesList goBack={setActiveSection} />
      )}
    </div>
  );
}

function OverviewItem({ icon, text }) {
  const icons = {
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    map: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
    ),
    users: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197"
      />
    ),
    briefcase: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745"
      />
    ),
  };

  return (
    <div className="flex items-center">
      <svg
        className="w-5 h-5 text-gray-400 mr-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icons[icon]}
      </svg>
      <span className="text-gray-700">
        {text && text !== "" ? text : "N/A"}
      </span>
    </div>
  );
}
