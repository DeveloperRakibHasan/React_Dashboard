import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import ReactApexChart from 'react-apexcharts';

function CurrentRatting() {
    const [liveChart] = useState({
      series: [{
        name: "Desktops",
        data: [10, 20, 15, 25, 20, 35, 30, 51]
    }],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    },

        });

  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xm:col-span-2 md:col-auto'>
        <div className='xl:p-8 xm:p-6 '>
            <div className='flex justify-between'>
                <span className='2xl:text-[24px] md:text-[20px] xm:text-[18px] font-semibold text-[#5A697D]'>Current Rate</span>
                <BiDotsVerticalRounded />
            </div>
            <div className='flex gap-4 mt-4'>
                <h2 className='text-[40px] font-bold'>4.0</h2>
                <span className='flex gap-2 items-center text-[20px]'>
                    <AiFillStar className='text-[#FFAB01]' />
                    <AiFillStar className='text-[#FFAB01]' />
                    <AiFillStar className='text-[#FFAB01]' />
                    <AiFillStar className='text-[#FFAB01]' />
                    <AiFillStar className='text-[#D9DDE2]' />
                </span>
            </div>
        </div>
        <div>
        <ReactApexChart options={liveChart.options} series={liveChart.series} type="line" height={300} />
        </div>
    </div>
  )
}

export default CurrentRatting