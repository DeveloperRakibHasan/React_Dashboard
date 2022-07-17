import React, {useState} from 'react'
import ReactApexChart from 'react-apexcharts';
import '../style/custom.css'

function ProfitRange() {
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
    <div className='bg-white rounded-xl p-6 box-shadow-1 col-span-2'>
        <div className='flex gap-10'>
            <div>
                <h4 className='text-[20px] text-gray-500 font-semibold mb-1'>Profit Range</h4>
                <span className='py-1 px-2 rounded-xl bg-yellow-200 inline-block'>wallet 15+</span>
                <p className='mt-6 text-red-500 mb-1'>~ 78%</p>
                <h2 className='text-[28px] text-gray-600 font-bold'>$84,548K</h2>
            </div>
            <div>
                <ReactApexChart options={line.options} series={line.series} type="line" height='100%' />
            </div>
        </div>
    </div>
  )
}

export default ProfitRange