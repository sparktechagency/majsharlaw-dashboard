import React from "react";
import { X, Edit } from "lucide-react";

export default function ActionModal({
  show,
  onClose,
  modalName,
  setModalName,
  fieldName = "Field name here",
  fieldType = "Text",
  price = "$00.00",
  onEdit,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        {/* Header */}
        <div className="bg-[#6DA40A] text-white p-4 rounded-t-lg flex items-center justify-between">
          <h3 className="text-lg font-medium">Action</h3>
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

          {/* Field Details */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Field name</div>
              <input
                type="text"
                defaultValue={fieldName}
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
                
              />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Field type</div>
              <input
                type="text"
                defaultValue={fieldType}
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
                
              />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Price</div>
              <input
                type="text"
                defaultValue={price}
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
                
              />
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="w-full bg-[#6DA40A] text-white py-3 rounded-lg hover:bg-[#6ea40acb] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
