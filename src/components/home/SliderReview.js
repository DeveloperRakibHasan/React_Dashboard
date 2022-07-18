import React from 'react'

function SliderReview(props) {
  return (
    <div>
        <img className='w-full' src={props.img} alt='' />
        <div className='flex justify-between mt-4'>
        <h4 className='xl:text-[22px] lg:text-[17px] font-semibold'>{props.title}</h4>
        <span className='p-2 bg-[#F0EEFF] text-[#6C5DD3] rounded-md'>$500</span>
        </div>
        <p className='text-gray-700 xl:text-[16px] lg:text-[12px]'>{props.location}</p>
    </div> 
  )
}

export default SliderReview