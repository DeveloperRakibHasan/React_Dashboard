import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function ViewActivity() {
    const [Stacked] = useState({
        series: [{
            // name: 'PRODUCT A',
            data: [44, 55, 41, 30, 22, 43]
          }, {
            // name: 'PRODUCT B',
            data: [13, 23, 20, 40, 13, 27]
          }],
          options: {
            grid: {
                show: false,
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  },
            },
            yaxis: {
                show: false,
                labels: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                crosshairs: {
                  show: false,
                },
                tooltip: {
                  enabled: false,
                },
               
              },
              stroke: {
                width: 5,
                colors: ["#fff"],
              },

            dataLabels: {
                enabled: false
              },

              legend: {
                show: false
              },

            tooltip: {
                enabled: false,
              },
              colors: ['#FF3E1D', '#56697F'],
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              },
             
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  show: false
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 10,
              },
            },
            xaxis: {
              type: 'datetime',
              categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                '01/05/2011 GMT', '01/06/2011 GMT'
              ],
              axisBorder: {
                show: false,
              },

            },
            fill: {
              opacity: 1
            }
          },
    })
  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto'>
        <h2 className='text-[24px] font-semibold text-gray-500'>Curnview & Sell Activity</h2>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <div className='w-full'>
        <ReactApexChart options={Stacked.options} series={Stacked.series} type="bar" height={350} />
        </div>
    </div>
  )
}

export default ViewActivity