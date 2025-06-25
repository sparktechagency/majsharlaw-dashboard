'use client';

import React, { useState, useMemo } from 'react';
import { Search, Eye, Trash } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';

const servicesList = ['Cleaning', 'Moving', 'Remodeling'];
const initialUsers = new Array(35).fill(null).map((_, i) => ({
    id: `00${i + 1}`,
    name: `Md. Abid`,
    email: `example@gmail.com`,
    date: `Thursday, March 27, 2025`,
    time: '10:00 PM',
    services: servicesList[Math.floor(Math.random() * servicesList.length)],
    avatar: '/assets/user.png',
}));

const statusStyles = {
    Pending: 'bg-[#007AFF] text-white',
    Approve: 'bg-[#6DA40A] text-white',
    Ongoing: 'bg-[#8C63DA] text-white',
    Completed: 'bg-[#FF8C00] text-white',
    Decline: 'bg-[#FF5353] text-white',
};

const renderValue = (value) => (
    <div className={`flex items-center gap-2 rounded-3xl px-4 py-3 ${statusStyles[value]}`}>
        <span className="w-4 h-4 rounded-full bg-white" />
        <span className="capitalize">{value}</span>
    </div>
);

const Bookings = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentUsers, setCurrentUsers] = useState(initialUsers);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState('pending');
    const itemsPerPage = 10;

    const filteredUsers = useMemo(() => {
        if (!searchTerm) return currentUsers;
        return currentUsers.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.id.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, currentUsers]);

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsersDisplayed = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
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

    const renderPageNumbers = () => {
        const pageNumbers = [];
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
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${currentPage === num ? 'bg-[#6DA40A] text-white' : ' text-black bg-white'}`}
                >
                    {num}
                </button>
            )
        ));
    };

    return (
        <div className="bg-[#F6F6F6] rounded-lg text-white p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="flex jus items-center gap-2">
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
                            className="hover:bg-gray-700 transition-colors bg-[#6DA40A] p-3 absolute right-0 top-0 h-full"
                        >
                            <Search className="text-white" />
                        </button>
                    </div>
                </div>
                    <Button>Filters</Button> 
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
                                <td colSpan="6" className="py-4 text-center text-gray-400 border-gray-600">
                                    No users found matching your search.
                                </td>
                            </tr>
                        ) : (
                            currentUsersDisplayed.map((user) => (
                                <tr key={user.id} className="text-sm text-black bg-white">
                                    <td className="py-7 px-4 text-center">
                                        <div className="flex text-xl justify-center items-center gap-2">
                                            <img src={user.avatar} alt="avatar" width={40} height={40} className="rounded-full" />
                                            {user.name}
                                        </div>
                                    </td>
                                    <td className="py-7 px-4 text-center text-xl">{user.email}</td>
                                    <td className="py-7 px-4 text-center text-xl">
                                        {user.date}
                                        <p className='font-light mr-38'>{user.time}</p>
                                    </td>
                                    <td className="py-7 px-4 text-center text-xl">{user.services}</td>
                                    <td className="py-7 px-4 text-center">
                                        <Select value={status} onValueChange={(val) => setStatus(val)}>
                                            <SelectTrigger className=" border-[1px] border-black rounded-3xl px-2 py-8 ">
                                                <SelectValue>{renderValue(status)}</SelectValue>
                                            </SelectTrigger>              
                                            <SelectContent>                                             
                                                <SelectItem className={`bg-[#007AFF] mb-2 text-base font-medium text-white`} value="Pending">Pending</SelectItem>
                                                <SelectItem className={`bg-[#6DA40A] mb-2 text-base font-medium text-white`} value="Approve">Approve</SelectItem> 
                                                <SelectItem className={`bg-[#8C63DA] mb-2 text-base font-medium text-white`} value="Ongoing">Ongoing</SelectItem> 
                                                <SelectItem className={`bg-[#FF8C00] mb-2 text-base font-medium text-white`} value="Completed">Completed</SelectItem>
                                                <SelectItem className={`bg-[#FF5353] mb-2 text-base font-medium text-white`} value="Decline">Decline</SelectItem> 
                                            </SelectContent>
                                        </Select>
                                    </td>
                                    <td className="py-7 px-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => handleViewUser(user.id)}
                                                className="px-2 py-1 bg-[#F2FFDA] rounded-lg hover:opacity-80"
                                            >
                                                <Eye className='text-[#6DA40A]' />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="px-2 py-1 bg-[#FFE8E8] text-[#FF5353] rounded-lg hover:opacity-80"
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
                    <h2 className='text-base'>Total Bookings: <span className='text-2xl'>100</span></h2>
                </div>
                <div className="flex justify-end items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-8 h-8 flex items-center justify-center border rounded-full border-[#F1F1F1] disabled:opacity-50"
                    >
                        &lt;
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-8 h-8 flex items-center justify-center border rounded-full border-[#F1F1F1] disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            </div>
            {showProfileModal && selectedUser && (
                <div className="fixed inset-0 z-50 bg-white bg-opacity-0.5 flex justify-center items-center">
                    <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-lg relative">

                        <div className="flex flex-col items-center gap-3">
                            <img src={selectedUser.avatar} alt="Avatar" className="w-25 h-25 rounded-full object-cover" />
                            <h2 className="text-xl font-semibold mb-10"> {selectedUser.name}</h2>
                            <div className='flex justify-between gap-30'>
                                <div className="flex flex-col text-xl gap-5">
                                    <p>Email:</p>
                                    <p>Address:</p>
                                    <p>Service Booked:</p>
                                    <p>Reorderd:</p>
                                </div>
                                <div className='flex flex-col text-xl font-medium gap-5'>
                                    <p>{selectedUser.email}</p>
                                    <p>{selectedUser.Adress}</p>
                                    <p>5 times</p>
                                    <p>3 times</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowProfileModal(false)}
                                className='bg-[#4B5320] w-full rounded-lg py-2 my-5 text-white text-xl font-semibold'
                            >
                                close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showDeleteModal && userToDelete && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
                        <div className="flex items-start gap-2">
                            <span className="text-yellow-500 text-2xl">⚠️</span>
                            <p className="text-lg font-medium text-gray-800">
                                Are you sure you want to delete this user?
                            </p>
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                No
                            </button>
                            <button
                                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                                onClick={() => {
                                    setCurrentUsers(prev => prev.filter(user => user.id !== userToDelete.id));
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
    );
};

export default Bookings;
