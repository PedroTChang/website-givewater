import Image from 'next/image'
import React, {useState} from 'react';
import { SliderData } from './SliderData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
          return (
            <div key={index} 
            className={
              index === current 
              ? 'opacity-[1] ease-in duration-1000 '
              : 'opacity-0'
              }
              > 
                <BsChevronLeft
                  onClick={prevSlide}
                  className='absolute top-[50%] left-[30px] text-black/40 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
              {index === current && (
                <Image 
                  src={slide.image} 
                  alt='/' 
                  width='600' 
                  height='720' 
                  objectFit='cover' 
                /> 
              )}
                <BsChevronRight
                  onClick={nextSlide}
                  className='absolute top-[50%] right-[30px] text-black/40 cursor-pointer select-none z-[2]' 
                  size={50} 
                />
              </div>
              );
            })}
        </div>
      </div>
  )
}

export default Slider
