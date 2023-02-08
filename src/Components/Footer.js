import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { AiOutlineMedium } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footerBg md:mt-16'>
            
<footer className="footer footer-center p-10 text-base-content rounded ">
  <div>
   <ul className="grid grid-flow-col gap-2">
              <li><a href='#home' className='text-white font-poppins mr-4'>Home</a></li>
              <li><a href='#about' className='text-white font-poppins mr-4'>About Us</a></li>
              <li><a href='#lore' className='text-white font-poppins mr-4'>Lore</a></li>
              <li><a href='#gallery' className='text-white font-poppins mr-4'>Gallery</a></li>
   </ul>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4 ">
      <Link target="_blank" to='https://twitter.com/thelightonsui' ><FaTwitter className='w-7 h-8 text-yellow-400 hover:text-yellow-500'></FaTwitter></Link> 
      
      <Link target="_blank" to='https://medium.com/@thelightonsui'><AiOutlineMedium className='w-8 h-8 text-yellow-400 hover:text-yellow-500'></AiOutlineMedium></Link>
    
      <Link target="_blank" to='https://discord.com/invite/spm6zQzfdy'><FaDiscord className='w-8 h-8 text-yellow-400 hover:text-yellow-500'></FaDiscord> </Link>
      
      
    </div>
  </div> 
  <div>
    <p className='text-white'>Copyright © 2023 - All right reserved by Nextlight</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;