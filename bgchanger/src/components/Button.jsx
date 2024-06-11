import React from 'react'

const Button = (props) => {
  
  return (
    <button  onClick={props.onChange} className="px-3 py-1 drop-shadow-md rounded-full font-semibold text-[15px] text-center xl:w-24 min-sm:w-auto "  style={{backgroundColor:props.items}}>
      {props.items}
    </button>
  
  )
}

export default Button
     