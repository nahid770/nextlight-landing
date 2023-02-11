import React from 'react';
import About from './About';
import Banner from './Banner';
import Faq from './Faq';
import Footer from './Footer';
import Lore from './Lore';
import Navber from './Navber';
import Roadmap from './Roadmap';
import Slide from './Slide';
import Team from './Team';

const Home = () => {
    return (
        <div id='home' className='overflow-x-hidden'>
            <div className='mx-4 md:mx-32 lg:mx-36'>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Slide></Slide>
            <Lore></Lore>
            <Roadmap></Roadmap>
            <Team></Team>
            <Faq></Faq>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;