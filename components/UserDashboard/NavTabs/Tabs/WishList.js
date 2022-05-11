import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
    useMyWishList,
    useProducts,
    useProductVariations,
} from '../../../../reactQueryHook';
import WishListItem from './WishList/WishListItem';

function WishList() {
    const { isLoading, isError, error, data, isFetching } = useMyWishList();
    const {
        isLoading: isLoadingProduct,
        isError: isErrorProduct,
        error: errorProduct,
        data: dataProducts,
        isFetching: isFetchingProduct,
    } = useProducts({
        include: data?.data.map((item, index) => item.product_id),
    });

    const orderProductQueries = useProductVariations(
        data?.data.map((item, index) => {
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
        if (isErrorProduct) {
            toast.error(errorProduct, {
                position: 'bottom-left',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [isErrorProduct]);

    return (
        <div
            className="tab-pane fade table-dashboard dashboard wish-list-section"
            id="wishlist"
        >
            <div className="box-head mb-3">
                <h3>My Wishlish</h3>
            </div>
            <div className="table-responsive">
                <table className="table cart-table">
                    <thead>
                        <tr className="table-head">
                            <th scope="col">image</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Details</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoadingProduct ||
                        isFetchingProduct ||
                        isErrorProduct ? (
                            <tr>
                                <td colSpan={5}>
                                    <Skeleton count={1} />
                                </td>
                            </tr>
                        ) : (
                            orderProductQueries.map((query, index) => (
                                <WishListItem
                                    key={index}
                                    productQuery={query}
                                    productsWishList={dataProducts}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WishList;
