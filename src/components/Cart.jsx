import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux';


const Cart = ({cartstate}) => {
 
  const [activeCart,setActivecart]=useState(cartstate);
  const cartItems=useSelector((state)=>state.cart.cart);
  console.log(cartItems);
  useEffect(() => {
    setActivecart(cartstate);
  }, [cartstate]);
  return (
    <div className={`md:w-[20%] w-full z-9 h-full top-0 fixed p-5 right-0 bg-white ${activeCart ?"translate-x-0":"translate-x-full"} transition-all duration-500`}>
    <h1 className='flex items-center text-xl font-bold text-gray-800'>My Items</h1>
      <RxCross2 size={20} onClick={()=>setActivecart(!activeCart)} className='absolute top-0 right-0 '/>
      {

         
            cartItems.length>0 ?( cartItems.map((item) => (
              <CartItem 
                  
                 key={item.id}
                 id={item.id}
                 url={item.url}
                 name={item.name}
                 qty={item.qty}
                 price={item.price}
                 />
          ))):<h1 className='flex items-center justify-center text-xl font-bold text-center text-gray-800'>Your Cart is Empty</h1>
      }
   
    </div>
  )
}

export default Cart