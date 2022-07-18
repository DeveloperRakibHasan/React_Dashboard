import React from 'react'
import SallesDicrement from './SallesDicrement'
import ProfitGraph from './ProfitGraph'
import ProfitRange from './ProfitRange'

function ProfitHistory() {
  return (
    <div className='grid grid-flow-row grid-cols-2 xl:gap-8 xm:gap-6 xl:mr-8 xm:mr-6'>
    <SallesDicrement />
    <ProfitGraph />
    <ProfitRange />
    </div>
  )
}

export default ProfitHistory