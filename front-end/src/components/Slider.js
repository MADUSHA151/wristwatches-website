import React, { useRef, useState } from "react";
// slider images
import Image1 from "../assets/images/sliderImage.png";
import Image2 from "../assets/images/sliderImage2.jpg";
import Image3 from "../assets/images/sliderImage3.jpg";
import Image4 from "../assets/images/sliderImage4.jpg";
import Image5 from "../assets/images/sliderImage5.jpg";
import Image6 from "../assets/images/sliderImage6.jpg";
import Image7 from "../assets/images/sliderImage7.jpg";
import Image8 from "../assets/images/sliderImage8.jpg";
import Image9 from "../assets/images/sliderImage9.jpg";
import Image10 from "../assets/images/sliderImage10.jpg";
import Image11 from "../assets/images/sliderImage11.jpg";
import Image12 from "../assets/images/sliderImage12.jpg";
import Image13 from "../assets/images/sliderImage13.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import TranseParantBtn from "./BarButton";

function Slider() {

     const progressCircle = useRef(null);
     const progressContent = useRef(null);
     const onAutoplayTimeLeft = (s, time, progress) => {
          progressCircle.current.style.setProperty('--progress', 1 - progress);
          progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
     };

     return (
          <div className="relative">
               <div className="absolute z-10 sm:ps-16 ps-8 sm:pt-8 pt-16  space-y-3">
                    <p className="text-t-watch-color tracking-widest sm:text-5xl font-bold ">CUSTOM WATCHES FOR <br /> ANY OCCASION</p>
                    <div className="space-x-2 sm:space-x-5">
                         <a href="#">
                              <TranseParantBtn text="New Product" />
                         </a>

                         <a href="#">
                              <TranseParantBtn text="Shop" />
                         </a>
                    </div>
               </div>
               <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}

               >
                    <SwiperSlide><img src={Image1} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image2} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image3} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image4} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image5} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image6} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image7} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image8} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image9} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image10} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image11} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image12} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <SwiperSlide><img src={Image13} style={{ width: "100%", height: "66vh", objectFit: "cover" }} /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                         <svg viewBox="0 0 48 48" ref={progressCircle}>
                              <circle cx="24" cy="24" r="20"></circle>
                         </svg>
                         <span ref={progressContent}></span>
                    </div>
               </Swiper>
          </div>
     );

}

export default Slider;