import { Fragment, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getAttributeValueByKey } from '../../../../../utils/helpers';

function LineItem({ itemQuery, lineItems }) {
    const { isLoading, isError, isFetching, error, data } = itemQuery;
    const [productData, setProductData] = useState(undefined);

    useEffect(() => {
        if (data && lineItems) {
            const { id, sku, image } = data.data;
            const lineItem = lineItems.filter(
                (item, index) => item.variation_id === id
            )[0];

            setProductData({
                id,
                sku,
                image,
                lineItem,
            });
        }
    }, [data, lineItems]);

    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.bg-img').each(function () {
                var el = $(this),
                    src = el.attr('src'),
                    parent = el.parent();

                parent.css({
                    'background-image': 'url(' + src + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    display: 'block',
                });

                el.hide();
            });
        })(jQuery);

        feather.replace();
    }, [productData]);

    return isLoading || isError || isFetching || !productData ? (
        <Skeleton />
    ) : (
        <div className="order-left-image ratio_asos mb-3">
            <div className="tracking-product-image">
                <img
                    src={productData.image.src}
                    className="img-fluid bg-img blur-up lazyload"
                    alt={productData.lineItem.name}
                />
            </div>

            <div className="order-image-contain">
                <h4>{productData.lineItem.name}</h4>

                <div className="tracker-number">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="font-light">
                                Sku:<span>{productData.sku}</span>
                            </p>
                            <p className="font-light">
                                Quantity:
                                <span>{productData.lineItem.quantity}</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p className="font-light">
                                Brand:<span>Van Heusen</span>
                            </p>
                            <p className="font-light mb-0">
                                Price:<span>${productData.lineItem.subtotal}</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p className="font-light">
                                Size:
                                <span>
                                    {getAttributeValueByKey(
                                        'pa_size',
                                        productData.lineItem.meta_data
                                    )}
                                </span>
                            </p>
                            <p className="font-light mb-0">
                                Color:
                                <span>
                                    {getAttributeValueByKey(
                                        'pa_color',
                                        productData.lineItem.meta_data
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LineItem;
