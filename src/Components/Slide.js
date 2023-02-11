import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slide.css";
import {Autoplay, Pagination } from "swiper";
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'
import image7 from '../Images/image7.jpg'
import image8 from '../Images/image8.jpg'
import image10 from '../Images/image10.jpg'

const Slide = () => {
    return (
        <div id='slide' className='mt-10'>
        <h2 className='textGradient font-FredokaOne font-bold pb-3 md:text-5xl mb-8 md:mb-14 text-3xl'>Nextlight Gallery</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper flex-col" 
        >
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image3} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image4} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image5} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image6} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image7} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image8} alt="" /></SwiperSlide>
          <SwiperSlide><img className='max-w-sm border border-yellow-400 rounded-sm' src={image10} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slide;