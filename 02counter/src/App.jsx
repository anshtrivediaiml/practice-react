import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

 const [counter, setCounter] = useState(0);
  const handleincrease=()=>{
    setCounter(prev=>prev+1)
  }

  const handledecrease=()=>{
   setCounter(prev=>prev-1);
  }

 
  return (
    <>
      <h1>Chai aur React</h1>
      <h2 id="h2type">Test Counter:{counter}</h2>
      <button type="button" onClick={handleincrease}>Increment</button>
      <br/>
      <button type="button" onClick={handledecrease}>Decrement</button>
    </>
  )
}

export default App
