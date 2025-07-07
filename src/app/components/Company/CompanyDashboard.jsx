import { CreditCard, LibraryBig, TrendingUp, Users2 } from "lucide-react";
import BookingStatictis from "../BookingStatictis";
import DonutChart from "../DonutChart";


const CompanyDashboard = () => {
  return (
    <div className=" mx-auto bg-[#F6F6F6] h-screen">
      <div className="grid grid-cols-3 p-4 gap-4">
        <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6 pb-8 shadow-sm">
          <div className="mt-14">
            <p className="text-3xl font-base text-gray-800">Earnings</p>
            <h2 className="text-4xl font-semibold text-black mt-1">$500.00</h2>
          </div>
          <div className="rounded-full bg-[#F3FFDD] p-4">
            <CreditCard className="text-[#6DA40A] w-9 h-9" />
          </div>
        </div>
        <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6 pb-8 shadow-sm">
          <div className="mt-14">
            <p className="text-3xl font-base text-gray-800">Service Providers</p>
            <h2 className="text-4xl font-semibold text-black mt-1">16</h2>
          </div>
          <div className="rounded-full bg-[#F3FFDD] p-4">
            <LibraryBig className="text-[#6DA40A] w-9 h-9" />
          </div>
        </div>
        <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6 pb-8 shadow-sm">
          <div className="mt-14">
            <p className="text-3xl font-base text-gray-800">Bookings</p>
            <h2 className="text-4xl font-semibold text-black mt-1">1200</h2>
          </div>
          <div className="rounded-full bg-[#F3FFDD] p-4">
            <Users2 className="text-[#6DA40A] w-9 h-9" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 p-4">
        <BookingStatictis
          data={[
            { name: "Sat", value: 20 },
            { name: "Sun", value: 95 },
            { name: "Mon", value: 30 },
            { name: "Tue", value: 15 },
            { name: "Wed", value: 80 },
            { name: "Thu", value: 45 },
            { name: "Fri", value: 85 },
          ]}
        />
        <DonutChart
          data={[
            { name: "Sat", value: 1343.3, color: "#A78BFA" },
            { name: "Sun", value: 740.1, color: "#FCA5A5" },
            { name: "Mon", value: 1201.8, color: "#67E8F9" },
            { name: "Tue", value: 954.6, color: "#FDBA74" },
            { name: "Wed", value: 1110.7, color: "#60A5FA" },
            { name: "Thu", value: 1308.7, color: "#6EE7B7" },
            { name: "Fri", value: 1264.2, color: "#C084FC" },
          ]}
        />
      </div>
    </div>
  );
};

export default CompanyDashboard;
