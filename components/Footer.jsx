import React from 'react'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="bg-blue-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Give Water<span className="text-blue-400"> Give Life</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram href='https://www.instagram.com/givewatergivelife1/' className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter href='https://twitter.com/givewatertolive' className="text-2xl cursor-pointer hover:text-blue-400" />
              {/* <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-400" /> */ }
              <FaFacebookSquare className="text-2xl cursor-pointer hover:text-blue-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <Link href='/story' className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              About
            </Link>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 All rights reserved | Build with ❤ by{' '}
          <span className="hover:text-blue-400 font-semibold cursor-pointer">
            GWGL{' '}
          </span>
        </h1>
      </div>
    </>
  )
}

export default Footer
