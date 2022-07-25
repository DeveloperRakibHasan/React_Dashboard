import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style/calender.css'


function Calender() {

    const [value, setValue] = useState(new Date());

  return (
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 2xl:ml-[16.66%]'>
        <div className='p-10'>
            <Calendar className="" onChange={setValue} value={value} />
        </div>
    </div>
  )
}

export default Calender