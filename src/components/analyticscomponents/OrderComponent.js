import React from 'react'
import OrderHistory from './OrderHistory'
import Salles from '../home/Salles'

function OrderComponent() {
  return (
    <div className='grid grid-flow-row grid-cols-2 gap-8 mt-8 mr-8'>
    <OrderHistory />
    <Salles />
    </div>
  )
}

export default OrderComponent