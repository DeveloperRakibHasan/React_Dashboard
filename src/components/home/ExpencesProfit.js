import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import '../style/custom.css'

function ExpencesProfit() {

    const [twobar] = useState({
          
            series: [{
              data: [1.4, 2.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8]
            },
            {
              data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7]
            }
            ],
            options: {
              xaxis: {
                show: false,
                labels: {
                  show: false,
                },
              
                axisBorder: {
                  show: false,
                },
              
              },
              grid: {
                show: false,
              },
              chart: {
                type: 'bar',
                height: '100%',
                stacked: true
              },
              colors: ['#008FFB', '#FFCC00'],
              plotOptions: {
                bar: {
                  horizontal: false,
                  barHeight: '80%',
                  
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 4,
                colors: ["#fff"]
              },
              
              yaxis: {
                min: -5,
                max: 5,
            },
          
        }})

  return (
    <div className='bg-white flex gap-10 rounded-xl p-6 box-shadow-1 col-span-2'>
        <div>
            <h4 className='text-[18px] font-semibold text-gray-400'>Expences</h4>
            <h2 className='text-[24px] font-semibold text-[#5A697D] mb-2'>724K</h2>
            <span className='text-green-500'>+8.00%</span>
        </div>
        <div>
        <ReactApexChart options={twobar.options} series={twobar.series} type="bar" height='100%' />
        </div>
    </div>
  )
}

export default ExpencesProfit