import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Cart from '../components/Cart'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
const Home = () => {
  return (
    <div className='w-full mt-0 '  >
        <Navbar/>
        <Cart/>
        
        <div className='flex justify-between w-full h-full px-20 gap-60 '>
          <div className='w-1/2 px-5 py-5 '>
            
            <h1 className='mt-20 text-5xl font-bold tracking-tighter '>EXPERIENCE THE HEIGHT OF THE FASHION WITH OUR EXQUISITE DESIGNER PIECES </h1>
            <p className='mt-5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia non, quibusdam animi itaque sequi fugiat eligendi suscipit magnam corporis possimus, voluptatibus optio repellat ipsam? Dolorum eius veritatis nulla pariatur neque dolores sint numquam quibusdam omnis, officia perspiciatis mollitia modi repellendus sapiente. Alias, consectetur repudiandae.</p>

            <Link to="/mens-wear">
            <button className='flex items-center w-auto h-8 px-5 mt-10 text-white bg-black rounded-md'>Discover Our Products</button>
           </Link>
          </div>
          <div className='flex w-2/3 gap-5 '>
            <div className='flex flex-col items-center justify-center w-1/3 gap-20 '>
                <div>
                    <img src={pic1} className='h-48 rounded-full w-30' alt='pic'/>
                </div>
                <div >
                <img src={pic4} className='h-48 rounded-b-full w-30' alt='pic'/>
             
                  </div>

            </div>
            <div className='flex items-center w-2/3 ' >
                  <img src={pic2} alt='pic3' className='rounded-t-full h-[450px]'/>
            </div>
             
          </div>
        </div>
      
      
       
       
    </div>
  )
}

export default Home