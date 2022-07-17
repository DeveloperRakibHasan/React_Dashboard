import React from 'react'
import { BarChart, Legend, Bar, XAxis, ResponsiveContainer } from 'recharts';

function ProfitGraph() {
    const weekdata = [
        {
          "name": "S",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "M",
          "uv": 3000,
          "pv": 4398
        },
        {
          "name": "T",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "W",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "T",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "S",
          "uv": 3490,
          "pv": 4300
        },
      ]
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1'>
        <p>Previous</p>
        <h2 className='text-[28px] font-vold'>$458K</h2>
        <div className='w-full mt-2'>
            <ResponsiveContainer width='100%' height={70}>
                <BarChart data={weekdata}>
                    <XAxis dataKey="name" />
                    <Legend />
                    <Bar dataKey="pv" fill="#F0F0FC" legendType="none" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ProfitGraph