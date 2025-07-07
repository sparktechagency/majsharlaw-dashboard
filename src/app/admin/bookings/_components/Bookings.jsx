"use client";

import { useState, useMemo } from "react";
import { Search, Eye, Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiFilter } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import ServiceRequestModal from "@/app/shared/ProfileModal";
import Pagination from "@/app/shared/Pagination";
import DeleteConfirmModal from "@/app/shared/DeleteConfirmModal";
import { generateDummyServiceRequests } from "@/lib/generateService";

const userServices = generateDummyServiceRequests(40, "provider");

const statusStyles = {
  Pending: "bg-[#007AFF] text-white",
  Approve: "bg-[#6DA40A] text-white",
  Ongoing: "bg-[#8C63DA] text-white",
  Completed: "bg-[#FF8C00] text-white",
  Decline: "bg-[#FF5353] text-white",
};

const renderValue = (value) => (
  <div
    className={`flex items-center gap-2 rounded-2xl px-4 py-3 ${statusStyles[value]}`}
  >
    <span className="w-4 h-4 rounded-full bg-white" />
    <span className="capitalize">{value}</span>
  </div>
);

const Bookings = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUsers, setCurrentUsers] = useState(userServices);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("pending");
  const [isOpen, setIsOpen] = useState(false); // State for toggling dropdown
  const itemsPerPage = 10;
  const services = ["Cleaning", "Moving", "Remodeling"];

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return currentUsers;
    return currentUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, currentUsers]);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsersDisplayed = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleDelete = (userId) => {
    const user = currentUsers.find((u) => u.id === userId);
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleViewUser = (userId) => {
    const user = currentUsers.find((u) => u.id === userId);
    setSelectedUser(user);
    setShowProfileModal(true);
  };

  const confirmDelete = () => {};
  // Service-specific modal content

  console.log(currentUsersDisplayed);
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
          <div className="flex gap-3">
            <button className="py-3 px-5 font-medium rounded-sm bg-[#007AFF] cursor-pointer">
              30
            </button>
            <button className="py-3 px-5 font-medium rounded-sm bg-[#6DA40A] cursor-pointer">
              60
            </button>
            <button className="py-3 px-5 font-medium rounded-sm bg-[#8C63DA] cursor-pointer">
              10
            </button>
            <button className="py-3 px-5 font-medium rounded-sm bg-[#FF8C00] cursor-pointer">
              10
            </button>
            <button className="py-3 px-5 font-medium rounded-sm bg-[#FF5353] cursor-pointer">
              10
            </button>
          </div>
          <div>
            <div className="relative">
              {/* Filter Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#6DA40A] text-base font-medium text-white px-7 py-3 ml-5 rounded-lg flex items-center gap-1 hover:bg-[#6ea40acb] transition cursor-pointer"
              >
                <CiFilter className="font-bold text-2xl" />
                Filter
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className="block w-full border-b-2 text-center px-6  py-2 text-gray-800 hover:bg-gray-100  transition cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
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
              {currentUsersDisplayed.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="py-4 text-center text-gray-400 border-gray-600"
                  >
                    No users found matching your search.
                  </td>
                </tr>
              ) : (
                currentUsersDisplayed.map((user) => (
                  <tr key={user.id} className="text-sm text-black bg-white">
                    <td className="py-3 px-4 text-center">
                      <div className="flex text-xl justify-center items-center gap-2">
                        <img
                          src={user.avatar}
                          alt="avatar"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        {user.name}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-xl">
                      {user.email}
                    </td>
                    <td className="py-3 px-4 text-center text-xl">
                      {new Date(user.service.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        weekday: "long",
                      })}
                      <p className="font-light mr-38">{user.service.time}</p>
                    </td>
                    <td className="py-3 px-4 text-center text-xl">
                      {user.service.serviceType}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Select
                        value={status}
                        onValueChange={(val) => setStatus(val)}
                      >
                        <SelectTrigger className="border-[1px] border-black rounded-2xl px-2 py-6">
                          <SelectValue>{renderValue(status)}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            className="bg-[#007AFF] mb-2 text-base font-medium text-white"
                            value="Pending"
                          >
                            Pending
                          </SelectItem>
                          <SelectItem
                            className="bg-[#6DA40A] mb-2 text-base font-medium text-white"
                            value="Approve"
                          >
                            Approve
                          </SelectItem>
                          <SelectItem
                            className="bg-[#8C63DA] mb-2 text-base font-medium text-white"
                            value="Ongoing"
                          >
                            Ongoing
                          </SelectItem>
                          <SelectItem
                            className="bg-[#FF8C00] mb-2 text-base font-medium text-white"
                            value="Completed"
                          >
                            Completed
                          </SelectItem>
                          <SelectItem
                            className="bg-[#FF5353] mb-2 text-base font-medium text-white"
                            value="Decline"
                          >
                            Decline
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleViewUser(user.id)}
                          className="px-2 py-2 bg-[#F2FFDA] rounded-lg hover:opacity-80 cursor-pointer"
                        >
                          <Eye className="text-[#6DA40A]" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="px-2 py-2 bg-[#FFE8E8] text-[#FF5353] rounded-lg hover:opacity-80 cursor-pointer"
                        >
                          <Trash />
                        </button>
                      </div>
                    </td>
                  </tr>
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
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
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
          modalFor="booking"
          onDecline={() => setShowProfileModal(false)}
          onApprove={() => setShowProfileModal(false)}
        />
      )}
      {showDeleteModal && userToDelete && (
        <DeleteConfirmModal
          isOpen={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
          message="Are you sure you want to delete this service?"
        />
      )}
    </div>
  );
};

export default Bookings;
