import React from "react";
import image from "../src/assets/image2.png";
import { motion } from 'framer-motion'


const Section3 = () => {
  return (
    <> 
     <div id="code" className=" bg-[#F5F4F4] lg:px-24 md:px-16 py-4 md:py-12">
      <div className=" flex  flex-col md:gap-16 lg:gap-20 justify-center items-center ">
      <motion.div
  initial={{ x: '100%', opacity: 0 }}
  // viewport={{ once :true,}}
  transition={{ duration: 1.5, ease: 'easeInOut' }}
  whileInView={{ x: 0 , opacity: 1 }}
  className=''
>
        <h1 className=" font-custom lg:text-[64px] text-[28px] ml-6 md:text-[60px] md:ml-20 lg:ml-28 text-[#1A202C] leading-[50px]">
          Why
          <span className="font-extrabold ml-3 text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">
            CodeVertix
          </span>
        </h1>
        </motion.div>
        <motion.div
  initial={{ x: '-100%', opacity: 0 }}
  // viewport={{ once :true,}}
  transition={{ duration: 1.5, ease: 'easeInOut' }}
  whileInView={{ x: 0 , opacity: 1, }}
  className=''
>
            
            <div className="flex flex-col justify-center items-center">
          <div className=" md:w-[180px] w-[100px] h-[100px] ml-[11px] shadow-xl md:h-[180px] md:ml-[37px]  rounded-full flex flex-col justify-center items-center  bg-white">
            <p className="font-custom lg:text-[24px] text-[12px] md:text-[20px] lg:leading-[39px] md:leading-[35px] text-[#1A202C]">
              Since
            </p>
            <p className="font-custom lg:text-[36px] text-[16px] md:text-[30px] font-extrabold leading-[39px] text-[#1A202C]">
              2018
            </p>
          </div>
        
        <img  className="md:-mt-[140px] -mt-[65px] lg:max-w-[85%] md:max-w-[120%]  " src={image} alt="pic" /></div>
      </motion.div>
      </div>
      </div>

    
        
     
    </>
  );
};

export default Section3;
