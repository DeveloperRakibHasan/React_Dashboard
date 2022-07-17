import React from 'react'
import { FcFile } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineArrowSmUp } from "react-icons/hi";

function Salles() {
  return (
    <div className='bg-white rounded-xl 2xl:p-6 lg:p-4 box-shadow-1'>
        <div className='flex justify-between mb-4'>
        <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
        <BiDotsVerticalRounded />
        </div>
        <p className='text-[#6C798B]'>Sales</p>
        <h2 className='2xl:text-[24px] lg:text-[20px] font-semibold text-[#5A697D]'>$4,679</h2>
        <p className='flex items-center 2xl:text-[16px] xl:text-[14px] font-medium text-[#8CDA55]'>
            <HiOutlineArrowSmUp />
            +28.42%
        </p>
    </div>
  )
}

export default Salles