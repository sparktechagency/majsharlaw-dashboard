import { CreditCard, LibraryBig, TrendingUp, Users2 } from 'lucide-react';
import BookingStatictis from './BookingStatictis';
import DonutChart from './DonutChart';

const Dashboard = () => {
    return (
        <div className=' mx-auto bg-[#F6F6F6] h-screen'>
            <div className='grid grid-cols-3 p-4 gap-4'>
                <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6 pb-8 shadow-sm">
                    <div className='mt-14'>
                        <p className="text-3xl font-base text-gray-800">Earnings</p>
                        <h2 className="text-4xl font-semibold text-black mt-1">$500.00</h2>
                    </div>
                    <div className="rounded-full bg-[#F3FFDD] p-4">
                        <CreditCard className="text-[#6DA40A] w-9 h-9" />
                    </div>
                </div>
                <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6 pb-8 shadow-sm">
                    <div className='mt-14'>
                        <p className="text-3xl font-base text-gray-800">Appointments</p>
                        <h2 className="text-4xl font-semibold text-black mt-1">16</h2>
                    </div>
                    <div className="rounded-full bg-[#F3FFDD] p-4">
                        <LibraryBig className="text-[#6DA40A] w-9 h-9" />
                    </div>
                </div>
                <div className="flex justify-between items-center rounded-2xl border border-[#00000033] bg-white px-6 pb-8 shadow-sm">
                    <div className='mt-14'>
                        <p className="text-3xl font-base text-gray-800">Users</p>
                        <h2 className="text-4xl font-semibold text-black mt-1">1200</h2>
                    </div>
                    <div className="rounded-full bg-[#F3FFDD] p-4">
                        <Users2 className="text-[#6DA40A] w-9 h-9" />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 p-4'>
                <BookingStatictis/>
                <DonutChart/>
            </div>
        </div >
    );
};

export default Dashboard;
