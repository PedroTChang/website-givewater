import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>Help us save lives. </strong>
          According to Unicef, water pollution contributes “to the deaths of
          more than 70,000 Nigerian children under five every year”.
        </p>
        <div className="py-10 leading-tight max-w-5xl mx-auto">
          <img src="https://i.imgur.com/oGgQofV.jpg" />
        </div>
      </div>
    </section>
  )
}

export default About
