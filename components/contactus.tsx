import React from 'react'
import Image from 'next/image'

const ContactUs: React.FC = () => {
  return (
    <div className="bg-blue-100 text-black flex flex-col justify-center items-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt=10 lg:pt-6">
        <div className="pb-10">
          {/* <Image src='/logo.svg' width={30} height={30} alt='logo' /> */}
        </div>
        <h2 className="text-4xl font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">Contact Us</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <input
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            type="text"
            placeholder="Name"
            className="bg-blue-100 text-black outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            id="email"
            name="email"
            required
            maxLength={128}
            type="text"
            placeholder="Your E-mail"
            className="bg-blue-100 text-black outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <textarea
            id="message"
            name="message"
            required
            maxLength={1048576}
            type="text"
            placeholder="Additional information"
            className="bg-blue-100 text-black outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-white text-black rounded-3xl px-8 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
