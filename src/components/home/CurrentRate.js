import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import ReactApexChart from 'react-apexcharts';
import '../style/custom.css'
import { HiOutlineArrowSmUp } from "react-icons/hi";

function CurrentRate() {

  const [line] = useState ({
          
      series: [
        {
          data: [28, 29, 33, 36, 32, 32, 33]
        },
      ],
      options: {
        grid: {
          show: false,
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
            formatter: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          tooltip: {
            enabled: false,
            formatter: false,
          },
        },
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
        colors: ['#77B6EA'],
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
      },
  })

  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto'>
        <div className='flex justify-between'>
            <span className='2xl:text-[24px] md:text-[20px] xm:text-[18px] font-semibold text-[#5A697D]'>Current Rate</span>
            <BiDotsVerticalRounded />
        </div>
        <p className='text-gray-400 2xl:text-[16px] xm:text-[14px]'>Current Rate in the month</p>
        <div className='md:flex gap-2 xm:block'>
          <div className='flex gap-2 items-center md:mt-0 xm:mt-4'>
            <h1 className='text-[30px] font-bold text-gray-600'>8.72%</h1>
            <span className='text-green-500'>4.8%</span>
          </div>
          <div>
          <ReactApexChart options={line.options} series={line.series} type="line" height='100%' />
          </div>
        </div>
        <div>
            <div className='flex justify-between mb-4'>
              <div>
                <p className='2xl:text-[18px] md:text-[16px] text-gray-400'>Add to Card</p>
                <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
              </div>
              <div className='flex items-center gap-2 text-green-500'>
              <HiOutlineArrowSmUp />
              <span>8.6%</span>
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div>
                <p className='2xl:text-[18px] md:text-[16px] text-gray-400'>Add to Bank</p>
                <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$14 per hour</span>
              </div>
              <div className='flex items-center gap-2 text-red-500'>
              <HiOutlineArrowSmUp />
              <span>-2.7%</span>
              </div>
            </div>
            <div className='flex justify-between'>
              <div>
                <p className='2xl:text-[18px] md:text-[16px] text-gray-400'>Add to Wallet</p>
                <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$44 per hour</span>
              </div>
              <div className='flex items-center gap-2 text-green-500'>
              <HiOutlineArrowSmUp />
              <span>8.9%</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CurrentRate