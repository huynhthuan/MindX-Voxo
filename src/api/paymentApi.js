import axiosClient from "./axiosClient";

const paymentApi = {
    createPaymentIntentStripe: (params) => {
        const url = '/api/stripe/create-payment-intent';

        return axiosClient.post(url, null, {
            params,
        });
    }
}

export default paymentApi;