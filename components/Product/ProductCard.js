function ProductCart() {
    return (
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <a href="product-left-sidebar.html">
                        <img src="/images/fashion/product/front/5.jpg" className="bg-img blur-up lazyload" alt="" />
                    </a>
                </div>
                <div className="back">
                    <a href="product-left-sidebar.html">
                        <img src="/images/fashion/product/back/5.jpg" className="bg-img blur-up lazyload" alt="" />
                    </a>
                </div>
                <div className="label-block">
                    <span className="label label-black">New</span>
                    <span className="label label-theme">50% Off</span>
                </div>
                <div className="cart-wrap">
                    <ul>
                        <li>
                            <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                <i data-feather="shopping-bag"></i>
                            </a>
                        </li>
                        <li>
                            <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                                <i data-feather="eye"></i>
                            </a>
                        </li>
                        <li>
                            <a href="compare.html">
                                <i data-feather="refresh-cw"></i>
                            </a>
                        </li>
                        <li>
                            <a href="wishlist.html" className="wishlist">
                                <i data-feather="heart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product-details">
                <div className="rating-details">
                    <span className="font-light grid-content">Jacket</span>
                    <ul className="rating mt-0">
                        <li>
                            <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                            <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                            <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                            <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                    </ul>
                </div>
                <div className="main-price">
                    <a href="product-left-sidebar.html" className="font-default">
                        <h5>Full Jacket Ladies</h5>
                    </a>
                    <div className="listing-content">
                        <span className="font-light">Jacket</span>
                        <p className="font-light">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                            eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore repellendus.
                        </p>
                    </div>
                    <h3 className="theme-color">$40.00</h3>
                    <button className="btn listing-content">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
