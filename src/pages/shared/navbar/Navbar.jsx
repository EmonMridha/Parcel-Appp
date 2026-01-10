import React, { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => Swal.fire("Logged out successfully"))
      .catch(() => Swal.fire("Could not log out"));
  };

  return (
    <nav className="bg-white text-black px-4 lg:px-6 my-4 mx-4 lg:mx-10 rounded-2xl py-3 relative">
      <div className="flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <Link to="/" className="text-2xl sm:text-3xl text-green-600 font-bold">
            SafeShip
          </Link>
        </div>

        {/* Center - Desktop */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/coverage">Coverage</Link>

          {
            user && <Link to={`/dashboard`} >Dashboard</Link>
          }


          <Link to="/pricing">Pricing</Link>
          <Link to="/rider">Be a Rider</Link>
        </ul>

        {/* Right */}
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full object-cover"
              src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.png"}
              alt="user"
            />
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm sm:btn-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex gap-3">
            <Link to="/auth/login" className="btn btn-outline btn-accent">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-outline btn-info">
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="lg:hidden flex flex-col items-center gap-4 mt-4 py-4 border-t">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/coverage" onClick={() => setOpen(false)}>Coverage</Link>
          <Link to="/track" onClick={() => setOpen(false)}>Track Order</Link>

          {
            user && <Link to='/dashboard' onClick={() => setOpen(false)}>Dashboard</Link>

          }

          <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link to="/rider" onClick={() => setOpen(false)}>Be a Rider</Link>

          {!user && (
            <div className="flex gap-3 mt-2">
              <Link to="/auth/login" className="btn btn-outline btn-accent btn-sm">
                Login
              </Link>
              <Link to="/auth/register" className="btn btn-outline btn-info btn-sm">
                Register
              </Link>
            </div>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
