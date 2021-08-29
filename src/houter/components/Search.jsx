import React from 'react'

export default () => {
  return (
    <div className='relative mt-2 px-4 h-10 grid place-content-center lg:hidden'>
      <div className=''>
        <div className='relative z-10'>
          <button className='bg-green-500 text-white px-2.5 py-2 text-xs rounded-3xl absolute right-0 font-semibold m-[1px] right-0'>
            Search &gt;
          </button>
          <input
            type='search'
            placeholder='Search for locations!'
            className='rounded-3xl w-full border border-gray-300 text-gray-500 text-xs pl-8 py-2 focus:border-green-500 w-80'
          />
        </div>
      </div>
    </div>
  )
}
