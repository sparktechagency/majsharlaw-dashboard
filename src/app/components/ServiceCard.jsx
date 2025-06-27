import Image from 'next/image';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaPen } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Link from 'next/link';

const ServiceCard = () => {
    const pricingOptions = [
        { label: "Less than 1000 square feet", price: "$250.00" },
        { label: "1000 - 3000 square feet", price: "$330.00" },
        { label: "More than 4000 square feet", price: "$500.00" },
        { label: "For 1 room", price: "$50.00" },
    ];
    const movingOptions = [
        { label: "Moving Type", price: "Packing & Moving, Packing, Moving" },
        { label: "Area large", price: "Studio, 1 Bedroom, 2 - 4 bedrooms... " },
        { label: "Moving state", price: "Same, Different" },
        { label: "Area large", price: "$Studio, 1 Bedroom, 2 - 4 bedrooms... " },
    ];
    const plumbOptions = [
        { label: "Issue", price: "Water leak, Water heater, Sink..." },
        { label: "Describe issue", price: "Type" },
        { label: "Type of property", price: "Home, Apartment, Townhouse..." },
        { label: "Current status", price: "Just exploring, ready to hire..." },
    ];
    const carpentaryOptions = [
        { label: "Work type", price: "Furniture making, Custom cabinet" },
        { label: "Describe", price: "Type" },
        { label: "Measurements (if possible)", price: "less then 20 sq ft, ..." },
        { label: "Budget", price: "Low, Mid, High" },
    ];
    const remodelOptions = [
        { label: "Property Type", price: "Apartment, Home / Single Family.." },
        { label: "Own Property?", price: "Yes, Almost, No, Representative" },
        { label: "Planning to renovate", price: "Within a month, 1 - 3 months..." },
        { label: "Areas", price: "Entire home, Bedroom, Deck, Kitchen..." },
        { label: "Approximate size of ouse", price: "in square feet" },
        { label: "Working with anyone?", price: "Yes, No" },
        { label: "Budget", price: "Low, Mid, High" },
    ];

    return (
        <div>
            <div className='grid grid-cols-3 grid-rows-4 gap-2'>
                {/* cleaning */}
                <Card className="row-span-2 w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-end ">
                        <CardTitle className="text-2xl font-semibold">Cleaning Service</CardTitle>
                        <Button variant="outline" size="xl" className="rounded-3xl w-[100px] text-xl py-2 ml-12 hover:cursor-pointer">
                            <FaPen /> Edit
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 space-y-2">
                        {pricingOptions.map((option, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-4 p-3 rounded-3xl border border-[#00000033]"
                            >
                                <span className="text-base font-normal">{option.label}</span>
                                <span className="text-xl font-medium">{option.price}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                {/* Moving */}
                <Card className="row-span-2 col-start-1 row-start-3 w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-end ">
                        <CardTitle className="text-2xl font-semibold">Moving Service</CardTitle>
                        <Button variant="outline" size="xl" className="rounded-3xl w-[100px] text-xl py-2 ml-12 hover:cursor-pointer">
                            <FaPen /> Edit
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 space-y-2">
                        {movingOptions.map((option, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-4 p-3 rounded-3xl border border-[#00000033]"
                            >
                                <span className="text-base font-normal">{option.label}</span>
                                <span className="text-xl font-medium">{option.price}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                {/* plumbing */}
                <Card className="row-span-2 col-start-2 row-start-1 w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-end ">
                        <CardTitle className="text-2xl font-semibold">Moving Service</CardTitle>
                        <Button variant="outline" size="xl" className="rounded-3xl w-[100px] text-xl py-2 ml-12 hover:cursor-pointer">
                            <FaPen /> Edit
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 space-y-2">
                        {plumbOptions.map((option, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-4 p-3 rounded-3xl border border-[#00000033]"
                            >
                                <span className="text-base font-normal">{option.label}</span>
                                <span className="text-xl font-medium">{option.price}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                {/* carpentary */}
                <Card className="row-span-2 col-start-2 row-start-3 w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-end ">
                        <CardTitle className="text-2xl font-semibold">Moving Service</CardTitle>
                        <Button variant="outline" size="xl" className="rounded-3xl w-[100px] text-xl py-2 ml-12 hover:cursor-pointer">
                            <FaPen /> Edit
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 space-y-2">
                        {carpentaryOptions.map((option, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-4 p-3 rounded-3xl border border-[#00000033]"
                            >
                                <span className="text-base font-normal">{option.label}</span>
                                <span className="text-xl font-medium">{option.price}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                {/* remodel */}
                <Card className="row-span-3 col-start-3 row-start-1 w-full mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-end ">
                        <CardTitle className="text-2xl font-semibold">Moving Service</CardTitle>
                        <Button variant="outline" size="xl" className="rounded-3xl w-[100px] text-xl py-2 ml-12 hover:cursor-pointer">
                            <FaPen /> Edit
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 space-y-2">
                        {remodelOptions.map((option, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-4 p-3 rounded-3xl border border-[#00000033]"
                            >
                                <span className="text-base font-normal">{option.label}</span>
                                <span className="text-xl font-medium">{option.price}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
            <Link href={`/admin/add-new-service`}>
                <Button className={`w-2/11 my-8 rounded-3xl hover:cursor-pointer`}>
                    <FiPlus /> Add new service
                </Button>
            </Link>
        </div>
    );
};

export default ServiceCard;