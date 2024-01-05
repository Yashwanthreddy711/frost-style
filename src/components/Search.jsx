import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center w-full mt-10 text-red-500'>
        <input className='h-[20px] w-[80%] md:h-[40px] rounded-md p-4 md:pl-10 border-black border-2 text-base md:text-lg ' placeholder='Enter items to search'/>
    </div>
  )
}

export default Search