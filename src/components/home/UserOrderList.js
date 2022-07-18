import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

function UserOrderList() {

  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1 col-span-2'>
        <table className='w-full'>
          <thead>
          <tr>
            <th>Name</th>
            <th>Item</th>
            <th>Value</th>
            <th>Status</th>
            <th>Action</th>
           </tr>
          </thead>
          <tbody>
          <tr>
            <td className='flex gap-2 items-center'><FiUser />Rakib</td>
            <td>Apple</td>
            <td>$500</td>
            <td className='p-2 bg-green-200 rounded-md xl:text-[16px] lg:text-[14px]'>Complete</td>
            <td> <BiDotsVerticalRounded className=' cursor-pointer' />
            </td>
           </tr>
           <tr>
            <td className='flex gap-2 items-center'><FiUser />Shihab</td>
            <td>Banana</td>
            <td>$400</td>
            <td className='p-2 bg-blue-200 rounded-md xl:text-[16px] lg:text-[14px]'>Procecing..</td>
            <td> <BiDotsVerticalRounded className=' cursor-pointer' /></td>
           </tr>
           <tr>
            <td className='flex gap-2 items-center'><FiUser />Miner</td>
            <td>Mango</td>
            <td>$345</td>
            <td className='p-2 bg-red-100 rounded-md xl:text-[16px] lg:text-[14px]'>Canceled</td>
            <td> <BiDotsVerticalRounded className=' cursor-pointer' /></td>
           </tr>
           <tr>
            <td className='flex gap-2 items-center'><FiUser />Rana</td>
            <td>Orange</td>
            <td>$774</td>
            <td className='p-2 bg-green-200 rounded-md xl:text-[16px] lg:text-[14px]'>Complete</td>
            <td> <BiDotsVerticalRounded className=' cursor-pointer' /></td>
           </tr>
           <tr>
            <td className='flex gap-2 items-center'><FiUser />Rakib</td>
            <td>Apple</td>
            <td>$500</td>
            <td className='p-2 bg-yellow-100 rounded-md xl:text-[16px] lg:text-[14px]'>Panding...</td>
            <td> <BiDotsVerticalRounded className=' cursor-pointer' /></td>
           </tr>
          </tbody>
        </table>
    </div>
  )
}

export default UserOrderList