import React from 'react';

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-o bottom-0'/>
      <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>Partner with Us</h2>
        <p className='py-5 text-xl'>One Survivor's Story</p>
        <button className='px-7 py-2 border rounded-md'>Donate</button>
      </div>
    </div>
  )
}

export default Hero
