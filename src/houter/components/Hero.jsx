import React from 'react'
import hero from '../img/hero.jpg'
import GPS from '../img/GPS.png'
import traveloka from '../img/logo 2.png'
import airbnb from '../img/logo 3.png'
import tripadvisor from '../img/logo 4.png'
import tiket from '../img/logo 5.png'
import user1 from '../img/user1.png'
import user2 from '../img/user2.png'
import user3 from '../img/user3.png'
import houses from '../img/houses.png'

export default () => {
  return (
    <div className=' mt-24 pr-28 hidden lg:flex'>
      <div className='w-5/12'>
        <h1 className='font-Lexend font-semibold text-darkBlue leading-9 text-4xl'>
          Find The Place To <br />
          Live <span className='text-outline'>Your Dreams</span>
          <br />
          Easily Here
        </h1>
        <p className='font-Lexend font-normal text-sm text-gray-500 tracking-tighter mt-4'>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <div className='relative mt-4'>
          <img src={GPS} alt='GPS' className='absolute mt-2 ml-6' />
          <button className='bg-green-500 text-white px-2.5 py-2 text-sm rounded-3xl absolute right-0 font-semibold m-[1px] hover:bg-green-600'>
            Search &gt;
          </button>
          <input
            type='search'
            placeholder='Search for the location you want!'
            className='rounded-3xl w-full border border-gray-300 text-gray-500 text-sm pl-16 py-2 focus:border-green-500'
          />
        </div>
        <p className='font-Lexend font-normal text-sm text-gray-400 tracking-tighter mt-4 mb-0'>
          Our Partners
        </p>
        <div className='flex justify-between items-center'>
          <button className=''>
            <img src={traveloka} alt='traveloka' className='flex-none' />
          </button>
          <button className=''>
            <img src={airbnb} alt='airbnb' className='flex-none' />
          </button>
          <button className=''>
            <img src={tripadvisor} alt='tripadvisor' className='flex-none' />
          </button>
          <button className=''>
            <img src={tiket} alt='tiket' className='flex-none' />
          </button>
        </div>
      </div>
      <div className='w-7/12'>
        <img
          src={hero}
          alt=''
          className='absolute top-0 right-0 rounded-bl-[5rem]'
        />
        <div className='flex absolute'>
          <div className='flex bg-white mt-[395px] h-24 pt-2 rounded-3xl items-center pt-2 pr-[35px] ml-24'>
            <div className='flex justify-between mt-2'>
              <img src={user1} alt='user1' className='-mr-20' />
              <img src={user2} alt='user2' className='-mr-20' />
              <img src={user3} alt='user3' className='' />
            </div>
            <div className='-ml-4 mt-2'>
              <button className='mb-0 font-Lexend font-semibold hover:text-green-500'>1K+ People</button>
              <p className='text-sm text-gray-400'>Successfully Getting Home</p>
            </div>
          </div>
          <div className=' flex bg-white mt-[395px] h-24 pt-2 rounded-3xl items-center pt-2 px-[35px] ml-4'>
            <img src={houses} alt='user1' className='mb-2 mr-3' />
            <div className='mt-2'>
              <button className='mb-0 font-Lexend font-semibold hover:text-green-500'>56 Houses</button>
              <p className='text-sm text-gray-400'>Sold Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
