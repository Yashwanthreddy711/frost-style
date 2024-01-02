import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='w-full mt-0 bg-red-500'  >
        <Navbar/>
        
        <div className='flex justify-center gap-5 mt-40'>
         
         <Link to="/mens-wear">
          <button className='w-40 h-10 text-center text-white bg-black rounded-md'>
           
           MEN</button>
           </Link>
           <Link to="/women-wear">
           <button  className='w-40 h-10 text-center text-white bg-black rounded-md'>WOMEN</button>
           </Link>
        </div>
        <div>
          <h1>Top Picks</h1>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Home