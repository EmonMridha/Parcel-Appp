import React, { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire('LoggedOut Successfully')
            })
            .catch(() => {
                Swal.fire();
                ('Could not logOut')
            })
    }

    return (
        <nav className="bg-white text-black px-6 my-5 mx-10 rounded-2xl py-4 relative">
            <div className="flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-4">
                    {/* Hamburger */}
                    <button
                        className="lg:hidden cursor-pointer text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>

                    <Link to='/'>
                        <div className="text-3xl text-green-600 font-bold">
                            SafeShip
                        </div>
                    </Link>
                </div>

                {/* Center - Desktop */}
                <ul className="hidden lg:flex gap-10">
                    <Link to='/'>Home</Link>
                    <button><a className="hover:text-sky-400">Services</a></button>
                    <Link to='/coverage'>Coverage</Link>
                    <button><a className="hover:text-sky-400">TRackOrder</a></button>
                    <button><a className="hover:text-sky-400">Pricing</a></button>
                    <button><a className="hover:text-sky-400">Be a Rider</a></button>
                </ul>

                {/* Right - Desktop */}
                {
                    user ? (<div className="flex gap-2">
                        <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                        <button onClick={handleLogout} className="btn btn-outline btn-error">Logout</button>
                    </div>) : (
                        <div className="hidden lg:flex gap-4">
                            <Link to='/login' >
                                <button className="btn btn-outline btn-accent">Login</button>
                            </Link>
                            <Link to='/register'>
                                <button className="btn btn-outline btn-info">Register</button>
                            </Link>
                        </div>
                    )
                }
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="flex flex-col gap-2 items-center bg-white mt-4 py-4 lg:hidden">
                    <Link to='/'>Home</Link>
                    <button><a className="hover:text-sky-400">Services</a></button>
                    <Link to='/coverage'>Coverage</Link>
                    <button><a className="hover:text-sky-400">TRackOrder</a></button>
                    <button><a className="hover:text-sky-400">Pricing</a></button>
                    <button><a className="hover:text-sky-400">Be a Rider</a></button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
