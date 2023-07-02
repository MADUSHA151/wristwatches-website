import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./RotateBox.css";
import img1 from "../assets/brand/textsliderWatch_2.png"; 
import img2 from "../assets/brand/textsliderWatch_1.png";
import img3 from "../assets/brand/textsliderWatch_3.png";
import img4 from "../assets/brand/textsliderWatch_4.png";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";

function RotatingBox() {
     return (
          <div className="sm:w-1/2 sm:h-2/3">
               <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                         shadow: true,
                         slideShadows: true,
                         shadowOffset: 20,
                         shadowScale: 0.94,
                        shadowOpacity: 0.24,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination,Autoplay]}
                    // className="mySwiper"
                    className="swiperRotate"
                    autoplay={{
                         delay: 1500,
                         disableOnInteraction: false,
                    }}

               >
                    <SwiperSlide className="sliderBox">
                         <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide className="sliderBox">
                         <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide className="sliderBox">
                         <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide className="sliderBox">
                         <img src={img4} />
                    </SwiperSlide>
               </Swiper>
          </div>
     );
}

export default RotatingBox;