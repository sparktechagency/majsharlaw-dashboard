import React from "react";
import { ArrowUpRight, Trash2 } from "lucide-react";

export default function SelectionEditor({
  page,
  onChangeFieldName,
  onPreviewField,
  onDeleteField,
  onSaveChanges,
}) {
  if (page.type !== "Selection") return null;

  return (
    <>
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-700 mb-2">
          Field name
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={page.fields[0]?.name || ""}
            onChange={(e) => onChangeFieldName(page.id, page.fields[0]?.id, e.target.value)}
            className="px-4 py-4 p-3 rounded-3xl border border-[#00000033] w-full"
          />
          <button
            onClick={() => onPreviewField(true)}
            className="w-16 h-16 border border-[#00000033] rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <ArrowUpRight className="w-6 h-6" />
          </button>
          <button
            onClick={() => onDeleteField(page.id, page.fields[0]?.id)}
            className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer"
          >
            <Trash2 className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>

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
