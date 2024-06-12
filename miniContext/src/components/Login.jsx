import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');

  
    const {setUser}=useContext(UserContext);
    const handleSubmit=(e)=>{
      e.preventDefault();
      setUser({username,password});
    }
  return (
    <div className='max-w-md mx-auto'>
        <div className='px-4 rounded-lg mt-32 drop-shadow-md border-2 backdrop-blur-sm'>
            <h1 className='text-2xl text-muted-foreground font-semibold pt-2'>Login</h1>
            <div className=' mt-5 flex flex-col gap-2'>
                <input type='text' placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)} className='border-2 p-2 pb-2 bg-gray-400/5 rounded-lg outline-none '/>

               <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2  p-2 rounded-md bg-gray-400/5 outline-none mb-3 pb-3'/>
               <button className='bg-blue-500 p-2 rounded-lg text-white font-semibold mb-5 hover:bg-blue-700 duration-200' onClick={handleSubmit}>
                Login
               </button>
            </div>
        </div>

    </div>
  )
}

export default Login
