import React from "react";
import stars from "../assets/stars.png"
import profile from '../assets/Profile.png'
const Card6=(props)=>{
    return(
        <>
        <div className="md:w-[252px] w-[240px] animate hover:scale-105 flex flex-col  justify-center gap-3 pl-3 h-[280px]  md:h-[323px] rounded-[10px] font-custom bg-[#F5F4F4] ">
            <img src={stars} alt="pic" className="w-[117px]" />
            <h1 className="text-[#152330]  lg:text-[24px] text-[18px] md:text-[20px] lg:leading-[30px] leading-[25px] font-custom font-semibold ">
            {props.head}
          </h1>
          <p className="text-[#949494] w-[85%] md:w-[80%] text-[12px] md:text-[14px] lg:text-[16px] leading-[22px]  md:leading-[24px] ">
          {props.para}
          </p>
          <div className="flex justify-start ">
            <img src={props.imgsrc} alt="pic" />
            <h1 className="w-[118px] text-[#152330] leading-[20px] text-[16px]  lg:text-[18px] font-semibold ">James Gouse<br/><span className="text-[#949494] lg:text-[13px] text-[11px] leading-[20px] lg:leading-[24px] ">
            {props.head2}
            </span></h1>
          </div>
        </div>
        </>
    )
}

export default Card6;