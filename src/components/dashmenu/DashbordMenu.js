import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import { BiHomeCircle } from "react-icons/bi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsBoxArrowInUp } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { RiLayout6Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineFindInPage } from "react-icons/md";
import { BiLockOpenAlt } from "react-icons/bi";

function DashbordMenu() {
    const {currentUser} = useAuth();

    const [dashboard, setDashboard] = useState(false)
    const [layouts, setLayouts] = useState(false)
    const [invoice, setInvoice] = useState(false)
    const [users, setUsers] = useState(false)
    const [role, setRole] = useState(false)
    const [page, setPage] = useState(false)
    const [auth, setAuth] = useState(false)
    const [wizer, setWizer] = useState(false)

  return (
    <>
        { currentUser ? (
        <div className='w-2/12 pt-[70px] fixed'>
            <div className='bg-[#fff] h-screen overflow-scroll pb-10'>
            <span className='text-white w-full flex justify-center mb-4 text-[26px] font-semibold uppercase border-b py-3 bg-[#6A6CF6]'>{currentUser.displayName}</span>
               <div>
                    <nav className='px-4 pb-6'>
                        <NavLink onClick={()=>setDashboard(!dashboard)} exact to='/' className={dashboard ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <BiHomeCircle className='mr-2' />
                             Dashboards
                            </span>
                            {dashboard ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={dashboard ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>
                        <NavLink onClick={()=>setLayouts(!layouts)} exact to='/' className={layouts ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <RiLayout6Line className='mr-2' />
                             Layouts
                            </span>
                            {layouts ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={layouts ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>

                        <p className='py-10 text-gray-400 text-[16px]'>APPS & PAGES</p>

                        <NavLink exact to='/' className='flex mb-1 items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-400'>
                            <FaRegCalendarAlt className='mr-2' />
                             Calendar
                        </NavLink>
                        <NavLink onClick={()=>setInvoice(!invoice)} exact to='/' className={invoice ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <BsReverseLayoutTextSidebarReverse className='mr-2' />
                             Invoice
                            </span>
                            {invoice ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={invoice ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>
                        <NavLink onClick={()=>setUsers(!users)} exact to='/' className={users ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <FiUser className='mr-2' />
                             Users
                            </span>
                            {users ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={users ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>
                        <NavLink onClick={()=>setRole(!role)} exact to='/' className={role ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <AiOutlineSafetyCertificate className='mr-2' />
                             Roles & Permissions
                            </span>
                            {role ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={role ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>
                        <NavLink onClick={()=>setPage(!page)} exact to='/' className={page ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <MdOutlineFindInPage className='mr-2' />
                             Pages
                            </span>
                            {page ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={page ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>
                        <NavLink onClick={()=>setAuth(!auth)} exact to='/' className={auth ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <BiLockOpenAlt className='mr-2' />
                             Authentications
                            </span>
                            {auth ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={auth ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>
                        <NavLink onClick={()=>setWizer(!wizer)} exact to='/' className={wizer ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                            <span className='flex items-center py-1'>
                            <BsCardList className='mr-2' />
                             Wizard Examples
                            </span>
                            {wizer ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                        </NavLink>
                        <ul className={wizer ? 'visible duration-300' : 'hidden'}>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             Analytics  
                        </Link>
                        <Link  className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <BsDot className='mr-2 group-hover:text-blue-400' />
                             eCommerce  
                        </Link>
                        </ul>
                        <NavLink exact to='/' className='flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                            <span className='flex items-center py-1'>
                            <BsBoxArrowInUp className='mr-2' />
                             Modal Examples
                            </span>
                        </NavLink>
                    </nav>
               </div>
            </div>
        </div>
        ):(
            <div className=' hidden'></div>
        )}
    </>
   
  )
}

export default DashbordMenu