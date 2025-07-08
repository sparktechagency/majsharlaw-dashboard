"use client";

import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServiceName() {
  const [serviceName, setServiceName] = useState("Cleaning");


  const handleSave = () => {
    
   
  };

  return (
    <div className="bg-gray-50 py-4 flex items-center space-x-">
      {/* Back button */}
      <Link href={"/admin/services"}
     
        className="flex items-center text-gray-700 hover:text-black"
      >
        <ArrowLeft />
        Back
      </Link>
      <div className="max-w-4xl w-full flex items-center justify-center space-x-8 mx-auto">
        <span className="font-medium text-gray-800">Service Name:</span>

        {/* Input container */}
        <div className="relative flex-1">
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
       
        
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          className="bg-[#6DA40A] text-white font-medium px-6 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>
      {/* Label */}
    </div>
  );
}
