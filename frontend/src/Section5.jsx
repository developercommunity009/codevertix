import React from "react";

const Section5=(props)=>{
    return(<> 
        
        <div className="flex bg-[#F5F4F4] flex-col md:flex-row justify-center p-12 items-center">
        <img src={props.imgsrc} className="w-[100%] lg:w-[30%] md:w-[50%] max-w-[100%] md:max-w-[40%] lg:max-w-[40%] " alt="pic" />
        <div className="md:w-[50%] lg:w-[40%] w-[105%] flex flex-col justify-center items-center md:items-start md:justify-start gap-5">
        <h1 className=" font-custom text-[35px] leading-[30px] md:text-[45px] lg:text-[64px] text-[#1A202C] md:leading-[40px] lg:leading-[54px]">
          {props.head}
          <span className="font-extrabold ml-3 text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">
           {props.shead}
          </span>
        </h1>
        <h2 className="md:text-[32px] text-[28px] leading-[30px] md:leading-[40px] lg:leading-[54px] font-custom font-semibold">{props.head2}</h2>
        <p className="font-custom text-[12px] leading-[22px] md:text-[14px] md:leading-[25px] lg:text-[18px] lg:leading-[32px] text-[#949494]">
        {props.para}
        </p>
        <button className="btn w-[141px] md:w-[146px] h-[45px] md:h-[49px] hover:shadow-lg">View Portfolio</button>
        </div>
        </div>
        
        
    </>)
}

export default Section5;