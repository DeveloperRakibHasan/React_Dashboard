import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FcFile } from "react-icons/fc";
import { AreaChart, XAxis, Area, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/custom.css'

function AnalTab() {
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
  return (
    <div className='w-full h-full bg-white box-shadow-1 rounded-xl xl:p-8 xm:p-6 xm:col-span-2 md:col-auto lg:mr-8 xm:mr-6'>
       <Tabs>
        <TabList>
          <Tab>Extansion</Tab>
          <Tab>Paypal</Tab>
          <Tab>Payonar</Tab>
        </TabList>

          <TabPanel className="mt-10">
          <div className='flex justify-between mb-10'>
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
          <div className='w-full'>
            <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                >
                <defs>
                <linearGradient id="color-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6A6CF6" stopOpacity={0.5}/>
                    <stop offset="75%" stopColor="#6A6CF6" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <Tooltip />
                <XAxis dataKey="name" />
                <Area type="monotone" stroke="#6A6CF6" strokeWidth={1} fill="url(#color-area)" fillOpacity={1} dataKey="Total" />
            </AreaChart>
            </ResponsiveContainer> 
          </div>
          </TabPanel>
          <TabPanel>
          <div className='flex justify-between mb-10'>
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
          <div className='w-full'>
            <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                >
                <defs>
                <linearGradient id="color-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6A6CF6" stopOpacity={0.5}/>
                    <stop offset="75%" stopColor="#6A6CF6" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <Tooltip />
                <XAxis dataKey="name" />
                <Area type="monotone" stroke="#6A6CF6" strokeWidth={1} fill="url(#color-area)" fillOpacity={1} dataKey="Total" />
            </AreaChart>
            </ResponsiveContainer> 
          </div>
          </TabPanel>
          <TabPanel>
          <div className='flex justify-between mb-10'>
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
          <div className='w-full'>
            <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                >
                <defs>
                <linearGradient id="color-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6A6CF6" stopOpacity={0.5}/>
                    <stop offset="75%" stopColor="#6A6CF6" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <Tooltip />
                <XAxis dataKey="name" />
                <Area type="monotone" stroke="#6A6CF6" strokeWidth={1} fill="url(#color-area)" fillOpacity={1} dataKey="Total" />
            </AreaChart>
            </ResponsiveContainer> 
          </div>
          </TabPanel>
       </Tabs>
   </div>
  )
}

export default AnalTab