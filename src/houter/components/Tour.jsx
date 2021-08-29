import React from 'react'
import dianne from '../img/dianne-lg.png'
import bed from '../img/bed.png'
import bath from '../img/bath.png'
import car from '../img/car.png'
import stairs from '../img/stairs.png'
import phone from '../img/phone.png'
import play from '../img/play.png'
import video from '../img/video.jpg'

export default () => {
  return (
    <div className='mt-20 font-Lexend hidden lg:block'>
      <div className='flex justify-between'>
        <div className='w-1/2'>
          <div className='flex items-center gap-2'>
            <div className='h-[1px] w-8  bg-yellow-600'></div>
            <p className='text-yellow-600 font-medium text-xs'>
              Ready to Sell!
            </p>
          </div>
          <div className=''>
            <h1 className='text-darkBlue font-Lexend text-3xl font-semibold mr-5'>
              Let’s tour and see our house!
            </h1>
            <p className='font-medium text-gray-500 text-sm mb-0'>
              Houses recommended by our partners that have been <br /> curated
              to become the home of your dreams!
            </p>
            <p className='font-Lexend mt-3 text-lightDarkBlue font-semibold mt-4'>
              House Details
            </p>
            <div className='grid grid-cols-2 space-y-2'>
              <div className='flex items-center gap-2'>
                <img src={bed} alt='' className='' />
                <p className='font-medium text-gray-600 text-sm mb-0'>
                  4 Bedrooms
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <img src={bath} alt='' className='' />
                <p className='font-medium text-gray-600 text-sm mb-0'>
                  2 Bathrooms
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <img src={car} alt='' className='' />
                <p className='font-medium text-gray-600 text-sm mb-0'>
                  1 Carport
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <img src={stairs} alt='' className='' />
                <p className='font-medium text-gray-600 text-sm mb-0'>
                  2 Floors
                </p>
              </div>
            </div>
            <div className='flex mt-8 gap-2 items-center border-t border-gray-300 pt-8 w-[450px]'>
              <img src={dianne} alt='' className='w-12 h-12' />
              <div className='font-Lexend'>
                <p className='mb-0 text-sm font-medium text-gray-800'>
                  Dianne Russell
                </p>
                <p className='mb-0 text-xs font-medium text-gray-400'>
                  Manager Director
                </p>
              </div>
              <button className='bg-green-500 text-white font-semibold flex gap-2 items-center px-3 py-2 rounded-3xl text-sm ml-24 hover:bg-green-600'>
                <img src={phone} alt='' className='' />
                Contact Now
              </button>
            </div>
          </div>
        </div>
        <div className='w-[488px] relative grid h-[416px] place-content-center'>
          <button className='rounded-full relative z-10 bg-green-300/50 w-16 h-16 grid place-content-center hover:bg-green-500'>
            <img src={play} alt='' className='relative z-20' />
          </button>
          <img src={video} alt='' className='absolute' />
        </div>
      </div>
    </div>
  )
}
