
import Itemcard from './Itemcard'
import { data } from '../Mendata'


const CartItems = () => {

  
  return (
    <div className='flex flex-wrap justify-center gap-4 mt-10 ml-10 md:ml-4'>
      {
       data.map((item)=>(
          <Itemcard key={item.id} url={item.url} name={item.name} price={item.price} des={item.desc} tag={item.tags} />
        ))
      }
        
    </div>
  )
}

export default CartItems