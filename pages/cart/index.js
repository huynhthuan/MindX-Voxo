function Cart() {
    return (
        <>
            {/* Breadcrumb section start */}
            <section className="breadcrumb-section section-b-space">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Shopping Cart</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Cart
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Cart Section Start */}
            <section className="cart-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="count-down">
                                <h5>
                                    Your cart will be expired in <span className="count-timer theme-color" id="timer"></span>
                                    minutes !
                                </h5>
                                <button type="button" className="btn btn-solid-default btn-sm fw-bold">
                                    Check Out
                                </button>
                            </div>
                        </div>

                        <div className="col-sm-12 table-responsive mt-4">
                            <table className="table cart-table">
                                <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">action</th>
                                        <th scope="col">total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="product-left-sidebar.html">
                                                <img src="/images/fashion/product/front/1.jpg" className=" blur-up lazyload" alt="" />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="product-left-sidebar.html">Yellow Jacket</a>
                                            <div className="mobile-cart-content row">
                                                <div className="col">
                                                    <div className="qty-box">
                                                        <div className="input-group">
                                                            <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <h2>$63.00</h2>
                                                </div>
                                                <div className="col">
                                                    <h2 className="td-color">
                                                        <a href="undefined">
                                                            <i className="fas fa-times"></i>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h2>$63.00</h2>
                                        </td>
                                        <td>
                                            <div className="qty-box">
                                                <div className="input-group">
                                                    <input type="number" name="quantity" className="form-control input-number" defaultValue="1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="undefined">
                                                <i className="fas fa-times"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <h2 className="td-color">$3648.00</h2>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="product-left-sidebar.html">
                                                <img src="/images/fashion/product/front/2.jpg" className=" blur-up lazyload" alt="" />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="product-left-sidebar.html">Blue Jeans Color Jacket</a>
                                            <div className="mobile-cart-content row">
                                                <div className="col">
                                                    <div className="qty-box">
                                                        <div className="input-group">
                                                            <input type="number" name="quantity" className="form-control input-number" defaultValue="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <h2>$69.00</h2>
                                                </div>
                                                <div className="col">
                                                    <h2 className="td-color">
                                                        <a href="undefined">
                                                            <i className="fas fa-times"></i>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h2>$69.00</h2>
                                        </td>
                                        <td>
                                            <div className="qty-box">
                                                <div className="input-group">
                                                    <input type="number" name="quantity" className="form-control input-number" defaultValue="1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="undefined">
                                                <i className="fas fa-times"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <h2 className="td-color">$3219.00</h2>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="product-left-sidebar.html">
                                                <img src="/images/fashion/product/front/3.jpg" className=" blur-up lazyload" alt="" />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="product-left-sidebar.html">Dawnbreaker Jacket</a>
                                            <div className="mobile-cart-content row">
                                                <div className="col">
                                                    <div className="qty-box">
                                                        <div className="input-group">
                                                            <input type="number" name="quantity" className="form-control input-number" defaultValue="1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <h2>$69.00</h2>
                                                </div>
                                                <div className="col">
                                                    <h2 className="td-color">
                                                        <a href="undefined">
                                                            <i className="fas fa-times"></i>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h2>$69.00</h2>
                                        </td>
                                        <td>
                                            <div className="qty-box">
                                                <div className="input-group">
                                                    <input type="number" name="quantity" className="form-control input-number" defaultValue="1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="undefined">
                                                <i className="fas fa-times"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <h2 className="td-color">$4215.00</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12 mt-md-5 mt-4">
                            <div className="row">
                                <div className="col-sm-7 col-5 order-1">
                                    <div className="left-side-button text-end d-flex d-block justify-content-end">
                                        <a href="undefined" className="text-decoration-underline theme-color d-block text-capitalize">
                                            clear all items
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-7">
                                    <div className="left-side-button float-start">
                                        <a href="index.html" className="btn btn-solid-default btn fw-bold mb-0 ms-0">
                                            <i className="fas fa-arrow-left"></i> Continue Shopping
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart-checkout-section">
                            <div className="row g-4">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="promo-section">
                                        <form className="row g-3">
                                            <div className="col-7">
                                                <input type="text" className="form-control" id="number" placeholder="Coupon Code" />
                                            </div>
                                            <div className="col-5">
                                                <button className="btn btn-solid-default rounded btn">Apply Coupon</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 ">
                                    <div className="checkout-button">
                                        <a href="checkout.html" className="btn btn-solid-default btn fw-bold">
                                            Check Out <i className="fas fa-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="cart-box">
                                        <div className="cart-box-details">
                                            <div className="total-details">
                                                <div className="top-details">
                                                    <h3>Cart Totals</h3>
                                                    <h6>
                                                        Total MRP <span>$250.00</span>
                                                    </h6>
                                                    <h6>
                                                        Coupon Discount <span>-$25.00</span>
                                                    </h6>
                                                    <h6>
                                                        Convenience Fee{' '}
                                                        <span>
                                                            <del>$25.00</del>
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="bottom-details">
                                                    <a href="checkout.html">Process Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cart Section End */}

            {/* Subscribe Section Start */}
            <section className="subscribe-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="subscribe-details">
                                <h2 className="mb-3">Subscribe Our News</h2>
                                <h6 className="font-light">Subscribe and receive our newsletters to follow the news about our fresh and fantastic Products.</h6>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                            <div className="subsribe-input">
                                <div className="input-group">
                                    <input type="text" className="form-control subscribe-input" placeholder="Your Email Address" />
                                    <button className="btn btn-solid-default" type="button">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Subscribe Section End */}
        </>
    );
}

export default Cart;
