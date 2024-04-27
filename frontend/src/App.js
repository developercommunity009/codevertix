import React from "react";
import NavBar from "./componet/navBar";
import Banner from "./componet/Banner";
import Section3 from "./section3";
import Services from "./Services";

import Section6 from "./rSection";
import Section7 from "./Section7";
import ScCard from "./cardComponents/Scroller";
import Section8 from "./Section8";

import Footer from "./componet/Footer";
import { Route, Routes } from "react-router-dom";




function App() {
  return (
   <><div
        
   className="min-h-screen  gray-gradient  max-w-[100vw]  overflow-hidden "
 >
   <div  className="shadow-xl   max-w-[1469px]   mx-auto ">
 
     <NavBar />
   
    <Banner />
    <Section3 />
    <Services />  
    {/* <ScCard /> */}
    {/* <Section6 /> */}
    <Section7 />
    <Section8 />
   
    



     
     
   <Footer/>
   </div>
 </div>
 


     
   </>
  );
}

export default App;
