"use client";

import React, { useState, useMemo, useRef } from "react"; // Added useMemo for performance
import UserTable from "./UserTable";
import ViewProfileModal from "./ViewProfileModal";
import DeleteConfirmModal from "@/app/shared/DeleteConfirmModal";
import Pagination from "@/app/shared/Pagination";
import SearchBar from "./SearchBar";

// Mock user data (now includes a status for blocking)
const initialUsers = new Array(35).fill(null).map((_, i) => ({
  // Increased users for pagination demo
  id: `00${i + 1}`,
  name: `Md. Abid Hasan ${i + 1}`,
  email: `example@gmail.com`,
  Adress: `Dhaka, Bangladesh`, // Varying date
  avatar: "/assets/user.png", // Using a placeholder image URL
  status: "active", // 'active' or 'blocked'
}));

// UserManagement Component (main component)
const UserManagement = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUsers, setCurrentUsers] = useState(initialUsers); // State to manage user data
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const itemsPerPage = 10; // Number of items per page
  const modalRef = useRef(null); // Ref to the modal content
  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    if (!searchTerm) {
      return currentUsers;
    }
    return currentUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, currentUsers]);

  // Calculate users for the current page
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsersDisplayed = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle blocking/unblocking a user
  const handleBlockToggle = (userId) => {
    const user = currentUsers.find((u) => u.id === userId);
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  // Handle viewing user details - now logs to console instead of routing
  const handleViewUser = (userId) => {
    const user = currentUsers.find((u) => u.id === userId);
    setSelectedUser(user);
    setShowProfileModal(true);
  };

  // Function to render page numbers dynamically

  return (
    <>
      <div>
        <div className="bg-[#F6F6F6] rounded-lg text-white p-6">
          {/* Header */}
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setCurrentPage={setCurrentPage}
          />

          {/* Table */}
          <UserTable
            users={currentUsersDisplayed}
            onView={handleViewUser}
            onDelete={handleBlockToggle}
          />
          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 gap-2 text-sm text-black">
            <div>
              <h2 className="text-base">
                Total User : <span className="text-2xl">1200</span>{" "}
              </h2>
            </div>
            <div className="flex  justify-end items-center gap-2 text-sm text-black">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8  flex items-center justify-center border-[1px]  rounded-full border-[#F1F1F1] hover:bg-[#1f1f1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    d="M6.99995 13C6.99995 13 1.00001 8.58107 0.999999 6.99995C0.999986 5.41884 7 1 7 1"
                    stroke="#E2E2E2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8  flex items-center justify-center border-[1px]  rounded-full border-[#F1F1F1] hover:bg-[#1f1f1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    d="M1.00005 1C1.00005 1 6.99999 5.41893 7 7.00005C7.00001 8.58116 1 13 1 13"
                    stroke="#C8C8C8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {showProfileModal && selectedUser && (
          <ViewProfileModal
            user={selectedUser}
            onClose={() => setShowProfileModal(false)}
          />
        )}
        <DeleteConfirmModal
          isOpen={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            setCurrentUsers((prev) =>
              prev.filter((user) => user.id !== userToDelete.id)
            );
            setShowDeleteModal(false);
            setUserToDelete(null);
          }}
          message={"Are you sure you want to delete this booking?"}
        />
      </div>
    </>
  );
};

export default UserManagement;
