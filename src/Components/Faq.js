import React from 'react';
import { Link } from 'react-router-dom';


const Faq = () => {
    return (
    <div id='faq' className='my-16  mx-auto '>
      <h3 className='textGradient font-FredokaOne md:text-6xl text-3xl text-center my-10'>FAQ</h3>

    <div tabIndex={0} 
    data-aos-duration="1000" data-aos="fade-up"
    className="collapse collapse-arrow
     border
     bg-base-100 rounded-box
     border-yellow-400
    
     ">
        <div className="collapse-title text-xl font-medium text-white">
        What is The Nextlight?
        </div>
        <div className="collapse-content"> 
          <p tabIndex={0} className='text-white text-center md:text-start'>The Nextlight is the first prolific NFT collection of sunflowers built on Suinetwork and for the community of Sui</p>
        </div>
    </div>
    <div tabIndex={0} 
    data-aos-duration="2000" data-aos="fade-up"
    className="collapse collapse-arrow
     border
     bg-base-100 rounded-box
     border-yellow-400
     
     my-3
     ">
        <div className="collapse-title text-xl font-medium text-white">
        What is Sui?
        </div>
        <div className="collapse-content"> 
          <p tabIndex={0} ></p>
          <p className='text-white text-center md:text-start mb-2'>Sui is the first permissionless Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in web3, <a className='textGradient text-lg ' target='blank' href="https://sui.io/">Learn more</a></p>
        </div>
    </div>
    <div tabIndex={0} 
    data-aos-duration="2000" data-aos="fade-up"
    className="collapse collapse-arrow
     border
     bg-base-100 rounded-box
     border-yellow-400
     
     my-3
     ">
        <div className="collapse-title text-xl font-medium text-white">
        How can I get the Nextlight NFT?
        </div>
        <div className="collapse-content"> 
          <p tabIndex={0} className='text-white text-center md:text-start'>We'll publicly announce which marketplace we're going to be making use of</p>
        </div>
    </div>
    <div tabIndex={0}
    data-aos-duration="2500" data-aos="fade-up" 
    className="collapse collapse-arrow
     border
     bg-base-100 rounded-box
     border-yellow-400
     my-3">
        <div className="collapse-title text-xl font-medium text-white">
        What is The Nextlight OG pass?
        </div>
        <div className="collapse-content"> 
          <p tabIndex={0} className='text-white text-center md:text-start'>OG pass gives you a guaranteed mint ahead of mainnet launch. Which means you'll be able to mint with no stress attached, like a VIP you're.</p>
        </div>
    </div>
    <div tabIndex={0}
    data-aos-duration="2500" data-aos="fade-up" 
    className="collapse collapse-arrow
     border
     bg-base-100 rounded-box
     border-yellow-400
     my-3">
        <div className="collapse-title text-xl font-medium text-white">
        Mint Price
        </div>
        <div className="collapse-content"> 
          <p tabIndex={0} className='text-white text-center md:text-start'>TBA</p>
        </div>
    </div>
    <div tabIndex={0}
    data-aos-duration="2500" data-aos="fade-up" 
    className="collapse collapse-arrow
     border
     bg-base-100 rounded-box
     border-yellow-400
     my-3">
        <div className="collapse-title text-xl font-medium text-white">
        How to get OG Pass?
        </div>
        <div className="collapse-content"> 
          <p tabIndex={0} className='text-white text-center md:text-start'>Get your OG pass <a className='textGradient text-md ' target='blank' href="https://opensea.io/collection/og-pass-v2">here</a></p>
        </div>
    </div>


    </div>
    );
};

export default Faq;