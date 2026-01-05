import React from 'react'

function Landing() {
  return (
   <section className='bg-[var(--color-navy-850)] relative overflow-hidden pb-[120px] md:pb-[150px]'>
  <div className='container'>
    <div className='element-center flex-col pt-[200px]  relative z-10'>
      
      <div className='w-[800px] max-w-full mb-6'>
        <img 
          src="/assets/images/illustration-intro.png" 
          alt=""
          className='w-full h-auto'
        />
      </div>

      <div className='text-white text-center flex flex-col items-center pt-3'>
        <h1 className='text-[30px] md:text-[40px] font-semibold mb-[15px]'>
          All your files in one secure location,
          <span className="inline md:block">
             accessible anywhere.
          </span>
        </h1>

        <p className="font-normal text-lg px-[5px] md:w-[600px] max-w-full mb-[30px]">
          Fylo stores all your most important files in one secure location.
          <br className="hidden md:block" />
          Access them wherever you need, share and collaborate with
          <br className="hidden md:block" />
          friends, family, and co-workers.
        </p>

        <a 
          href="/"
          className='btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium'
        >
          Get Started
        </a>
      </div>

    </div>
  </div>

  {/*bg-curvy-mobile */}
  <div className="w-full absolute left-0 bottom-0 md:bottom-0">
    {/* Phone color background */}
    <div className="w-full h-[400px] bg-[var(--color-navy-900)] block md:hidden absolute bottom-0"></div>

    {/*mobile*/}
    <img
      src="/assets/images/bg-curvy-mobile.svg"
      alt="bg curvy mobile"
      className="w-full h-[950px] block md:hidden object-contain absolute bottom-0"
    />

    {/*desktop*/}
    <img
      src="/assets/images/bg-curvy-desktop.svg"
      alt="bg curvy desktop"
      className="w-full h-auto hidden md:block"
    />
  </div>
</section>

  )
}

export default Landing;

