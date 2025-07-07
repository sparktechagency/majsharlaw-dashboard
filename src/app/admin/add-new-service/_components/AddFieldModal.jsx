import React from "react";
import { X } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AddFieldModal({
  show,
  onClose,
  fieldName,
  setFieldName,
  fieldType,
  setFieldType,
  price,
  setPrice,
  onSave,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg">
        {/* Header */}
        <div className="bg-[#6DA40A] text-white p-4 rounded-t-lg flex items-center justify-between">
          <h3 className="text-lg font-medium">Add new field</h3>
          <button className="cursor-pointer" onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Field Name */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">Field name</div>
            <input
              type="text"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              placeholder="Less than 1000 sq ft"
              className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
            />
          </div>

          {/* Field Type */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">Field type</div>
            <Select value={fieldType} onValueChange={setFieldType}>
              <SelectTrigger className="px-4 py-5 rounded-xl border border-[#00000033] w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="border-b border-[#00000033] py-2" value="Option">
                  Option
                </SelectItem>
                <SelectItem className="border-b border-[#00000033] py-2" value="Text">
                  Text
                </SelectItem>
                <SelectItem className="py-2" value="TextArea">
                  Text Area
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">Price</div>
            <div className="relative">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg pr-8"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
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
