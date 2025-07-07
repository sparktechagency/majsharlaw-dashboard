"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaMap, FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import "./provider.css";
import ProviderCard from "./ProviderCard";
import AddProviderModal from "./AddProviderModel";
import DeleteProviderModal from "./DeleteProviderModel";
import ChangePasswordModal from "./ChangePasswordModel";

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for toggling dropdown
  const [isDelete, setIsDelete] = useState(false); // State for toggling dropdown
  const [deleteUser, setDeleteUser] = useState({
    name: "",
    image: "",
    id: "",
  }); // State for toggling dropdown
  const [isPasswordChanging, setIsPasswordChanging] = useState(false); // State for toggling dropdown
  const [passwordChangingUser, setPasswordChangingUser] = useState(""); // State for toggling dropdown
  const [isAddProvider, setIsAddProvider] = useState(false); // State for toggling dropdown

  const provider = ["Cleaner", "Mover", "Remodeler", "Plumber", "Carpenter"];

  return (
    <div className="bg-[#F6F6F6] h-auto pb-28">
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex items-center ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-5 border-[1px] border-[#D9D9D9] pr-50 bg-white text-[#00000070] py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#6DA40A]"
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
              className="hover:bg-gray-700 transition-colors bg-[#6DA40A] p-3 cursor-pointer"
            >
              <Search className=" text-[#FFFFFF]" />
            </button>
          </div>
        </div>
        <div className="flex mr-4">
          <div>
            <Button
              onClick={() => setIsAddProvider(true)}
              className={`w-[200px] rounded-sm hover:cursor-pointer`}
            >
              <FiPlus /> Add new provider
            </Button>
          </div>
          <div className="relative">
            {/* Filter Button */}
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className=" text-base font-medium text-white px-7 py-3 ml-2 rounded-sm flex items-center gap-1 bg-[#6ea40abe] transition cursor-pointer"
            >
              <CiFilter className="font-bold text-2xl" />
              Filter
            </Button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                {provider.map((service, index) => (
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
      <div className="grid grid-cols-3 gap-2 px-5">
        <ProviderCard
          setIsDelete={setIsDelete}
          setDeleteUser={setDeleteUser}
          setId={setPasswordChangingUser}
          setIsPasswordChanging={setIsPasswordChanging}
        />
        <ProviderCard
          setIsDelete={setIsDelete}
          setDeleteUser={setDeleteUser}
          setId={setPasswordChangingUser}
          setIsPasswordChanging={setIsPasswordChanging}
        />
        <ProviderCard
          setIsDelete={setIsDelete}
          setDeleteUser={setDeleteUser}
          setId={setPasswordChangingUser}
          setIsPasswordChanging={setIsPasswordChanging}
        />
        <ProviderCard
          setIsDelete={setIsDelete}
          setDeleteUser={setDeleteUser}
          setId={setPasswordChangingUser}
          setIsPasswordChanging={setIsPasswordChanging}
        />
        <ProviderCard
          setIsDelete={setIsDelete}
          setDeleteUser={setDeleteUser}
          setId={setPasswordChangingUser}
          setIsPasswordChanging={setIsPasswordChanging}
        />
        <ProviderCard
          setIsDelete={setIsDelete}
          setDeleteUser={setDeleteUser}
          setId={setPasswordChangingUser}
          setIsPasswordChanging={setIsPasswordChanging}
        />


      </div>
      {isAddProvider && (
        <AddProviderModal isOpen={isAddProvider} onClose={setIsAddProvider} />
      )}
      {isDelete && (
        <DeleteProviderModal
          isOpen={isDelete}
          onClose={setIsDelete}
          provider={deleteUser}
        />
      )}
      {isPasswordChanging && (
        <ChangePasswordModal
          isOpen={isPasswordChanging}
          onClose={setIsPasswordChanging}
          id={passwordChangingUser}
        />
      )}
    </div>
  );
};

export default Providers;
