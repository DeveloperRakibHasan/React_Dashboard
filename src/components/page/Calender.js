import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../style/calender.css'
import 'react-calendar/dist/Calendar.css';


function Calender() {

    const [value, setValue] = useState(new Date());

  return (
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 ml-[16.66%]'>
        <div className='p-10'>
            <Calendar onChange={setValue} value={value} />
        </div>
    </div>
  )
}

export default Calender