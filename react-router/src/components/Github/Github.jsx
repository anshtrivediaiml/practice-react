import React from 'react'
import { useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData(); //this hook helps you get the data from the loader attribute in the main.jsx file which calls the githubInfo function at the bottom of this file which makes an api call to the github api and returns the data in json format.
    //we use it for optimization as the data here will be available before the component is rendered.
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-row max-w-screen-xl mx-auto'>
        <img src={data.avatar_url} width={300} className='text-center' />
        <div className=' justify-start px-2'>
        Github User : {data.name}
        <br/>
      Github Followers : {data.followers}
        </div>
       
    </div>
  )
}

export default Github

export const githubInfo= async()=>{
    const response=await fetch('https://api.github.com/users/anshtrivediaiml')
    return response.json();
}