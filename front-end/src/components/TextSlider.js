import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./TextSlider.css";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Parallax, Pagination, Navigation ,Autoplay} from "swiper";

function TextSliderSwiper() {
     return (
          <div className="sm:w-3/5 w-2/4">
               <Swiper
                    speed={600}
                    parallax={true}
                    pagination={{
                         clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation,Autoplay]}
                    className="TextSwiper"
                    autoplay={{
                         delay: 1500,
                         disableOnInteraction: false,
                    }}
               >
                    <SwiperSlide className="textSlider flex flex-col">
                         <div className="title" data-swiper-parallax="-300">
                              Slide 1
                         </div>
                         <div className="text" data-swiper-parallax="-100">
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                   dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                   laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                   Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                   Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                   ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                   tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                              </p>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide className="textSlider flex flex-col">
                         <div className="title" data-swiper-parallax="-300">
                              Slide 2
                         </div>
                         <div className="text" data-swiper-parallax="-100">
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                   dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                   laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                   Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                   Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                   ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                   tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                              </p>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide className="textSlider flex flex-col">
                         <div className="title" data-swiper-parallax="-300">
                              Slide 3
                         </div>
                         <div className="text" data-swiper-parallax="-100">
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                   dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                   laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                   Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                   Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                   ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                   tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                              </p>
                         </div>
                    </SwiperSlide>
               </Swiper>
          </div>

     );
}


export default TextSliderSwiper;