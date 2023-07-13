import React from 'react'
import './index.css';
export default function Cart(props) {
  return (
    <div class=" mt-9 ml-10 ">

 
     <img class="h-32 w-32 mt-1 border-b-slate-600 border-4 rounded-full  transition-all duration-300 transform-gpu hover:scale-125 " src={props.image} alt="Example" />

  
   <div class="mt-1 mx-9 from-neutral-500 text-lg">
   {props.name}
   </div>
    </div>
  
  )

  }