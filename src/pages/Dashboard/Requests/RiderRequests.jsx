import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const RiderRequests = () => {

    const [requests, setRequests] = useState([])
    const axios = useAxiosSecure();
    const { user } = useAuth();

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await axios.get('/riderReqs')

            setRequests(response.data)
        }
        fetchRequests();
    }, [axios, user]) // Dependencies are those who are used in useEffect but not defined in useEffect

    const handleHire = async (id) => {

        try {
            const res = await axios.patch(`/riders/${id}`);
            if (res.data.success) {
                Swal.fire('success', 'Hired successfully');
            } else {
                Swal.fire('error', 'Already hired or not found');
            }
        }
        // catch will run when any error or any 400+ status is thrown in the try block
        catch (err) {
            Swal.fire('error', err.response?.data?.message || 'Something went wrong');
        }
    }

    const handleReject = async (id) => {
        const res = await axios.patch(`/rejectReq/${id}`)
        if (res.data.success) {
            Swal.fire('Rejected successfully')
        } else {
            Swal.fire('Could not delete')
        }
    }

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

                                                    <button disabled={request.status === 'hired'} onClick={() => handleHire(request._id)} className={`px-3 py-1 text-xs font-medium text-white rounded 
    ${request.status === 'hired'
                                                            ? 'bg-gray-400 cursor-not-allowed'
                                                            : 'bg-green-600 hover:bg-green-700'
                                                        }`}>
                                                        {request.status === 'hired' ? ('Hired') : ('Hire')}
                                                    </button>
                                                    <button onClick={() => handleReject(request._id)} className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700">
                                                        Reject
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (<div className='text-red-600 text-center text-2xl my-10'>No pending requests</div>)
            }
        </div>
    );
};

export default RiderRequests;