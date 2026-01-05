import { useEffect, useRef, useState } from "react";

function Header() {
  const headerRef =useRef();
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
          headerRef.current.style.background="var(--color-navy-950)";
          headerRef.current.style.padding="20px 0";
        }else{
          headerRef.current.style.background="transparent";
          headerRef.current.style.padding="60px 0";
        }
      });
  },[]);
  const [links]=useState(["Features","Team","Signin"]);
  return (
    <header  ref={headerRef}
          className="pt-[60px]  fixed top-0 left-0 w-full z-50 transition-all duration-200">
      <div className="container  flex justify-between items-center gap-[40px]  flex-row">
            <a href="/">
                <img src="/assets/images/logo.svg" alt="logo-img" />
            </a>
        <nav>
            <ul className="flex items-center gap-[25px]">
              {links.map((link)=>(
                <li key={link}>
                 <a href={`/${link.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"> {link}
                   </a>
               </li>
        ))}
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
