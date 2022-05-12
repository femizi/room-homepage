import React from 'react'

const Bottom = () => {
    return (
        <div className="bottom grid grid-cols-1 md:grid-cols-[30%_40%_30%] ">
            <div>
                <img src="images/image-about-dark.jpg" alt="" />
                </div>
            <div className='p-6'>
                <h2 className='font-semibold mb-2 text-left tracking-[10px] uppercase'>
                    About our furniture
                </h2>
                <p className='text-[#a1a1a1] text-left text-sm'>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <div>
                <img className='object-contain w-full' src="images/image-about-light.jpg" alt="" />
            </div>
        </div>
    )
}

export default Bottom