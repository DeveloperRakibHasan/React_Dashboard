import React from 'react'
import { Line } from 'rc-progress';


function Balance() {
   
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1'>
        <p className='text-[#6C798B] 2xl:text-[18px] xl:text-[16px]'>Balence</p>
        <h2 className='text-[24px] font-semibold text-[#5A697D] mb-2'>724K</h2>
        <span className='p-1 rounded-md bg-sky-200'>+8.00%</span>
        <div className='mt-4'>
        <p className='mb-1'>Your Profit</p>
        <Line percent={78} strokeWidth={8} trailWidth={8} strokeColor="#08C4EC" trailColor='#fff' />
        </div>
    </div>
  )
}

export default Balance