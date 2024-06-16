import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Button from './components/Button';

function App() {

  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    }).finally(()=>setLoading(false))
  },[])

  return !loading ? (
    
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block '>
      <Button className='bg-black text-white font-semibold w-32 h-11 hover:bg-slate-700'>
        Demo Text 
      </Button>
      </div>
      </div>
    
  ) :null
}

export default App
