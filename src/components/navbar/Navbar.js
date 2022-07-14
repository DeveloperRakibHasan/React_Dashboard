import React, {useState} from 'react'
import { SiDash } from "react-icons/si";
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FiLogOut } from "react-icons/fi";

function Navbar() {

    const [menutext, setMenutext] = useState(false);

    const menutexthide = () => {
        if(window.scrollY >= 60){
            setMenutext(true);
        } else{
            setMenutext(false)
        }
    };

    window.addEventListener('scroll', menutexthide)

    const {currentUser, logout} = useAuth();
  return (
    <div className='py-5 px-6 fixed bg-white box-shadow w-full z-[9999]'>
        <div className='flex justify-between'>
            <NavLink exact to='/' className='flex items-center'>
                <SiDash className='text-[30px]' />
                <span className={menutext ?'text-xl ml-0 opacity-0 invisible duration-300':'text-xl ml-4 visible duration-300'}>Dashboard</span>
            </NavLink>
            <div>
                {currentUser ? (
                    <div className='flex items-center'>
                        <span className='mr-4'>{currentUser.displayName}</span>
                        <NavLink exact to='/login'><FiLogOut className='cursor-pointer' onClick={logout} /></NavLink>
                    </div>
                ): (
                <nav className='flex list-none items-center'>
                    <NavLink className='mx-4' exact to='/login'>Log in</NavLink>
                    <NavLink className='mx-4 px-4 py-2 bg-blue-400 rounded-xl text-white leading-7' exact to='/signup'>Sign up</NavLink>
                </nav>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar