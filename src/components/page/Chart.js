import React from 'react'
import CurrentRatting from '../chart/CurrentRatting'
import ViewActivity from '../chart/ViewActivity'
import ExpencesKeyword from '../home/ExpencesKeyword'
import Heatmap from '../chart/Heatmap'
import SellStatus from '../chart/SellStatus'

function Chart() {
  return (
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 2xl:ml-[16.66%]'>
        <div className='grid grid-flow-row lg:grid-cols-3 xm:grid-cols-2 2xl:gap-8 xm:gap-6 xl:ml-8 xm:ml-6 2xl:mt-8 xm:mt-6 xl:mr-8 xm:mr-6'>
            <CurrentRatting />
            <ViewActivity />
            <ExpencesKeyword />
            <Heatmap />
            <SellStatus />
        </div>
    </div>
  )
}

export default Chart