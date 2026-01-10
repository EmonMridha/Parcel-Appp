import React from 'react';
import { useLoaderData } from 'react-router';

const ParcelDetails = () => {

    const parcel = useLoaderData()

    return (
        <div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                    📦 Parcel Details 
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Parcel Info */}
                    <div className="bg-gray-700 p-4 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-300 mb-3">Parcel Info</h3>
                        <p><span className="font-medium">Parcel Name:</span> {parcel.parcelName}</p>
                        <p><span className="font-medium">Weight:</span> {parcel.weight} kg</p>
                        <p><span className="font-medium">Created At:</span> {parcel.createdAt}</p>
                    </div>

                    {/* Sender Info */}
                    <div className="bg-gray-700 p-4 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-300 mb-3">Sender Info</h3>
                        <p><span className="font-medium">Name:</span> {parcel.senderName}</p>
                        <p><span className="font-medium">Pickup Warehouse:</span> {parcel.pickupWarehouse}</p>
                        <p><span className="font-medium">Address:</span> {parcel.senderAddress}</p>
                        <p><span className="font-medium">Phone:</span> {parcel.senderNumber}</p>
                        <p><span className="font-medium">Region:</span> {parcel.senderRegion}</p>
                    </div>

                    {/* Receiver Info */}
                    <div className="bg-gray-700 p-4 rounded-xl md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-300 mb-3">Receiver Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p><span className="font-medium">Name:</span> {parcel.receiverName}</p>
                            <p><span className="font-medium">Destination Warehouse:</span> {parcel.destinationWarehouse}</p>
                            <p><span className="font-medium">Address:</span> {parcel.receiverAddress}</p>
                            <p><span className="font-medium">Phone:</span> {parcel.receiverNumber}</p>
                            <p><span className="font-medium">Region:</span> {parcel.receiverRegion}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ParcelDetails;