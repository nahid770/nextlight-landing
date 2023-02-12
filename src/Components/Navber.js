import React from 'react';
import logo from '../Images/logo.png'
import './Navber.css'

const Navber = () => {
    return (
    <div>
      <div className="navbar bg-base-100">
        <div className='navber-start text-end block md:hidden'>
                <img className='w-68' src={logo} alt="" />
            </div>
            <div className="navbar-start mr-52 md:hidden">
        </div>
        <div className="navbar-end">
          <div className="dropdown relative">
            <label tabIndex={0} className="btn md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content absolute left-[-55px] mt-1 shadow bg-[#080b23] rounded-box w-36 pl-4 pb-2 pt-1">
              <li ><a href='#home'   className='font-Poppins  text-sm textGradient'>Home</a></li>
              <li ><a href='#about ' className='font-Poppins  text-sm textGradient'>About</a></li>
              <li ><a href='#lore '  className='font-Poppins  text-sm textGradient'>Lore</a></li>
              <li ><a href='#slide' className='font-Poppins text-sm textGradient'>Gallery</a></li>
              <li ><a href='#faq '   className='font-Poppins  text-sm textGradient'>FAQ</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      {/* Desktop menu */}

      <div className='container  justify-between hidden md:flex'>
          <div className='nav-logo'>
          <img className='w-12' src={logo} alt="" />
          </div>
          <div className='nav-items'>
          <ul className='flex items-center'>
            <li ><a href='#home' className='font-Poppins  mr-10 text-md textGradient'>Home</a></li>
            <li ><a href='#about' className='font-Poppins mr-10  text-md  textGradient'>About</a></li>
            <li ><a href='#lore' className='font-Poppins mr-10 text-md  textGradient'>Lore</a></li>
            <li ><a href='#slide' className='font-Poppins mr-10 text-md  textGradient'>Gallery</a></li>
            <li ><a href='#faq'  className='font-Poppins mr-10 text-md  textGradient'>FAQ</a></li>
            </ul>
          </div>
      </div>

    </div>
    );
};

export default Navber;