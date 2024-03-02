import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addtoCart } from '../redux/Slices/Cartslice';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

const Itempage = () => {
  const location = useLocation();
  const dispatch=useDispatch();
  const { id, url, name, price, des } = location.state;

  return (
    <div className='w-full h-full'>

    <Navbar/>
    <Cart/>
    <div className='w-full md:w-[80%]  mx-auto md:m-20 justify-center items-center sm:flex'>
      <div className='flex-wrap justify-center w-auto h-full gap-20 border-2 rounded-md md:p-10 md:flex'>
        <div>
          <img src={url} className='w-[300px] h-[400px] rounded-md hover:scale-110 transition-all duration-300 ease-in-out' alt='product_image' />
        </div>
        <div className='flex flex-col items-center w-auto gap-5 '>
          <h1 className='mt-5 text-2xl font-bold leading-6 font-assistant text-rgb-40-44-63'>{name}</h1>
          <p className='text-base font-normal leading-normal font-assistant text-rgb-83-86-101'>{des}</p>
          <h1 className='mt-5 text-2xl font-bold leading-6 text-rgb-40-44-63'>₹{price}</h1>
          <div className='mt-10'>
            <h1 className='text-base font-bold leading-4 text-center'>SELECT SIZE</h1>
            <div className='gap-2 mt-5'>
                    <div className='flex gap-2'>
                       <h1 className='border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full hover:border-blue-500 transition-all ease-linear bg-gray-100'>S</h1>
                       <h1 className='border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full hover:border-blue-500 transition-all ease-linear bg-gray-100'>M</h1>
                       <h1 className='border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full hover:border-blue-500 transition-all ease-linear bg-gray-100'>L</h1>
                       <h1 className='border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full hover:border-blue-500 transition-all ease-linear bg-gray-100'>XL</h1>
                       <h1 className='border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full hover:border-blue-500 transition-all ease-linear bg-gray-100'>XXL</h1>
                    </div>
                   </div>
          </div>
          <button
            onClick={() => {
              dispatch(addtoCart({ id, url, name, price, qty: 1 }));
            }}
            className='flex items-center justify-center w-40 h-12 mt-10 transition-all ease-in-out bg-gray-100 border-2 rounded-md hover:bg-blue-500 '
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Itempage;
