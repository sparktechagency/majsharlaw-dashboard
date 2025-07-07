"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const USER_ROLE = "admin";

export default function ProfileEdit() {
  const [activeTab, setActiveTab] = useState("change-password");
  const [profileImage, setProfileImage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted with:", data);
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

  return (
    <div className="max-w-6xl mx-auto bg-white p-6">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <img
            onClick={handleImageUpload}
            src={profileImage || "/assets/user.png"}
            alt="Profile"
            className="w-30 h-30 rounded-full mx-auto mb-4 object-cover"
          />
          <button
            onClick={handleImageUpload}
            className="absolute bottom-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-[#00000033] cursor-pointer"
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Jhon Doe</h2>
        <p className="text-gray-500">example@gmail.com</p>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 items-center justify-center">
        <button
          className={`cursor-pointer px-4 py-2 font-medium ${
            activeTab === "edit-profile"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("edit-profile")}
        >
          Edit Profile
        </button>
        <button
          className={`cursor-pointer px-4 py-2 font-medium ${
            activeTab === "change-password"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("change-password")}
        >
          Change Password
        </button>
      </div>

      {/* Forms */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {activeTab === "change-password" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Current Password
              </label>
              <input
                type="password"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
                placeholder="**********"
                className="w-full px-3 py-2 border border-[#00000033] rounded-md focus:outline-none"
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                New Password
              </label>
              <input
                type="password"
                {...register("newPassword", {
                  required: "New password is required",
                })}
                placeholder="**********"
                className="w-full px-3 py-2 border border-[#00000033] rounded-md focus:outline-none"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your new password",
                })}
                placeholder="**********"
                className="w-full px-3 py-2 border border-[#00000033] rounded-md focus:outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </>
        )}

        {activeTab === "edit-profile" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-[#00000033] rounded-md focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="example@gmail.com"
                disabled={USER_ROLE !== "admin"}
                className={`w-full px-3 py-2 border border-[#00000033] rounded-md focus:outline-none ${
                  USER_ROLE !== "admin" ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </>
        )}

        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="w-full bg-[#6DA40A] text-white py-3 px-4 rounded-md font-medium hover:bg-[#6ea40acb] focus:outline-none focus:ring-2 focus:ring-[#00000033] focus:ring-offset-2 max-w-md cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
