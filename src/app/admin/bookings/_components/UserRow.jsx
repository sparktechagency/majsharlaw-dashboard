"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Trash } from "lucide-react";

export default function UserRow({
  user,
  status,
  onStatusChange,
  onView,
  onDelete,
  renderValue,
}) {
  return (
    <tr className="text-sm text-black bg-white">
      <td className="py-3 px-4 text-center">
        <div className="flex text-xl justify-center items-center gap-2">
          <img
            src={user.avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          {user.name}
        </div>
      </td>

      <td className="py-3 px-4 text-center text-xl">{user.email}</td>

      <td className="py-3 px-4 text-center text-xl">
        {new Date(user.service.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
        <p className="font-light mr-38">{user.service.time}</p>
      </td>

      <td className="py-3 px-4 text-center text-xl">{user.service.serviceType}</td>

      <td className="py-3 px-4 text-center">
        <Select
          value={status}
          onValueChange={(val) => onStatusChange(val)}
        >
          <SelectTrigger className="border-[1px] border-black rounded-2xl px-2 py-6">
            <SelectValue>{renderValue(status)}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="bg-[#007AFF] mb-2 text-base font-medium text-white" value="Pending">
              Pending
            </SelectItem>
            <SelectItem className="bg-[#6DA40A] mb-2 text-base font-medium text-white" value="Approve">
              Approve
            </SelectItem>
            <SelectItem className="bg-[#8C63DA] mb-2 text-base font-medium text-white" value="Ongoing">
              Ongoing
            </SelectItem>
            <SelectItem className="bg-[#FF8C00] mb-2 text-base font-medium text-white" value="Completed">
              Completed
            </SelectItem>
            <SelectItem className="bg-[#FF5353] mb-2 text-base font-medium text-white" value="Decline">
              Decline
            </SelectItem>
          </SelectContent>
        </Select>
      </td>

      <td className="py-3 px-4 text-center">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onView(user.id)}
            className="px-2 py-2 bg-[#F2FFDA] rounded-lg hover:opacity-80 cursor-pointer"
          >
            <Eye className="text-[#6DA40A]" />
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="px-2 py-2 bg-[#FFE8E8] text-[#FF5353] rounded-lg hover:opacity-80 cursor-pointer"
          >
            <Trash />
          </button>
        </div>
      </td>
    </tr>
  );
}
