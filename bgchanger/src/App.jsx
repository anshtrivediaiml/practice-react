import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState('olive')

  const colors=[
  'red','green','blue','olive','yellow','pink','brown','cyan','orange','orchid', 
  ,'skyblue'
  ]

  const onChange=(color)=>{
    setColor(color);
  }

  return (
    
    <div className='min-h-screen
    min-w-screen duration-200' style={{backgroundColor:color}}> 
    <h1 className='text-center font-bold text-4xl text-slate-800 '> bgColor changer</h1>
    <div className='fixed flex  flex-wrap  justify-center bottom-12 inset-x-0 px-2 max-sm:justify-start'>
      <div className='flex flex-wrap
       max-sm:flex-col   gap-4 xl:flex-row drop-shadow-md bg-slate-50/40 px-3 py-2 rounded-full'>
    {colors.map((color,index)=>{
      return(
       <Button onChange={()=>onChange(color)} key={index} items={color}/>
    )})}
      </div>
       </div>  
    </div>
  )
}

export default App
