import React, { useState } from 'react'
import Buttons from './Buttons'
import Description from './Description'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'
import MobileNav from './MobileNav'
import Slider from './Slider'

const Top = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [h1, setH1] = useState(`Discover innovative ways to decorate`)
    const [text, setText] = useState(`We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`)
    const [mobileMenuActive, setMobileMenuActive] = useState(true)
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
    function textArranger(slideIndex: number) {
        switch (slideIndex) {
            case 0: { setH1(firstHeading); setText(firstText) ; break }
            case 1: { setH1(secondHeading); setText(secondText); break }
            case 2: { setH1(thirdHeading); setText(thirdText); break }
        }

    }
    console.log(mobileMenuActive)
    return (
        <div className="top grid grid-cols-1 md:grid-cols-2 min-h-[500px] ">
            <div className='relative min-h-full'>
                <MobileNav mobileMenuActive={mobileMenuActive} setMobileMenuActive={setMobileMenuActive} />
                <MobileMenu mobileMenuActive={mobileMenuActive} setMobileMenuActive={setMobileMenuActive} />
                <DesktopNav />
                <Slider slideIndex={slideIndex} />
            </div>
            <div className='relative text-left'>
                <Description h1={h1} text={text} />
                <Buttons prevSlide={prevSlide} nextSlide={nextSlide} />
            </div>
        </div>
    )
}

export default Top