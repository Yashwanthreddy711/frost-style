import React from 'react'


const Itemcard = (props) => {
  return (
    <div id={props.id} className='w-[300px] p-2 font-bold flex flex-col rounded-lg bg-white '>
         <img className='w-auto transition-all duration-500 ease-in-out rounded-md hover:scale-110 cursor-grab' src={props.url} alt='jacket'/> 
         <div className='mt-5'>
            <h1 className='text-sm'>{props.name}</h1>
            <p className='text-sm font-normal'>{props.des.slice(0,30)}...</p>
            <span>₹ {props.price}</span>
         </div>
    </div>
  )
}

export default Itemcard