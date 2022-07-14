import React from 'react'
import UserComponent from '../analyticscomponents/UserComponent'
import OrderComponent from '../analyticscomponents/OrderComponent'
import TotalReceved from '../analyticscomponents/TotalReceved'

function Analytics() {
   
  return (
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 ml-[16.66%]'>
        <div className='grid grid-flow-row grid-cols-3 gap-8'>
        <UserComponent />
        <OrderComponent />
        </div>
        <div className='grid grid-flow-row grid-cols-3 gap-8'>
        <TotalReceved />
        </div>
    </div>
  )
}

export default Analytics