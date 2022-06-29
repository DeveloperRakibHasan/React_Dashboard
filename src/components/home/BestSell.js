import React from 'react'
import { useAuth } from '../../context/AuthContext'
import trophy from '../../assets/img/trophy1.png'
import '../style/custom.css'

function BestSell() {
  const { currentUser } = useAuth();
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1'>
        <div className='grid grid-flow-row grid-cols-2'>
        <div>
          <span className='text-[20px] text-green-500 font-semibold'>Congratulations {currentUser.displayName}</span>
          <p className='text-[16px] text-gray-400'>Best seller of the month</p>
          <h4 className='text-[#6A6CF6] text-[22px] mt-3'>$48.9K</h4>
          <h6 className='text-[#A3ACB7] mb-3'>78% target</h6>
          <button className='py-2 px-4 rounded-lg bg-[#6A6CF6] text-gray-100 mt-4'>View Sales</button>
        </div>
        <div className='flex items-end justify-center'>
          <img className='animation-trophy absolute mt-6 w-32' src={trophy} alt='' />
        </div>
        </div>
    </div>
  )
}

export default BestSell