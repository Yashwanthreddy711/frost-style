import React from 'react'
import Itemcard from './Itemcard'
import { data } from '../Mendata'

const CartItems = () => {
  return (
    <div className='flex flex-wrap gap-4 mt-10 ml-32'>
      {
        data.map((item)=>(
          <Itemcard url={item.url} name={item.name} price={item.price} des={item.desc} tag={item.tags} />
        ))
      }
        
    </div>
  )
}

export default CartItems