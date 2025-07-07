"use client";

import { useState } from "react";
import ServicesList from "../../../admin/manage-providers/_components/ServiceList";

export default function ProviderProfileModal({ isOpen, onClose, provider }) {
  const [activeSection, setActiveSection] = useState("about");
  const defaultProvider = {
    name: "Md. Abid Hasan",
    email: "example@gmail.com",
    type: "Cleaner",
    contactNumber: "+1234560987",
    address: "Dhaka, Bangladesh.",
    serviceCount: "5 times",
    verified: true,
    avatar: "/assets/user.png",
    idDocuments: ["/assets/user.png", "/assets/user.png"],
  };

  const services = [
    {
      id: 1,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "In progress",
      avatar: "/assets/user.png",
    },
    {
      id: 2,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "Completed",
      avatar: "/assets/user.png",
    },
    {
      id: 3,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "Completed",
      avatar: "/assets/user.png",
    },
    {
      id: 4,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "Completed",
      avatar: "/assets/user.png",
    },
    {
      id: 5,
      clientName: "Maria jones",
      location: "Dhaka, Bangladesh",
      date: "21-04-2025",
      status: "Completed",
      avatar: "/assets/user.png",
    },
  ];

  const providerData = provider || defaultProvider;

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      {activeSection === "about" && (
        <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Provider Profile
            </h2>
            <button
              onClick={() => onClose(false)}
              className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center mb-6">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-2"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal information
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  {/* Profile Section */}
                  <div className="text-center mb-6">
                    <img
                      src={providerData.avatar || "/placeholder.svg"}
                      alt={providerData.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-lg font-semibold text-gray-900">
                      {providerData.name}
                    </h4>
                    <p className="text-gray-500">{providerData.email}</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium text-gray-900">
                        {providerData.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contact number:</span>
                      <span className="font-medium text-gray-900">
                        {providerData.contactNumber}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Address:</span>
                      <span className="font-medium text-gray-900">
                        {providerData.address}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service given:</span>
                      <span className="font-medium text-gray-900">
                        {providerData.serviceCount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Identity verification:
                      </span>
                      <span className="font-medium text-[#6DA40A]">
                        {providerData.verified ? "Verified" : "Not Verified"}
                      </span>
                    </div>
                  </div>

                  {/* ID Documents */}
                  <div className="mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      {providerData.idDocuments?.map((doc, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-2"
                        >
                          <img
                            src={doc || "/placeholder.svg"}
                            alt={`ID Document ${index + 1}`}
                            className="w-full h-20 object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center mb-6">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Services
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={service.avatar || "/placeholder.svg"}
                            alt={service.clientName}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {service.clientName}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {service.location}
                            </p>
                            <p className="text-sm text-gray-500">
                              {service.date}
                            </p>
                          </div>
                        </div>
                        <StatusBadge status={service.status} />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setActiveSection("service-list")}
                      className="text-gray-600 hover:text-gray-800 font-medium border border-gray-200 rounded-lg px-8 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      See all
                    </button>
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
