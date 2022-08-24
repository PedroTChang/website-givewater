import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='pb-6 text-5xl font-bold'>{heading}</h2>
        <p className='pb-6 leading-tight max-w-5xl mx-auto text-3xl tracking-tight'>{message}</p>
        <button className='px-7 py-2 text-3xl border rounded-md'>Donate</button>
      </div>
    </div>
  )
}

export default Hero
