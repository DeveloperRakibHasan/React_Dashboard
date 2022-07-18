import React, {useState} from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FcFile } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";
import ReactApexChart from 'react-apexcharts';
import { FiChevronRight } from "react-icons/fi";
import '../style/custom.css'

function TotalBalance() {
    const [line] = useState ({
          
        series: [
          {
            data: [10, 20, 10, 30, 20, 40]
          },
        ],
        options: {
          
          chart: {
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#EBECFF',
              top: 10,
              left: 7,
              blur: 4,
              opacity: 1
            },
            
          },
          colors: ['#FFCC00'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth'
          },
          markers: {
            size: 0
          },
          tooltrip: false,
        }
    })
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1 lg:col-auto md:col-span-2'>
        <div className='flex justify-between mb-6'>
            <span className='xl:text-[24px] font-semibold text-[#5A697D]'>Total Balance</span>
            <BiDotsVerticalRounded />
        </div>
        <div className='flex xl:gap-10 md:gap-6'>
            <div className='flex gap-2 items-center'>
                <FcFile className='xl:text-[40px] md:text-[34px]'/>
                <h2 className='font-bold'>84.56K <br></br><span className='font-normal xl:text-[16px] md:text-[14px]'>Wallet</span></h2>
            </div>
            <div className='flex gap-4 items-center'>
               <span className='p-2 bg-gray-200 rounded-md'> <FiDollarSign className='xl:text-[26px] md:text-[20px]'/></span>
                <h2 className='font-bold'>84.56K <br></br><span className='font-normal xl:text-[16px] md:text-[14px]'>Paypal</span></h2>
            </div>
        </div>
        <div className='border-b-4'>
          <ReactApexChart options={line.options} series={line.series} type="line" height='100%' />
        </div>
        <div className='flex justify-between items-center gap-10 mt-4'>
            <div className='xl:text-[16px] lg:text-[14px]'>
                <p>Save your favorite articles to read offline.</p>
                <span>Wikipedia is hosted by the Wikimedia</span>
            </div>
            <span className='p-3 cursor-pointer bg-yellow-100 hover:bg-yellow-200 rounded-md'><FiChevronRight /></span>
        </div>
    </div>
  )
}

export default TotalBalance