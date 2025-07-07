"use client";

import AddService from "./AddService";
import Image from "next/image";
import { useState } from "react";
import EditServiceModal from "./EditService";

export default function CompanySettings() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [openToEdit, setOpenToEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [openToCreate, setOpenToCreates] = useState(false);
  const addServiceData = () => {};
  const editServiceData = () => {};
  const handleFileUpload = () => {
    // Simulate file upload
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const newFile = {
          id: Date.now(),
          name: file.name,
          file: URL.createObjectURL(file), // Create a local URL for the file
        };
        setUploadedFiles([...uploadedFiles, newFile]);
      }
    };
    input.click();
  };

  const handleRemoveFile = (fileId) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== fileId));
  };
  const handelDelete = (id) => {
    console.log(id);
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <div className="flex-1 p-8">
          <div className="flex gap-8">
            {/* Left Column */}
            <div className="flex space-x-8 w-full">
              {/* Company Logo Section */}
              <div className="bg-white rounded-lg p-6 w-1/3">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Company logo
                  </h3>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6DA40A] focus:border-transparent outline-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6DA40A] focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6DA40A] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 w-2/3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  About company
                </h3>
                <textarea
                  placeholder="Type here"
                  rows={9}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6DA40A] focus:border-transparent resize-none outline-none"
                />
              </div>
            </div>
            {/* Overview Section */}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* About Company */}
            <div className="p-6 grid grid-cols-3 gap-8">
              <div className="col-span-2 gap-8">
                <div className="grid grid-cols-2 gap-8 pb-8">
                  <div className=" rounded-lg p-6 h-auto">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">
                      Overview
                    </h3>
                    <div className="space-y-4">
                      <div className="relative bg-white rounded-lg">
                        <svg
                          className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <input
                          type="text"
                          className="py-4 pl-12 border border-gray-200 rounded-lg w-full"
                          defaultValue={"Contact Number"}
                        />
                      </div>
                      <div className="relative bg-white rounded-lg">
                        <svg
                          className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          className="py-4 pl-12 border border-gray-200 rounded-lg w-full"
                          defaultValue={"Location"}
                        />
                      </div>
                      <div className="relative bg-white rounded-lg">
                        <svg
                          className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          className="py-4 pl-12 border border-gray-200 rounded-lg w-full"
                          defaultValue={"Employ Count"}
                        />
                      </div>
                      <div className="relative bg-white rounded-lg">
                        <svg
                          className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8m0 0v2a2 2 0 002 2h4a2 2 0 002-2V6m-8 0H8"
                          />
                        </svg>
                        <input
                          type="text"
                          className="py-4 pl-12 border border-gray-200 rounded-lg w-full"
                          defaultValue={"Work Experience"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services Section */}
                  <div className=" p-6 h-auto">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">
                      Services
                    </h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-gray-700">Cleaning</span>
                            <span className="text-gray-500">
                              Starting: $10.00
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setEditData({
                                  name: "Cleaning",
                                  price: "10.00",
                                });
                                setOpenToEdit(true);
                              }}
                              className="p-2 bg-[#7CB342] hover:bg-[#689F38] cursor-pointer rounded"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={() => handelDelete(i)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded cursor-pointer"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}

                      <button
                        onClick={() => {
                          setOpenToCreates(true);
                        }}
                        className="flex items-center gap-2 p-4 border-2 border-gray-300 rounded-lg w-full justify-center text-gray-500 hover:border-[#6DA40A] hover:text-[#6DA40A] cursor-pointer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        <span>Add more</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Save Button */}
                  <button className="w-80 bg-gray-600 text-white py-4 rounded-lg font-medium hover:bg-gray-700 transition-colors cursor-pointer">
                    Save changes
                  </button>
                </div>
              </div>

              {/* Photos Section */}
              <div className="bg-white rounded-lg p-6 h-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-6">
                  Photos
                </h3>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                  <svg
                    className="w-8 h-8 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-600 mb-4">Upload images</p>
                  <button
                    onClick={handleFileUpload}
                    className="bg-[#6DA40A] text-white px-6 py-2 rounded-lg hover:bg-[#6ea40a9d] transition-colors cursor-pointer"
                  >
                    Browse
                  </button>
                </div>

                {/* Photo Grid */}
                {uploadedFiles.length > 0 && (
                  <div className="grid grid-cols-4 gap-3">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
                      >
                        <Image
                          onClick={() => handleRemoveFile(file.id)}
                          src={file.file}
                          alt={`City view ${index}`}
                          width={120}
                          height={120}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openToCreate && (
        <AddService
          isOpen={openToCreate}
          onClose={() => setOpenToCreates(false)}
          addServiceData={addServiceData}
        />
      )}

      {openToEdit && (
        <EditServiceModal
          isOpen={openToEdit}
          onClose={() => setOpenToEdit(false)}
          editServiceData={editServiceData}
          editData={editData}
        />
      )}
    </div>
  );
}
