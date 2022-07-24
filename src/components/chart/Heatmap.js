import React, {useState} from 'react'
import ReactApexChart from 'react-apexcharts'


function Heatmap() {
    const [heatmaps] = useState (
        {
            series: [{
                name: 'Metric1',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric2',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric3',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric4',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric5',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric6',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric7',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric8',
                data: (18, {
                  min: 0,
                  max: 90
                })
              },
              {
                name: 'Metric9',
                data: (18, {
                  min: 0,
                  max: 90
                })
              }
              ],
              options: {
                chart: {
                  height: 350,
                  type: 'heatmap',
                },
                dataLabels: {
                  enabled: false
                },
                colors: ["#008FFB"],
                title: {
                  text: 'HeatMap Chart (Single color)'
                },
              },
          },    
    )

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
        <ReactApexChart options={heatmaps.options} series={heatmaps.series} type="heatmap" height={350} />
        </div>
    </div>
  )
}

export default Heatmap