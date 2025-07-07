import { Eye, Trash } from "lucide-react";

const UserRow = ({ user, onView, onDelete }) => (
  <tr className="text-base font-normal text-black bg-white">
    <td className="py-5 px-4 text-center">{user.id}</td>
    <td className="py-3 px-4 text-center text-[#0000004D]">|</td>
    <td className="py-5 px-4 text-center">
      <div className="flex justify-center items-center text-xl gap-2">
        <img
          src={user.avatar}
          alt="avatar"
          width={39}
          height={39}
          className="rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/24x24/cccccc/000000?text=A";
          }}
        />
        {user.name}
      </div>
    </td>
    <td className="py-3 px-4 text-center text-[#0000004D]">|</td>
    <td className="py-5 px-4 text-lg text-center">{user.email}</td>
    <td className="py-3 px-4 text-center text-[#0000004D]">|</td>
    <td className="py-5 px-4 text-lg text-center">{user.Adress}</td>
    <td className="py-3 px-4 text-center text-[#0000004D]">|</td>
    <td className="py-5 px-4 text-center">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => onView(user.id)}
          className="px-2 py-2 text-xs border border-none bg-[#F2FFDA] rounded-lg cursor-pointer hover:opacity-80"
        >
          <Eye className="text-[#6DA40A]" />
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-2 py-2 text-xs border border-none text-[#FF5353] bg-[#FFE8E8] rounded-lg cursor-pointer hover:opacity-80 "
        >
          <Trash />
        </button>
      </div>
    </td>
  </tr>
);

export default UserRow;
