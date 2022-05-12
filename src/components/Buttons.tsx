import React from 'react'

const Buttons = ({prevSlide, nextSlide}) => {
  return (
    <div className='absolute -top-[72px] inset-x-0 flex justify-end md:bottom-0 md:left-0 z-30'>
    <button className='bg-black p-6' onClick={() => prevSlide()}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd" /></svg>
    </button>
    <button className='bg-black p-6' onClick={() => nextSlide()}>
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd" /></svg>

    </button>
</div>
  )
}

export default Buttons