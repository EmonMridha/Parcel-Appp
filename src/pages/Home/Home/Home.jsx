import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Extra from '../Extra/Extra';
import FAQ from '../FAQ/FAQ';
import Stats from '../stats/Stats';

const Home = () => {
    return (
        <div className='py-20'>
            <div data-aos='fade-up'>
                <Banner />
            </div>
            <div data-aos='fade-right'>
                <OurServices />
            </div>
            <div data-aos='fade-left'>
                <Brands />
            </div>
            <div data-aos='flip-left'>
                <Extra />
            </div>
            <div data-aos='fade-up'>
                <Stats />
            </div>
            <div data-aos='flip-right'>
                <FAQ />
            </div>
        </div>
    );
};

export default Home;