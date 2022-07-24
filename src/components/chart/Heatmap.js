// /* eslint-disable no-undef */
import React, {useState} from 'react'
import ReactApexChart from 'react-apexcharts'

function Heatmap() {
    const [heatmaps] = useState ({
     
        options: {
          colors: [function({ value}) {
            if (value < 300) {
                return '#696CFF'
            } else {
                return '#A5A6FF'
            }
          }],
          
            chart: {
                toolbar: {
                    show: true
                },
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                labels: {
                    show: true,
                }
            },
            tooltip: {
                enabled: true,
                //custom:
            },
         },
         series: [{
            name: ' ',
            data: [30, 30, 30, 30, 30, 545, 30, 30]
          },
            {
                name: ' ',
                data: [30, 454, 30, 30, 30, 34, 30, 30]
            },
            {
                name: ' ',
                data: [30, 30, 454, 30, 30, 34, 30, 30]
            },
            {
                name: ' ',
                data: [30, 30, 30, 450, 450, 34, 30, 30]
            },
            {
                name: ' ',
                data: [30, 30, 30, 450, 450, 34, 30, 30]
            },
            {
                name: ' ',
                data: [30, 30, 30, 44, 34, 450, 30, 30]
            },
            {
                name: ' ',
                data: [30, 30, 30, 44, 34, 30, 450, 30,]
            },
            {
                name: '',
                data: [30, 30, 30, 44, 34, 30, 30, 30]
            }]
    
    
          })
         

  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto'>
        <div className='flex items-center justify-between'>
            <div>
                <h4 className='text-[20px] font-semibold mb-3 text-gray-400'>Sixes Analityces</h4>
            </div>
            <select className='px-4 py-2 cursor-pointer rounded-md bg-sky-50 outline-none'>
                <option>2CE7R</option>
            </select>
        </div>
        <p><span className='py-1 px-2 bg-green-300 rounded-md mr-2'>42.55%</span>Current Years</p>
        <div className='w-full'>
        <ReactApexChart options={heatmaps.options} series={heatmaps.series} type="heatmap" height={300} />
        </div>
    </div>
  )
}

export default Heatmap