import { Eye, Trash } from "lucide-react";

const ServiceRow = ({ service, onView, onDelete, renderValue }) => {
  return (
    <tr className="text-sm text-black bg-white">
      <td className="py-3 px-4 text-center">
        <div className="flex text-xl justify-center items-center gap-2">
          <img
            src={service.user.avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          {service.user.name}
        </div>
      </td>
      <td className="py-3 px-4 text-center text-xl">{service.user.email}</td>
      <td className="py-3 px-4 text-center text-xl">
        <div>
          {new Date(service.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </div>
        <p className="font-light mr-32">{service.time}</p>
      </td>
      <td className="py-3 px-4 text-center text-xl">{service.serviceType}</td>
      <td className="py-3 px-4 text-center">{renderValue(service.status)}</td>
      <td className="py-3 px-4 text-center">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onView(service.id)}
            className="px-2 py-2 bg-[#F2FFDA] rounded-lg hover:opacity-80 cursor-pointer"
          >
            <Eye className="text-[#6DA40A]" />
          </button>
          <button
            onClick={() => onDelete(service.id)}
            className="px-2 py-2 bg-[#FFE8E8] text-[#FF5353] rounded-lg hover:opacity-80 cursor-pointer"
          >
            <Trash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ServiceRow;
