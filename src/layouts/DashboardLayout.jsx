import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const DashboardLayout = () => {
    const axios = useAxiosSecure();
    const [role, setRole] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        if (user?.email) {
            axios.get('/users/role').then((res) => {
                setRole(res.data.role);
            })
                .catch(error => {
                    Swal.fire('error', 'Failed to fetch user data', error)
                })
        }
    }, [user, axios]) // Dependencies are those who are used in useEffect but not defined in useEffect

    return (
        <div className="drawer bg-amber-50 lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-300 lg:hidden w-full">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
                </div>
                {/* Page content here */}
                <Outlet />
                {/* Page content here */}
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to={`/dashboard/myParcels/${user?.email}`}>My Parcels</Link></li>
                    <li><Link to={`/dashboard/paymentHistory/${user?.email}`}>Payment History</Link></li>

                    {role === 'admin' && (
                        <><li><Link to={`/dashboard/rider/requests`}>Rider Requests</Link></li>
                            <li><Link to={`/dashboard/rider/hired`}>Hired Riders</Link></li>
                            <li><Link to={`/dashboard/admin/dispatch`}>Parcel Dispatch Status</Link></li>
                        </>

                    )}

                    {
                        role === 'rider' && (
                            <li><Link to={`/dashboard/rider/requests`}>Jobs</Link></li>
                        )
                    }

                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;