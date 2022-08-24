import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { useEffect } from 'react/cjs/react.production.min';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState('transparent')

  const [textColor, setTextColor] = useState('black')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('000000')
        setTextColor('#ffffff')
      } else {
        setColor('transparent')
        setTextColor('000000')
      }
    };
    window.addEventListener('scroll', changeColor);
  })

  return (
    <nav style={{ backgroundColor: `${color}` }} className="relative container mx-auto p-6 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex items-center justify-between">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>Logo</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href="/">Home</Link>
          </li>
          <li className='p-4'>
            <Link href="/about">About</Link>
          </li>
          <li className='p-4'>
            <Link href="/projects">Projects</Link>
          </li>
          <li className='p-4'>
            <Link href="/donations">Donations</Link>
          </li>
          <li className='p-4'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
          {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
        </div>
        {/* Mobile Menu */}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
        }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/">Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/about">About</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/projects">Projects</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/donations">Donations</Link>
            </li>
            <li className='p-4 text-4xl hover:text-blue-400'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
