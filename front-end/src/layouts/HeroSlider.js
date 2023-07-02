import React from "react";
import RotatingBox from "../components/RotatingBox";
import TextSliderSwiper from "../components/TextSlider";

function HeroSection() {
     return (
          <div className="flex flex-col lg:flex-row justify-center items-center pb-12">
               <RotatingBox />
               <TextSliderSwiper/>
          </div>
     );
}

export default HeroSection;