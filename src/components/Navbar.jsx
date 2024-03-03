import React from 'react'
// import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
// import Cart from './Cart';
import {useDispatch } from 'react-redux';
import { changeCartstate } from '../redux/Slices/Cartslice';
import { Link } from 'react-router-dom';
const Navbar = () => {
const dispatch=useDispatch();
// const auth=useSelector((state)=>state.auth.isAuth);
  return (
    <>
    <div className='flex items-center justify-between w-full h-auto '>
        <div className='p-4'>
        <h1 className='text-2xl font-bold'>FrostStyle.</h1>
        </div>    
        <div className='flex items-center gap-5 md:mr-20'>
          <div className='flex items-center gap-10'>
          <Link to="/home">
          <h1 className='font-semibold text-black'>Home</h1>
           </Link>
           <Link to="/mens-wear">
          <h1 className='font-semibold text-black'>Men</h1>
           </Link>
           <Link to="/women-wear">
          <h1 className='font-semibold text-black'>Women</h1>
           </Link>
          
          </div>
          <Link to="/login">
            <button className='w-auto h-8 px-2 text-white bg-black rounded-md'>Log out</button>
            </Link>
            {/* <CgProfile size={25}/> */}
            <IoBagHandleOutline size={25} className='cursor-pointer' onClick={()=>dispatch(changeCartstate())}/>
        </div>

        {/* <Cart cartstate={handlecart}/> */}

    </div>
    </>
  )
}

export default Navbar