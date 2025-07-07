"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const providerTypes = [
  "Cleaning Service",
  "Plumbing Service",
  "Electrical Service",
  "Gardening Service",
  "Repair Service",
];

export default function AddServiceModal({ isOpen, onClose, addServiceData }) {
  const [price, setPrice] = useState("0.00");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const handleToggle = (val) => {
    setSelectedTypes((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-[#7CB342] px-4 py-4 flex items-center justify-between text-white">
          <h1 className="text-lg font-medium">Add new service</h1>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Your service */}
          <div className="relative">
            <Select
              value={"Provider Type"}
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

          {/* Starting price */}
          <div className="space-y-2">
            <label className="text-base font-medium text-gray-900 block">
              Starting price
            </label>
            <div className="relative">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full h-12 bg-gray-100 rounded-xl px-4 pr-8 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7CB342]"
                placeholder="0.00"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base">
                $
              </div>
            </div>
          </div>
        </div>

        {/* Add button */}
        <div className="p-4 bg-white border-t border-gray-200">
          <button className="w-full h-12 bg-[#7CB342] hover:bg-[#689F38] text-white rounded-xl text-base font-medium transition-colors cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
