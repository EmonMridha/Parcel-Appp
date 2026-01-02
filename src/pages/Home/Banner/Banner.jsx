import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-150 lg:w-400 md:w-300'>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                    <div>
                        <img src="/assets/banner/banner1.png" />

                    </div>
                    <div>
                        <img src="/assets/banner/banner2.png" />

                    </div>
                    <div>
                        <img src="/assets/banner/banner3.png" />

                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;