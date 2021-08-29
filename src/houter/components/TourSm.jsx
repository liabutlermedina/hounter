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
    <div className='mt-2 font-Lexend block lg:hidden px-4'>
      <h1 className='text-darkBlue font-Lexend text-xl font-semibold mr-5 mb-4 text-center'>
        Take a tour
      </h1>
      <div className='relative grid place-content-center h-[416px]'>
        <div className="bg-green-500 rounded-full w-16 h-16 relative z-10 grid place-content-center">
          <img src={play} alt="" className="relative z-20" />
        </div>
        <img src={video} alt='' className='absolute inset-0 h-full object-cover' />
      </div>
    </div>
  )
}
