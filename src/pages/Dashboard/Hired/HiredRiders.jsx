import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const HiredRiders = () => {
    const axios = useAxiosSecure();
    const user = useAuth();
    const [riders, setRiders] = useState([])

    // useEffect will run when page first mounts and dependencies are changed
    useEffect(() => {
        const fetch_hired_riders = async () => {
            const response = await axios.get('/hiredRiders'
            )
            setRiders(response.data)
        }
        fetch_hired_riders();
    }, [axios, user]) // Dependencies are those who are used in useEffect but not defined in useEffect
    return (
        <div className="overflow-x-auto text-black">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="text-left py-2 px-4 border-b">Name</th>
                        <th className="text-left py-2 px-4 border-b">Phone</th>
                        <th className="text-left py-2 px-4 border-b">City</th>
                        <th className="text-left py-2 px-4 border-b">Vehicle</th>
                        <th className="text-left py-2 px-4 border-b">License</th>
                        <th className="text-left py-2 px-4 border-b">Experience</th>
                        <th className="text-left py-2 px-4 border-b">Email</th>
                        <th className="text-left py-2 px-4 border-b">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {riders.map((rider, idx) => (
                        <tr
                            key={idx}
                            className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        >
                            <td className="py-2 px-4 border-b">{rider.name}</td>
                            <td className="py-2 px-4 border-b">{rider.phone}</td>
                            <td className="py-2 px-4 border-b">{rider.city}</td>
                            <td className="py-2 px-4 border-b">{rider.vehicle}</td>
                            <td className="py-2 px-4 border-b">{rider.license}</td>
                            <td className="py-2 px-4 border-b">{rider.experience}</td>
                            <td className="py-2 px-4 border-b">{rider.email}</td>
                            <td className="py-2 px-4 border-b">{rider.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HiredRiders;