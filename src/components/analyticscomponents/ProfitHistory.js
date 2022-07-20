import React from 'react'
import SallesDicrement from './SallesDicrement'
import ProfitGraph from './ProfitGraph'
import ProfitRange from './ProfitRange'

function ProfitHistory() {
  return (
    <div className='grid grid-flow-row grid-cols-2 xl:gap-8 xm:gap-6 lg:row-auto md:row-start-2 xm:row-start-3 xm:col-span-2 md:col-span-1 lg:col-auto md:col-start-2'>
    <SallesDicrement />
    <ProfitGraph />
    <ProfitRange />
    </div>
  )
}

export default ProfitHistory