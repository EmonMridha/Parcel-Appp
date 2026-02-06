import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const RiderRequests = () => {

    const [requests, setRequests] = useState([])
    const axios = useAxiosSecure();
    const { user } = useAuth();

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await axios.get('/riderReqs', {
                headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                }
            })

            setRequests(response.data)
        }
        fetchRequests();
    }, [axios, user]) // Dependencies are those who are used in useEffect but not defined in useEffect

    return (
        <div>
            {
                requests.length > 0 ? (
                    <div>
                        <div class="overflow-x-auto">
                            <table class="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                                        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Region</th>
                                        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                                        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Applied</th>
                                        <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-200">
                                    {
                                        requests.map((request, index) => (
                                            <tr key={index} class="hover:bg-gray-200">
                                                <td class="px-4 py-3 text-sm text-gray-800">{request.name}</td>
                                                <td class="px-4 py-3 text-sm text-gray-800">{request.email}</td>
                                                <td class="px-4 py-3 text-sm text-gray-800">{request.city}</td>
                                                <td class="px-4 py-3 text-sm text-gray-800">{request.phone}</td>
                                                <td class="px-4 py-3 text-sm text-gray-800 font-medium">{request.createdAt}</td>
                                                <td class="px-4 py-3 text-sm">
                                                    <button class="px-3 py-1 mr-2 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
                                                        View
                                                    </button>
                                                    <button class="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (<div className='text-red-600 text-center text-2xl my-10'>Only admin can see this</div>)
            }
        </div>


    );
};

export default RiderRequests;