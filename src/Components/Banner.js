import React from 'react';
import banner from '../Images/bclean.jpg'
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';
AOS.init();



const Banner = () => {
  
    return (
<div className='mb-20 md:mb-0 '>
    <div className="hero md:mt-14 ">
    <div className="hero-content flex-col lg:flex-row-reverse md:gap-10 relative">
    
    <img src={banner} alt='' className="floating max-w-xs md:max-w-md rounded-lg z-10 "/>
    
    
    <div data-aos-duration="2000" data-aos="fade-right" className='md:text-start'>
      <h1 className="md:text-6xl text-4xl textGradient pb-3 md:mb-2 mt-6 md:mt-0 font-FredokaOne text">The Nextlight</h1>
      <p className="py-3 mb-4  text-white text-md font-Poppins">The Nextlight is the first prolific NFT collection of sunflowers built on Suinetwork and for the community of Sui.</p>
      <Link target="_blank" to='https://twitter.com/thelightonsui' className="px-4 py-2 rounded-md border border-yellow-400 text-white btnGradient transition-all text-md font-Poppins bg-gradient-to-r from-[#FF8008] to-[#FFF310]">you're Prolific!</Link>
    </div>

  </div>
</div>
        </div>
    );
};

export default Banner