import React from 'react'
import { FcFile } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineArrowSmDown } from "react-icons/hi";

function SallesDicrement() {
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1'>
        <div className='flex justify-between mb-4'>
        <span className='p-3 bg-red-200 rounded-xl'><FcFile/></span>
        <BiDotsVerticalRounded />
        </div>
        <p className='text-[#6C798B]'>Sales</p>
        <h2 className='text-[24px] font-semibold text-[#5A697D]'>-$459</h2>
        <p className='flex items-center font-medium text-red-400'>
            <HiOutlineArrowSmDown />
            -18.42%
        </p>
    </div>
  )
}

export default SallesDicrement