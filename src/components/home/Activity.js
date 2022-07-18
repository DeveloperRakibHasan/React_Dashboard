import React from 'react'
import { AreaChart,  Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/custom.css'
import { HiOutlineArrowSmUp } from "react-icons/hi";

function Activity() {
    const data = [
        {
          name: 'A1',
          Total: 1200,
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'A2',
          Total: 1000,
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'A3',
          Total: 900,
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'A4',
          Total: 1300,
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'A5',
          Total: 500,
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'A6',
          Total: 600,
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'A7',
          Total: 1200,
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'A8',
          Total: 2400,
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'A9',
          Total: 600,
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className='md:px-6 sm:px-2 border-l'>
            <div className='flex justify-between items-center'>
              <h6 className='2xl:text-[22px] md:text-[20px] sm:text-[18px] font-medium text-gray-400'>Activity</h6>
              <p className='text-gray-400'>Last Week</p>
            </div>
             <div className='flex justify-between items-end'>
             <div>
             <h2 className='2xl:text-[40px] xm:text-[36px] text-[#5A697D] font-medium'>88%</h2>
              <p className='flex items-center font-medium text-green-500'>
                <HiOutlineArrowSmUp />
                14.24%
              </p>
             </div>
             <div className='w-full'>
             <ResponsiveContainer width="100%" height={130}>
                <AreaChart
                  data={data}
                  >
                  <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8CDA55" stopOpacity={0.8}/>
                      <stop offset="75%" stopColor="#8CDA55" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis fontSize={14} dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" stroke="#8CDA55" fill="url(#total)" fillOpacity={1} dataKey="Total" />
                </AreaChart>
               </ResponsiveContainer> 
              </div>
             </div>
            </div>
  )
}

export default Activity