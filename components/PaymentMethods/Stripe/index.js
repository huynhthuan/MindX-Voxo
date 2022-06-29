import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from './Stripe';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import paymentApi from '../../../src/api/paymentApi';

const stripePromise = loadStripe('pk_test_i2ZAS9FgIW41492LboEw6Yck008KenlQKk');

export default function StripeMethod({ orderId }) {
    const { user } = useSelector((state) => state.auth);

    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    const [clientSecret, setClientSecret] = useState('');

    const createPaymentIntent = async () => {
        let resut = await paymentApi.createPaymentIntentStripe({
            orderId,
            customerId: user.id,
            description: `Payment for order #${orderId} via Stripe`,
        });

        setClientSecret(resut.data.clientSecret);
    };

    useEffect(() => {
        if (orderId) {
            createPaymentIntent();
        }
    }, [orderId]);

    return clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
            <Stripe />
        </Elements>
    ) : (
        <Skeleton circle={true} count={1} />
    );
}
