import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const MyParcels = () => {

    const axios = useAxiosSecure();
    const [myParcels, setMyParcels] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    // useEffect will run when page mounts first and dependency changes
    useEffect(() => {

        if (!user?.email) {
            return;
        }

        const fetchPosts = async () => {

            const res = await axios.get(`/parcels`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            })

            setMyParcels(res.data)
        }
        fetchPosts();
    }, [user, axios])


    const handlePay = (id) => {
        navigate(`/dashboard/payment/${id}`)
    }

    const handleDelete = (id) => {
        axios.delete(`/delete/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire('Deleted Successfully')
                    const remainingParcels = myParcels.filter(parcel => parcel._id !== id);
                    setMyParcels(remainingParcels)
                }
                else {
                    Swal.fire('Could not delete')
                }
            })
    }

    return (
        <div >
            <div className='text-black p-5 md:p-20'>
                <h2 className='text-4xl text-center font-bold my-5'>My Parcels</h2>
                <div class="overflow-x-auto">

                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="py-3 px-6 text-left text-gray-700 font-semibold border-b">Name</th>
                                <th class="py-3 px-6 text-left text-gray-700 font-semibold border-b">Weight (kg)</th>
                                <th class="py-3 px-6 text-left text-gray-700 font-semibold border-b">CreatedAt</th>
                                <th class="py-3 px-6 text-left text-gray-700 font-semibold border-b">Destination</th>
                                <th class="py-3 px-6 text-left text-gray-700 font-semibold border-b">Actions</th>
                            </tr>
                        </thead>
                        {
                            myParcels.map((parcel, index) => (
                                <tbody key={index} class="text-gray-600">
                                    <tr class="border-b hover:bg-gray-50">
                                        <td class="py-3 px-6">{parcel.parcelName}</td>
                                        <td class="py-3 px-6">{parcel.weight}</td>
                                        <td class="py-3 px-6">{parcel.createdAt}</td>
                                        <td class="py-3 px-6">{parcel.destinationWarehouse}</td>
                                        <td class="py-3 px-6">
                                            <div className='flex gap-2'>
                                                <Link to={`/dashboard/parcelDetails/${parcel._id}`}><button className="btn btn-neutral">View</button></Link>
                                                {
                                                    parcel.paymentStatus === 'unpaid' ? (<button onClick={() => handlePay(parcel._id)} className="btn bg-red-500 border-none">Pay</button>) : (<p className='w-15 rounded-sm p-2 text-center bg-green-600 h-10 font-bold'>Paid</p>)
                                                }
                                                <button onClick={() => handleDelete(parcel._id)} className="btn btn-warning">Delete</button>
                                            </div>
                                        </td>

                                    </tr>

                                </tbody>
                            ))
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyParcels;