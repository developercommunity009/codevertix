import React from "react";
import Card6 from "./cardComponents/Card6";
import Cdata from "./cardComponents/6Array";
import map from "lodash/map";
import range from "lodash/range";


const Section6 = () => {

  function ncard(val){
    return(<>
      <Card6 para={val.para}
                imgsrc={val.imgsrc}
                head2={val.head2}
  head={val.head}

         />
    </>)
  }


  return (
    <>
      <div id="Reconmmendations" className="bg-white lg:py-24 py-8 md:py-16 lg:px-24 px-8 md:px-16 justify-center items-center gap-4 flex flex-col">
        <h1 className=" font-custom text-[24px] text-[#1A202C] leading-[30px] md:leading-[50px] md:text-[60px] lg:leading-[54px]">
          Our
          <span className="font-extrabold ml-3 text-transparent bg-clip-text bg-gradient-to-l from-[#2DA4A2]  to-[#346899]">
            Recommendations
          </span>
        </h1>
        <p className="text-center w-full md:w-[80%] font-custom text-[12px] md:text-[16px] leading-[25px] md:leading-[30px] text-[#949494]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>

        <div className="flex overflow-scroll gap-4 no-scrollbar w-full md:w-[95%] justify-between items-center "  >
        {map(range(12), _ => (<>
          <div className="lg:py-20 py-4 px-8 md:px-0  md:py-12  "> {Cdata.map(ncard)} </div>
           
        </>
         
        ))}
      </div>


      </div>
    </>
  );
};

export default Section6;
