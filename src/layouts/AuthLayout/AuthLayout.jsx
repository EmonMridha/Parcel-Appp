import React from 'react';
import { Link, Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="bg-gray-200">
            <Link><p className='text-green-700 ml-20 py-5 font-bold text-3xl'>SafeShip</p></Link>
            <div className="hero-content mx-auto h-screen w-screen gap-10 md:gap-20  flex-col lg:flex-row-reverse">
                <div className='bg-[#FAFDF0]'>
                    <img
                        src="public/assets/authImage.png"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className=' rounded-4xl'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;