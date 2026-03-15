import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Jobs = () => {

    const axios = useAxiosSecure();
    const [jobs, setJobs] = useState([]);
    console.log(jobs);

    //useEffect will run when the component mounts and whenever dependencies change
    useEffect(() => {
        // Fetch jobs data from the server
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/inWarehouseParcels');

                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, [axios]); // Dependencies are those who are used in useEffect but not defined in useEffect

    return (
        <div>
            <h1 className='text-3xl text-neutral-950 font-bold text-center mt-10'>Jobs</h1>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10  px-4'>
                    {
                        jobs.map((job, index) => (

                            <div key={index} className="card w-96 bg-base-100 card-lg shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">From {job.senderRegion} to {job.receiverRegion}</h2>
                                    <p><b>Parcel Name:</b> {job.parcelName} ({job.weight} KG)</p>
                                    <p><b>Parcel ID:</b> {job._id}</p>
                                    <p><b>Receiver Name:</b> {job.receiverName}</p>
                                    <p><b>Receiver Address:</b> {job.receiverAddress}</p>
                                    <p><b>Receiver Phone Number:</b> {job.receiverNumber}</p>

                                    <div className="justify-end card-actions">
                                        <button className="btn btn-primary">Take</button>
                                    </div>
                                </div>
                            </div>


                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Jobs;