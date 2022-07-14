import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { FcFile } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";

function TotalReceved() {
    const [twobar] = useState({
          
        series: [{
          data: [2.4, 3.65, 1.76, 1.88, 2.5, 3.1, 3.9, 4.8]
        },
        {
          data: [-2.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7]
        }
        ],
        options: {
          chart: {
            type: 'bar',
            height: '100%',
            stacked: true
          },
          colors: ['#7779FF', '#03C3EC'],
          plotOptions: {
            bar: {
              horizontal: false,
              barHeight: '80%',
              width: 2,
              
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

    const [radialbar] = useState({
          
            series: [67],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                    },
                    value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val) {
                        return val + "%";
                      }
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
              },
              stroke: {
                dashArray: 4
              },
              labels: ['Median Ratio'],
            },
    })

  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1 ml-8 mt-8 col-span-2'>
        <h2>Total Receved</h2>
        <div className='flex gap-10'>
            <div className='border-r-2 pr-8'><ReactApexChart options={twobar.options} series={twobar.series} type="bar" height='100%' width={400} /></div>
            <div className='w-full text-center'>
                <select className='outline-none bg-gray-200 p-2 rounded-md'>
                    <option>845E</option>
                    <option>896F</option>
                </select>
                <div>
                <ReactApexChart options={radialbar.options} series={radialbar.series} type="radialBar" height={350} />
                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-2 items-center'>
                        <FcFile className='text-[40px]'/>
                        <h2 className='font-bold'>84.56K <br></br><span className='font-normal'>Wallet</span></h2>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='p-2 bg-gray-200 rounded-md'> <FiDollarSign className='text-[26px]'/></span>
                        <h2 className='font-bold'>84.56K <br></br><span className='font-normal'>Paypal</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TotalReceved