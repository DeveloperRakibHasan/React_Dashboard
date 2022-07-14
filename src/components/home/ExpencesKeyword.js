import React from 'react'
import Salles from './Salles'
import Balance from './Balance'
import ExpencesProfit from './ExpencesProfit'

function ExpencesKeyword() {
  return (
    <div className='grid grid-flow-row grid-cols-2 gap-8'>
        <Salles />
        <Balance />
        <ExpencesProfit />
    </div>
  )
}

export default ExpencesKeyword