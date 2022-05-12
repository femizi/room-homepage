import React from 'react'

const Description = ({h1, text} ) => {
  return (
    <div className='p-16 md:p-24 h-full '>
                    <h1 className='font-bold text-4xl mb-4 '>
                      {h1}
                    </h1>

                    <p className='text-[#a1a1a1] mb-6 text-sm'>
                       {text}
                    </p>

                    <button className='flex align-middle justify-center gap-2 font-semibold tracking-[15px] text-[#454545]'>
                        Shop now
                        <span className='block mt-1'>
                            <svg className='' width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero" /></svg>
                        </span>

                    </button>
                </div>
  )
}

export default Description