import React from 'react';
import { Link } from 'react-router-dom';
import image3 from '../Images/imageRev.png'

const Lore = () => {
    return (
        <div id='lore' className=''>
            
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:gap-x-20 lg:flex-row-reverse text-center mx-auto">
    <img  data-aos-duration="1000" data-aos="fade-up" src={image3} alt='' className="max-w-xs md:max-w-md rounded-lg mb-4 md:mb-0 " />
    <div data-aos-duration="1000" data-aos="fade-right">
      <h1 className="text-4xl md:text-5xl font-bold textGradient text-center md:text-start font-FredokaOne py-3 md:py-0">What is lore?</h1>
      <p className="py-6 text-white text-center md:text-start font-Poppins">Long ago the nextlights of planet Suiland lived in harmony with the essence that forged them. Theirs was the most peaceful planet of their dimension but all went to ruin on the day that darkness arrived.
      
      Its sudden presence was unexplainable. The nextlights were shaken with fear for this massive thing they didn't understand. They were driven into caves and holes underground, abandoning their homes and towers as darkness encroached on their land... 
       <Link to='https://medium.com/@thelightonsui/lore-aa317a3b4c8a' target="_blank" className='text-md underline textGradient'> Read more</Link></p>
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Lore;