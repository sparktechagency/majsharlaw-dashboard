"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import DocumentUpload from "../../../company/service-providers/_components/ImageUploadModel";

const providerTypes = [
  "Cleaning Service",
  "Plumbing Service",
  "Electrical Service",
  "Gardening Service",
  "Repair Service",
];

export default function AddServiceProviderModal({ isOpen, onClose }) {
  
  const [formData, setFormData] = useState({
    providerName: "",
    providerType: "",
    providerEmail: "",
    contactNumber: "",
    address: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [openDocument, setOpenDocument] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfileImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding new service provider:", formData);
    // Handle form submission here
    // onClose();
    setOpenDocument(true);
  };

  const resetForm = () => {
    setFormData({
      providerName: "",
      providerType: "",
      providerEmail: "",
      contactNumber: "",
      address: "",
    });
    setProfileImage(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };
  const handleToggle = (val) => {
    setSelectedTypes((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className={`bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto ${openDocument ? "hidden":""}`}>
        {/* Header */}
        <div className="bg-[#6DA40A] text-white p-4 rounded-t-lg flex items-center justify-between">
          <h2 className="text-lg font-medium">Add new service provider</h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 p-1 cursor-pointer"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Upload */}
            <div className="text-center">
              <div
                onClick={handleImageUpload}
                className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors overflow-hidden"
              >
                {profileImage ? (
                  <img
                    src={profileImage || "/placeholder.svg"}
                    alt="Provider"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 bg-[#6DA40A] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-gray-700 font-medium">
                Upload provider picture
              </p>
            </div>

            {/* Provider Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Provider name
              </label>
              <input
                type="text"
                name="providerName"
                value={formData.providerName}
                onChange={handleInputChange}
                placeholder="Enter provider name"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] placeholder-gray-500"
              />
            </div>

            {/* Provider Type */}
            <div className="relative">
              <Select
                value={
                 
                  "Provider Type"
                }
                onValueChange={(val) => {
                  handleToggle(val);
                }}
              >
                <SelectTrigger className="px-4 py-5 rounded-xl border border-[#00000033] w-full">
                  <SelectValue>
                    {selectedTypes.length
                      ? selectedTypes.join(", ")
                      : "Provider Type"}
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  {providerTypes.map((val) => (
                    <SelectItem
                      key={val}
                      value={val}
                      className="border-b border-[#00000033] rounded-b-none py-2"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(val)}
                          readOnly
                        />
                        {val}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Provider Email */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Provider email
              </label>
              <input
                type="email"
                name="providerEmail"
                value={formData.providerEmail}
                onChange={handleInputChange}
                placeholder="Enter provider email"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] placeholder-gray-500"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Contact number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Enter contact number"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] placeholder-gray-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter provider address"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] placeholder-gray-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6DA40A] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#6ea40abe] focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6] focus:ring-offset-2 transition-colors cursor-pointer"
            >
              Add Provider
            </button>
          </form>
        </div>
      </div>
      {openDocument && (
        <DocumentUpload isOpen={openDocument} onClose={setOpenDocument} />
      )}
    </div>
  );
}
