import React from "react";
import Blogo from "../assets/Blogo.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-white lg:px-24 md:px-16  md:mt-8  py-6 justify-between  items-center">
        <div className="md:w-[55%] w-[85%] gap-3 font-custom flex flex-col lg:gap-9 md:gap-4 ">
          <h1 className="lg:text-[60px] text-[30px] leading-[41px] md:text-[45px] lg:leading-[71px] md:leading-[56px]   text-[#152330] ">
            Building the <b className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">Future </b>
            on the <b className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">CodeVertix</b>
          </h1>
          <p className="lg:text-[14px] md:text-[12px] leading-[30px] text-[#949494]">
          We unite as seasoned developers, technical experts, and strategic minds, dedicated to crafting impeccable products. With a wealth of experience, we ensure every detail is meticulously attended to. Our commitment is unwavering, striving for excellence with each endeavor. Join us on the journey towards innovation and perfection.
          </p>
          <button  className="lg:w-[164px] w-[132px] lg:h-[49px] md:w-[135px] h-[40px] md:h-[45px] btn hover:shadow-lg text-[12px] lg:text-[16px] leading-4 ">
            Let’s get started!
          </button>
        </div>
        <div className="relative" >
          <img className="floating-image"  src={Blogo} alt='mypic' />
        </div>
      </div>

      
    </>
  );
};

export default Banner;
