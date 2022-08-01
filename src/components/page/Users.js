import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userimg from '../../assets/img/2.png'
import '../style/userLoader.css'

function Users() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUser(res.data)
        }
        userData();
    }, []);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])

  return (
     <>
         {
             loading ?
                 <div className="flex w-full h-screen justify-center items-center pt-[65px]">
                     <div className="lds-ripple">
                         <div></div>
                         <div></div>
                     </div>
                 </div>
                 :
                 <div className='bg-[#F5F5F9] pt-[65px] pb-10 2xl:ml-[16.66%]'>
                     <div className='px-10 mt-10'>
                         <div className='w-full'>
                             {
                                 user.map((users) => {
                                     return(
                                         <ul className='flex w-full items-center justify-between text-center bg-white px-10 py-4 mb-4 rounded-lg box-shadow'>
                                             <li className='flex gap-4 items-center font-bold'>{users.id}<img className='w-8 h-8 rounded-full' src={userimg} alt='' /></li>
                                             <li className=' uppercase'>{users.name}</li>
                                             <li>{users.email}</li>
                                             <li>{users.phone}</li>
                                             <li>{users.website}</li>
                                         </ul>
                                     )
                                 })
                             }
                         </div>
                     </div>
                 </div>
         }
     </>

  )
}

export default Users