import React from 'react'
import OrderHistory from './OrderHistory'
import Salles from '../home/Salles'

function OrderComponent() {
  return (
    <div className='grid grid-flow-row grid-cols-2 xl:gap-8 xm:gap-6 xl:mt-8 lg:mt-6 xm:col-span-2 md:col-span-1 xm:row-start-2 lg:row-auto'>
    <OrderHistory />
    <Salles />
    </div>
  )
}

export default OrderComponent