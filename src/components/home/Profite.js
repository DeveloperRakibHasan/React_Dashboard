import React from 'react'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/custom.css'

function Profite() {

    const bardata= [
        {
          "name": "Jan",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Apr",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Jun",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Dec",
          "uv": 2780,
          "pv": 3908
        },
      ]

  return (
    <div className='bg-white w-full rounded-xl 2xl:p-6 xl:p-4 box-shadow-1'>
        <p className='text-[#6C798B] 2xl:text-[18px] xl:text-[16px]'>Profit</p>
        <h2 className='2xl:text-[24px] xl:text-[20px] font-semibold text-[#5A697D]'>624K</h2>
        <div>
        <ResponsiveContainer width='100%' height={80}>
        <BarChart data={bardata}>
          <XAxis fontSize={14} dataKey="name" />
          <Tooltip />
          <Bar radius={30} dataKey="pv" fill="#9EE06E" />
          <Bar radius={30} dataKey="uv" fill="#EFFAF5" />
        </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
  )
}

export default Profite