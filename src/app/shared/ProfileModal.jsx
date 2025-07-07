
import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const ServiceRequestModal = ({
  show,
  onClose,
  selectedRequest,
  type,
  showAssignButton,
  handelAssignProvider,
  handelDeliveryRequest,
  handelCompleted,
  modalFor,
  onDecline,
  onApprove,
}) => {
  if (!show || !selectedRequest) return null;

  const isProvider = type === "provider";

  const user = isProvider
    ? {
        name: selectedRequest.name,
        email: selectedRequest.email,
        avatar: selectedRequest.avatar,
      }
    : selectedRequest.user;

  const serviceData = isProvider ? selectedRequest.service : selectedRequest;

  const { serviceType, zipCode, houseSize, date, time, cost, details } = serviceData;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-lg relative">
        {/* Close button */}
        <div
          className="absolute top-0 right-0 p-3 cursor-pointer"
          onClick={onClose}
        >
          <RxCrossCircled className="text-4xl" />
        </div>

        {/* User details */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-lg">{user.email}</p>
        </div>

        {/* Service details */}
        <div className="w-full flex flex-col gap-3 mt-4">
          <div className="flex justify-between text-lg">
            <span>Service:</span>
            <span>{serviceType}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Zip Code:</span>
            <span>{zipCode}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>House Size:</span>
            <span>{houseSize}</span>
          </div>

          {/* Service-specific fields */}
          {serviceType === "Cleaning" && (
            <div className="flex justify-between text-lg">
              <span>Rooms:</span>
              <span>{details.rooms}</span>
            </div>
          )}

          {serviceType === "Moving" && (
            <>
              <div className="flex justify-between text-lg">
                <span>House Location:</span>
                <span>{details.houseLocation}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Moving Type:</span>
                <span>{details.movingType}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Moving Area:</span>
                <span>{details.movingArea}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Moving To:</span>
                <span>{details.movingTo}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Moving Zip:</span>
                <span>{details.movingZip}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Moving Location:</span>
                <span>{details.movingLocation}</span>
              </div>
            </>
          )}

          {serviceType === "Remodeling" && (
            <>
              <div className="flex justify-between text-lg">
                <span>Property Type:</span>
                <span>{details.propertyType}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Budget Level:</span>
                <span>{details.budgetLevel}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Property Owner:</span>
                <span>{details.propertyOwner}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Planning to Renovate:</span>
                <span>{details.planningToRenovate}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Working With Anyone:</span>
                <span>{details.workingWithAnyone}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Property Address:</span>
                <span>{details.propertyAddress}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Areas To Renovate:</span>
                <span>{details.AreasToRenovate}</span>
              </div>
            </>
          )}

          {/* Common fields */}
          <div className="flex justify-between text-lg">
            <span>Date:</span>
            <span>
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Time:</span>
            <span>{time}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Cost:</span>
            <span className="text-2xl font-medium">${cost}</span>
          </div>
        </div>

        {/* Action buttons */}
        {modalFor === "order" && (
          <>
            {showAssignButton === "Pending" && (
              <button
                onClick={handelAssignProvider}
                className="bg-[#6DA40A] w-full rounded py-2 mt-5 text-white font-semibold cursor-pointer"
              >
                Assign Provider
              </button>
            )}
            {showAssignButton === "Ongoing" && (
              <button
                onClick={handelDeliveryRequest}
                className="bg-[#6DA40A] w-full rounded py-2 mt-5 text-white font-semibold cursor-pointer"
              >
                Send Delivery Request
              </button>
            )}
            {showAssignButton === "Completed" && (
              <button
                onClick={handelCompleted}
                className="bg-[#6DA40A] w-full rounded py-2 mt-5 text-white font-semibold cursor-pointer"
              >
                Completed
              </button>
            )}
          </>
        )}

        {modalFor === "booking" && (
          <div className="flex justify-between items-end gap-3 w-2/3 mx-auto">
            <button
              onClick={onDecline}
              className="bg-[#FF5353] w-full rounded-sm py-3 my-5 text-white text-xl font-semibold cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={onApprove}
              className="bg-[#6DA40A] w-full rounded-sm py-3 my-5 text-white text-xl font-semibold cursor-pointer"
            >
              Approve
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceRequestModal;

