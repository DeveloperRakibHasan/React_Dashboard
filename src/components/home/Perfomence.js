import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import ReactApexChart from 'react-apexcharts';

function Perfomence() {

    const [radar] = useState({
          
            series: [{
              name: 'Series 1',
              data: [80, 50, 30, 40, 100, 20],
            }, {
              name: 'Series 2',
              data: [20, 30, 40, 80, 20, 80],
            }],
            responsive: [{
                breakpoint: 1280,
                options: {
                    radar:{
                        width: '100%'
                    },
                },
            }],
            options: {
              chart: {
                type: 'radar',
                dropShadow: {
                  enabled: true,
                  blur: 1,
                  left: 1,
                  top: 1
                }
              },
              title: {
                text: 'Radar Chart - Multi Series'
              },
              stroke: {
                width: 0
              },
              fill: {
                opacity: 1
              },
              markers: {
                size: 0
              },
              xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016']
              }
            }
    })
    
  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl p-8'>
     <div className='flex justify-between mb-4'>
        <span className='text-[24px] font-semibold text-[#5A697D]'>Perfomence</span>
        <BiDotsVerticalRounded />
        </div>
        <div>
        <ReactApexChart options={radar.options} series={radar.series} type="radar" height={300} />
    
        </div>
    </div>
  )
}

export default Perfomence