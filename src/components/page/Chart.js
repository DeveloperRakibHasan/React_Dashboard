import React, {useEffect, useState} from 'react'
import CurrentRatting from '../chart/CurrentRatting'
import ViewActivity from '../chart/ViewActivity'
import ExpencesKeyword from '../home/ExpencesKeyword'
import Heatmap from '../chart/Heatmap'
import SellStatus from '../chart/SellStatus'
import SearchCatagory from '../chart/SearchCatagory'
import '../style/userLoader.css'

function Chart() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

  return (
   <>
    {
        loading ? 
        <div className="flex w-full h-screen justify-center items-center pt-[65px]">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        :
        <div className='bg-[#F5F5F9] pt-[65px] pb-10 2xl:ml-[16.66%]'>
            <div className='grid grid-flow-row lg:grid-cols-3 xm:grid-cols-2 2xl:gap-8 xm:gap-6 xl:ml-8 xm:ml-6 2xl:mt-8 xm:mt-6 xl:mr-8 xm:mr-6'>
                <CurrentRatting />
                <ViewActivity />
                <ExpencesKeyword />
                <Heatmap />
                <SearchCatagory />
                <SellStatus />
            </div>
        </div>
    }
   </>
  )
}

export default Chart