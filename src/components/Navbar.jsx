import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
    <div className='flex justify-between w-full h-auto '>
        <div className='p-4'>
        <h1 className='text-2xl font-bold'>FrostStyle.</h1>
        </div>    
        <div className='flex gap-3 mt-4 md:mr-20'>
            <CgProfile size={25}/>
            <IoBagHandleOutline size={25}/>

        </div>

    </div>
    </>
  )
}

export default Navbar