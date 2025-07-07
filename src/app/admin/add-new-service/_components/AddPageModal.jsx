import { X, ImageIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

export default function AddPageModal({ show, onClose, onSave }) {
  const [value, setValue] = useState("-select page type-");
  const [value2, setValue2] = useState("-select page type-");
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        {/* Header */}
        <div className="bg-[#6DA40A] text-white p-4 rounded-t-lg flex items-center justify-between">
          <h3 className="text-lg font-medium">Add new page</h3>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Page Type */}

          <Select value={value} onValueChange={(val) => setValue(val)}>
            <SelectTrigger className="px-4 py-6 rounded-xl border border-[#00000033] w-full">
              <SelectValue>{value}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="border-b border-[#00000033] rounded-b-none py-2"
                value="Input"
              >
                Input
              </SelectItem>
              <SelectItem
                className="border-b border-[#00000033] rounded-b-none py-2"
                value="Button"
              >
                Button
              </SelectItem>
              <SelectItem className="py-2" value="Selection">
                Selection
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Page Name */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Page Name:
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="flex-1 px-4 py-3 border border-[#00000033] rounded-lg"
              />
              <button className="w-12 h-12 border border-[#00000033] rounded-lg flex items-center justify-center cursor-pointer">
                <ImageIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Field Inputs */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">
                Field name
              </div>
              <input
                type="text"
                placeholder="Field name"
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">
                Field type
              </div>
              <Select value={value2} onValueChange={(val) => setValue2(val)}>
                <SelectTrigger className="px-4 py-6 rounded-xl border border-[#00000033] w-full">
                  <SelectValue>{value2}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    className="border-b border-[#00000033] rounded-b-none py-2"
                    value="Input"
                  >
                    Input
                  </SelectItem>
                  <SelectItem
                    className="border-b border-[#00000033] rounded-b-none py-2"
                    value="Button"
                  >
                    Button
                  </SelectItem>
                  <SelectItem className="py-2" value="Selection">
                    Selection
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">
                Price
              </div>
              <input
                type="text"
                placeholder="$00.00"
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={onSave}
            className="w-full bg-[#6DA40A] text-white py-3 rounded-lg hover:bg-[#6ea40acb] transition-colors cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
