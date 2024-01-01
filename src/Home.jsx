import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className='w-full bg-red-500'  >
        <Navbar/>
        <div className='flex justify-center gap-5 mt-40'>
           <button className='w-40 h-10 text-center text-white bg-black rounded-md'>MEN</button>
           <button  className='w-40 h-10 text-center text-white bg-black rounded-md'>WOMEN</button>
        </div>
        <div>
          <h1>Top Picks</h1>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Home