import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const PaymentForm = ({ parcelId }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [parcel, setParcel] = useState(null);
    const [error, setError] = useState('')
    const axiosSecure = useAxiosSecure();


    // Fetch parcel info using parcelId
    const { data: parcelInfo = {} } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel/${parcelId}`)
            return res.data; // returning the parcel data
        }
    });

    console.log(parcelInfo);
    const amount = parcelInfo.cost || 0;


    useEffect(() => {

        if (!parcelId) return;

        fetch(`http://localhost:5000/parcel/${parcelId}`)
            .then(res => res.json())
            .then(data => setParcel(data))

    }, [parcelId]);


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', // Specify the payment method type
            card: card
        })

        if (error) {
            console.log('error', error.message);
            setError(error.message);
        }

        else {
            console.log('payment method', paymentMethod);
        }
    }


    return (
        <div className='p-10'>
            <h1 className='text-5xl text-black font-bold my-auto text-center'>Paying for <b>{parcel?.parcelName}</b></h1>


            <form onSubmit={handleSubmit} className='space-y-4 my-10 bg-yellow-300 p-6 rounded-xl shadow-md w-full max-w-md mx-auto'>
                <CardElement className='p-2 border-2 bg-white border-black rounded'>
                </CardElement>

                <button
                    type='submit'
                    className='btn btn-primary w-full'
                    disabled={!stripe}>
                    Pay {amount} USD
                </button>

                {
                    error && <p className='text-red-600'>{error}</p>
                }

            </form>
        </div>
    );
};

export default PaymentForm;