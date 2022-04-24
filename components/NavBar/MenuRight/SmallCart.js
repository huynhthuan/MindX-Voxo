import Link from 'next/link';

function SmallCart() {
    return (
        <>
            <button type="button" className="btn btn-solid-default btn-spacing">
                <i data-feather="shopping-cart" className="pe-2"></i>
                <span>$5686.25</span>
            </button>
            <div className="onhover-div">
                <div className="cart-menu">
                    <div className="cart-title">
                        <h6>
                            <i data-feather="shopping-bag"></i>
                            <span className="label label-theme rounded-pill">5</span>
                        </h6>
                        <span className="d-md-none d-block">
                            <i className="fas fa-arrow-right back-cart"></i>
                        </span>
                    </div>
                    <ul className="custom-scroll">
                        <li>
                            <div className="media">
                                <img src="/images/fashion/product/front/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                                <div className="media-body">
                                    <h6>Slim Fit Plastic Coat</h6>
                                    <div className="qty-with-price">
                                        <span>$78.00</span>
                                        <span>
                                            <input type="number" className="form-control" defaultValue="1" />
                                        </span>
                                    </div>
                                </div>
                                <button type="button" className="btn-close d-block d-md-none" aria-label="Close">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className="media">
                                <img src="/images/fashion/product/front/7.jpg" className="img-fluid blur-up lazyload" alt="" />
                                <div className="media-body">
                                    <h6>Womens Stylish Jacket</h6>
                                    <div className="qty-with-price">
                                        <span>$24.00</span>
                                        <span>
                                            <input type="number" className="form-control" defaultValue="1" />
                                        </span>
                                    </div>
                                </div>
                                <button type="button" className="btn-close d-block d-md-none" aria-label="Close">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cart-btn">
                    <h6 className="cart-total">
                        <span className="font-light">Total:</span> $ 542.00
                    </h6>
                    <Link href="/cart">
                        <button type="button" className="btn btn-solid-default btn-block">
                            Proceed to payment
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SmallCart;
