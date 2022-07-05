import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

export default function Stripe({ orderId }) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isReadyStripePayment, setIsReadyStripePayment] = useState(false);

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
                return_url: 'order-tracking/' + orderId,
            },
            redirect: 'if_required',
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
            {isReadyStripePayment ? (
                <></>
            ) : (
                <div className="text-center w-100">
                    <div
                        className="spinner-border text-primary my-auto"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <PaymentElement
                onReady={() => {
                    setIsReadyStripePayment(true);
                }}
                id="payment-element"
            />

            {isReadyStripePayment ? (
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    type="button"
                    onClick={handleSubmit}
                    className={'btn btn-primary w-100 mt-3 rounded text-center'}
                >
                    {isLoading ? (
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <span id="button-text text-center">Pay now</span>
                    )}
                </button>
            ) : (
                <></>
            )}

            {/* Show any error or success messages */}
            {message && (
                <div className="alert alert-warning w-100 mt-2">{message}</div>
            )}
        </>
    );
}
