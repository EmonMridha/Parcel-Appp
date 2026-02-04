import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


const PaymentForm = ({ parcelId }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();


    // Fetch parcel info using parcelId
    const { data: parcelInfo = {} } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel/${parcelId} `, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            })
            return res.data; // returning the parcel data
        }

    });



    const amount = parcelInfo.cost || 0;
    const amountInCents = amount * 100;


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement); // getting the card data

        if (!card) {
            return;
        }

        // create payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', // Specify the payment method type
            card: card
        })

        if (error) {
            setError(error.message);
        }

        // create payment intent
        const res = await axiosSecure.post('/create-payment-intent', { amount: amountInCents });

        // confirm card payment with client_secret and cardElement
        const result = await stripe.confirmCardPayment(res.data.clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                }
            }
        })

        if (result.error) {
            setError(result.error.message);
        }

        else {
            if (result.paymentIntent.status === 'succeeded') {

                const paymentData = {
                    parcelId,
                    amount,
                    transactionId: result.paymentIntent.id,
                    paymentMethod: result.paymentIntent.payment_method_types[0],
                }

                try {
                    const paymentRes = await axiosSecure.post('/payments', paymentData, {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`
                        }
                    });

                    if (paymentRes.data.success) {
                        Swal.fire({
                            title: 'Payment Successful!',
                            text: paymentRes.data.message,
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        navigate(`/dashboard/myParcels/${user?.email}`); // Redirect to MyParcels after successful payment
                    }
                }
                // any status more than 400 will be treated as error and will be caught in catch block
                catch (error) { 
                    const msg = error.response?.data?.message;

                    Swal.fire({
                        title: 'Payment Failed!',
                        text: msg,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            }
        }
    }


    return (
        <div className='p-10'>
            <h1 className='text-5xl text-black font-bold my-auto text-center'>Paying for <b>{parcelInfo?.parcelName}</b></h1>


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