import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const PaymentForm = () => {

    const stripe = useStripe(); // নিয়ম রক্ষার জন্য দিলাম
    const elements = useElements(); // নিয়ম রক্ষার জন্য দিলাম

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();


    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { isPending, data: parcelInfo = {} } = useQuery({
        queryKey: ['parcels', id], // Always give a name in '' in queryKey
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel/${id}`);
            return res.data
        }
    })

    if (isPending) {
        return '...loading'
    }

    const amount = parcelInfo.cost
    const amountInCents = amount * 100; // stripe works with cents

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement); // CardElement is from tanstack. You have nothing to do with it. Here all the data user types in input stores

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setSuccess('')
            setError(error.message)
        }

        else {
            setError('')
            // console.log('payment method', paymentMethod);
            // setSuccess('Payment Successfully done! Please take an screenshot and keep it safe!')

            // create payment intent
            const res = await axiosSecure.post('/create-payment-intent', { amountInCents, id }) // we are sending amount to backend to create payment intent and saving the client secret here

            const clientSecret = res.data.clientSecret;

            // Confirm card payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            });

            if (result.error) {
                setError(result.error.message);
            }

            else {
                setError('');
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('payment intent', result.paymentIntent);
                }
            }
            console.log('res form intent', res);
        }

    }

    return (
        <div className='flex justify-center my-10'>
            <div className='max-w-md'>
                <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md w-full mx-auto'>
                    <CardElement className='p-2 border-2 border-black rounded' /> // here the payment input field
                    <button
                        type='submit'
                        className='btn btn-success w-full'
                        disabled={!stripe}>
                        Pay ${amount}
                    </button>
                </form>
                <p className='text-red-400'>{error}</p>
                <p className='text-green-600'>{success}</p>
            </div>
        </div>
    );
};

export default PaymentForm;