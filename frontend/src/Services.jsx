import React from "react";
import SCard from "../src/cardComponents/sCards";
import {motion} from "framer-motion"
const Services = () => {
  return (
    <>
      <div id="services" className="bg-white flex flex-col lg:px-24 px-6 md:px-16 py-8  md:py-12 justify-center items-center lg:gap-24 gap-8  ">
        <h1 className=" font-custom lg:text-[64px] leading-[45px]  text-[40px] md:text-[60px] text-[#1A202C] md:leading-[50px] lg:leading-[54px]">
          Our
          <span className="font-extrabold ml-3  text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">
            Services
          </span>
        </h1>
        <motion.div
                whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                initial='hidden'
                style={{ opacity: 0 }}
                // viewport={{ once: true }}
                className=''
            >
       <div className="flex flex-wrap justify-center items-center gap-5 ">
      
 
          <SCard
            head="AI/ML/CV/ChatGPT"
           para="Automate business operations with our tailor-made AI/ML/ChatGPT solutions to save time, reduce errors and improve efficiency — freeing up your resources to focus on profit-making decisions while enjoying increased accuracy & productivity. " />

          <SCard head="Web Application Development"
           para="Revolutionize your web presence with our comprehensive approach to scalable product development and continuous post-launch support, ensuring seamless growth and optimal performance throughout."  />

          <SCard head="Mobile App Development"
           para="Consultation on updating existing mobile applications and development of apps that look and perform great on both iOS and Android."  />  

          <SCard head="Game/Metaverse Development"
           para="Developing a conceptual game is a maverick's job, and game developers at InvoZone clearly know the art of creating magical products that match your players’ vision and preferences. Are you ready to launch powerful gameplays? "  />

          <SCard head="Blockchain Development"
           para="Become a part of a trustless and borderless distributed network with InvoBlox’s real-world blockchain consultancy and development services. "  />
        </div>
        </motion.div>
      </div>

    </>
  );
};

export default Services;
