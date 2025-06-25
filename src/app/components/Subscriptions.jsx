import { Edit, Trash2 } from 'lucide-react';
import React from 'react';

const Subscriptions = () => {
    return (
        <div>
            <div className="w-1/2 bg-white border border-gray-200 rounded-lg p-6 shadow-md relative">
                {/* Header Text */}
                <p className="text-[#BBBBBB] text-2xl mb-2">Unlock the most powerful AI research assistant</p>

                {/* Plan Title and Price */}
                <h2 className="text-3xl font-semibold text-[#585574] mb-2">Monthly</h2>
                <p className="text-5xl font-bold text-[#585574] mb-4">$20.00</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                    <li className="flex gap-2 items-center text-gray-700">
                        <img src="/assets/check.png" alt="" />
                        <span className="text-[#595959] mr-2">
                            Unlock AI generate image</span>
                    </li>
                    <li className="flex gap-2 items-center text-gray-700">
                        <img src="/assets/check.png" alt="" />
                        <span className="text-[#595959] mr-2">
                            Pro support from our team</span>
                    </li>
                    <li className="flex gap-2 items-center text-gray-700">
                        <img src="/assets/check.png" alt="" />
                        <span className="text-[#595959] mr-2">
                            Early access to new features</span>
                    </li>
                    
                </ul>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button className="flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200">
                        <Edit size={16} className="mr-2" /> Edit
                    </button>
                    <button className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                        <Trash2 size={16} className="mr-2" /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;