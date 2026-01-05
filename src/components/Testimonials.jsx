import React, { useState } from 'react'
import TestimonialsBox from './TestimonialsBox';

function Testimonials() {
    const [testData]=useState([
        {
            id:1,
            desc:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            image:"profile-1.jpg",
            position:"Founder & CEO,Huddil",
            name:"Satish Patel",
        },
           {
            id:2,
            desc:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            image:"profile-2.jpg",
            position:"Founder & CEO,Huddil",
            name:"Bruce Mckenzie",
        },
           {
            id:3,
            desc:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            image:"profile-3.jpg",
            position:"Founder & CEO,Huddil",
            name:"Iva Bovd",
        },
    ])
  return (
        <section className='bg-[var(--color-navy-900)] pb-[350px]'>
            <div className='container relative'>
                <div className='absolute left-[20px] top-[-35px]'>
                    <img src="/src/assets/images/bg-quotes.png" alt="quote" />
                </div>
                <div className='grid grid-cols-1 md:gri lg:grid-cols-3 gap-[40px] relative z-10'>
                    {testData.map((item)=>(
                    <TestimonialsBox 
                    key={item.id}
                    desc={item.desc}
                    image={item.image}
                    position={item.position}
                    name={item.name}
                    />
                   ))}  
                </div>
            </div>
        </section>
)
}

export default Testimonials ;