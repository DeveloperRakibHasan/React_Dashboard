import React from 'react'
import UserComponent from '../analyticscomponents/UserComponent'
import OrderComponent from '../analyticscomponents/OrderComponent'
import TotalReceved from '../analyticscomponents/TotalReceved'
import ProfitHistory from '../analyticscomponents/ProfitHistory'
import OrderStatus from '../analyticscomponents/OrderStatus'
import Transcation from '../analyticscomponents/Transcation'
import AnalTab from '../analyticscomponents/AnalTab'
import ActivityTrainers from '../analyticscomponents/ActivityTrainers'
import ProjectComplete from '../analyticscomponents/ProjectComplete'

function Analytics() {
   
  return (
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 2xl:ml-[16.66%]'>
        <div className='grid grid-flow-row lg:grid-cols-3 xm:grid-cols-2 2xl:gap-8 xm:gap-6 xl:ml-8 xm:ml-6  xl:mr-8 xm:mr-6'>
        <UserComponent />
        <OrderComponent />
        <TotalReceved />
        <ProfitHistory />
        <OrderStatus />
        <AnalTab />
        <Transcation />
        </div>
        <div className='grid grid-flow-row grid-cols-2 2xl:gap-8 xm:gap-6 xl:ml-8 xm:ml-6 xl:mr-8 xm:mr-6 2xl:mt-8 xm:mt-6'>
          <ActivityTrainers />
         <ProjectComplete />
        </div>
    </div>
  )
}

export default Analytics