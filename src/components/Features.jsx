import React, { useState } from 'react'
import FeatureBox from './FeatureBox'

function Features() {
     const[items]=useState([
        {
            icon:"icon-access-anywhere.svg",
            title:"Access your files, anywhere",
            desc:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        },
        {
            icon:"icon-security.svg",
            title:"Security you can trust",
            desc:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        },
        {
            icon:"icon-collaboration.svg",
            title:"Real-time collaboration",
            desc:"Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required."
        },
        {
            icon:"icon-any-file.svg",
            title:"Store any type of file",
            desc:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        },
     ])
  return (
    <section className='bg-[var(--color-navy-900)] pb-[100px]'>
        <div className="container ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
                    {items.map((item)=>(
                        <FeatureBox 
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        desc={item.desc}
                        />
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Features