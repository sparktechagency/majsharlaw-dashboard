'use client';

import { useState, useMemo } from 'react';
import { Search, Eye, Trash } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CiFilter } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

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
    const [isOpen, setIsOpen] = useState(false); // State for toggling dropdown
    const itemsPerPage = 10;
    const services = ['Cleaning', 'Moving', 'Remodeling'];

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

    // Service-specific modal content
    const renderProfileModal = () => {
        if (!selectedUser) return null;

        let modalContent = (
            <div className="flex flex-col items-center gap-3">
                <img src={selectedUser.avatar} alt="Avatar" className="w-25 h-25 rounded-full object-cover" />
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
                        <p>{selectedUser.address || 'N/A'}</p> {/* Fixed typo: Adress to address */}
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
        );

        // Customize modal based on service
        switch (selectedUser.services) {
            case 'Cleaning':
                modalContent = (
                    <div className=" flex flex-col items-center gap-2">
                        <div className='absolute top-0 right-0 p-3' onClick={() => setShowProfileModal(false)}>
                            <RxCrossCircled className='text-4xl' />
                        </div>
                        <img src={selectedUser.avatar} alt="Avatar" className="w-25 h-25 rounded-full object-cover" />
                        <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
                        <h2 className="text-xl font-medium mb-5">{selectedUser.email}</h2>
                        <div className='w-full flex flex-col items-center gap-4'>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Service:</p>
                                <p className='text-xl font-medium'>Cleaning</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Zip Code:</p>
                                <p className='text-xl font-medium'>19801</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>House Size:</p>
                                <p className='text-xl font-medium'>1000-3000 sq ft</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Rooms:</p>
                                <p className='text-xl font-medium'>Bedroom - 2 <br />Kitchen - 2</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Date:</p>
                                <p className='text-xl font-medium'>Thursday, March 27, 2025</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Time:</p>
                                <p className='text-xl font-medium'>02:00 PM</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Cost:</p>
                                <p className='text-2xl font-medium'>$250.00</p>
                            </div>
                            <div className='flex justify-between items-end gap-3 w-2/3'>
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="bg-[#FF5353] w-full rounded-sm py-3 my-5 text-white text-xl font-semibold"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="bg-[#6DA40A] w-full rounded-sm py-3 my-5 text-white text-xl font-semibold"
                                >
                                    Approve
                                </button>
                            </div>
                        </div>

                    </div>
                );
                break;
            case 'Moving':
                modalContent = (
                    <div className=" flex flex-col items-center gap-2">
                        <img src={selectedUser.avatar} alt="Avatar" className="w-25 h-25 rounded-full object-cover" />
                        <div className='absolute top-0 right-0 p-3' onClick={() => setShowProfileModal(false)}>
                            <RxCrossCircled className='text-4xl' />
                        </div>
                        <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
                        <h2 className="text-xl font-medium mb-5">{selectedUser.email}</h2>
                        <div className='w-full flex flex-col items-center gap-4'>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Service:</p>
                                <p className='text-xl font-medium'>Moving</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Zip Code:</p>
                                <p className='text-xl font-medium'>19801</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>House Location:</p>
                                <p className='text-xl font-medium'>Dhaka, Bangladesh</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Moving Type:</p>
                                <p className='text-xl font-medium'>Packing & Moving</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Moving Area:</p>
                                <p className='text-xl font-medium'>2 - 4 Bedrooms</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Moving TO:</p>
                                <p className='text-xl font-medium'>Same state</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Moving Location:</p>
                                <p className='text-xl font-medium'>Dhaka, Bangladesh</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Date:</p>
                                <p className='text-xl font-medium'>Thursday, March 27, 2025</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Time:</p>
                                <p className='text-xl font-medium'>02:00 PM</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Cost:</p>
                                <p className='text-2xl font-medium'>$250.00</p>
                            </div>
                            <div className='flex justify-between items-end gap-3 w-2/3'>
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="bg-[#FF5353] w-full rounded-sm py-3 my-5 text-white text-xl font-semibold"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="bg-[#6DA40A] w-full rounded-sm py-3 my-5 text-white text-xl font-semibold"
                                >
                                    Approve
                                </button>
                            </div>
                        </div>

                    </div>
                );
                break;
            case 'Remodeling':
                modalContent = (
                    <div className=" flex flex-col items-center gap-2">
                        <img src={selectedUser.avatar} alt="Avatar" className="w-25 h-25 rounded-full object-cover" />
                        <div className='absolute top-0 right-0 p-3' onClick={() => setShowProfileModal(false)}>
                            <RxCrossCircled className='text-4xl' />
                        </div>
                        <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
                        <h2 className="text-xl font-medium mb-5">{selectedUser.email}</h2>
                        <div className='w-full flex flex-col items-center gap-3'>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Service:</p>
                                <p className='text-xl font-medium'>Remodeling</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Zip Code:</p>
                                <p className='text-xl font-medium'>19801</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Property Type:</p>
                                <p className='text-xl font-medium'>Home / Single family</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Property Owner:</p>
                                <p className='text-xl font-medium'>Yes</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Planning to renovate:</p>
                                <p className='text-xl font-medium'>Whitin a month</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Areas to renovate:</p>
                                <p className='text-xl font-medium'>SBedroom, Bathroom</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Size of house:</p>
                                <p className='text-xl font-medium'>Aprx 1000 sq ft</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Working with anyone:</p>
                                <p className='text-xl font-medium'>Yes</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Level of budget:</p>
                                <p className='text-xl font-medium'>Mid level</p>
                            </div>
                            <div className='flex justify-between items-center text-right w-full'>
                                <p className='text-xl'>Property address:</p>
                                <p className='text-xl font-medium'>Dhaka, Bangladesh</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Date:</p>
                                <p className='text-xl font-medium'>Thursday, March 27, 2025</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Time:</p>
                                <p className='text-xl font-medium'>02:00 PM</p>
                            </div>
                            <div className='flex justify-between items-end w-full'>
                                <p className='text-xl'>Cost:</p>
                                <p className='text-2xl font-medium'>$250.00</p>
                            </div>
                            <div className='flex justify-between items-end gap-3 w-2/3 '>
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="bg-[#FF5353] w-full rounded-sm py-3 my-2 text-white text-xl font-semibold"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="bg-[#6DA40A] w-full rounded-sm py-3 my-2 text-white text-xl font-semibold"
                                >
                                    Approve
                                </button>
                            </div>
                        </div>
                    </div>
                );
                break;
        }

        return (
            <div className=" fixed inset-0 z-50 flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg relative">
                    {modalContent}
                </div>
            </div>
        );
    };

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
                                className="hover:bg-gray-700 transition-colors bg-[#6DA40A] p-3 absolute right-0 top-0 h-full"
                            >
                                <Search className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="py-3 px-5 font-medium rounded-sm bg-[#007AFF]">30</button>
                        <button className="py-3 px-5 font-medium rounded-sm bg-[#6DA40A]">60</button>
                        <button className="py-3 px-5 font-medium rounded-sm bg-[#8C63DA]">10</button>
                        <button className="py-3 px-5 font-medium rounded-sm bg-[#FF8C00]">10</button>
                        <button className="py-3 px-5 font-medium rounded-sm bg-[#FF5353]">10</button>
                    </div>
                    <div>
                        <div className="relative">
                            {/* Filter Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-green-600 text-base font-medium text-white px-7 py-3 ml-5 rounded-lg flex items-center gap-1 hover:bg-green-700 transition"
                            >
                                <CiFilter className="font-bold text-2xl" />
                                Filter
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute mt-3 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                    {services.map((service, index) => (
                                        <button
                                            key={index}
                                            className="block border-b w-full text-center px-6 py-2 text-gray-800 hover:bg-gray-100 rounded-lg transition"
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
                                    <td colSpan="6" className="py-4 text-center text-gray-400 border-gray-600">
                                        No users found matching your search.
                                    </td>
                                </tr>
                            ) : (
                                currentUsersDisplayed.map((user) => (
                                    <tr key={user.id} className="text-sm text-black bg-white">
                                        <td className="py-3 px-4 text-center">
                                            <div className="flex text-xl justify-center items-center gap-2">
                                                <img src={user.avatar} alt="avatar" width={40} height={40} className="rounded-full" />
                                                {user.name}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-center text-xl">{user.email}</td>
                                        <td className="py-3 px-4 text-center text-xl">
                                            {user.date}
                                            <p className="font-light mr-38">{user.time}</p>
                                        </td>
                                        <td className="py-3 px-4 text-center text-xl">{user.services}</td>
                                        <td className="py-3 px-4 text-center">
                                            <Select value={status} onValueChange={(val) => setStatus(val)}>
                                                <SelectTrigger className="border-[1px] border-black rounded-3xl px-2 py-8">
                                                    <SelectValue>{renderValue(status)}</SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem className="bg-[#007AFF] mb-2 text-base font-medium text-white" value="Pending">Pending</SelectItem>
                                                    <SelectItem className="bg-[#6DA40A] mb-2 text-base font-medium text-white" value="Approve">Approve</SelectItem>
                                                    <SelectItem className="bg-[#8C63DA] mb-2 text-base font-medium text-white" value="Ongoing">Ongoing</SelectItem>
                                                    <SelectItem className="bg-[#FF8C00] mb-2 text-base font-medium text-white" value="Completed">Completed</SelectItem>
                                                    <SelectItem className="bg-[#FF5353] mb-2 text-base font-medium text-white" value="Decline">Decline</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button
                                                    onClick={() => handleViewUser(user.id)}
                                                    className="px-2 py-2 bg-[#F2FFDA] rounded-lg hover:opacity-80"
                                                >
                                                    <Eye className="text-[#6DA40A]" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(user.id)}
                                                    className="px-2 py-2 bg-[#FFE8E8] text-[#FF5353] rounded-lg hover:opacity-80"
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
                        <h2 className="text-base">Total Bookings: <span className="text-2xl">100</span></h2>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="w-8 h-8 flex items-center justify-center border rounded-full border-[#F1F1F1] disabled:opacity-50"
                        >
                            {'<'}
                        </button>
                        {renderPageNumbers()}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="w-8 h-8 flex items-center justify-center border rounded-full border-[#F1F1F1] disabled:opacity-50"
                        >
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>

            {showProfileModal && selectedUser && renderProfileModal()}
            {showDeleteModal && userToDelete && (
                <div className="fixed inset-0 z-50  flex justify-center items-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
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
                                    setCurrentUsers((prev) => prev.filter((user) => user.id !== userToDelete.id));
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