import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const DispatchedSection = () => {
    const axios = useAxiosSecure();
    const [dispatchedParcels, setDispatchedParcels] = useState([]);

    useEffect(() => {
        const dispatchedParcels = async () => {
            const response = await axios.get('/inWarehouseParcels') // Fetching inWarehouse parcels from the server
            setDispatchedParcels(response.data)
        }
        dispatchedParcels();
    }, [axios])

    return (
        <div>
            <h1 className='text-2xl text-white p-4  font-bold bg-[#7AAACE]'>Dispatched</h1>
            <div>
                {
                    dispatchedParcels.length > 0 ? (
                        <table className="min-w-full text-black bg-white border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left py-2 px-4 border-b">Parcel ID</th>

                                    <th className="text-left py-2 px-4 border-b">Address</th>
                                    <th className="text-left py-2 px-4 border-b">Phone</th>
                                    <th className="text-left py-2 px-4 border-b">Created At</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dispatchedParcels.map((parcel, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="py-2 px-4 border-b">{parcel._id}</td>

                                        <td className="py-2 px-4 border-b">{parcel.receiverAddress}</td>
                                        <td className="py-2 px-4 border-b">{parcel.receiverNumber}</td>
                                        <td className="py-2 px-4 border-b">{parcel.createdAt}</td>
                                        <td className="py-2 px-4 border-b"><div className='flex gap-2.5'>

                                        </div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (<p className='text-center text-xl text-white font-semibold p-4'>No dispatched parcels</p>)
                }
            </div>
        </div>
    );
};

export default DispatchedSection;