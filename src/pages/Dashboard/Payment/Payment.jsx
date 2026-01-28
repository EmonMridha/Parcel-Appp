import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';
import { useParams } from 'react-router';

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_payemnt_Key);

    const { parcelId } = useParams()
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm parcelId={parcelId}></PaymentForm>
        </Elements>
    );
};

export default Payment;