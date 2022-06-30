import React from 'react'
import '../style/custom.css'
import BestSell from '../home/BestSell';
import Visitors from '../home/Visitors';
import Activity from '../home/Activity';
import Salles from '../home/Salles';
import Profite from '../home/Profite';
import Expences from '../home/Expences';
import Transactions from '../home/Transactions';
import TotalIncome from '../home/TotalIncome';
import SliderReview from '../home/SliderReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";

function Home() {

const sliderArray = [
  {
    id: 1,
    title: 'Star Sun Hotel & Apartment',
    location: 'North Carolina, USA',
    img: require('../../assets/img/hotel.png')
  },
  {
    id: 2,
    title: 'Letdo Ji Hotel & Apartment',
    location: 'New Yrk City, USA',
    img: require('../../assets/img/hotel1.png')
  },
  {
    id: 3,
    title: 'Metro Jayakar Apartment',
    location: 'North Carolina, USA',
    img: require('../../assets/img/hotel2.png')
  },
  {
    id: 4,
    title: 'Star Sun Hotel & Apartment',
    location: 'North Carolina, USA',
    img: require('../../assets/img/hotel.png')
  },
  {
    id: 5,
    title: 'Letdo Ji Hotel & Apartment',
    location: 'New Yrk City, USA',
    img: require('../../assets/img/hotel1.png')
  },
  {
    id: 6,
    title: 'Metro Jayakar Apartment',
    location: 'North Carolina, USA',
    img: require('../../assets/img/hotel2.png')
  }
]

  return (
    <>
    <div className='bg-[#F5F5F9] pt-[65px] pb-10 ml-[16.66%]'>
      <div className='grid grid-flow-row grid-cols-3 gap-8 my-8 mx-8'>
        <BestSell />
        <div className='bg-white rounded-xl p-6 box-shadow-1 col-span-2'>
           <div className='grid grid-flow-row grid-cols-2'>
            <Visitors />
            <Activity />
           </div>
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-3 gap-8 mx-8 pb-10'>
        <div className='grid grid-flow-row grid-cols-2 gap-8'>
          <Salles />
          <Profite />
          <Expences />
          <Transactions />
        </div>
        <TotalIncome />
      </div>
      <div className='mx-8 bg-white rounded-xl p-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-[20px] font-semibold'>Property List</h2>
        <ul className='flex gap-2 items-center'>
          <li className='px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer'>Popular</li>
          <li className='px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer'>Recomanded</li>
          <li className='px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer'>Newest</li>
          <select className=' border p-2 rounded-lg focus:outline-none'>
            <option>Most Recent</option>
          </select>
        </ul>
      </div>
      <div className='mt-5'>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }}
        autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                }}
        modules={[Autoplay]}
         >
        {
          sliderArray.map((elem)=>{
            return(
              <div key={elem.id}>
              <SwiperSlide>
                <SliderReview title={elem.title} location={elem.location} img={elem.img} />
              </SwiperSlide>
              </div>
            )
          })
        }
       </Swiper>
      </div>
      </div>
    </div>
    </>
   
  )
}

export default Home