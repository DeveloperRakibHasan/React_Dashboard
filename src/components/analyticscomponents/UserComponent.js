import React from 'react'
import { useAuth } from '../../context/AuthContext'
import user from '../../assets/img/user.jpg'
import LinesEllipsis from 'react-lines-ellipsis';

function UserComponent() {
    const { currentUser } = useAuth();
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1 xl:ml-8 xm:ml-6 lg:mr-0 xm:mr-6 xl:mt-8 xm:mt-6 col-span-2'>
   <div className='grid grid-flow-row grid-cols-2'>
   <div>
      <span className='xm:text-[18px] sm:text-[20px] text-green-500 font-semibold'>Congratulations {currentUser.displayName}</span>
      <p className='text-[16px] text-gray-400 mt-4'>
      <LinesEllipsis
          text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        </p>
      <button className='py-2 px-4 rounded-lg bg-blue-50 text-gray-500 mt-6'>View Sales</button>
    </div>
    <div className='flex items-end justify-center'>
      <img className='mt-6 sm:w-5/12 xm:w-10/12' src={user} alt='' />
    </div>
   </div>
</div>
  )
}

export default UserComponent