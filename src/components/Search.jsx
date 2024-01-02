import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center w-full mt-10 text-red-500'>
        <input className='w-[80%] h-[40px] rounded-md p-4 pl-10 border-black border-2 ' placeholder='Enter items to search'/>
    </div>
  )
}

export default Search