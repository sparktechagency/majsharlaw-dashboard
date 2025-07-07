import React from "react";
import { Plus, Trash2, ArrowUpRight } from "lucide-react";

export default function ButtonEditor({
  page,
  onChangeButtonText,
  onCreateAction,
  onPreviewAction,
  onDeleteAction,
  onSaveChanges,
}) {
  if (page.type !== "Button") return null;

  return (
    <>
      <div className="flex gap-8 items-center mb-6">
        {/* Button Text */}
        <div className="w-[70%]">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Button Text
          </div>
          <input
            type="text"
            value={page.buttonText || ""}
            onChange={(e) => onChangeButtonText(page.id, e.target.value)}
            className="px-4 py-4 p-3 rounded-3xl border border-[#00000033] w-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="w-[30%]">
          <div className="text-sm font-medium text-gray-700 mb-2">Action</div>
          <div className="flex items-center justify-between gap-2 w-full">
            <button
              onClick={() => onCreateAction(true)}
              className="bg-[#6DA40A] text-white px-4 py-4 rounded-lg hover:bg-[#6ea40acb] transition-colors flex items-center gap-2 w-[40%] cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Create
            </button>

            <button
              onClick={() => onPreviewAction(true)}
              className="w-16 h-16 border border-[#00000033] rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <ArrowUpRight className="w-6 h-6" />
            </button>

            <button
              onClick={() => onDeleteAction(page.id)}
              className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer"
            >
              <Trash2 className="w-6 h-6 text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div className="flex justify-end">
        <button
          onClick={() => onSaveChanges(page.id)}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
        >
          Save changes
        </button>
      </div>
    </>
  );
}
