import {
    PayPalButtons,
    usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import React from 'react';
import { useEffect } from 'react';

const amount = '2';
const currency = 'USD';
const style = { layout: 'vertical' };

export default function PaypalButton({ currency, showSpinner }) {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: 'resetOptions',
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    return (
        <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={async (data, actions) => {
                    const orderId = await actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                            },
                        ],
                    });
                    return orderId;
                }}
                onApprove={async function (data, actions) {
                    let rerulst = await actions.order.capture();
                    console.log(rerulst);
                }}
            />
        </>
    );
}
