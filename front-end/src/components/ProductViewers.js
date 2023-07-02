import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ProductViewers.css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Card from "./Card";

function ProductCollectionSlider() {
     return (
          <div className="bg-g-theme-color text-t-watch-color  " style={{ width: "100%", minHeight:"60%" }}>
               <div className="flex justify-between sm:text-3xl p-4">
                    <a href="#">Collection</a>
                    <a href="#">All Product</a>
               </div>
               <div>
                    <Swiper
                         slidesPerView={1}
                         spaceBetween={10}
                         pagination={{ 
                              clickable: true,
                              type: "progressbar",
                         }}
                         autoplay={{
                              delay: 6000,
                              disableOnInteraction: false,
                         }}
                         breakpoints={{
                              "@0.00": {
                                   slidesPerView: 1,
                                   spaceBetween: 10,
                              },
                              "@0.75": {
                                   slidesPerView: 2,
                                   spaceBetween: 10,
                              },
                              "@1.00": {
                                   slidesPerView: 3,
                                   spaceBetween: 10,
                              },
                              "@1.50": {
                                   slidesPerView: 4,
                                   spaceBetween: 10,
                              },
                         }}
                         navigation={true}
                         modules={[Pagination, Navigation ,Autoplay]}
                         className="mySwiper"
                    >
                         <SwiperSlide>
                              <Card />
                         </SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                         <SwiperSlide><Card /></SwiperSlide>
                    </Swiper>
               </div>
          </div>
     );
}

export default ProductCollectionSlider;