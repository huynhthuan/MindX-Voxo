import { Fragment, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

function WishListItem({ productQuery, productsWishList }) {
    const { data, isLoading, isError, isFetching, error } = productQuery;
    const mainProduct = productsWishList?.data.filter(
        (product, index) => product.id === data?.mainProductId
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

    console.log(data);
    return (
        <tr>
            {isLoading || isError || isFetching ? (
                <td colSpan={5}>
                    <Skeleton height={103} count={1} />
                </td>
            ) : (
                <Fragment>
                    <td>
                        <a href="product-left-sidebar.html">
                            <img
                                src={data.data.image.src}
                                className="blur-up lazyload"
                                alt={mainProduct[0].name}
                            />
                        </a>
                    </td>
                    <td>
                        <p className="m-0">#{data.data.id}</p>
                    </td>
                    <td>
                        <p className="fs-6 m-0">
                            {mainProduct[0].name} -{' '}
                            {data.data.attributes[0].option},{' '}
                            {data.data.attributes[1].option}
                        </p>
                    </td>
                    <td>
                        <p className="theme-color fs-6">
                            ${Number(data.data.price).toFixed(2)}
                        </p>
                    </td>
                    <td>
                        <a
                            href="cart.html"
                            className="btn btn-solid-default btn-sm fw-bold"
                        >
                            Add to Cart
                        </a>
                        <a
                            href="cart.html"
                            className="btn btn-solid-default btn-sm fw-bold ms-2"
                        >
                            View
                        </a>
                    </td>
                </Fragment>
            )}
        </tr>
    );
}

export default WishListItem;
