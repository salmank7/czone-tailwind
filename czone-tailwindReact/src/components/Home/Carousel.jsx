import React, { useState } from 'react'
import styles from '../../styles'
import slider from "../../assets/Images/slider.jpg"
import slider2 from "../../assets/Images/slider-2.jpg"
import "./Carousel.css"

const Carousel = () => {
  const [slide, setSlide] = useState()
  const [background, setBackground] = useState();


  return (
    <div className='relative'>
    <div className={`${styles.pattern} max-w-[100%] overflow-x-hidden relative`}>
      <div className={`${styles.pattern} max-w-[100%] flex items-center justify-start transition-all duration-1000 ${slide}`}>
        <img src={slider} alt="Slider-Image" className='' />
        <img src={slider2} alt="Slider-Image" />
      </div>
        <div className='flex dots absolute bottom-4 left-[50%] space-x-2'>
          <div className='w-[15px] h-[15px] rounded-full border-2  border-gray-600 hover:bg-gray-400'
          onClick={()=> setSlide('translate-x-[0]')}></div>
          <div className='w-[15px] h-[15px] rounded-full border-2 border-gray-600 hover:bg-gray-400'
          onClick={()=> setSlide('translate-x-[-100%]')}></div>
        </div>
    </div>
        <p className='text-[0.4rem] sm:text-[0.785rem] text-center absolute bottom-[-1.5rem] text-blue-2 font-lato left-[50%] translate-x-[-50%]'><span className='font-bold'>Note: </span> Due to ongoing changes in the forex rates, prices would be valid subject to the final confirmation</p>
    </div>
  )
}

export default Carousel