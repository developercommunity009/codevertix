import React from "react";
import NextArrowImage from "../assets/arrow.png"
import Section5 from "../Section5";
import { Carousel } from "@material-tailwind/react";
import Sdata from "../componet/workaaray";
import map from "lodash/map";
import range from "lodash/range";



const ScCard=()=>{

    function ncard(val){
      return(<>
        <Section5 para={val.para}
                  imgsrc={val.imgsrc}
                  head2={val.head2}
    head={val.head}
    shead={val.shead}
           />
      </>)
    }

    return(<>
      
      
      <div id="portfolio" className="flex bg-[#F5F4F4] overflow-scroll no-scrollbar w-full justify-between items-center "  >
      <Carousel    transition={{ duration: 1 }}
        // autoplay={{ delay: 2000, reverseDirection: false, loop: true }}
          className="rounded-xl"
  navigation={({ setActiveIndex, activeIndex, length }) => (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
      {Array.from({ length }).map((_, i) => (
        <span
          key={i}
          className={`block h-1 cursor-pointer rounded-2xl transition-all ${
            activeIndex === i ? "w-8 bg-[#152330]" : "w-4 bg-[#152330]/50"
          }`}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  )}
  
>
 {Sdata.map(ncard)} 

  
</Carousel>
  
       
      
      </div>
   
      
    </>)
}

export default ScCard;