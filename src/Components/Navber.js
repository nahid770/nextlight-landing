import React from 'react';
import logo from '../Images/logo.png'
import './Navber.css'

const Navber = () => {
    return (
      <div className="navbar bg-base-100 mt-6">
        <div className='navber-start text-end block md:hidden'>
                <img className='w-68' src={logo} alt="" />
            </div>
            <div className="navbar-start mr-52 md:hidden">
        </div>
        <div className="navbar-end">
          <div className="dropdown relative">
            <label tabIndex={0} className="btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content absolute left-[-55px] mt-1 shadow bg-[#080b23] rounded-box w-36 pl-4 pb-2 pt-1">
              <li ><a href='#home'   className='font-Poppins  text-sm textGradient'>Home</a></li>
              <li ><a href='#about ' className='font-Poppins  text-sm textGradient'>About</a></li>
              <li ><a href='#lore '  className='font-Poppins  text-sm textGradient'>Lore</a></li>
              <li ><a href='#gallery' className='font-Poppins text-sm textGradient'>Gallery</a></li>
              <li ><a href='#faq '   className='font-Poppins  text-sm textGradient'>FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop menu */}

        <div className='navbar-start hidden md:block '>
            <img className='w-12' src={logo} alt=""/>
        </div>

        <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>

        <div className="navbar-end hidden md:flex  ">
           <ul className="menu menu-horizontal px-1">
              <li><a href='#home'   className='textGradient mr-2 font-Poppins'>Home</a></li>
              <li><a href='#about'  className='textGradient mr-2 font-Poppins'>About</a></li>
              <li><a href='#lore'    className='textGradient mr-2 font-Poppins'>Lore</a></li>
              <li><a href='#gallery' className='textGradient mr-2 font-Poppins'>Gallery</a></li>
              <li><a href='#faq'     className='textGradient font-Poppins'>FAQ</a></li>
           </ul>
        </div>

        

      </div>
    );
};

export default Navber;