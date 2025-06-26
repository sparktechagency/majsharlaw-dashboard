'use client';

import React, { useState, useMemo, useRef } from 'react'; // Added useMemo for performance
import { ArrowLeft, Plus, Edit2, Trash2, Search, Eye, Trash } from 'lucide-react'; // Using Lucide for icons
import Header from './Topbar';
import Image from 'next/image';

// Mock user data (now includes a status for blocking)
const initialUsers = new Array(35).fill(null).map((_, i) => ({ // Increased users for pagination demo
    id: `00${i + 1}`,
    name: `Md. Abid Hasan ${i + 1}`,
    email: `example@gmail.com`,
    Adress: `Dhaka, Bangladesh`, // Varying date
    avatar: '/assets/user.png', // Using a placeholder image URL
    status: 'active', // 'active' or 'blocked'
}));



// UserManagement Component (main component)
const UserManagement = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);
    const [showJobTitlesModal, setShowJobTitlesModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentUsers, setCurrentUsers] = useState(initialUsers); // State to manage user data
    const [currentPage, setCurrentPage] = useState(1); // New state for current page
    const itemsPerPage = 10; // Number of items per page
    const modalRef = useRef(null); // Ref to the modal content
    // Filter users based on search term
    const filteredUsers = useMemo(() => {
        if (!searchTerm) {
            return currentUsers;
        }
        return currentUsers.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.id.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, currentUsers]);

    // Calculate users for the current page
    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsersDisplayed = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

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
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowDeleteModal(false);
            setUserToDelete(null);
        }
      };


    // Function to render page numbers dynamically
    const renderPageNumbers = () => {
        const pageNumbers = [];
        // Always show first few pages, and last few pages, with "..." in between if many pages
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
            if (currentPage > 3) pageNumbers.push('...');
            if (currentPage > 2) pageNumbers.push(currentPage - 1);
            pageNumbers.push(currentPage);
            if (currentPage < totalPages - 1) pageNumbers.push(currentPage + 1);
            if (currentPage < totalPages - 2) pageNumbers.push('...');
            if (currentPage !== totalPages) pageNumbers.push(totalPages);
        }

        return pageNumbers.map((num, index) => (
            num === '...' ? (
                <span key={index} className="px-2 text-gray-400">.....</span>
            ) : (
                <button
                    key={index}
                    onClick={() => handlePageChange(num)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${currentPage === num ? 'bg-[#6DA40A] text-white' : ' text-black bg-white'
                        }`}
                >
                    {num}
                </button>
            )
        ));
    };


    return (
        <>
            <div>             
                <div className="bg-[#F6F6F6] rounded-lg text-white p-6">
                    {/* Header */}

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">

                            <div className="flex items-center ">
                                <div className="relative">

                                    <input
                                        type="text"
                                        placeholder="Search fo user"
                                        className="pl-10 border-[1px] border-[#D9D9D9] pr-50 bg-white text-[#00000070] py-3 text-md focus:outline-none focus:ring-1 focus:ring-[#6DA40A]"
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setCurrentPage(1); // Reset to first page on search
                                        }}
                                    />
                                </div>
                                {/* Filter button with SVG - now acts as a visual trigger for search */}
                                <button
                                    onClick={() => setSearchTerm(searchTerm)} // Re-apply current search term (triggers memoized filter)
                                    className="hover:bg-gray-700 transition-colors bg-[#6DA40A] p-3"
                                >
                                    <Search className=" text-[#FFFFFF]" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-separate border-spacing-y-[10px] rounded">
                            <thead className="">
                                <tr className="text-xl font-semibold text-black">
                                    <th className="py-3 px-4 text-center">Sl. No </th>
                                    <th className="py-3 px-4 text-center">Name</th>
                                    <th className="py-3 px-4 text-center">Email</th>
                                    <th className="py-3 px-4 text-center">Address</th>
                                    <th className="py-3 px-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsersDisplayed.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="py-4 text-center text-gray-400">
                                            No users found matching your search.
                                        </td>
                                    </tr>
                                ) : (
                                    currentUsersDisplayed.map((user) => (
                                        <tr key={user.id} className="text-base font-normal text-black bg-white">
                                            <td className="py-5 px-4 text-center">
                                                {user.id}
                                            </td>
                                            <td className="py-5 px-4 text-center">
                                                <div className="flex justify-center items-center text-xl gap-2">
                                                    <img
                                                        src={user.avatar}
                                                        alt="avatar"
                                                        width={39}
                                                        height={39}
                                                        className="rounded-full"
                                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/24x24/cccccc/000000?text=A" }}
                                                    />
                                                    {user.name}
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 text-lg text-center">
                                                {user.email}
                                            </td>
                                            <td className="py-5 px-4 text-lg text-center">
                                                {user.Adress}
                                            </td>
                                            <td className="py-5 px-4 text-center">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        onClick={() => handleViewUser(user.id)}
                                                        className="px-2 py-2 text-xs border border-none bg-[#F2FFDA] rounded-lg cursor-pointer hover:opacity-80"
                                                    >
                                                        <Eye className='text-[#6DA40A]' />
                                                    </button>
                                                    <button
                                                        onClick={() => handleBlockToggle(user.id)}
                                                        className="px-2 py-2 text-xs border border-none text-[#FF5353] bg-[#FFE8E8] rounded-lg cursor-pointer hover:opacity-80"
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
                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-6 gap-2 text-sm text-black">
                        <div>
                            <h2 className='text-base'>Total User : <span className='text-2xl'>1200</span> </h2>
                        </div>
                        <div className="flex  justify-end items-center gap-2 text-sm text-black">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-8 h-8  flex items-center justify-center border-[1px]  rounded-full border-[#F1F1F1] hover:bg-[#1f1f1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M6.99995 13C6.99995 13 1.00001 8.58107 0.999999 6.99995C0.999986 5.41884 7 1 7 1" stroke="#E2E2E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            {renderPageNumbers()}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-8 h-8  flex items-center justify-center border-[1px]  rounded-full border-[#F1F1F1] hover:bg-[#1f1f1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1.00005 1C1.00005 1 6.99999 5.41893 7 7.00005C7.00001 8.58116 1 13 1 13" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {showProfileModal && selectedUser && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center" >
                        {/* Overlay for darkening the background */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Modal content */}
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative z-10">
                            <div className="flex flex-col items-center gap-3">
                                <img
                                    src={selectedUser.avatar}
                                    alt="Avatar"
                                    className="w-25 h-25 rounded-full object-cover"
                                />
                                <h2 className="text-xl font-semibold mb-10">{selectedUser.name}</h2>
                                <div className="flex justify-between gap-30">
                                    <div className="flex flex-col text-xl gap-5">
                                        <p>Email:</p>
                                        <p>Address:</p>
                                        <p>Service Booked:</p>
                                        <p>Reordered:</p>
                                    </div>
                                    <div className="flex flex-col text-xl font-medium gap-5">
                                        <p>{selectedUser.email}</p>
                                        <p>{selectedUser.Adress}</p>
                                        <p>5 times</p>
                                        <p>3 times</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="bg-[#4B5320] w-full rounded-lg py-2 my-5 text-white text-xl font-semibold"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {showDeleteModal && userToDelete && (
                    <div className="absolute mr-5 inset-0 z-50 flex justify-center items-center" onClick={handleClickOutside}>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="bg-white rounded-sm shadow-lg p-2 w-full max-w-sm relative">

                            <div className="flex items-start gap-2">
                                <span className="text-yellow-500 text-2xl">⚠️</span>
                                <p className="text-lg font-medium text-gray-800">
                                    Are you sure you want to delete this booking?
                                </p>
                            </div>

                            <div className="flex justify-end gap-1 mt-1">
                                <button
                                    className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                                    onClick={() => setShowDeleteModal(false)}
                                >
                                    No
                                </button>
                                <button
                                    className="px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                                    onClick={() => {
                                        setCurrentUsers((prev) =>
                                            prev.filter((user) => user.id !== userToDelete.id)
                                        );
                                        setShowDeleteModal(false);
                                        setUserToDelete(null);
                                    }}
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};

export default UserManagement;
