import React, { useState } from 'react';
import cLogo from "../assets/code.png";




import { IconButton } from "@mui/material";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);}

    
  return (
    <>
       <nav className="py-6  sticky w-full  bg-white px-3 z-[5] lg:px-24 md:px-12 flex justify-between items-center shadow-lg">
      <img src={cLogo} alt="logo" className="w-[128.49px] h-[38.08px]" />
      <div className="flex md:flex-row flex-col-reverse items-center">
        <ul className={`font-custom w-full h-screen md:h-0 md:static gap-2 bg-[#F5F4F4] absolute top-20 right-0 p-3 md:p-0  text-[#152330] md:bg-transparent md:flex md:flex-row md:gap-4 lg:gap-6 justify-start md:justify-center lg:text-[87%] md:text-[55%] md:text-[#152330] md:leading-[13px] font-semibold transition-m duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'hidden'}`}>
          <li className='hover:bg-gray-300 p-2 md:p-0 md:bg-transparent  '>
            <button className="uppercase animate tracking-widest hover:scale-110"  onClick={() => {
                    
                    const Element = document.getElementById("code");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              About us
            </button>
          </li>
          <li className='hover:bg-gray-300 p-2 md:p-0 md:hover:bg-transparent  '>
            <button className="uppercase animate tracking-widest hover:scale-110" onClick={() => {
                    
                    const Element = document.getElementById("services");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              Services
            </button>
          </li>
          {/* <li className=' hover:bg-gray-300 p-2 md:p-0  md:hover:bg-transparent '>
            <button className="uppercase animate tracking-widest hover:scale-110" onClick={() => {
                    
                    const Element = document.getElementById("portfolio");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}
              >
              Portfolio
            </button>
          </li> */}
          <li className='hover:bg-gray-300 p-2 md:p-0  md:hover:bg-transparent '>
            <button className="uppercase animate tracking-widest hover:scale-110" onClick={() => {
                    
                    const Element = document.getElementById("hire");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              Hire
            </button>
          </li>
          <li className=' hover:bg-gray-300 p-2 md:p-0  md:hover:bg-transparent '>
            <button className="uppercase animate tracking-widest hover:scale-110" onClick={() => {
                    
                    const Element = document.getElementById("work");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              How it works
            </button>
          </li>
        </ul>
        <IconButton onClick={toggleMenu} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 text-[#152330] md:hidden h-5">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </IconButton>
      </div>
      <button className={`hidden md:block uppercase duration-300 hover:shadow-lg bg-gradient-to-tr from-[#0CB691] to-[#4A4A99] font-custom font-semibold text-[#FAFAFA] py-3 md:py-4 px-4 rounded-[5px] text-[12px] md:text-[14px] leading-4 ${menuOpen ? 'block' : 'hidden'}`} onClick={() => {
                    
        const Element = document.getElementById("contactUs");
        if (Element) {
          Element.scrollIntoView({ behavior: "smooth" });
        }
        handleMenuItemClick();
      }}>
        Contact us
      </button>
    </nav>

    </>
  );
};

export default NavBar;
