import React from "react";
import { Plus, Trash2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

export default function FieldEditor({
  page,
  addField,
  deleteField,
  onUpdateField,
  onSave,
}) {
  if (page.type !== "Input") return null;

  return (
    <>
      {/* Field Headers */}
      <div className="flex gap-4 mb-4">
        <div className="text-sm font-medium text-gray-700 w-[60%]">
          Field name
        </div>
        <div className="text-sm font-medium text-gray-700 w-[15%]">
          Field type
        </div>
        <div className="text-sm font-medium text-gray-700 w-[25%]">Price</div>
      </div>

      {/* Field List */}
      <div className="space-y-3">
        {page.fields.map((field) => (
          <div key={field.id} className="flex gap-4 items-center justify-end">
            {/* Field Name */}
            {field.type === "Text" && (
              <input
                type="text"
                value={field.name}
                onChange={(e) =>
                  onUpdateField(page.id, field.id, { name: e.target.value })
                }
                className="px-4 py-4 p-3 rounded-3xl border border-[#00000033] w-[60%]"
              />
            )}
            {field.type === "Text Aria" && (
              <textarea
                type="text"
                onChange={(e) =>
                  onUpdateField(page.id, field.id, { name: e.target.value })
                }
                className="px-4 py-4 p-3 rounded-xl border border-[#00000033] w-[60%]"
              >
                {field.name}
              </textarea>
            )}

            {/* Field Type */}
            <Select
              value={field.type}
              onValueChange={(val) =>
                onUpdateField(page.id, field.id, { type: val })
              }
            >
              <SelectTrigger className="px-4 py-5 rounded-xl border border-[#00000033] w-[15%]">
                <SelectValue className="  flex gap-4">
                  {" "}
                  {field.type === "Option" ? (
                    <Image
                      src={"/assets/icons/option-icon.svg"}
                      height={20}
                      width={20}
                    />
                  ) : field.type === "Text" ? (
                    <Image
                      src={"/assets/icons/text-icon.svg"}
                      height={20}
                      width={20}
                    />
                  ) : field.type === "Text Aria" ? (
                    <Image
                      src={"/assets/icons/textaria-icon.svg"}
                      height={20}
                      width={20}
                    />
                  ) : (
                    ""
                  )}{" "}
                  {field.type}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  className="border-b border-[#00000033] rounded-b-none py-2  flex gap-4"
                  value="Option"
                >
                  <Image
                    src={"/assets/icons/option-icon.svg"}
                    height={20}
                    width={20}
                  />{" "}
                  Option
                </SelectItem>
                <SelectItem
                  className="border-b border-[#00000033] rounded-b-none py-2  flex gap-4"
                  value="Text"
                >
                  <Image
                    src={"/assets/icons/text-icon.svg"}
                    height={20}
                    width={20}
                  />{" "}
                  Text
                </SelectItem>
                <SelectItem className="py-2 flex gap-4" value="Text Aria">
                  <Image
                    src={"/assets/icons/textaria-icon.svg"}
                    height={20}
                    width={20}
                  />{" "}
                  Text Aria
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Price & Delete */}
            <div className="flex items-center gap-2 w-[25%]">
              <input
                type="text"
                value={field.price}
                onChange={(e) =>
                  onUpdateField(page.id, field.id, { price: e.target.value })
                }
                className="px-4 py-4 p-3 rounded-3xl border border-[#00000033] w-full"
              />
              <button
                onClick={() => deleteField(page.id, field.id)}
                className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer"
              >
                <Trash2 className="w-6 h-6 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => addField(true)}
          className="bg-[#6DA40A] text-white px-6 py-2 rounded-lg hover:bg-[#6ea40acb] transition-colors flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add field
        </button>
        <button
          onClick={() => onSave(page.id)}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
        >
          Save changes
        </button>
      </div>
    </>
  );
}
