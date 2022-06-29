import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import Skeleton from 'react-loading-skeleton';

export default function Stripe() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        console.log(event);

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: 'http://localhost:3000',
            },
        });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            setMessage(error.message);
        } else {
            setMessage('An unexpected error occurred.');
        }

        setIsLoading(false);
    };

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case 'succeeded':
                    setMessage('Payment succeeded!');
                    break;
                case 'processing':
                    setMessage('Your payment is processing.');
                    break;
                case 'requires_payment_method':
                    setMessage(
                        'Your payment was not successful, please try again.'
                    );
                    break;
                default:
                    setMessage('Something went wrong.');
                    break;
            }
        });
    }, [stripe]);

    return (
        <>
            <PaymentElement id="payment-element" />
            <button
                disabled={isLoading || !stripe || !elements}
                id="submit"
                type="button"
                onClick={handleSubmit}
            >
                <span id="button-text">
                    {isLoading ? (
                        <Skeleton circle={true} count={1} />
                    ) : (
                        'Pay now'
                    )}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </>
    );
}
