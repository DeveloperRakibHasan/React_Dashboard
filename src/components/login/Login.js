import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import loginimg from '../../assets/img/login.jpg'
import { useAuth } from '../../context/AuthContext'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const {login, googleSignIn, facebookSignIn} = useAuth();
  const history = useHistory();
  const navigate = useHistory();

  async function handelSubmit (e) {
    e.preventDefault();
    try{
      setError("")
      setLoading(true)
      await login(email, password)
      history.push("/")
    } catch(err){
      console.log(err);
      setLoading(false)
      setError("Faild to login")
    }
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleFacebookChange = async (e) => {
    e.preventDefault();

    try {
      await facebookSignIn();
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };


  return (
    <div>
      <div className='container'>
        <div className='flex h-full pt-[200px] justify-between items-center'>
          <div className='sm:w-6/12 xm:w-0'>
            <img src={loginimg} alt='' />
          </div>
          <div className='sm:w-6/12 xm:w-full ml-6'>
            <form onSubmit={handelSubmit}>
              <input required value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='@email' type='email' className='block w-full border-l-4 border-green-500 box-shadow p-3 rounded-r-2xl mb-10 focus:outline-none focus:placeholder:text-black' />
              <input required value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='*password' type='password' className='block w-full box-shadow p-3 border-l-4 border-green-500 mb-12 rounded-r-2xl focus:outline-none focus:placeholder:text-black' />
              <button type='submit' disabled={loading} className='px-6 leading-7 w-full py-2 bg-green-500 rounded-2xl text-white'>Log in</button>
              {error && <p className='text-red-500 mt-10'>{error}</p>}
            </form>
            <div className='flex items-center justify-center mt-10'>
              <span className='w-20 h-[1px] bg-black'></span>
              <span className='px-4'>OR</span>
              <span className='w-20 h-[1px] bg-black'></span>
            </div>
            <div className='lg:flex gap-5 mt-10 justify-center'>
              <div onClick={handleGoogleSignin} className='box-shadow rounded-md p-3 flex items-center gap-2 cursor-pointer'>
                <FcGoogle className='text-[26px] text-blue-600 rounded-sm' />
                <p>Login with Google</p>
              </div>
              <div onClick={handleFacebookChange} className='rounded-md box-shadow p-3 flex items-center gap-2 cursor-pointer xm:mb-6 lg:mb-0'>
                <FaFacebookF className='text-[26px] text-blue-600 rounded-sm' />
                <p>Login with Facebook</p>
              </div>
            </div>
            <p className='mt-10'>If you don't have any account please <NavLink exact to='/signup' className='text-blue-500 ml-2'>sign up</NavLink> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login