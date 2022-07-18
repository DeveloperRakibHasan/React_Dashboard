import React from 'react'
import Salles from './Salles'
import Balance from './Balance'
import ExpencesProfit from './ExpencesProfit'

function ExpencesKeyword() {
  return (
    <div className='grid grid-flow-row grid-cols-2 xl:gap-8 xm:gap-6 xm:col-span-2 md:col-auto'>
        <Salles />
        <Balance />
        <ExpencesProfit />
    </div>
  )
}

export default ExpencesKeyword