import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import CartItems from '../components/CartItems'


const Menwear = () => {
  return (
    <div className='w-full h-screen bg-white'>
        <Navbar/>
        <Search/>
        <div className='flex gap-2 mt-10 ml-10 '>
            <button  className='w-40 h-10 text-center border-black rounded-md border-1 bg-slate-200 hover:text-white hover:bg-black '>Jackets</button>
            <button className='w-40 h-10 text-center border-black rounded-md border-1 bg-slate-200 hover:text-white hover:bg-black '>T-shirts</button>
            <button className='w-40 h-10 text-center border-black rounded-md border-1 bg-slate-200 hover:text-white hover:bg-black '>Shirts</button>
        </div>
     <CartItems/>
        
    </div>
  )
}

export default Menwear