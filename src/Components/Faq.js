import React from 'react';

const Faq = () => {
    return (
    <div id='faq' className='my-16  mx-auto '>

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
    data-aos-duration="1500" data-aos="fade-up"
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
          <p tabIndex={0} className='text-white text-center md:text-start'>Sui is the first permissionless Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in web3. (Learn more: insert link to learn more https://sui.io/)</p>
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
          <p tabIndex={0} className='text-white text-center md:text-start'>We'll publicly announce which marketplace we're going to be making use of. Mint Price
TBA</p>
        </div>
    </div>
    <div tabIndex={0}
    data-aos-duration="2500" data-aos="fade-up" 
    className="collapse collapse-arrow
     border
     bg-base-100 rounded-box
     border-yellow-400
    
     my-3
     ">
        <div className="collapse-title text-xl font-medium text-white">
        What is The Nextlight OG pass?
        </div>
        <div className="collapse-content"> 
          <p tabIndex={0} className='text-white text-center md:text-start'>OG pass gives you a guaranteed mint ahead of mainnet launch. Which means you'll be able to mint with no stress attached, like a VIP you're.</p>
        </div>
    </div>



    </div>
    );
};

export default Faq;