import React, { useState } from 'react'
import Description from './Description'

const Top = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [h1, setH1] = useState(`Discover innovative ways to decorate`)
    const [text, setText] = useState(`We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`)
    const firstHeading = 'Discover innovative ways to decorate'
    const secondHeading = 'We are available all across the globe'
    const thirdHeading = 'Manufactured with the best materials'
    const firstText = ` We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`
    const secondText = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.
`
    const thirdText = ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
to ensure that every product is made as perfect and as consistent as possible. With three decades of
experience in this industry, we understand what customers want for their home and office.`
    function nextSlide() {
        if (slideIndex === 2) {
            setSlideIndex(0)
            textArranger(slideIndex)

        } else {
            setSlideIndex(slideIndex + 1)
            textArranger(slideIndex)

        }
        console.log(slideIndex)
    }
    function prevSlide() {
        if (slideIndex === 0) {
            setSlideIndex(2)
            textArranger(slideIndex)


        } else {
            setSlideIndex(slideIndex - 1)
            textArranger(slideIndex)

        }
        console.log(slideIndex)
    }
    function textArranger(slideIndex:number) {
        switch (slideIndex) {
            case 0: {setH1(firstHeading); setText(firstText); break}
            case 1: {setH1(secondHeading); setText(secondText); break}
            case 2: {setH1(thirdHeading); setText(thirdText); break}
        }
        
    }

    return (
        <div className="top grid grid-cols-[60%_40%] ">
            <div className='relative'>
                <nav className='absolute z-20 font-semibold text-white inset-x-0 top-0  p-8  gap-8 flex'>
                    <a href="" className='grid place-content-center'>
                        <svg width="62" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z" fill="#FFF" fill-rule="nonzero" /></svg>
                    </a>
                    <a href="">
                        Home
                    </a><a href="" >
                        Shop
                    </a><a href="">
                        About
                    </a>
                    <a href="">
                        Contact
                    </a>

                </nav>
                <div className='w-full z-10 relative h-full overflow-hidden'>

                    <img className='absolute w-full ' src="/images/desktop-image-hero-1.jpg" alt="" />
                    <img className='absolute w-full translate-y-[100%] ' src="/images/desktop-image-hero-2.jpg" alt="" />
                    <img className='absolute w-full translate-y-[200%] ' src="/images/desktop-image-hero-3.jpg" alt="" />
                </div>
            </div>
            <div className='relative text-left'>
                <Description h1={h1} text={text} />
                <div className='absolute bottom-0 left-0'>
                    <button className='bg-black p-6' onClick={() => prevSlide()}>
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd" /></svg>
                    </button>
                    <button className='bg-black p-6' onClick={() => nextSlide()}>
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd" /></svg>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Top