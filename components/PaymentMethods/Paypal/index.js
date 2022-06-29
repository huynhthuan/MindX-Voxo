import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import PaypalButton from './PaypalButton';

export default function PaypalMethod({ orderId }) {
    console.log(orderId);
    return (
        <PayPalScriptProvider
            options={{
                'client-id':
                    'AbFx7hNQE0uaz1Z6Aif_zc0rVlq7g7ankaartyrMJ-ltmezdfO93-idKsODDbDHl9shv4rN27sf2tqhh',
                components: 'buttons',
                currency: 'USD',
            }}
        >
            <PaypalButton showSpinner={true} />
        </PayPalScriptProvider>
    );
}
