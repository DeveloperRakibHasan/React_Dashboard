import React, {useState} from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import ReactApexChart from 'react-apexcharts'

function SellStatus() {
    const [percentencedata] = useState({
        series: [78],
                  options: { 
                   
                    chart: {
                      type: 'radialBar',
                      // offsetY: -20,
                      sparkline: {
                        enabled: true,
                      }
                    },
                    plotOptions: {
                      radialBar: {
                        startAngle: -180,
                        endAngle: 180,
                        track: {
                          background: "#EDEFF2",
                          strokeWidth: 20,
                          margin: 5, // margin is in pixels
                        },
                        dataLabels: {
                          name: {
                            show: false
                          },
                          value: {
                            offsetY: -2,
                            fontSize: '40px'
                          }
                        }
                      }
                    },
                    labels: ['Average Results'],
                 }
             }) 

  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto'>
     <div className='flex justify-between'>
        <h2 className='text-[20px] font-semibold text-gray-500'>Sells Status</h2>
        <BiDotsVerticalRounded />
     </div>
     <div className='w-full'>
     <ReactApexChart options={percentencedata.options} series={percentencedata.series} type="radialBar" />
     </div>
    </div>
  )
}

export default SellStatus