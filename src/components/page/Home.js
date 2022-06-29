import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useAuth } from '../../context/AuthContext'
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { AreaChart, BarChart, Legend, Bar, CartesianGrid, Area, XAxis, YAxis, Tooltip } from 'recharts';
import '../style/custom.css'
import trophy from '../../assets/img/trophy1.png'
import { FcFile } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FcOpenedFolder } from "react-icons/fc";
import { BsPaypal } from "react-icons/bs";


function Home() {
  
  const { currentUser } = useAuth();

  const weekdata = [
    {
      "name": "S",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "M",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "T",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "W",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "T",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "S",
      "uv": 3490,
      "pv": 4300
    }
  ]

  const data = [
    {
      name: 'A1',
      Total: 1200,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'A2',
      Total: 1000,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'A3',
      Total: 900,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'A4',
      Total: 1300,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'A5',
      Total: 500,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'A6',
      Total: 600,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'A7',
      Total: 1200,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'A8',
      Total: 2400,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'A9',
      Total: 600,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  const bardata= [
    {
      "name": "Jan",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Apr",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Jun",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Dec",
      "uv": 2780,
      "pv": 3908
    },
  ]

const [percentencedata] = useState({
  series: [78],
            options: {
              chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  track: {
                    background: "#7E80F6",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    
                  },
                  dataLabels: {
                    name: {
                      show: false
                    },
                    value: {
                      offsetY: -2,
                      fontSize: '22px'
                    }
                  }
                }
              },
              labels: ['Average Results'],
}
}) 

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
    
    title: {
      text: 'Area with Negative Values',
      align: 'left',
      style: {
        fontSize: '14px'
      }
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
    <>
    <div className='bg-[#F5F5F9] pt-[65px] ml-[16.66%] h-[200vh]'>
      <div className='grid grid-flow-row grid-cols-3 gap-8 my-8 mx-8'>
        <div className='bg-white rounded-xl p-6 box-shadow-1'>
           <div className='grid grid-flow-row grid-cols-2'>
            <div>
              <span className='text-[20px] text-green-500 font-semibold'>Congratulations {currentUser.displayName}</span>
              <p className='text-[16px] text-gray-400'>Best seller of the month</p>
              <h4 className='text-[#6A6CF6] text-[22px] mt-3'>$48.9K</h4>
              <h6 className='text-[#A3ACB7] mb-3'>78% target</h6>
              <button className='py-2 px-4 rounded-lg bg-[#6A6CF6] text-gray-100 mt-4'>View Sales</button>
            </div>
            <div className='flex items-end justify-center'>
              <img className='animation-trophy absolute mt-6 w-32' src={trophy} alt='' />
            </div>
           </div>
        </div>
        <div className='bg-white rounded-xl p-6 box-shadow-1 col-span-2'>
           <div className='grid grid-flow-row grid-cols-2'>
            <div className='mx-6'>
              <div className='flex justify-between'>
                <h6 className='text-[22px] font-medium text-gray-400'>New visitors</h6>
                <p className='text-gray-400'>Last Week</p>
              </div>
             <div className='flex justify-between items-end'>
              <div>
              <h2 className='text-[40px] text-[#5A697D] font-medium'>23%</h2>
              <p className='flex items-center font-medium text-red-500'>
                <HiOutlineArrowSmDown />
                -13.24%
              </p>
              </div>
              {/* <ReactApexChart options={visitor.options} series={visitor.series} type="bar" height={130} /> */}
              <div>
              <BarChart width={300} height={130} data={weekdata}>
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#F0F0FC" radius={30} legendType="none" />
              </BarChart>
              </div>
             </div>
            </div>
            <div className='px-6 border-l'>
            <div className='flex justify-between items-center'>
              <h6 className='text-[22px] font-medium text-gray-400'>Activity</h6>
              <p className='text-gray-400'>Last Week</p>
            </div>
             <div className='flex justify-between items-end'>
             <div>
             <h2 className='text-[40px] text-[#5A697D] font-medium'>88%</h2>
              <p className='flex items-center font-medium text-green-500'>
                <HiOutlineArrowSmUp />
                14.24%
              </p>
             </div>
             <div>
                <AreaChart
                  width={350}
                  height={130}
                  data={data}
                  >
                  <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8CDA55" stopOpacity={0.8}/>
                      <stop offset="75%" stopColor="#8CDA55" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" /> */}
                  <Area type="monotone" stroke="#8CDA55" fill="url(#total)" fillOpacity={1} dataKey="Total" />
                </AreaChart>
              </div>
             </div>
            </div>
           </div>
        </div>
      </div>

      <div className='grid grid-flow-row grid-cols-3 gap-8 mx-8'>
        <div>
          <div className='grid grid-flow-row grid-cols-2 gap-8'>
            <div className='bg-white rounded-xl p-6 box-shadow-1'>
              <div className='flex justify-between mb-4'>
                <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcFile/></span>
                <BiDotsVerticalRounded />
              </div>
              <p className='text-[#6C798B]'>Sales</p>
              <h2 className='text-[24px] font-semibold text-[#5A697D]'>$4,679</h2>
              <p className='flex items-center font-medium text-[#8CDA55]'>
                  <HiOutlineArrowSmUp />
                  +28.42%
                </p>
            </div>
            <div className='bg-white rounded-xl p-6 box-shadow-1'>
              <p className='text-[#6C798B] text-[18px]'>Profit</p>
              <h2 className='text-[24px] font-semibold text-[#5A697D]'>624K</h2>
              <div>
              <BarChart width={170} height={80} data={bardata}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar radius={30} dataKey="pv" fill="#9EE06E" />
                <Bar radius={30} dataKey="uv" fill="#EFFAF5" />
              </BarChart>
              </div>
            </div>
            <div className='bg-white rounded-xl p-6 box-shadow-1'>
              <h2 className='text-[24px] font-semibold text-[#5A697D]'>Expenses</h2>
              <div>
              <ReactApexChart options={percentencedata.options} series={percentencedata.series} type="radialBar" />
              </div>
              <span className='text-[#A3ACB7]'>
                $21k Expenses more then last month
              </span>
            </div>
            <div className='bg-white rounded-xl p-6 box-shadow-1'>
              <div className='flex justify-between mb-4'>
                <span className='p-3 bg-[#D8E8EE] rounded-xl'><FcOpenedFolder/></span>
                <BiDotsVerticalRounded />
              </div>
              <p className='text-[#6C798B]'>Transactions</p>
              <h2 className='text-[24px] font-semibold text-[#5A697D]'>$14,859</h2>
              <p className='flex items-center font-medium text-[#8CDA55]'>
                  <HiOutlineArrowSmUp />
                  +28.14%
                </p>
            </div>
          </div>
        </div>
        <div className='w-full h-full bg-white col-span-2 box-shadow-1 rounded-xl p-8'>
          <div className='flex justify-between'>
          <div>
            <h2 className='text-[24px] font-semibold text-[#5A697D]'>Total income</h2>
            <p className='text-[#6C798B]'>Yearly report overview</p>
            <ReactApexChart options={incomegrap.options} series={incomegrap.series} type="area" height={270} width={600} />
          </div>
            <div>
              <div className='flex items-center justify-between'>
                <div className='mr-10'>
                  <h4 className='text-[26px] text-[#5A697D]'>Report</h4>
                  <p className='text-[#5A697D] text-[18px]'>Monthly Avr. $45,578k</p>
                </div>
                <BiDotsVerticalRounded className='text-[20px] text-[#5A697D]' />
              </div>
              <div className='flex gap-2 mt-4 bg-[#F5F5F9] p-4 rounded-lg'>
                <span><BsPaypal className='text-[20px]' /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </>
   
  )
}

export default Home