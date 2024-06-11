import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [NumAllowed,setNumAllowed]=useState(false);
  const [CharAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState('');
  const passwordRef=useRef(null);


  const passwordGenerator=useCallback(()=>{
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num="0123456789";
  let char="!@#$%^&*()_+";
  if(NumAllowed)str=str+num;
  if(CharAllowed)str=str+char;

  let pass='';
   for(let i=1;i<length;i++)
    {
      let random=Math.floor(Math.random()*str.length +1);
      pass+=str.charAt(random);
    }
  
    setPassword(pass);

  },[length,NumAllowed,CharAllowed,setPassword]);
     


  useEffect(()=>{
    passwordGenerator();

  },[length,NumAllowed,CharAllowed,passwordGenerator]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white my-3 '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input ref={passwordRef}  type="text" value={password} 
        className='outline-none w-full px-3 py-1  '
        placeholder='password' readOnly
        />
        <button
        onClick={copyPasswordToClipboard}
        className='bg-blue-600 text-white px-3 py-1 shrink-0 hover:bg-blue-800 duration-200'>copy</button>
      </div>
      
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={50} value={length} className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        />
        <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={NumAllowed} id="numberInput" onChange={(e)=>setNumAllowed(prev => !prev)}/>
        <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={CharAllowed} id="charInput" onChange={(e)=>setCharAllowed(prev => !prev)}/>
        <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
