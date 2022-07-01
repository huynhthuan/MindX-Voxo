import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const style = { layout: 'vertical' };

export default function PaypalButton({
    currency,
    showSpinner,
    currentOrderId,
    amount,
}) {
    const [{ isPending }] = usePayPalScriptReducer();
    const { user } = useSelector((state) => state.auth);

    return (
        <>
            {showSpinner && isPending && (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[currentOrderId, user]}
                fundingSource={undefined}
                createOrder={async (data, actions) => {
                    const orderId = await actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                                custom_id: user.id,
                                description: `Payment order #${currentOrderId} of customer ${user.id} via paypal.`,
                                invoice_id: currentOrderId,
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
