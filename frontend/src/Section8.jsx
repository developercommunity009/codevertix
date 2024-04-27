import React from "react";
import btn1 from "../src/assets/btnUp.png";
import btn2 from "../src/assets/btnDn.png"; 
import Csection8 from "./cardComponents/Csection8";

const Section8 = () => {
  return (
    <>
      <div id="hire" className="lg:px-24 lg:py-24 px-8 md:px-16 py-8 md:py-16 ">
        <div className="bg-[#F5F4F4] flex md:flex-row flex-col justify-center items-center gap-12 md:gap-20  py-8 rounded-[20px] px-4 md:px-8">
          <h1 className="text-[21px] leading-[25px] md:leading-[30px] lg:text-[30px] lg:leading-[43px] text-[#152330] lg:w-[50%] w-[90%] md:w-[60%] font-custom font-bold ">
            Hire the best developers and designers around!
          </h1>
          <div className="flex flex-col lg:w-[25%] w-[90%] md:w-[45%] items-center gap-6 ">
            <img className="w-[105px] h-[35px] " src={btn1} alt="btn" />
            <button className="py-4 px-4  rounded-[5px] font-semibold font-custom hover:shadow-lg duration-300 text-white bg-gradient-to-tr from-[#0CB691] to-[#4A4A99]">
              Hire Top Developers
            </button>
            <img className="w-[105px] h-[35px] " src={btn2} alt="btn" />
          </div>
        </div>
        <div className="lg:px-20 px-0 py-12 md:py-20">
          <h1 className=" font-custom text-center text-[39px] md:text-[52px] text-[#1A202C] leading-[55px] md:leading-[67px]">
            Let Us Know What You Are Looking For
            <br />
            <span className="font-extrabold ml-3 text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">
              We’ll Built It For You
            </span>
          </h1>
        </div>
        <Csection8 />
      </div>
    </>
  );
};

export default Section8;
