import React from 'react'
import SallesDicrement from './SallesDicrement'
import ProfitGraph from './ProfitGraph'
import ProfitRange from './ProfitRange'

function ProfitHistory() {
  return (
    <div className='grid grid-flow-row grid-cols-2 gap-8 mt-8 mr-8'>
    <SallesDicrement />
    <ProfitGraph />
    <ProfitRange />
    </div>
  )
}

export default ProfitHistory