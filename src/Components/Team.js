import React from 'react';
import team from '../Images/logo.png'


const Team = () => {
    return (
        <div className='my-16 mx-4 md:mx-0 '>
           <h2 className='textGradient pb-3 text-4xl md:text-6xl text-center font-FredokaOne '>Team</h2>
        <div className='container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4 my-16 space-y-12 md:space-y-0'>

        
            <div data-aos-duration="1500" data-aos="fade-up" className="card  border border-yellow-400 shadow-md shadow-yellow-400">
            <figure><img className='w-20 mt-3' src={team} alt="team"/></figure>
            <div className="py-4 px-4">
                <h2 className="text-center text-2xl md:text-2xl text-yellow-400 font-bold py-2">King Lewis</h2>
                <p className='text-center text-white font-Poppins text-sm'>project lead and founder of the Nextlight, web2 and web3 enthusiast and have been in the crypto space for over 3years now. IRL involved in economizing and strategizing</p>
            </div>
            </div>

            <div data-aos-duration="1500" data-aos="fade-up" className="card  border border-yellow-400 shadow-md shadow-yellow-400">
            <figure><img className='w-20 mt-3' src={team} alt="team"/></figure>
            <div className="py-6 px-6">
                <h2 className="text-center text-2xl md:text-2xl text-yellow-400 font-bold py-2">Honey Queen</h2>
                <p className='text-center text-white font-Poppins text-sm'>Artist, had passion for arts when she was 6 and since then been creating amazing arts. Creator of the beautiful nextlight arts. Have been in the crypto space for 2 years now</p>
            </div>
            </div>

            <div data-aos-duration="1500" data-aos="fade-up" className="card  border border-yellow-400 shadow-md shadow-yellow-400">
            <figure><img className='w-20 mt-3' src={team} alt="team"/></figure>
            <div className="py-6 px-6">
                <h2 className="text-center text-2xl md:text-2xl text-yellow-400 font-bold py-2">Adnan Hasan</h2>
                <p className='text-center text-white font-Poppins text-sm'>Head of Community manager/moderator & also a good designer with the ability of video editing. He is very talented and experienced person in crypto world</p>
            </div>
            </div>

            <div data-aos-duration="1500" data-aos="fade-up" className="card  border border-yellow-400 shadow-md shadow-yellow-400">
            <figure><img className='w-20 mt-3' src={team} alt="team"/></figure>
            <div className="py-6 px-6">
                <h2 className="text-center text-2xl md:text-2xl text-yellow-400 font-bold py-2">Ruby Sinclair</h2>
                <p className='text-center text-white font-Poppins text-sm'>Novelist, she fell in love with writing amazing contents, started writing stories since she was 13, since then been creating beautiful contents. She Got familiar with crypto.</p>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Team;