import wooApi from '../../../src/api/woocommerce/wooApi';

const stripe = require('stripe')('sk_test_ZWrvOr86Tg0FvE2oetjePW8N00N6yh4R9f');

const calculateOrderAmount = async (orderId) => {
    let result = await wooApi.getOrder(orderId);
    let order = result.data;
    return Number(order.total) + 100;
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Method Not Allowed.' });
    }

    if (!req.cookies.wordpress_login) {
        res.status(403).send({
            message: 'You dont have order to create payment.',
        });
    }

    const { orderId, customerId, description } = req.body;

    let amountOrder = await calculateOrderAmount(orderId);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amountOrder,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
        customer: customerId,
        description,
    });

    res.json({
        clientSecret: paymentIntent.client_secret,
    });
}
