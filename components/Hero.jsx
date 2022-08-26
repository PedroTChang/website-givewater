import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({ heading, message }) => {
  //   return (
  //     <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
  //       {/* Overlay */}
  //       <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
  //       <div className="p-5 text-white z-[2] mt-[-10rem]">
  //         <h2 className="pb-6 text-5xl font-bold">{heading}</h2>
  //         <p className="pb-6 leading-tight max-w-5xl mx-auto text-3xl tracking-tight">
  //           {message}
  //         </p>
  //         <button className="px-7 py-2 text-3xl border rounded-md">Donate</button>
  //       </div>
  //       <div className="p-12 items-center justify-center flex-col z-[2]">
  //         <div className="absolute bottom-0 inset-x-0 h-16 mx-auto flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
  //           <Image
  //             src="/arrow-down.png"
  //             width={61}
  //             height={35}
  //             alt="scroll down"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="absolute w-full h-screen bg-fixed bg-center bg-cover custom-img" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000`}
      ></div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-6xl">Give Water Give Life</h1>
        <h2 className="pb-6 mb-2 text-left max-w-4xl text-2xl xl:text-3xl tracking-tight">
          <span>{message}</span>
        </h2>
        <button className="px-7 py-2 text-3xl border rounded-md">Donate</button>
      </div>
      <div className="flex-grow-0 z-10 pb-20 md:pb-10 transition-all duration-1000">
        <Image src="/arrow-down.png" width={61} height={35} alt="scroll down" />
      </div>
    </div>
  )
}

export default Hero
