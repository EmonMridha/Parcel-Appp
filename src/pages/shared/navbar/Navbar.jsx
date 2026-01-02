import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white text-black px-6 py-4 relative">
            <div className="flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-4">
                    {/* Hamburger */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>

                    <div className="text-3xl font-bold">
                        SafeShip
                    </div>
                </div>

                {/* Center - Desktop */}
                <ul className="hidden md:flex gap-10">
                    <li><a className="hover:text-sky-400">Home</a></li>
                    <li><a className="hover:text-sky-400">Services</a></li>
                    <li><a className="hover:text-sky-400">Products</a></li>
                    <li><a className="hover:text-sky-400">About</a></li>
                    <li><a className="hover:text-sky-400">Contact</a></li>
                </ul>

                {/* Right - Desktop */}
                <div className="hidden md:flex gap-4">
                    <button className="border border-black px-4 py-1 rounded hover:bg-gray hover:text-black">
                        Sign In
                    </button>
                    <button className="bg-sky-400 text-black px-4 py-1 rounded hover:bg-sky-300">
                        Register
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="flex flex-col gap-2 items-center bg-white mt-4 py-4 md:hidden">
                    <li><a className="hover:text-sky-400">Home</a></li>
                    <li><a className="hover:text-sky-400">Services</a></li>
                    <li><a className="hover:text-sky-400">Products</a></li>
                    <li><a className="hover:text-sky-400">About</a></li>
                    <li><a className="hover:text-sky-400">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
