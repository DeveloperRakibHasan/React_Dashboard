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
import { BiMessageRounded } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa";

function DashbordMenu() {
    const {currentUser} = useAuth();

    const [dashboard, setDashboard] = useState(false)
    const [layouts, setLayouts] = useState(false)
    const [invoice, setInvoice] = useState(false)
    const [role, setRole] = useState(false)
    const [page, setPage] = useState(false)
    const [auth, setAuth] = useState(false)
    const [wizer, setWizer] = useState(false)

    const [toggle, setToggle] = useState(false)

  const clickHandaler = (()=> {
    setToggle(!toggle)
  })

  return (
    <>
     { currentUser ? (
       <div>
        <div className={!toggle ? 'relative 2xl:ml-0 xm:ml-[-302px] duration-500' : 'relative xm:ml-[0%] 2xl:ml-[302px] duration-500'}>
        <div onClick={()=> setToggle(!toggle)} className='duration-500 absolute top-[69.5px] xl:block 2xl:hidden left-[302px] cursor-pointer py-6 px-2 bg-[#6A6CF6] text-white z-50'>
        { toggle ? <FaAngleLeft /> : <FaAngleRight />}
            </div>
            <div className='2xl:w-2/12 xm:w-[302px] pt-[70px] fixed z-50'>
                <div className='bg-[#fff] relative h-screen overflow-scroll pb-10'>
                    <span className='text-white w-full flex justify-center mb-4 text-[26px] font-semibold uppercase border-b py-3 bg-[#6A6CF6]'>{currentUser.displayName}</span>
                <div>
                        <nav className='px-4 pb-6'>
                            <Link onClick={()=>setDashboard(!dashboard)} className={dashboard ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                                <span className='flex items-center py-1'>
                                <BiHomeCircle className='mr-2' />
                                Dashboards
                                </span>
                                {dashboard ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                            </Link>
                            <ul className={dashboard ? 'visible ml-6 border-l duration-500' : 'hidden duration-500'}>
                            <NavLink onClick={clickHandaler} exact to='/analytic' activeClassName='bg-[#E7E7FE]' className='flex mb-1 group items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                                <BsDot className='mr-2 group-hover:text-blue-400' />
                                Analytics  
                            </NavLink>
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
                            <ul className={layouts ? 'visible ml-6 border-l duration-300' : 'hidden'}>
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

                            <NavLink onClick={clickHandaler} exact to='/calender' activeClassName='bg-[#E7E7FE]'  className='flex mb-1 items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-400'>
                                <FaRegCalendarAlt className='mr-2' />
                                Calendar
                            </NavLink>
                            <NavLink onClick={clickHandaler} exact to='/user' activeClassName='bg-[#E7E7FE]'  className='flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                                <span className='flex items-center py-1'>
                                <FiUser className='mr-2' />
                                Users
                                </span>
                            </NavLink>
                            <NavLink onClick={clickHandaler} exact to='/chart' activeClassName='bg-[#E7E7FE]' className='flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'>
                                <span className='flex items-center py-1'>
                                <BiMessageRounded className='mr-2' />
                                Chart
                                </span>
                            </NavLink>
                            <NavLink onClick={()=>setInvoice(!invoice)} exact to='/' className={invoice ? 'flex mb-1 justify-between items-center px-4 py-3 bg-[#E7E7FE]  text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500':'flex mb-1 justify-between items-center px-4 py-3 text-[18px] rounded-xl hover:bg-[#E7E7FE] text-gray-500'}>
                                <span className='flex items-center py-1'>
                                <BsReverseLayoutTextSidebarReverse className='mr-2' />
                                Invoice
                                </span>
                                {invoice ? (<span><FaAngleDown /></span>):(<span><FaAngleRight /></span>)}
                            </NavLink>
                            <ul className={invoice ? 'visible ml-6 border-l duration-300' : 'hidden'}>
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
                            <ul className={role ? 'visible ml-6 border-l duration-300' : 'hidden'}>
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
                            <ul className={page ? 'visible ml-6 border-l duration-300' : 'hidden'}>
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
                            <ul className={auth ? 'visible ml-6 border-l duration-300' : 'hidden'}>
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
                            <ul className={wizer ? 'visible ml-6 border-l duration-300' : 'hidden'}>
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
            </div>
       </div>
            ):(
                <div className=' hidden'></div>
            )}
       
    </>
   
  )
}

export default DashbordMenu