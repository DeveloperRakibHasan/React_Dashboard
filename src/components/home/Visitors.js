import React from 'react'
import { BarChart, Legend, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { HiOutlineArrowSmDown } from "react-icons/hi";

function Visitors() {

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
    <div className='md:mx-6 sm:mx-2 sm:mb-0 xm:mb-10'>
    <div className='flex justify-between'>
      <h6 className='2xl:text-[22px] sm:text-[20px] font-medium text-gray-400'>New visitors</h6>
      <p className='text-gray-400'>Last Week</p>
    </div>
   <div className='flex justify-between items-end'>
    <div>
    <h2 className='2xl:text-[40px] sm:text-[36px] xm:text-[30px] text-[#5A697D] font-medium'>23%</h2>
    <p className='flex items-center font-medium text-red-500'>
      <HiOutlineArrowSmDown />
      -13.24%
    </p>
    </div>
    <div className='w-full'>
    <ResponsiveContainer width='100%' height={130}>
      <BarChart data={weekdata}>
        <CartesianGrid />
        <XAxis fontSize={14} dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#F0F0FC" radius={30} legendType="none" />
      </BarChart>
    </ResponsiveContainer>
    </div>
   </div>
  </div>
  )
}

export default Visitors