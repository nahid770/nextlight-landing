import React from 'react';
import logo from '../Images/logo.png'
import './Navber.css'

const Navber = () => {
    return (
      <div className="navbar bg-base-100 mt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#080b23] rounded-box w-52">
              <li ><a href='#home'   className='font-Poppins textGradient'>Home</a></li>
              <li ><a href='#about ' className='font-Poppins textGradient'>About Us</a></li>
              <li ><a href='#lore '  className='font-Poppins textGradient'>Lore</a></li>
              <li ><a href='#gallery' className='font-Poppins textGradient'>Gallery</a></li>
              <li ><a href='#faq '   className='font-Poppins textGradient'>FAQ</a></li>
            </ul>
          </div>

          <div className='hidden md:block'>
            <img className='w-14 ps-24' src={logo} alt=""/>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
              <li><a href='#home'   className='textGradient mr-2 font-Poppins'>Home</a></li>
              <li><a href='#about'  className='textGradient mr-2 font-Poppins'>About Us</a></li>
              <li><a href='#lore'    className='textGradient mr-2 font-Poppins'>Lore</a></li>
              <li><a href='#gallery' className='textGradient mr-2 font-Poppins'>Gallery</a></li>
              <li><a href='#faq'     className='textGradient font-Poppins'>FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end md:hidden">
        </div>
         <div className='navber-start text-end block md:hidden'>
            <img className='w-14' src={logo} alt="" />
          </div>
      </div>
    );
};

export default Navber;