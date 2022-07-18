import React from 'react'
import OrderHistory from './OrderHistory'
import Salles from '../home/Salles'

function OrderComponent() {
  return (
    <div className='grid grid-flow-row grid-cols-2 xl:gap-8 xm:gap-6 xl:mt-8 xm:mt-6 xl:mr-8 xm:mr-6'>
    <OrderHistory />
    <Salles />
    </div>
  )
}

export default OrderComponent