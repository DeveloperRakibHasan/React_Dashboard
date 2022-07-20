import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FcFile } from "react-icons/fc";

function Transcation() {
  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto'>
     <div className='flex justify-between items-center mb-4'>
        <div>
        <h4 className='text-[22px] font-semibold text-gray-600'>Order Status</h4>
        <p className='text-gray-500'>local $540 order place</p>
        </div>
        <BiDotsVerticalRounded />
      </div>
      <div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-4 items-center'>
                  <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
                <div>
                    <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                    <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
                </div>
              </div>
              <div className='flex items-center gap-2 t'>
              <span>8.6%</span>
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-4 items-center'>
                  <span className='p-3 bg-blue-50 rounded-xl'><FcFile/></span>
                <div>
                    <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                    <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
                </div>
              </div>
              <div className='flex items-center gap-2 t'>
              <span>8.6%</span>
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-4 items-center'>
                  <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
                <div>
                    <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                    <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
                </div>
              </div>
              <div className='flex items-center gap-2 t'>
              <span>8.6%</span>
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-4 items-center'>
                  <span className='p-3 bg-red-50 rounded-xl'><FcFile/></span>
                <div>
                    <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                    <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
                </div>
              </div>
              <div className='flex items-center gap-2 t'>
              <span>8.6%</span>
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-4 items-center'>
                  <span className='p-3 bg-green-50 rounded-xl'><FcFile/></span>
                <div>
                    <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                    <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
                </div>
              </div>
              <div className='flex items-center gap-2 t'>
              <span>8.6%</span>
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-4 items-center'>
                  <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
                <div>
                    <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                    <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
                </div>
              </div>
              <div className='flex items-center gap-2 t'>
              <span>8.6%</span>
              </div>
            </div>
          </div>
   </div>
  )
}

export default Transcation