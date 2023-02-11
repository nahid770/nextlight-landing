
import React from 'react';
import about from '../Images/banner1.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();


const About = () => {
    return (
<div id='about' className="hero  ">
  <div className="hero-content flex-col lg:flex-row md:gap-28">
    <img data-aos-duration="1000" data-aos="fade-up" src={about} alt='' className="max-w-xs md:max-w-md rounded-lg " />
    <div data-aos-duration="2000" data-aos="fade-left" className='md:text-start text-center '>
      <h1 className="md:text-5xl text-4xl mt-10 md:mt-0 font-bold textGradient font-FredokaOne pb-4">What is Nextlight?</h1>
      <p className="pt-3 pb-5 text-white font-Poppins">The Nextlight is an NFT collection of sunflowers, it symbolizes unwavering faith and unconditional love. The main goal of the Nextlight is to create a strong community and empower the ecosystem while trying out and exploring different things. We also want to utilize the power of MOVE by experimenting lots of cool stuffs on Sui.</p>
      <Link target="_blank" to='https://medium.com/@thelightonsui' className="px-4 py-2 rounded-md border border-yellow-400 text-white bg-gradient-to-r from-[#FF8008] to-[#FFF310]  transition-all text-md font-Poppins mb-6 md:mb-0">Learn more</Link>
    </div>
  </div>
</div>
    );
};

export default About;