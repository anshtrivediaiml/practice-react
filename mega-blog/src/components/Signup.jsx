import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'
import { useForm } from 'react-hook-form'
export const  Signup=()=> {
    const navigate=useNavigate();
    const dispatch=useDispatch(); 
    const [error,setError]=useState('');
    const {register,handleSubmit}=useForm();

    const signup=async(data)=>{
        setError('');
        try{
            const userData=await authService.createAccount(data);
            if(userData){
              const userData=  await authService.getCurrentUser();
              if(userData){
                dispatch(login(userData));
                navigate('/');
              }
            }
        }catch(err){
            setError(err.message)
        }
    }
  return (
    <div className='flex items-center justify-center'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rouded-xl p-10 border border-black/10`}>
      <div className='mb-2 flex justify-center'> 
        <span className='inline-block w-full max-w-[100px]
        '> 
        <Logo width="100%"/>
        </span>
      </div>
      <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create an account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
           Already have an account?&nbsp;
           <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>
           Sign In
           </Link>
        </p>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(signup)} className='mt-8'>
            <div className='space-y-5'>
                <Input 
                label='Name:'
                placeholder='Enter your Name'
                type='email'
                {...register('name',{required:true})}
                />
                 <Input 
                label='Email:'
                placeholder='Enter your email'
                type='email'
                {...register('email',{required:true,
                    validate:{
                        matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email address must be a valid address',
                    }
                })}
                />
                <Input label="Password:"
                type="password" 
                placeholder="Enter your password" {...register('password',{required:true})}
                />
               <Button type="submit" 
               className="w-full">Create Account</Button> 
            </div>
        </form>
      
      </div>

    </div>
  )
}

export default Signup
