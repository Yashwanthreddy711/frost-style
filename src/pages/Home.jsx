import React from 'react'
import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom'
import Cart from '../components/Cart'
// import pic1 from '../assets/pic1.jpg'
// import pic2 from '../assets/pic2.jpg'
 //import pic3 from '../assets/pic3.jpg'
// import pic4 from '../assets/pic4.jpg'
const Home = () => {
  return (
    <div className='w-full mt-0 '  >
        <Navbar/>
        <Cart/>
        
        <div className='justify-between w-full h-full ml-5 md:flex md:px-20 md:gap-60 '>
          <div className='w-full py-5 md:px-5 md:w-1/2 '>
            
            <h1 className='pr-5 mt-20 text-5xl font-bold tracking-tighter '>EXPERIENCE THE HEIGHT OF THE FASHION WITH OUR EXQUISITE DESIGNER PIECES </h1>
            <p className='pr-5 mt-5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia non, quibusdam animi itaque sequi fugiat eligendi suscipit magnam corporis possimus, voluptatibus optio repellat ipsam? Dolorum eius veritatis nulla pariatur neque dolores sint numquam quibusdam omnis, officia perspiciatis mollitia modi repellendus sapiente. Alias, consectetur repudiandae.</p>

            <Link to="/mens-wear">
            <button className='flex items-center w-auto text-[14px] px-2 md:text-[16px] h-8 mt-10 text-white bg-black rounded-md md:px-5'>Discover Our Products</button>
           </Link>
          </div>
          <div className='hidden gap-5 md:flex md:w-2/3 '>
            <div className='flex flex-col items-center justify-center w-1/3 gap-20 '>
                <div>
                    <img src='https://images.pexels.com/photos/8524314/pexels-photo-8524314.jpeg' className='h-48 rounded-full w-30' alt='pic'/>
                </div>
                <div >
                <img src='https://images.pexels.com/photos/12185506/pexels-photo-12185506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='h-48 rounded-b-full w-30' alt='pic'/>
             
                  </div>

            </div>
            <div className='flex items-center md:w-2/3 ' >
                  <img src='https://images.pexels.com/photos/19418835/pexels-photo-19418835/free-photo-of-woman-in-a-coat-standing-with-a-hand-in-her-hair-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic3' className='rounded-t-full h-[450px]'/>
            </div>
             
          </div>
        </div>
      
      
       
       
    </div>
  )
}

export default Home