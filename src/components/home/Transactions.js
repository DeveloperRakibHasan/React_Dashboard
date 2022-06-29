import React from 'react'
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { FcOpenedFolder } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Transactions() {
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1'>
    <div className='flex justify-between mb-4'>
      <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcOpenedFolder/></span>
      <BiDotsVerticalRounded />
    </div>
    <p className='text-[#6C798B]'>Transactions</p>
    <h2 className='text-[24px] font-semibold text-[#5A697D]'>$14,859</h2>
    <p className='flex items-center font-medium text-[#8CDA55]'>
        <HiOutlineArrowSmUp />
        +28.14%
      </p>
  </div>
  )
}

export default Transactions