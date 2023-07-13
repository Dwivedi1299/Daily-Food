import React from 'react'

export default function Detail(props) {
  return (
    <>  
 <div class=" mt-9 ml-10 ">

 
<img class="h-32 w-32 mt-1 border-red-300 border-4 rounded-full  transition-all duration-300 transform-gpu hover:scale-125 " src={props.sweetpic} alt="Example" />


<div class="mt-1 mx-9 from-neutral-500 text-lg">
{props.name}
</div>
</div>
    </>
  )
}
