import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import signupimg from '../../assets/img/signup.jpg'
import { useAuth } from '../../context/AuthContext'

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const {signup} = useAuth();
  const history = useHistory();


  async function handelSubmit (e) {
    e.preventDefault();

    if(password !== confirmPassword) {
      return setError("Passwoard do not match")
    }
    try{
      setError("")
      setLoading(true)
      await signup(email, password, username)
      history.push("/")
    } catch(err){
      console.log(err);
      setLoading(false)
      setError("Faild to create an account")
    }
  }

  return (
    <div>
      <div className='container'>
        <div className='flex h-full pt-[200px] pb-12 justify-between items-center'>
          <div className='sm:w-6/12 xm:w-0'>
            <img src={signupimg} alt='' />
          </div>
          <div className='sm:w-6/12 xm:w-full sm:ml-6 xm:ml-0'>
            <form onSubmit={handelSubmit}>
              <input required placeholder='name' type='text' className='block w-full box-shadow p-3 rounded-2xl mb-10' />
              <input required value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='username' type='text' className='block w-full box-shadow p-3 rounded-2xl mb-10' />
              <input required value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='@email' type='email' className='block w-full box-shadow p-3 rounded-2xl mb-10' />
              <input required value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='*password' type='password' className='block w-full box-shadow p-3 rounded-2xl mb-12' />
              <input required value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} placeholder='*confirm password' type='password' className='block w-full box-shadow p-3 rounded-2xl mb-12' />
              <button disabled={loading} type="submit" className='px-6 leading-7 w-full py-2 bg-sky-500 rounded-2xl text-white'>Sign up</button>
            {error && <p className='text-red-500 mt-10'>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup