"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import "./provider.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react";
import ProviderModal from "./ProviderModel";
import { KeyRound, Trash2 } from "lucide-react";

const ProviderCard = ({
  setIsDelete,
  setDeleteUser,
  setIsPasswordChanging,
  setId,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling dropdown
  const [isOpenDropdown, setIsOpenDropdown] = useState(false); // State for toggling dropdown
  return (
    <div>
      <div className=" p-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className=" w-8 h-8 bg-[#F6F6F6] rounded-full p-1 flex justify-center items-center ml-[485px] relative">
          <button
            onClick={() => setIsOpenDropdown(!isOpenDropdown)}
            className="text-gray-500 hover:text-gray-700 flex cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
          {isOpenDropdown && (
            <div className="absolute right-0 top-7 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <button
                className="flex gap-4 items-center w-full border-b-2 text-center px-6 bg-[#FFDADA99] py-2 text-gray-800 hover:bg-[#ffdada83] transition cursor-pointer"
                onClick={() => {
                  setDeleteUser({
                    name: "ABC",
                    image: "/assets/abc.png",
                    id: 1,
                  });
                  setIsDelete(true);

                  setIsOpenDropdown(!isOpenDropdown);
                }}
              >
                <Trash2 className="w-5 h-5 text-red-500" /> Delete
              </button>
              <button
                className="flex gap-4 items-center w-full border-b-2 text-center px-6  py-2 text-gray-800 hover:bg-gray-100 text-nowrap  transition cursor-pointer"
                onClick={() => {
                  setIsPasswordChanging(true);
                  setId("1");
                  setIsOpenDropdown(!isOpenDropdown);
                }}
              >
                <KeyRound className="w-5 h-5 text-blue-500" /> Change Password
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center px-2">
          <div className="flex-shrink-0">
            <img
              src="/assets/abc.png"
              className="w-12 h-12 bg-gray-300 rounded-full"
            />{" "}
            {/* Placeholder for avatar */}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">ABC</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  {" "}
                  <FaMapMarkerAlt /> Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex justify-between pb-3">
              <div className="flex items-center mt-1">
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span className="ml-2 text-sm text-gray-500">4.0 (100)</span>
              </div>
              <div>
                <button className="bg-[#6DA40A] text-white px-4 py-2 rounded-3xl hover:bg-[#6DA40A] transition cursor-pointer">
                  Cleaner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex gap-2 p-2 overflow-x-auto scrollbar-hidden">
          <img
            src="/assets/clean.png"
            alt="Service 1"
            className="w-25 h-25 object-cover rounded"
          />
          <img
            src="/assets/hand.png"
            alt="Service 2"
            className="w-25 h-25 object-cover rounded"
          />
          <img
            src="/assets/bucket.png"
            alt="Service 3"
            className="w-25 h-25 object-cover rounded"
          />
          <img
            src="/assets/hand2.png"
            alt="Service 4"
            className="w-25 h-25 object-cover rounded"
          />
          <img
            src="/assets/clean.png"
            alt="Service 1"
            className="w-25 h-25 object-cover rounded"
          />
        </div>

        {/* Buttons */}
        <div className="p-2 flex justify-between items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#6DA40A] text-white px-4 py-2 rounded-3xl hover:bg-[#6DA40A] transition
                     flex items-center justify-center w-2/3 mx-auto text-base font-medium cursor-pointer"
          >
            See provider details{" "}
            <MdOutlineArrowOutward className="ml-2 text-lg" />
          </button>
        </div>
      </div>
      {isOpen && (
        <ProviderModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          provider={{
            name: "ABC Company",
            image: "/assets/user.png",
            location: "Dhaka, Bangladesh",
            rating: 4,
            reviewsCount: 100,
            categories: ["Cleaner", "Plumber"],
            about:
              "Experienced service provider in home cleaning and plumbing.",
            phone: "+01245698745",
            employees: 10,
            experience: "2 years",
            historyItems: [
              {
                id: 1,
                name: "Maria Jones",
                location: "Dhaka, Bangladesh",
                date: "21-04-2025",
                status: "In progress",
              },
              // more items...
            ],
          }}
        />
      )}
    </div>
  );
};

export default ProviderCard;
