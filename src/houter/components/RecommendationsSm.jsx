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
    <div className='mt-5 block lg:hidden mx-4 space-y-4'>
      <h1 className='text-darkBlue font-Lexend text-lg font-semibold mr-5'>
        Featured Houses
      </h1>
      <div className='flex gap-2 justify-between'>
        <div className='font-Lexend font-medium text-green-500 bg-green-100 py-1 px-2.5 rounded-3xl text-xs flex gap-2 items-center'>
          <img src={house} alt='' className='w-3 h-3' />
          <p className='mb-0'>House</p>
        </div>
        <button className='font-Lexend font-medium text-gray-500 border border-gray-300 py-1 px-2.5 rounded-3xl text-xs flex gap-2 items-center '>
          <img src={villa} alt='' className='w-3 h-3' />
          <p className='mb-0'>Villa</p>
        </button>
        <button className='font-Lexend font-medium text-gray-500 border border-gray-300 py-1 px-2.5 rounded-3xl text-xs flex gap-2 items-center'>
          <img src={apartment} alt='' className='w-3 h-3' />
          <p className='mb-0'>Apartment</p>
        </button>
      </div>
      <div className='space-y-3'>
        <div className=''>
          <img src={roseland} alt='' className='mx-auto' />
        </div>
        <div className='|'>
          <div className='flex items-start justify-between'>
            <div className='mb-2'>
              <button className='font-Lexend font-medium text-darkBlue text-sm hover:text-green-500'>
                Roselands House
              </button>
              <p className='font-Lexend font-medium text-sm mb-0 text-green-500'>
                $ 35.000.000
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={dianne} alt='' className='w-8 h-8' />
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
        </div>
      </div>
      <div className='space-y-3'>
        <div className=''>
          <img src={woodland} alt='' className='mx-auto' />
        </div>
        <div className='|'>
          <div className='flex items-start justify-between'>
            <div className='mb-2'>
              <button className='font-Lexend font-medium text-darkBlue text-sm hover:text-green-500'>
                Woodlandside
              </button>
              <p className='font-Lexend font-medium text-sm mb-0 text-green-500'>
                $ 20.000.000
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={robert} alt='' className='w-8 h-8' />
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
        </div>
      </div>
      <div className='space-y-3'>
        <div className=''>
          <img src={lighthouse} alt='' className='mx-auto' />
        </div>
        <div className='|'>
          <div className='flex items-start justify-between'>
            <div className='mb-2'>
              <button className='font-Lexend font-medium text-darkBlue text-sm hover:text-green-500'>
                The Old Lighthouse
              </button>
              <p className='font-Lexend font-medium text-sm mb-0 text-green-500'>
                $ 44.000.000
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={ronald} alt='' className='w-8 h-8' />
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
    </div>
  )
}
