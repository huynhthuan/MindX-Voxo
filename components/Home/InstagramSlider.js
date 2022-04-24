import React, { useEffect } from 'react';

function InstagramSlider() {
    useEffect(() => {
        let instaSlider = $('.insta-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1630,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '20px',
                    },
                },
            ],
        });
        return () => {
            instaSlider.slick('unslick');
        };
    }, []);

    return (
        <section className="ratio_square">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="title title-2 text-center">
                            <h2>Instagram Shop</h2>
                            <h5 className="text-color">New Collection</h5>
                        </div>
                        <div className="product-style-1 instagram-2 product-wrapper">
                            <div className="insta-slider instagram-wrap">
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="top-wishlist product-color">
                                                <a href="wishlist.html" className="heart-wishlist heart-color ms-auto">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </div>
                                            <div className="share share-box share-opacity">
                                                <span className="share-plus share-plus-color">+</span>
                                                <span>Share</span>
                                            </div>
                                            <a href="undefined" className="text-center">
                                                <img src="images/fashion/instagram/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                            </a>
                                        </div>
                                        <div className="insta-hover insta-spacing text-center">
                                            <div>
                                                <h5>New Offer -56% Discount</h5>
                                                <h3 className="text-hide">Women T-shirt From $35</h3>
                                                <button type="button" className="btn btn-light-white">
                                                    Shop now <i className="fas fa-chevron-right ms-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="top-wishlist product-color">
                                                <a href="wishlist.html" className="heart-wishlist heart-color ms-auto">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </div>
                                            <div className="share share-box share-opacity">
                                                <span className="share-plus share-plus-color">+</span>
                                                <span>Share</span>
                                            </div>
                                            <a href="undefined" className="text-center">
                                                <img src="images/fashion/instagram/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                            </a>
                                        </div>
                                        <div className="insta-hover insta-spacing text-center">
                                            <div>
                                                <h5>New Offer -56% Discount</h5>
                                                <h3 className="text-hide">Women T-shirt From $35</h3>
                                                <button type="button" className="btn btn-light-white">
                                                    Shop now <i className="fas fa-chevron-right ms-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="top-wishlist product-color">
                                                <a href="wishlist.html" className="heart-wishlist heart-color ms-auto">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </div>
                                            <div className="share share-box share-opacity">
                                                <span className="share-plus share-plus-color">+</span>
                                                <span>Share</span>
                                            </div>
                                            <a href="undefined" className="text-center">
                                                <img src="images/fashion/instagram/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                            </a>
                                        </div>
                                        <div className="insta-hover insta-spacing text-center">
                                            <div>
                                                <h5>New Offer -56% Discount</h5>
                                                <h3 className="text-hide">Women T-shirt From $35</h3>
                                                <button type="button" className="btn btn-light-white">
                                                    Shop now <i className="fas fa-chevron-right ms-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="top-wishlist product-color">
                                                <a href="wishlist.html" className="heart-wishlist heart-color ms-auto">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </div>
                                            <div className="share share-box share-opacity">
                                                <span className="share-plus share-plus-color">+</span>
                                                <span>Share</span>
                                            </div>
                                            <a href="undefined" className="text-center">
                                                <img src="images/fashion/instagram/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                            </a>
                                        </div>
                                        <div className="insta-hover insta-spacing text-center">
                                            <div>
                                                <h5>New Offer -56% Discount</h5>
                                                <h3 className="text-hide">Women T-shirt From $35</h3>
                                                <button type="button" className="btn btn-light-white">
                                                    Shop now <i className="fas fa-chevron-right ms-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="top-wishlist product-color">
                                                <a href="wishlist.html" className="heart-wishlist heart-color ms-auto">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                            </div>
                                            <div className="share share-box share-opacity">
                                                <span className="share-plus share-plus-color">+</span>
                                                <span>Share</span>
                                            </div>
                                            <a href="undefined" className="text-center">
                                                <img src="images/fashion/instagram/5.jpg" className="bg-img blur-up lazyload" alt="" />
                                            </a>
                                        </div>
                                        <div className="insta-hover insta-spacing text-center">
                                            <div>
                                                <h5>New Offer -56% Discount</h5>
                                                <h3 className="text-hide">Women T-shirt From $35</h3>
                                                <button type="button" className="btn btn-light-white">
                                                    Shop now <i className="fas fa-chevron-right ms-2"></i>
                                                </button>
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
    );
}

export default InstagramSlider;
