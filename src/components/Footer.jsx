import { useState } from "react";
import { FaTwitter ,FaInstagram, FaFacebookF, } from "react-icons/fa";

function Footer() {
      const[contact]=useState([
        {icon:"icon-phone.svg",text:"+1-543-123-4567"},
        {icon:"icon-email.svg",text:"example@fylo.com"},
      ]);
     const linksCol1 = ["About Us", "Jobs", "Press", "Blog"];
     const linksCol2 = ["Contact Us", "Terms", "Privacy"];

      const[socilIcons]=useState([
        "facebook",
        "twitter",
        "instagram"
      ]);
  return (
    <section className="bg-[var(--color-navy-950)] pt-[320px] md:pt-[200px] pb-[100px] text-white">
          <div className=" container">
              <a href="/">
                <img src="/assets/images/logo.svg" alt="log-img"
                className="w-[175px] h-[66px] object-contain" />
              </a>
            <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
               <div className="flex items-start gap-[15px] w-[340px] max-w-full">
                   <img src="/assets/images/icon-location.svg" alt="location-img" 
                        className="w-[18px] h-[18px] object-contain"
                   />
                   <p className="font-normal text-sm tracking-[0.8px]">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  
                   </p>
               </div>
               <div>
                  {contact.map((item)=>(
                      <div key={item.text}
                            className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"      
                      >
                        <img src={`/assets/images/${item.icon}`} alt="icon" 
                             className="w-[18px] h-[18px] object-contain"
                        />
                        <p>{item.text}</p>
                      </div>
                  ))}
               </div>
               <ul className="grid grid-cols-1 gap-x-[40px] gap-y-[15px] md:grid-cols-2 md:gap-[20px] mt-1">
  
             <div className="flex flex-col gap-[15px]">
              {linksCol1.map((link) => (
               <li key={link}>
                 <a
                   href={`/${link.toLowerCase().replace(" ", "-")}`}
                   className="hover:text-[var(--color-teal-200)] transition-colors duration-200 text-base"
                    >
                     {link}
                 </a>
               </li>
                  ))}
             </div>

           <div className="flex flex-col gap-[15px] mt-6 sm:mt-0">
            {linksCol2.map((link) => (
             <li key={link}>
               <a
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-[var(--color-teal-200)] transition-colors duration-200 text-base"
                >
                     {link}
               </a>
            </li>
                ))}
            </div>

              </ul>
               <ul className="flex gap-[15px] w-full justify-center md:w-auto">
                  {socilIcons.map((item)=>(
                    <li key={item}>
                        <a href="" className="group">
                          <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                                {item === "facebook" ?(
                                  <FaFacebookF className="group-hover:text-[var(--color-teal-200)] transition duration-200 :"/>
                                ):item === "twitter" ?(
                                  <FaTwitter className="group-hover:text-[var(--color-teal-200)] transition duration-200 "/>
                                ):(
                                  <FaInstagram className="group-hover:text-[var(--color-teal-200)] transition duration-200 "/>
                                )}
                          </div>
                        </a>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
    </section>
  )
}

export default Footer

