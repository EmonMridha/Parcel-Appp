import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import DispatchedSection from './DispatchedSection';
import DeliveredSection from './DeliveredSection';

const ParcelDispatch = () => {
    const axios = useAxiosSecure();
    const [pendingDispatch, setPendingDispatch] = useState([]);

    // useEffect is used to fetch data when the component mounts. It runs the function inside it after the component is rendered for the first time.
    useEffect(() => {
        const pendingDispatch = async () => {
            const response = await axios.get('/pendingParcels')
            setPendingDispatch(response.data)
        }
        pendingDispatch();
    }, [axios]) // Dependencies are those who are used in useEffect but not defined in useEffect

    const handleDispatch = async (parcelId) => {
        try {
            const res = await axios.patch(`/dispatchParcel/${parcelId}`)
            if (res.data.success) {
                Swal.fire('success', 'Parcel dispatched successfully')
            }
            else {
                Swal.fire('error', 'Could not dispatch')
            }
        } catch (err) {
            Swal.fire('error', err.response?.data?.message || 'Something went wrong');
        } // catch will run when any error or any 400+ status is thrown in the try block
    }
    return (
        <div>
            <h1 className='text-4xl text-black p-8 text-center font-bold bg-[#A2CB8B]'>Parcel Dispatch Status</h1>

            <div className='flex flex-col p-10 bg-[#1C0770] gap-3 mt-3'>
                <div className='bg-[#7fc7fa]'>
                    <h2 className='text-2xl p-4 font-bold text-white'>Pending Dispatch</h2>

                    {
                        pendingDispatch.length > 0 ? (<div className='text-black overflow-x-auto'>
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left py-2 px-4 border-b">Parcel ID</th>

                                        <th className="text-left py-2 px-4 border-b">Address</th>
                                        <th className="text-left py-2 px-4 border-b">Phone</th>
                                        <th className="text-left py-2 px-4 border-b">Created At</th>
                                        <th className="text-left py-2 px-4 border-b">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingDispatch.map((parcel, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="py-2 px-4 border-b">{parcel._id}</td>

                                            <td className="py-2 px-4 border-b">{parcel.receiverAddress}</td>
                                            <td className="py-2 px-4 border-b">{parcel.receiverNumber}</td>
                                            <td className="py-2 px-4 border-b">{parcel.createdAt}</td>
                                            <td className="py-2 px-4 border-b"><div className='flex gap-2.5'>
                                                <button className="bg-[#233D4D] cursor-pointer hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">View</button> <button className="bg-[#3BC1A8] cursor-pointer hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDispatch(parcel._id)}>Dispatch</button>
                                            </div></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>) : (<p className='text-center text-xl text-white font-semibold p-4'>No pending dispatches</p>)
                    }
                </div>
                <div className='bg-[#7AAACE]'>
                    <DispatchedSection></DispatchedSection>
                </div>
                <div className='bg-[#A2CB8B]'>
                    <DeliveredSection></DeliveredSection>
                </div>
            </div>
        </div>
    );
};

export default ParcelDispatch;