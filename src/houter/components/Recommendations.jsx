import React from 'react'
import dianne from '../img/dianne.png'
import robert from '../img/robert.png'
import ronald from '../img/ronald.png'
import roseland from '../img/roseland.jpg'
import woodland from '../img/woodland.jpg'
import lighthouse from '../img/lighthouse.jpg'
import house from '../img/house.png'
import villa from '../img/villa.png'
import apartment from '../img/apartment.png'

export default () => {
  return (
    <div className='mt-72 hidden lg:block'>
      <div className='flex items-center gap-2'>
        <div className='h-[1px] w-8 bg-yellow-600'></div>
        <p className='text-yellow-600 font-medium text-xs'>Our Recommendations</p>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-darkBlue font-Lexend text-3xl font-semibold mr-5'>
          Featured Houses
        </h1>
        <div className='flex gap-2'>
          <div className='font-Lexend font-medium text-green-500 bg-green-100 py-2.5 px-4 rounded-3xl text-sm ml-2 flex gap-2 items-center'>
            <img src={house} alt='' className='' />
            <p className='mb-0'>House</p>
          </div>
          <button className='font-Lexend font-medium text-gray-500 border border-gray-300 py-2.5 px-4 rounded-3xl text-sm ml-2 flex gap-2 items-center  hover:bg-green-100 hover:border-white'>
            <img src={villa} alt='' className='' />
            <p className='mb-0'>Villa</p>
          </button>
          <button className='font-Lexend font-medium text-gray-500 border border-gray-300 py-2.5 px-4 rounded-3xl text-sm ml-2 flex gap-2 items-center mr-3 hover:bg-green-100 hover:border-white'>
            <img src={apartment} alt='' className='' />
            <p className='mb-0'>Apartment</p>
          </button>
        </div>
        <div className='flex gap-2'>
          <button className='font-Lexend font-medium bg-gray-300 py-1 px-4 rounded-3xl text-sm ml-2 hover:bg-green-500 hover:text-white'>
            <p className='text-lg font-medium mb-1'>&#60;</p>
          </button>
          <button className='font-Lexend font-medium bg-gray-300 py-1 px-4 rounded-3xl text-sm ml-2 hover:bg-green-500 hover:text-white'>
            <p className='text-lg font-medium mb-1'>&#62;</p>
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className=''>
          <div className=''>
            <img src={woodland} alt='' className='mb-3' />
          </div>
          <button className='font-Lexend font-medium text-darkBlue text-xl hover:text-green-500'>
            Roselands House
          </button>
          <p className='font-Lexend font-medium text-glue mb-5'>$ 35.000.000</p>
          <div className='flex gap-2 items-center'>
            <img src={dianne} alt='' className='w-10 h-10' />
            <div className=''>
              <p className='font-semibold text-darkBlue text-sm mb-0'>
                Dianne Russell
              </p>
              <p className='font-medium text-gray-500 text-xs mb-0'>
                Manchester, Kentucky
              </p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <img src={roseland} alt='' className='mb-3' />
          </div>
          <button className='font-Lexend font-medium text-darkBlue text-xl hover:text-green-500'>
            Woodlandside
          </button>
          <p className='font-Lexend font-medium text-glue mb-5'>$ 20.000.000</p>
          <div className='flex gap-2 items-center'>
            <img src={robert} alt='' className='w-10 h-10' />
            <div className=''>
              <p className='font-semibold text-darkBlue text-sm mb-0'>
                Robert Fox
              </p>
              <p className='font-medium text-gray-500 text-xs mb-0'>
                Dr. San Jose, South Dakota
              </p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <img src={lighthouse} alt='' className='mb-3' />
          </div>
          <button className='font-Lexend font-medium text-darkBlue text-xl hover:text-green-500'>
            The Old Lighthouse
          </button>
          <p className='font-Lexend font-medium text-glue mb-5'>$ 44.000.000</p>
          <div className='flex gap-2 items-center'>
            <img src={ronald} alt='' className='w-10 h-10' />
            <div className=''>
              <p className='font-semibold text-darkBlue text-sm mb-0'>
                Ronald Richards
              </p>
              <p className='font-medium text-gray-500 text-xs mb-0'>
                Santa Ana, Illinois
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
