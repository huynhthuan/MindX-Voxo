import React from 'react';

export default function SliderItemShoe() {
    return (
        <div>
            <div className="banner-poster">
                <div className="slider-right-detail">
                    <div className="labels">
                        <ul className="label-15">
                            <li>
                                <a href="https://www.facebook.com/">
                                    <img
                                        src="/images/social-icon/1.png"
                                        className="img-fluid blur-up lazyload"
                                        alt="facebook"
                                    />
                                    <h5 className="d-lg-block d-none">
                                        Facebook
                                    </h5>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <img
                                        src="/images/social-icon/2.png"
                                        className="img-fluid blur-up lazyload"
                                        alt="Instagram"
                                    />
                                    <h5 className="d-lg-block d-none">
                                        Instagram
                                    </h5>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <img
                                        src="/images/social-icon/3.png"
                                        className="img-fluid blur-up lazyload"
                                        alt="Twitter"
                                    />
                                    <h5 className="d-lg-block d-none">
                                        Twitter
                                    </h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h4>New Festival Offer</h4>
                    <div className="offer-box">
                        <h6>65% off</h6>
                    </div>
                </div>

                <div className="slider-bg">
                    <div className="bg-text">
                        <span>Nike shoes</span>
                    </div>

                    <div className="bg-circle gradient-purple"></div>
                    <img
                        src="/images/shoes/1-.png"
                        className="shoes-1 img-fluid blur-up lazyload"
                        alt=""
                    />
                </div>

                <div className="sugestion-product d-xl-block d-none">
                    <h3>Sugestion Product</h3>
                    <h6>Our Collection</h6>

                    <a
                        href="product-left-sidebar.html"
                        className="slider-shoes-image d-block"
                    >
                        <div className="relative-shoes">
                            <img
                                src="/images/shoes/slider-2.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                            />
                            <div className="shoes-price">
                                <h5>$49.00</h5>
                                <h6>Nike Shoes</h6>
                                <ul className="rating d-flex justify-content-between">
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
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="price-number">
                    <h2>
                        $79.00{' '}
                        <span>
                            <del>$65.00</del>
                        </span>
                    </h2>
                    <h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae minima asperiores possimus ad quae.
                    </h6>
                </div>

                <div className="slider-arrow-2">
                    <div className="left-arrow d-lg-block d-none"></div>
                    <div className="right-arrow d-lg-block d-none"></div>
                </div>
            </div>
        </div>
    );
}
