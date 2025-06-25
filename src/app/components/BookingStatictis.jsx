"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
    Legend
} from "recharts";

const BookingStatictis = () => {
    const data = [
        { name: "Sat", value: 20 },
        { name: "Sun", value: 95 },
        { name: "Mon", value: 30 },
        { name: "Tue", value: 15 },
        { name: "Wed", value: 80 },
        { name: "Thu", value: 45 },
        { name: "Fri", value: 85 },
    ];
    return (
        <div>
            <h2 className="text-xl font-bold mb-3">Booking Statictis</h2>
            <div className="bg-white p-6 rounded-2xl mx-auto shadow-sm">
                <ResponsiveContainer width={800} height={500}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#84cc16" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#84cc16" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#84cc16"
                            fill="url(#colorGreen)"
                            activeDot={{ r: 6, stroke: "#84cc16", strokeWidth: 2, fill: "white" }}
                            dot={{ stroke: "#84cc16", strokeWidth: 2, fill: "white", r: 4 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BookingStatictis;
