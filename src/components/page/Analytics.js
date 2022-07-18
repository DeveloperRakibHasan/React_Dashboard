import React from 'react'
import UserComponent from '../analyticscomponents/UserComponent'
import OrderComponent from '../analyticscomponents/OrderComponent'
import TotalReceved from '../analyticscomponents/TotalReceved'
import ProfitHistory from '../analyticscomponents/ProfitHistory'

function Analytics() {
   
  return (
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 2xl:ml-[16.66%]'>
        <div className='grid grid-flow-row grid-cols-3 xl:gap-8 xm:gap-6'>
        <UserComponent />
        <OrderComponent />
        <TotalReceved />
        <ProfitHistory />
        </div>
    </div>
  )
}

export default Analytics