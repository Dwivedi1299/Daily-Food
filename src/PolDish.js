import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faStar,faAddressCard,faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'


export default function PolDish(props) {
  const Notify = () => {
    toast('1 Item Add the Cart.....');
  };

  return (
    < > 
   
 
    <div class="flex">
        <div class="w-96 h-60 ml-32 mt-12 border-2 flex-initial rounded-2xl">
         <h1 class="mt-3 ml-24 text-4xl text-amber-500">{props.name}</h1>
         <p class="mt-3 text-sm text-center ml-8 mr-8 text-cyan-100">{props.about}</p>
          
           <div class="flex"> 
         <button class=" ml-16 text-cyan-100 flex" onClick={Notify}>  <FontAwesomeIcon class="h-10 mt-5 ml-9" icon={faCartPlus}/>
        </button>
    
        {/* <a class="mt-5 ml-10" href="https://chat.openai.com/"><FontAwesomeIcon class="h-10 ml-14 " icon={faArrowUpRightFromSquare} /></a> */}
        

        <ToastContainer />
        </div>
        </div>

        <div class="mt-12 ml-14"> 
  <img class="h-60 w-96 rounded-3xl border-2 border-bg-red-400" src={props.pic} alt="img"/>
      
         </div>
        
    </div>
    </>
  )
}
