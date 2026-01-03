import React from 'react';

const Footer = () => {
    return (
        <div className='px-20 my-5 '>
            <footer className="bg-slate-900 rounded-4xl text-white text-center py-8 space-y-4">

                {/* Company Name */}
                <div className="text-3xl font-bold">
                    SafeShip
                </div>

                {/* Company Detail */}
                <div className="text-sm text-gray-300">
                    We provide reliable and fast courier services across Bangaldesh.
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-4 py-1 rounded bg-slate-700 hover:bg-slate-600">Services</button>
                    <button className="px-4 py-1 rounded bg-slate-700 hover:bg-slate-600">Coverage</button>
                    <button className="px-4 py-1 rounded bg-slate-700 hover:bg-slate-600">About Us</button>
                    <button className="px-4 py-1 rounded bg-slate-700 hover:bg-slate-600">Pricing</button>
                    <button className="px-4 py-1 rounded bg-slate-700 hover:bg-slate-600">Blog</button>
                    <button className="px-4 py-1 rounded bg-slate-700 hover:bg-slate-600">Contact</button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-2">
                    <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-300 flex items-center justify-center">
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-500 flex items-center justify-center">
                        <i className="fab fa-instagram"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center">
                        <i className="fab fa-linkedin-in"></i>
                    </button>
                </div>

            </footer>
        </div>
    );
};

export default Footer;


