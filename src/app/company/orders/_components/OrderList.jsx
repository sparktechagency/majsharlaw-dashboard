"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import AssignProviderModal from "./AssignProviderModel";
import { generateDummyServiceRequests } from "@/lib/generateService";
import DeleteConfirmModal from "@/app/shared/DeleteConfirmModal";
// import { ProfileModal, } from "@/app/shared/ProfileModal";
import ServiceRow from "./ServiceRow";
import Pagination from "@/app/shared/Pagination";
import ServiceRequestModal from "@/app/shared/ProfileModal";
// style for different statuses
const statusStyles = {
  Pending: "bg-[#007AFF] text-white",
  Completed: "bg-[#6DA40A] text-white",
  Ongoing: "bg-[#8C63DA] text-white",
};

const serviceData = generateDummyServiceRequests(10, "service");
const renderValue = (value) => (
  <div
    className={`flex items-center gap-2 rounded-2xl px-4 py-3 ${statusStyles[value]}`}
  >
    <span className="w-4 h-4 rounded-full bg-white" />
    <span className="capitalize">{value}</span>
  </div>
);

const OrderList = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAssignProviderModal, setShowAssignProviderModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentServices, setCurrentServices] = useState(serviceData);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("pending");
  // State for toggling dropdown
  const itemsPerPage = 10;

  const filteredServices = useMemo(() => {
    let result = currentServices;
    // Always filter by status first
    if (status) {
      result = result.filter(
        (service) => service.status.toLowerCase() === status.toLowerCase()
      );
    }
    // Then optionally filter by search term
    if (searchTerm) {
      result = result.filter(
        ({ user }) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [searchTerm, currentServices, status]);

  // Pagination logic
  const indexOfLastService = currentPage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServicesDisplayed = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  // Function to handel delete action
  const handleDelete = (serviceId) => {
    const service = currentServices.find((u) => u.id === serviceId);
    setServiceToDelete(service);
    setShowDeleteModal(true);
  };

  const handleViewService = (serviceId) => {
    const service = currentServices.find((u) => u.id === serviceId);
    setSelectedService(service);
    setShowProfileModal(true);
  };
  const handelDeliveryRequest = () => {
    setShowProfileModal(false);
  };
  const handelCompleted = () => {
    setShowProfileModal(false);
  };
  const handelAssignProvider = () => {
    setShowProfileModal(false);
    setShowAssignProviderModal(true);
  };
  const onConfirm = () => {};
  return (
    <div>
      <div className="bg-[#F6F6F6] rounded-lg text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pr-52 border-[1px] border-[#D9D9D9] pl-2 text-[#00000040] py-3 bg-[#F3FAFA1A] text-sm focus:outline-none focus:ring-1 focus:ring-[#6DA40A]"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <button
                onClick={() => setSearchTerm(searchTerm)}
                className="hover:bg-gray-700 transition-colors bg-[#6DA40A] p-3 absolute right-0 top-0 h-full cursor-pointer"
              >
                <Search className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          {["pending", "ongoing", "completed"].map((statusType) => (
            <button
              onClick={() => setStatus(statusType)}
              className={`cursor-pointer px-6 py-3 text-sm font-medium text-[#333] hover:text-[#6DA40A] ${
                status === statusType ? "border-b-2 border-[#6DA40A]" : ""
              } focus:outline-none`}
            >
              {statusType.charAt(0).toUpperCase() + statusType.slice(1)}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-separate border-spacing-y-[10px] rounded">
            <thead>
              <tr className="text-xl font-semibold text-black">
                <th className="py-3 px-4 text-center">Name</th>
                <th className="py-3 px-4 text-center">Email</th>
                <th className="py-3 px-4 text-center">Time</th>
                <th className="py-3 px-4 text-center">Service</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentServicesDisplayed.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="py-4 text-center text-gray-400 border-gray-600"
                  >
                    No services found matching your search.
                  </td>
                </tr>
              ) : (
                currentServicesDisplayed.map((service) => (
                  <ServiceRow
                    key={service.id}
                    service={service}
                    onView={handleViewService}
                    onDelete={handleDelete}
                    renderValue={renderValue}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6 gap-2 text-sm text-black">
          <div>
            <h2 className="text-base">
              Total Bookings: <span className="text-2xl">100</span>
            </h2>
          </div>
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center border rounded-full border-[#F1F1F1] disabled:opacity-50 cursor-pointer"
            >
              {"<"}
            </button>
            {
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            }
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center border rounded-full border-[#F1F1F1] disabled:opacity-50 cursor-pointer"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {showProfileModal && selectedService && (
        <ServiceRequestModal
          show={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          selectedRequest={selectedService}
          type="service"
          showAssignButton={selectedService.status}
          handelAssignProvider={handelAssignProvider}
          handelCompleted={handelCompleted}
          handelDeliveryRequest={handelDeliveryRequest}
          modalFor="order"
          onDecline={()=>{}}
          onApprove={()=>{}}
        />
      )}
      {showDeleteModal && serviceToDelete && (
        <DeleteConfirmModal
          isOpen={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={onConfirm}
          message="Are you sure you want to delete this service?"
        />
      )}
      {showAssignProviderModal && (
        <AssignProviderModal
          isOpen={showAssignProviderModal}
          onClose={setShowAssignProviderModal}
        />
      )}
    </div>
  );
};

export default OrderList;
