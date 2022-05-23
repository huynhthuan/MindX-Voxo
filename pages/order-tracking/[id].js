import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';
import LineItem from '../../components/UserDashboard/NavTabs/Tabs/Order/LineItem';
import ProgressOrderStatus from '../../components/UserDashboard/NavTabs/Tabs/Order/ProgressOrderStatus';
import {
    useMyOrders,
    useProductVariations,
} from '../../reactQueryHook';
import {
    getStateByCode,
    getCountryByCode,
    getTotalLineItems,
} from '../../utils/helpers';

import moment from 'moment';
import { useQueryClient } from 'react-query';

function OrderTracking() {
    const router = useRouter();
    const { cookie } = useSelector((state) => state.auth);
    const { id } = router.query;
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!cookie) {
            router.push('/login');
        }
    }, [cookie]);

    const { isLoading, isError, data, error, isFetching } = useMyOrders({
        include: id,
    });

    const orderProductQueries = useProductVariations(
        data?.data[0].line_items.map((item, index) => {
            return {
                productId: item.product_id,
                productVariationId: item.variation_id,
            };
        })
    );

    useEffect(() => {
        if (isError) {
            toast.error(error, {
                position: 'bottom-left',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [isError]);

    useEffect(() => {
        feather.replace();
    }, []);

    const onRefreshOrder = () => {
        queryClient.invalidateQueries('myOrders');
    };

    return (
        <>
            <Breadcrumb
                title={'Order tracking'}
                bredcrumbList={[
                    {
                        title: 'User Dashboard',
                        href: '/user-dashboard',
                    },
                    {
                        title: 'Orders',
                        href: '/user-dashboard?tab=order',
                    },
                ]}
            />

            {/* Order Track Section Start */}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="button-group d-flex justify-content-between mb-4">
                                {isLoading || isError || isFetching ? (
                                    <div className="order-meta">
                                        <Skeleton count={2} width={140} />
                                    </div>
                                ) : (
                                    <div className="order-meta">
                                        <p className="font-light mb-1 ">
                                            Order ID:{' '}
                                            <span>{data.data[0].id}</span>
                                        </p>
                                        <p className="font-light mb-1">
                                            Date created:{' '}
                                            <span>
                                                {moment(
                                                    data.data[0].date_created
                                                ).format('DD/MM/yy HH:mm:ss')}
                                            </span>
                                        </p>
                                    </div>
                                )}
                                <div className="btn-order-action">
                                    <button
                                        className="btn btn-report btn-sm btn-warning"
                                        onClick={onRefreshOrder}
                                    >
                                        Refresh
                                    </button>
                                    <button className="btn btn-report btn-sm btn-danger ms-2">
                                        Report
                                    </button>
                                    <button className="btn btn-success btn-sm ms-2">
                                        Re order
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mb-4">
                            {isLoading || isError || isFetching ? (
                                <Skeleton count={1} />
                            ) : (
                                <h5 className="font-light text-center">
                                    Your items is on the way. Tracking
                                    information will be available within 24
                                    hours.
                                </h5>
                            )}

                            {isLoading || isError || isFetching ? (
                                <Skeleton
                                    count={1}
                                    height={97.61}
                                    containerClassName={'progtrckr'}
                                />
                            ) : (
                                <ProgressOrderStatus
                                    status={data.data[0].status}
                                />
                            )}
                        </div>

                        <div className="col-md-8">
                            <h4 className="mb-3">
                                <i data-feather="package"></i> Items order
                            </h4>
                            {isLoading || isError || isFetching ? (
                                <Skeleton />
                            ) : orderProductQueries.length === 0 ? (
                                <p className="alert alert-warning">
                                    No item in order
                                </p>
                            ) : (
                                orderProductQueries.map((query, index) => (
                                    <div
                                        className="col-12 overflow-hidden"
                                        key={index}
                                    >
                                        <LineItem
                                            itemQuery={query}
                                            lineItems={data?.data[0].line_items}
                                        />
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="col-md-4">
                            <div className="order-info-box mb-4">
                                <h4 className="mb-3">
                                    <i data-feather="navigation"></i> Shipping
                                    address
                                </h4>
                                {isLoading || isError || isFetching ? (
                                    <Skeleton
                                        height={18}
                                        className="mb-1"
                                        count={6}
                                    />
                                ) : (
                                    <Fragment>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            First name:{' '}
                                            <span>
                                                {
                                                    data.data[0].shipping
                                                        .first_name
                                                }
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Last name:{' '}
                                            <span>
                                                {
                                                    data.data[0].shipping
                                                        .last_name
                                                }
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Phone:{' '}
                                            <span>
                                                {data.data[0].shipping.phone}
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Country:{' '}
                                            <span>
                                                {
                                                    getCountryByCode(
                                                        data.data[0].shipping
                                                            .country
                                                    ).name
                                                }
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            State:{' '}
                                            <span>
                                                {
                                                    getStateByCode(
                                                        data.data[0].shipping
                                                            .country,
                                                        data.data[0].shipping
                                                            .state
                                                    ).name
                                                }
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            City:{' '}
                                            <span>
                                                {data.data[0].shipping.city}
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Postcode:{' '}
                                            <span>
                                                {data.data[0].shipping.postcode}
                                            </span>
                                        </p>
                                    </Fragment>
                                )}
                            </div>

                            <div className="order-info-box mb-4">
                                <h4 className="mb-3">
                                    <i data-feather="credit-card"></i> Payment
                                    method
                                </h4>
                                {isLoading || isError || isFetching ? (
                                    <Skeleton
                                        height={18}
                                        className="mb-1"
                                        count={1}
                                    />
                                ) : (
                                    <Fragment>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Method:{' '}
                                            <span>
                                                {
                                                    data.data[0]
                                                        .payment_method_title
                                                }
                                            </span>
                                        </p>
                                    </Fragment>
                                )}
                            </div>

                            <div className="order-info-box mb-4">
                                <h4 className="mb-3">
                                    <i data-feather="table"></i> Totals
                                </h4>
                                {isLoading || isError || isFetching ? (
                                    <Skeleton
                                        height={18}
                                        className="mb-1"
                                        count={3}
                                    />
                                ) : (
                                    <Fragment>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Items Subtotal:
                                            <span>
                                                {getTotalLineItems(
                                                    data.data[0].line_items
                                                )}{' '}
                                                $
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Coupon(s):
                                            <span className="text-danger">
                                                - {data.data[0].discount_total}{' '}
                                                $
                                            </span>
                                        </p>{' '}
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Shipping:
                                            <span>
                                                {data.data[0].shipping_total} $
                                            </span>
                                        </p>
                                        <p className="font-light mb-1 d-flex justify-content-between">
                                            Order Total:
                                            <span className="text-success d-inline">
                                                {data.data[0].total} $
                                            </span>
                                        </p>
                                    </Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Order Track Section End */}

            <SubscribeBox />
        </>
    );
}

export default OrderTracking;
