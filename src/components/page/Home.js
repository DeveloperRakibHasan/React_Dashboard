import React from 'react'
import '../style/custom.css'
import BestSell from '../home/BestSell';
import Visitors from '../home/Visitors';
import Activity from '../home/Activity';
import Salles from '../home/Salles';
import Profite from '../home/Profite';
import Expences from '../home/Expences';
import Transactions from '../home/Transactions';
import TotalIncome from '../home/TotalIncome';


function Home() {

  return (
    <>
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 ml-[16.66%]'>
      <div className='grid grid-flow-row grid-cols-3 gap-8 my-8 mx-8'>
        <BestSell />
        <div className='bg-white rounded-xl p-6 box-shadow-1 col-span-2'>
           <div className='grid grid-flow-row grid-cols-2'>
            <Visitors />
            <Activity />
           </div>
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-3 gap-8 mx-8'>
        <div className='grid grid-flow-row grid-cols-2 gap-8'>
          <Salles />
          <Profite />
          <Expences />
          <Transactions />
        </div>
        <TotalIncome />
      </div>
    </div>
    </>
   
  )
}

export default Home