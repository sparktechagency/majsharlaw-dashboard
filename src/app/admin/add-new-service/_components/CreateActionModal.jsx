import React from "react";
import { X, Plus } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
export default function CreateActionModal({
  show,
  onClose,
  modalName,
  setModalName,
  fieldName,
  setFieldName,
  fieldType,
  setFieldType,
  price,
  setPrice,
  onAdd,
  onSave,
}) {
  if (!show) return null;


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        {/* Header */}
        <div className="bg-[#6DA40A] text-white p-4 rounded-t-lg flex items-center justify-between">
          <h3 className="text-lg font-medium">Create action</h3>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Modal Name */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">Modal name</div>
            <input
              type="text"
              defaultValue={modalName}
              onChange={(e) => setModalName(e.target.value)}
              placeholder="Type here"
              className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
            />
          </div>

          {/* Field Inputs */}
         <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Field name</div>
              <input
                type="text"
                defaultValue={fieldName}
                onChange={(e) => setFieldName(e.target.value)}
                placeholder="Type here"
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
              />
            </div>
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
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Price</div>
              <input
                type="text"
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="$00.00"
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
              />
            </div>
          </div>

          {/* Add Button */}
          <button
            onClick={onAdd}
            className="border-2 border-[#6DA40A] text-[#6DA40A] px-6 py-2 rounded-lg hover:bg-[#6ea40aa9] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>

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
