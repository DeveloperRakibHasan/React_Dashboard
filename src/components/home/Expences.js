import React,{useState} from 'react'
import ReactApexChart from 'react-apexcharts'
import '../style/custom.css'

function Expences() {
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
  return (
    <div className='bg-white rounded-xl 2xl:p-6 lg:p-4 box-shadow-1'>
        <h2 className='2xl:text-[24px] lg:text-[18px] font-semibold text-[#5A697D]'>Expenses</h2>
        <div className='mt-2'>
          <ReactApexChart options={percentencedata.options} series={percentencedata.series} type="radialBar" />
        </div>
        <span className='text-[#A3ACB7] 2xl:text-[16px] xl:text-[14px] lg:text-[12px]'>
        $21k Expenses more then last month
        </span>
    </div>
  )
}

export default Expences