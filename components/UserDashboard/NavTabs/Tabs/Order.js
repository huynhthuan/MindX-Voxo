function Order() {
    return (
        <div className="tab-pane fade table-dashboard dashboard wish-list-section" id="order">
            <div className="box-head mb-3">
                <h3>My Order</h3>
            </div>
            <div className="table-responsive">
                <table className="table cart-table">
                    <thead>
                        <tr className="table-head">
                            <th scope="col">image</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Product Details</th>
                            <th scope="col">Status</th>
                            <th scope="col">Price</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="product-left-sidebar.html">
                                    <img src="/images/fashion/product/front/1.jpg" className="blur-up lazyload" alt="" />
                                </a>
                            </td>
                            <td>
                                <p className="mt-0">#125021</p>
                            </td>
                            <td>
                                <p className="fs-6 m-0">Outwear & Coats</p>
                            </td>
                            <td>
                                <p className="success-button btn btn-sm">Shipped</p>
                            </td>
                            <td>
                                <p className="theme-color fs-6">$49.54</p>
                            </td>
                            <td>
                                <a href="undefined">
                                    <i className="far fa-eye"></i>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="product-left-sidebar.html">
                                    <img src="/images/fashion/product/front/2.jpg" className="blur-up lazyload" alt="" />
                                </a>
                            </td>
                            <td>
                                <p className="mt-0">#125367</p>
                            </td>
                            <td>
                                <p className="fs-6 m-0">Outwear & Coats</p>
                            </td>
                            <td>
                                <p className="danger-button btn btn-sm">Pending</p>
                            </td>
                            <td>
                                <p className="theme-color fs-6">$49.54</p>
                            </td>
                            <td>
                                <a href="undefined">
                                    <i className="far fa-eye"></i>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="product-left-sidebar.html">
                                    <img src="/images/fashion/product/front/3.jpg" className="blur-up lazyload" alt="" />
                                </a>
                            </td>
                            <td>
                                <p className="m-0">#125948</p>
                            </td>
                            <td>
                                <p className="fs-6 m-0">Men's Sweatshirt</p>
                            </td>
                            <td>
                                <p className="success-button btn btn-sm">Shipped</p>
                            </td>
                            <td>
                                <p className="theme-color fs-6">$49.54</p>
                            </td>
                            <td>
                                <a href="undefined">
                                    <i className="far fa-eye"></i>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="product-left-sidebar.html">
                                    <img src="/images/fashion/product/front/4.jpg" className="blur-up lazyload" alt="" />
                                </a>
                            </td>
                            <td>
                                <p className="m-0">#127569</p>
                            </td>
                            <td>
                                <p className="fs-6 m-0">Men's Hoodie t-shirt</p>
                            </td>
                            <td>
                                <p className="success-button btn btn-sm">Shipped</p>
                            </td>
                            <td>
                                <p className="theme-color fs-6">$49.54</p>
                            </td>
                            <td>
                                <a href="undefined">
                                    <i className="far fa-eye"></i>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="product-left-sidebar.html">
                                    <img src="/images/fashion/product/front/5.jpg" className="blur-up lazyload" alt="" />
                                </a>
                            </td>
                            <td>
                                <p className="m-0">#125753</p>
                            </td>
                            <td>
                                <p className="fs-6 m-0">Men's Hoodie t-shirt</p>
                            </td>
                            <td>
                                <p className="danger-button btn btn-sm">Canceled</p>
                            </td>
                            <td>
                                <p className="theme-color fs-6">$49.54</p>
                            </td>
                            <td>
                                <a href="undefined">
                                    <i className="far fa-eye"></i>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="product-left-sidebar.html">
                                    <img src="/images/fashion/product/front/6.jpg" className="blur-up lazyload" alt="" />
                                </a>
                            </td>
                            <td>
                                <p className="m-0">#125021</p>
                            </td>
                            <td>
                                <p className="fs-6 m-0">Men's Sweatshirt</p>
                            </td>
                            <td>
                                <p className="danger-button btn btn-sm">Canceled</p>
                            </td>
                            <td>
                                <p className="theme-color fs-6">$49.54</p>
                            </td>
                            <td>
                                <a href="undefined">
                                    <i className="far fa-eye"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Order;
