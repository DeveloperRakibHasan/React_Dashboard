import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FcFile } from "react-icons/fc";
import ReactApexChart from 'react-apexcharts'

function OrderStatus() {
  const [pieChart] = useState({
    series: [44, 55, 41],

    options: {
      labels: ["Read", "Unread", "Bounced"],
      
      chart: {
        type: "donut",
        id: "donutChart"
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
            background: "transparent",
  
            labels: {
              show: true,
              name: {
                show: true,
                font: "normal normal 600 20px Open Sans",
                color: "#000000",
                offsetY: -5,
                formatter: function (val) {
                  return val;
                }
              },
              value: {
                show: true,
                font: "normal normal bold 29px/39px Open Sans",
                color: "#000000",
                offsetY: 10,
                formatter: function (val) {
                  return val;
                }
              },
  
              total: {
                show: true,
                showAlways: false,
                label: "Order",
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: "#373d3f",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                }
              }
            }
          }
        }
      },
      legend: {
        show: false,
        padding: 0,
        margin: 0
      }
    }
  });

  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto'>
      <div className='flex justify-between items-center mb-4'>
        <div>
        <h4 className='text-[22px] font-semibold text-gray-600'>Order Status</h4>
        <p className='text-gray-500'>local $540 order place</p>
        </div>
        <BiDotsVerticalRounded />
      </div>
      <div className='flex justify-between py-6 items-center'>
        <div>
          <h1 className='text-[30px] font-semibold'>8,154B</h1>
          <span>Total Omkan</span>
        </div>
        <div>
        <ReactApexChart options={pieChart.options} series={pieChart.series} type="donut" />
        </div>
      </div>
      <div>
        <div className='flex justify-between mb-4'>
          <div className='flex gap-4 items-center'>
              <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
            <div>
                <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
            </div>
          </div>
          <div className='flex items-center gap-2 t'>
          <span>8.6%</span>
          </div>
        </div>
        <div className='flex justify-between mb-4'>
          <div className='flex gap-4 items-center'>
              <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
            <div>
                <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
            </div>
          </div>
          <div className='flex items-center gap-2 t'>
          <span>8.6%</span>
          </div>
        </div>
        <div className='flex justify-between mb-4'>
          <div className='flex gap-4 items-center'>
              <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
            <div>
                <p className='2xl:text-[18px] md:text-[16px] text-gray-400'> Add to Card </p>
                <span className='2xl:text-[16px] xm:text-[14px] text-gray-300'>$32 per hour</span>
            </div>
          </div>
          <div className='flex items-center gap-2 t'>
          <span>8.6%</span>
          </div>
        </div>
      </div>
   </div>
  )
}

export default OrderStatus