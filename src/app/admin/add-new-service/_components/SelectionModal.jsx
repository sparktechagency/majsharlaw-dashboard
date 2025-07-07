import React from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
export default function SelectionModal({
  show,
  onClose,
  selectionOptions = [],
  onAddOption,
  onDeleteOption,
  onSave,
  newOption,
  setNewOption,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="bg-[#6DA40A] text-white p-4 rounded-t-lg flex items-center justify-between">
          <h3 className="text-lg font-medium">Create action</h3>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* New Option Form */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">
                Selection text
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={newOption.text}
                onChange={(e) =>
                  setNewOption({ ...newOption, text: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Type</div>

              <Select
                value={newOption.type}
                onValueChange={(val) =>
                  setNewOption({ ...newOption, type: val })
                }
              >
                <SelectTrigger className="px-4 py-5 rounded-xl border border-[#00000033] w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
              
                  <SelectItem
                    className="border-b border-[#00000033] py-2"
                    value="Small"
                  >
                    Small
                  </SelectItem>
                  <SelectItem className="py-2" value="Medium">
                    Medium
                  </SelectItem>
                  <SelectItem className="py-2" value="Large">
                    Large
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
                value={newOption.price}
                onChange={(e) =>
                  setNewOption({ ...newOption, price: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#00000033] rounded-lg"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={onAddOption}
                className="w-full border-2 border-[#6DA40A] text-[#6DA40A] py-3 rounded-lg hover:bg-[#6ea40aa9] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>

          {/* Selection List */}
          <div className="grid grid-cols-3 gap-4">
            {selectionOptions.map((option) => (
              <div key={option.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium">{option.text}</div>
                    <div className="text-sm text-gray-500">
                      {option.type} • {option.price}
                    </div>
                  </div>
                  <button
                    onClick={() => onDeleteOption(option.id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
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
