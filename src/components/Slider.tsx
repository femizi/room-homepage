import React from 'react'

const Slider = ({slideIndex}) => {
    let active = `hidden md:block absolute w-full transtion-opacity duration-500 ease-in-out opacity-100`
    let inactive = `hidden md:block absolute w-full translate-x-full`
    let mobileActive = `block md:hidden absolute w-full transtion-opacity duration-500 ease-in-out opacity-100`
    let mobileInactive = `block md:hidden absolute w-full translate-x-full`
  return (
    <div className='w-full  z-10 relative h-full min-h-[350px] overflow-hidden'>
    <img className={slideIndex === 0 ? mobileActive : mobileInactive} src="/images/mobile-image-hero-1.jpg" alt="" />
    <img className={slideIndex === 1 ? mobileActive : mobileInactive} src="/images/mobile-image-hero-2.jpg" alt="" />
    <img className={slideIndex === 2 ? mobileActive : mobileInactive} src="/images/mobile-image-hero-3.jpg" alt="" />

    <img className={slideIndex === 0 ? active : inactive} src="/images/desktop-image-hero-1.jpg" alt="" />
    <img className={slideIndex === 1 ? active : inactive} src="/images/desktop-image-hero-2.jpg" alt="" />
    <img className={slideIndex === 2 ? active : inactive} src="/images/desktop-image-hero-3.jpg" alt="" />
</div>
  )
}

export default Slider