"use client";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Sat", value: 1343.3, color: "#A78BFA" },
    { name: "Sun", value: 740.1, color: "#FCA5A5" },
    { name: "Mon", value: 1201.8, color: "#67E8F9" },
    { name: "Tue", value: 954.6, color: "#FDBA74" },
    { name: "Wed", value: 1110.7, color: "#60A5FA" },
    { name: "Thu", value: 1308.7, color: "#6EE7B7" },
    { name: "Fri", value: 1264.2, color: "#C084FC" },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

export default function DonutChart() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-xl font-bold mb-3">Earning Statistics</h2>
            <div className="bg-white p-6 rounded-2xl w-full max-w-7xl mx-auto shadow-sm flex justify-evenly items-center gap-6 relative">
                {/* Donut Chart */}
                <div className="relative w-11/12 h-[500px]">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius={60}
                                outerRadius={200}
                                paddingAngle={0}
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center total */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-black">
                        {total.toFixed(1)}
                    </div>
                </div>

                {/* Right side legend: Days only */}
                <div className="flex flex-col gap-3 text-sm">
                    {data.slice().map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span
                                className="block w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
