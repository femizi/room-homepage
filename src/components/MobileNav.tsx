import React from 'react'

const MobileNav = ({mobileMenuActive , setMobileMenuActive}) => {
    let active = `md:hidden p-8 flex absolute z-20 inset-x-0`
    let inActive = `hidden`
    function toggle(){
        setMobileMenuActive(!mobileMenuActive)
     
    }
  return (
    <div className={mobileMenuActive ? active : inActive}>
        <div>
            <button onClick={() =>  toggle()}>
       <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fillRule="evenodd"/></svg>

            </button>
        </div>
        <div className='  mx-auto'> 
        
        <img src="images/logo.svg" alt="" />
            </div>
    </div>
  )
}

export default MobileNav