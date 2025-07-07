"use client";

import ServiceRequestModal from "@/app/shared/ProfileModal";
import { generateDummyServiceRequests } from "@/lib/generateService";
import { useState } from "react";

const userServices = generateDummyServiceRequests(40, "provider");

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

export default function ServicesList({ goBack }) {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  console.log(userServices);
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 w-full rounded-lg">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => goBack("about")}
          className="mr-4 p-2 hover:bg-gray-100 rounded-full cursor-pointer"
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
        <h1 className="text-xl font-semibold text-gray-900">
          All services by this provider
        </h1>
      </div>

      {/* Services List */}
      <div className="bg-gray-50 max-h-[600px] h-screen rounded-lg p-4 overflow-y-auto">
        <div className="space-y-4">
          {userServices.map((userService) => (
            <div
              onClick={() =>
                setShowProfileModal(true) || setSelectedUser(userService)
              }
              key={userService.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={userService.avatar}
                  alt={userService.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {userService.name}
                  </h3>
                  <p className="text-sm text-gray-500">{userService?.email}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(userService.service.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(userService.service.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {userService.service.time}
                  </div>
                </div>

                <StatusBadge status={userService.service.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showProfileModal && selectedUser && (
        <ServiceRequestModal
          show={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          selectedRequest={selectedUser}
          type="provider"
          showAssignButton={selectedUser.status}
          handelAssignProvider={() => {}}
          handelCompleted={() => {}}
          handelDeliveryRequest={() => {}}
          modalFor="provider"
          onDecline={() => {}}
          onApprove={() => {}}
        />
      )}
    </div>
  );
}
