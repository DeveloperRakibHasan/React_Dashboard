import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import flag from '../../assets/img/flag.png';
import bd from '../../assets/img/bd.png';
import india from '../../assets/img/in.png';

function SearchCatagory() {
  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto'>
         <div className='flex justify-between'>
        <h2 className='text-[20px] font-semibold text-gray-500'>Search by Catagory</h2>
        <BiDotsVerticalRounded />
     </div>
     <p>Manually Search Catagory</p>
     <div className='flex justify-between items-center mt-8'>
        <div className='flex items-center gap-4'>
            <img className='w-10 h-10 rounded-full' src={flag} alt='' />
            <div>
                <h4 className='flex items-center font-semibold text-gray-600 gap-2 text-[22px]'>$845,666 <span className='text-green-500 text-[14px]'>25.66%</span></h4>
                <p>lorem ipsum text long long</p>
            </div>
        </div>
        <div>
            88.5k
        </div>
     </div>
     <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-4'>
            <img className='w-10 h-10 rounded-full' src={bd} alt='' />
            <div>
                <h4 className='flex items-center font-semibold text-gray-600 gap-2 text-[22px]'>$845,666 <span className='text-red-500 text-[14px]'>25.66%</span></h4>
                <p>lorem ipsum text long long</p>
            </div>
        </div>
        <div>
            66.5k
        </div>
     </div>
     <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-4'>
            <img className='w-10 h-10 rounded-full' src={india} alt='' />
            <div>
                <h4 className='flex items-center font-semibold text-gray-600 gap-2 text-[22px]'>$845,666 <span className='text-green-500 text-[14px]'>25.66%</span></h4>
                <p>lorem ipsum text long long</p>
            </div>
        </div>
        <div>
            88.5k
        </div>
     </div>
     <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-4'>
            <img className='w-10 h-10 rounded-full' src={flag} alt='' />
            <div>
                <h4 className='flex items-center font-semibold text-gray-600 gap-2 text-[22px]'>$845,666 <span className='text-yellow-500 text-[14px]'>25.66%</span></h4>
                <p>lorem ipsum text long long</p>
            </div>
        </div>
        <div>
            75.5k
        </div>
     </div>
    </div>
  )
}

export default SearchCatagory