import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import loginimg from '../../assets/img/login.jpg'
import { useAuth } from '../../context/AuthContext'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const {login} = useAuth();
  const history = useHistory();


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
  }
  return (
    <div>
      <div className='container'>
        <div className='flex h-screen justify-between items-center'>
          <div className='w-6/12'>
            <img src={loginimg} alt='' />
          </div>
          <div className='w-6/12 ml-6'>
            <form onSubmit={handelSubmit}>
              <input required value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='@email' type='email' className='block w-full border-l-4 border-green-500 box-shadow p-3 rounded-r-2xl mb-10 focus:outline-none focus:placeholder:text-black' />
              <input required value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='*password' type='password' className='block w-full box-shadow p-3 border-l-4 border-green-500 mb-12 rounded-r-2xl focus:outline-none focus:placeholder:text-black' />
              <button type='submit' disabled={loading} className='px-6 leading-7 w-full py-2 bg-green-500 rounded-2xl text-white'>Log in</button>
              {error && <p className='text-red-500 mt-10'>{error}</p>}
            </form>
            <p className='mt-10'>If you don't have any account please <NavLink exact to='/signup' className='text-blue-500 ml-2'>sign up</NavLink> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login