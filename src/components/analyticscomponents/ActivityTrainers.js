import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";

function ActivityTrainers() {
  return (
    <div className='w-full h-full bg-white box-shadow-1 xm:col-span-2 md:col-auto rounded-xl xl:p-8 xm:p-6'>
        <div className='flex justify-between items-center mb-4'>
        <h4 className='text-[22px] font-semibold text-gray-600'>Activity Timelines</h4>
        <BiDotsVerticalRounded />
      </div>
      <div className='flex gap-10 mt-6 border-l'>
        <div>
            <span className='ml-[-9px] absolute w-4 h-4 rounded-full bg-sky-300'></span>
            <div className='ml-10'>
                <h4 className='text-gray-500 font-semibold text-[18px] mb-2'>2K spatial meaning</h4>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
        </div>
        <p>12 min ago</p>
      </div>
      <div className='flex gap-10 pt-6 border-l'>
        <div>
            <span className='ml-[-9px] absolute w-4 h-4 rounded-full bg-yellow-300'></span>
            <div className='ml-10'>
                <h4 className='text-gray-500 font-semibold text-[18px] mb-2'>44K spatial meaning</h4>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
        </div>
        <p>36 min ago</p>
      </div>
      <div className='flex gap-10 pt-6 border-l'>
        <div>
            <span className='ml-[-9px] absolute w-4 h-4 rounded-full bg-red-300'></span>
            <div className='ml-10'>
                <h4 className='text-gray-500 font-semibold text-[18px] mb-2'>6K spatial meaning</h4>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
        </div>
        <p>44 min ago</p>
      </div>
    </div>
  )
}

export default ActivityTrainers