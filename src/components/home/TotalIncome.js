import React, {useState} from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPaypal } from "react-icons/bs";
import ReactApexChart from 'react-apexcharts'
import { BsBag } from "react-icons/bs";
import { GoFileSubmodule } from "react-icons/go";
import '../style/custom.css'

function TotalIncome() {
    const [incomegrap] = useState({
        series: [{
          name: 'north',
          data: [{
              x: 1996,
              y: 322
            },
            {
              x: 1997,
              y: 324
            },
            {
              x: 1998,
              y: 329
            },
            {
              x: 1999,
              y: 342
            },
            {
              x: 2000,
              y: 348
            },
            {
              x: 2001,
              y: 334
            },
            {
              x: 2002,
              y: 325
            },
            {
              x: 2003,
              y: 316
            },
            {
              x: 2004,
              y: 318
            },
            {
              x: 2005,
              y: 330
            },
            {
              x: 2006,
              y: 355
            },
            {
              x: 2007,
              y: 366
            },
            {
              x: 2008,
              y: 337
            },
            {
              x: 2009,
              y: 352
            },
            {
              x: 2010,
              y: 377
            },
            {
              x: 2011,
              y: 383
            },
            {
              x: 2012,
              y: 344
            },
            {
              x: 2013,
              y: 366
            },
            {
              x: 2014,
              y: 389
            },
            {
              x: 2015,
              y: 334
            }
          ]
        }],
        options: {
          chart: {
            type: 'area',
            height: 270
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          xaxis: {
            type: 'datetime',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            tickAmount: 4,
            floating: false,
          
            labels: {
              style: {
                colors: '#6A6CF6',
              },
              offsetY: -7,
              offsetX: 0,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false
            }
          },
          fill: {
            opacity: 0.5
          },
          tooltip: {
            x: {
              format: "yyyy",
            },
            fixed: {
              enabled: false,
              position: 'topRight'
            }
          },
          grid: {
            yaxis: {
              lines: {
                offsetX: -30
              }
            },
            padding: {
              left: 20
            }
          }
        },
      
      })
        
  return (
    <div className='w-full h-full bg-white col-span-2 box-shadow-1 rounded-xl 2xl:p-8 lg:p-4'>
          <div className='flex justify-between'>
          <div className='w-[600px]'>
            <h2 className='2xl:text-[24px] lg:text-[20px] font-semibold text-[#5A697D]'>Total income</h2>
            <p className='text-[#6C798B] 2xl:text-[16px] xl:text-[14px]'>Yearly report overview</p>
            <ReactApexChart options={incomegrap.options} series={incomegrap.series} type="area" height="80%" width='90%' />
          </div>
            <div>
              <div className='flex items-center justify-between'>
                <div className='mr-10'>
                  <h4 className='2xl:text-[26px] lg:text-[20px] text-[#5A697D]'>Report</h4>
                  <p className='text-[#5A697D] 2xl:text-[18px] lg:text-[14px]'>Monthly Avr. $45,578k</p>
                </div>
                <BiDotsVerticalRounded className='text-[20px] text-[#5A697D]' />
              </div>
              <div className='flex justify-between items-end gap-2 mt-4 bg-[#F5F5F9] 2xlp-4 lg:p-3 rounded-lg'>
                <div className='flex gap-3'>
                    <span className='2xl:p-4 lg:p-3 bg-white rounded-lg'><BsPaypal className='text-[20px]' /></span>
                    <div>
                        <p className='text-[#6C798B] font-semibold 2xl:text-[16px] xl:text-[14px]'>Income</p>
                        <h2 className='font-bold 2xl:text-[20px] xl:text-[17px] text-[#5A697D]'>$42,845</h2>
                    </div>
                </div>
                <span className='text-green-500 2xl:text-[16px] xl:text-[14px]'>+2.34k</span>
              </div>
              <div className='flex justify-between items-end gap-2 mt-4 bg-[#F5F5F9] 2xlp-4 lg:p-3 rounded-lg'>
                <div className='flex gap-3'>
                    <span className='2xl:p-4 lg:p-3 bg-white rounded-lg'><BsBag className='text-[20px]' /></span>
                    <div>
                        <p className='text-[#6C798B] font-semibold 2xl:text-[16px] xl:text-[14px]'>Expences</p>
                        <h2 className='font-bold 2xl:text-[20px] xl:text-[17px] text-[#5A697D]'>$38,658</h2>
                    </div>
                </div>
                <span className='text-red-500 2xl:text-[16px] xl:text-[14px]'>-1.15k</span>
              </div>
              <div className='flex justify-between items-end gap-2 mt-4 bg-[#F5F5F9] 2xlp-4 lg:p-3 rounded-lg'>
                <div className='flex gap-3'>
                    <span className='2xl:p-4 lg:p-3 bg-white rounded-lg'><GoFileSubmodule className='text-[20px]' /></span>
                    <div>
                        <p className='text-[#6C798B] font-semibold 2xl:text-[16px] xl:text-[14px]'>Profit</p>
                        <h2 className='font-bold 2xl:text-[20px] xl:text-[17px] text-[#5A697D]'>$18,220</h2>
                    </div>
                </div>
                <span className='text-green-500 2xl:text-[16px] xl:text-[14px]'>+1.35k</span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TotalIncome