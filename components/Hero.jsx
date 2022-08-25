import React from 'react';
import Image from 'next/image'

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="pb-6 text-5xl font-bold">{heading}</h2>
        <p className="pb-6 leading-tight max-w-5xl mx-auto text-3xl tracking-tight">
          {message}
        </p>
        <button className="px-7 py-2 text-3xl border rounded-md">Donate</button>
      </div>
      <div className="p-12 items-center justify-center flex-col z-[2]">
        <div className="absolute bottom-0 inset-x-0 h-16 mx-auto flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
          <Image
            src="/arrow-down.png"
            width={61}
            height={35}
            alt="scroll down"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero
