import React from 'react'
import img1 from '../assets/male/11502439720187-INVICTUS-Brown-Slim-Fit-Single-Breasted-Smart-Casual-Blazer-791502439719991-1.jpg'

const Itemcard = () => {
  return (
    <div className='w-[200px] p-2 font-bold flex flex-col rounded-lg bg-white '>
         <img className='w-auto transition-all duration-500 ease-in-out rounded-md hover:scale-110 cursor-grab' src={img1} alt='jacket'/> 
         <div className='mt-5'>
            <h1>Jacket</h1>
            <span>500</span>
         </div>
    </div>
  )
}

export default Itemcard