import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Common/BreadCrumb';
import { useRouter } from 'next/router';
import { userGetOrderToPayment } from '../../reactQueryHook';
import StripeMethod from '../../components/PaymentMethods/Stripe';
import PaypalMethod from '../../components/PaymentMethods/Paypal';

export default function Payment() {
    const router = useRouter();
    const { query } = router;
    const { orderId } = query;

    const { data, error, isLoading, isFetching, isError } =
        userGetOrderToPayment({
            include: orderId,
        });

    return (
        <>
            <Breadcrumb
                title={
                    'Payment for order ' + (orderId ? '#' + orderId : '....')
                }
            />

            <section className="section-b-space">
                <div className="container">
                    {orderId ? (
                        isLoading || isFetching ? (
                            <div className="row">
                                <div className="col-12">
                                    <p className="alert alert-warning text-center">
                                        Loading data order and payment method...
                                    </p>
                                </div>
                            </div>
                        ) : data.length !== 1 ? (
                            <div className="row">
                                <div className="col-12">
                                    <p className="alert alert-warning text-center">
                                        Order not exits!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-md-6">
                                    <div
                                        className="accordion"
                                        id="accordionExample"
                                    >
                                        <div className="accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingPaypal"
                                            >
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapsePaypal"
                                                    aria-expanded="true"
                                                    aria-controls="collapsePaypal"
                                                >
                                                    Paypal
                                                </button>
                                            </h2>
                                            <div
                                                id="collapsePaypal"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingPaypal"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <div className="row">
                                                        <div className="col-lg-6"></div>
                                                        <div className="col-lg-6">
                                                            <PaypalMethod
                                                                orderId={
                                                                    data[0].id
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingStripe"
                                            >
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseStripe"
                                                    aria-expanded="false"
                                                    aria-controls="collapseStripe"
                                                >
                                                    Stripe
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseStripe"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingStripe"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <StripeMethod
                                                        orderId={data[0].id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingThree"
                                            >
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        )
                    ) : (
                        <div className="row">
                            <div className="col-12">
                                <p className="alert alert-warning text-center">
                                    Order not exits!
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
