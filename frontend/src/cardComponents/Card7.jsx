import React from "react";
import User from "../assets/profile2user.png";

const Card7 = (props) => {
  return (
    <>
      <div className="flex animate hover:scale-105 flex-col items-center justify-center">
        <div className="bg-[#2DA3A2] flex z-[1] justify-center items-center w-[90px] h-[90px] md:w-[120px]  md:h-[120px] rounded-full ">
          <img src={User} alt="pic" />
        </div>
        <div className="bg-white flex flex-col mt-[-50px] z-0 py-24 justify-center rounded-[20px] gap-4 items-center h-[345px] md:h-[390px] w-[265px] md:w-[327px] ">
          <h1 className="font-custom font-extrabold text-center w-[171px] text-[20px] md:text-[24px] leading-[30px] md:leading-[33px] text-[#152330] ">
           {props.head} 
          </h1>
          <p className="text-center w-[80%] font-custom text-[12px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#949494]">
            {props.para}
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Card7;
