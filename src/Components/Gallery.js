import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Gallery.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// Images
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'

const Gallery = () => {
    return (
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper overflow-x-hidden"
        id='gallery'
      >
        <SwiperSlide>
          <img src={image1}  alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2}  alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3}  alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4}  alt=''/>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Gallery;