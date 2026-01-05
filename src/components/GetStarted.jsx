import React from 'react'

function GetStarted() {
  return (
    <section>
        <div className="container  relative">
            <div className="bg-[var(--color-navy-850)]  absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col  w-[380px] md:w-[865px] max-w-full min-h-[275px] text-white text-center p-[30px]">
                <h3 className='text-[23px] md:text-[35px] font-semibold mb-[15px]'>
                    Get early access today
                </h3>
                <p className='w-[675px] max-w-full mx-auto mb-[30px] text-center md:text-justify leading-relaxed px-4'>
                  It only takes a minute to sign up and our free starter tier is extremely generous. 
                   If you have any questions, our support team would be happy to help you.
                </p>
                <form className='w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]'>
                <input type="email" placeholder='email@example.com' 
                className='w-full md:flex-1 bg-white placeholder:text-gray-400 h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-sm text-black font-medium'
                />
                <button type='submit' className='w-full md:w-[200px] h-[50px] bg-[var(--color-teal-200)] hover:[#8cdae4] transition-all duration-200 rounded-[30px]'>
                Get Started For Free
                </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
