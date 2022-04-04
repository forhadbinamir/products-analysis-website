import React from 'react';
import './DashBoard.css';
import { defs, linearGradient, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [

        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className="Rechart">
            <h2 className='text-4xl mt-10 font-bold'>Chart Board</h2>
            <div className='first-Chart flex justify-between items-center mt-16'>
                <div>
                    <LineChart width={630} height={250} data={data}>
                        <CartesianGrid strokeDasharray={3.3}></CartesianGrid>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <Line type="monotone" dataKey="month" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div>
                    <BarChart width={630} height={250} data={data}>
                        <CartesianGrid strokeDasharray={3.3}></CartesianGrid>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar dataKey={'revenue'} fill="#8884d8"></Bar>
                        <Bar dataKey="investment" fill="#82ca9d"></Bar>
                    </BarChart>

                </div>
            </div >
            <div className="second-Chart flex justify-between items-center mt-16">
                <div className="pieChart">
                    <PieChart width={630} height={250} data={data}>
                        <Pie data={data} dataKey={'sell'} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
                        <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />

                    </PieChart>
                </div>
                <div className="areChart">
                    <AreaChart width={630} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <Line type="monotone" dataKey="month" stroke="#82ca9d" />
                    </AreaChart>
                </div>
            </div>
        </div >
    );
};

export default DashBoard;