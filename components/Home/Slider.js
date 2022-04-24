import React, { useEffect } from 'react';
import { Fragment } from 'react';

function Slider() {
    useEffect(() => {
        $('.slick-2')
            .slick({
                dots: true,
                infinite: true,
                speed: 500,
                arrows: false,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<div class="custom-arrow next"><span>Next</span><i class="fas fa-chevron-right ms-3"></i></div>',
                prevArrow: '<div class="custom-arrow prev"><i class="fas fa-chevron-left me-3"></i><span>Prev</span></div>',
            })
            .slickAnimation();
        return () => {
            $('.slick-2').slick('unslick');
        };
    }, []);

    return (
        <Fragment>
            <section className="home-section home-style-2 pt-0">
                <div className="container-fluid p-0">
                    <div className="slick-2 dot-dark">
                        <div>
                            <div className="home-slider">
                                <div className="home-wrap row m-0">
                                    <div className="col-xxl-3 col-lg-4 p-0 d-lg-block d-none">
                                        <div className="home-left-wrapper">
                                            <div>
                                                <h2>Raw Ham Colorblock T-shirt</h2>

                                                <div className="d-flex">
                                                    <ul className="rating p-0 me-2">
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
                                                            <i className="fas fa-star theme-color"></i>
                                                        </li>
                                                    </ul>
                                                    <h6 className="text-light">( 5040 Review )</h6>
                                                </div>

                                                <p>The international hoodies with excellent durable fabric, not to heavy but simply PERFECT for Indian summer.</p>
                                                <h3>
                                                    $49.55 <span className="theme-color">$49.55</span>
                                                </h3>
                                                <ul className="selection-wrap">
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Size</option>
                                                                <option defaultValue="1">S</option>
                                                                <option defaultValue="2">M</option>
                                                                <option defaultValue="3">L</option>
                                                                <option defaultValue="4">XL</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Color</option>
                                                                <option defaultValue="1">Black</option>
                                                                <option defaultValue="2">White</option>
                                                                <option defaultValue="3">Blue</option>
                                                                <option defaultValue="4">Gray</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Qty</option>
                                                                <option defaultValue="1">1</option>
                                                                <option defaultValue="2">2</option>
                                                                <option defaultValue="3">3</option>
                                                                <option defaultValue="4">4</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="add-btn">
                                                    <a href="cart.html" className="btn btn-white">
                                                        Add to cart
                                                    </a>
                                                    <a href="undefined" className="btn btn-solid-default ms-2">
                                                        <i className="fas fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="share-icons">
                                                    <span>share with</span>
                                                    <ul className="share-icons p-0">
                                                        <li>
                                                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=#url">
                                                                <img src="images/social-icon/4.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.co.in/">
                                                                <img src="images/social-icon/5.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://www.twitter.com/share">
                                                                <img src="images/social-icon/6.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-9 col-lg-8 p-0 left-content">
                                        <img src="images/fashion/slider/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                        <div className="home-content row">
                                            <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-5 col-6">
                                                <h3>
                                                    Sale <span className="theme-color">70% OFF</span>
                                                </h3>
                                                <h1 data-animation-in="fadeInUp">New Tranding Fashion</h1>
                                                <h6 className="mb-4" data-animation-in="fadeInUp" data-delay-in="0.4">
                                                    BUY ONE GET ONE <span className="theme-color">FREE</span>
                                                </h6>
                                                <div className="discover-block" data-animation-in="fadeInUp" data-delay-in="0.7">
                                                    <div className="d-flex">
                                                        <a href="undefined" className="play-icon theme-bg-color">
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                        <div className="discover-content">
                                                            <h4 className="theme-color mb-1">Discover</h4>
                                                            <h6>Our Collection</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home-slider">
                                <div className="home-wrap row m-0">
                                    <div className="col-xxl-3 col-lg-4 p-0 d-lg-block d-none">
                                        <div className="home-left-wrapper">
                                            <div>
                                                <h2>Raw Ham Colorblock T-shirt</h2>
                                                <div className="d-flex">
                                                    <ul className="rating p-0 me-2">
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
                                                            <i className="fas fa-star theme-color"></i>
                                                        </li>
                                                    </ul>
                                                    <h6 className="text-light">( 5040 Review )</h6>
                                                </div>
                                                <p>The international hoodies with excellent durable fabric, not to heavy but simply PERFECT for Indian summer.</p>
                                                <h3>
                                                    $49.55 <span className="theme-color">$49.55</span>
                                                </h3>
                                                <ul className="selection-wrap">
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Size</option>
                                                                <option defaultValue="1">S</option>
                                                                <option defaultValue="2">M</option>
                                                                <option defaultValue="3">L</option>
                                                                <option defaultValue="4">XL</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Color</option>
                                                                <option defaultValue="1">Black</option>
                                                                <option defaultValue="2">White</option>
                                                                <option defaultValue="3">Blue</option>
                                                                <option defaultValue="4">Gray</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Qty</option>
                                                                <option defaultValue="1">1</option>
                                                                <option defaultValue="2">2</option>
                                                                <option defaultValue="3">3</option>
                                                                <option defaultValue="4">4</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="add-btn">
                                                    <a href="cart.html" className="btn btn-white">
                                                        Add to cart
                                                    </a>
                                                    <a href="undefined" className="btn btn-solid-default ms-2">
                                                        <i className="fas fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="share-icons">
                                                    <span>share with</span>
                                                    <ul className="share-icons p-0">
                                                        <li>
                                                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=#url">
                                                                <img src="images/social-icon/4.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.co.in/">
                                                                <img src="images/social-icon/5.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://www.twitter.com/share">
                                                                <img src="images/social-icon/6.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-9 col-lg-8 p-0 left-content">
                                        <img src="images/fashion/slider/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                        <div className="home-content row">
                                            <div className="col-xxl-4 col-lg-5 col-md-6 col-sm-7 col-9">
                                                <h3>
                                                    Sale <span className="theme-color">70% OFF</span>
                                                </h3>
                                                <h1 data-animation-in="fadeInUp">New Tranding Fashion</h1>
                                                <h6 className="mb-4" data-animation-in="fadeInUp" data-delay-in="0.4">
                                                    BUY ONE GET ONE <span className="theme-color">FREE</span>
                                                </h6>
                                                <div className="discover-block" data-animation-in="fadeInUp" data-delay-in="0.7">
                                                    <div className="d-flex">
                                                        <a href="undefined" className="play-icon theme-bg-color">
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                        <div className="discover-content">
                                                            <h4 className="theme-color mb-1">Discover</h4>
                                                            <h6>Our Collection</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home-slider">
                                <div className="home-wrap row m-0">
                                    <div className="col-xxl-3 col-lg-4 p-0 d-lg-block d-none">
                                        <div className="home-left-wrapper">
                                            <div>
                                                <h2>Raw Ham Colorblock T-shirt</h2>
                                                <div className="d-flex">
                                                    <ul className="rating p-0 me-2">
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
                                                            <i className="fas fa-star theme-color"></i>
                                                        </li>
                                                    </ul>
                                                    <h6 className="text-light">( 5040 Review )</h6>
                                                </div>

                                                <p>The international hoodies with excellent durable fabric, not to heavy but simply PERFECT for Indian summer.</p>
                                                <h3>
                                                    $49.55 <span className="theme-color">$49.55</span>
                                                </h3>
                                                <ul className="selection-wrap">
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Size</option>
                                                                <option defaultValue="1">S</option>
                                                                <option defaultValue="2">M</option>
                                                                <option defaultValue="3">L</option>
                                                                <option defaultValue="4">XL</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Color</option>
                                                                <option defaultValue="1">Black</option>
                                                                <option defaultValue="2">White</option>
                                                                <option defaultValue="3">Blue</option>
                                                                <option defaultValue="4">Gray</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dark-select">
                                                            <select className="form-select">
                                                                <option defaultChecked>Qty</option>
                                                                <option defaultValue="1">1</option>
                                                                <option defaultValue="2">2</option>
                                                                <option defaultValue="3">3</option>
                                                                <option defaultValue="4">4</option>
                                                            </select>
                                                            <i className="fas fa-chevron-down"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="add-btn">
                                                    <a href="cart.html" className="btn btn-white">
                                                        Add to cart
                                                    </a>
                                                    <a href="undefined" className="btn btn-solid-default ms-2">
                                                        <i className="fas fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="share-icons">
                                                    <span>share with</span>
                                                    <ul className="share-icons p-0">
                                                        <li>
                                                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=#url">
                                                                <img src="images/social-icon/4.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.co.in/">
                                                                <img src="images/social-icon/5.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://www.twitter.com/share">
                                                                <img src="images/social-icon/6.png" className="img-fluid blur-up lazyload" alt="social icon" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-9 col-lg-8 p-0 left-content">
                                        <img src="images/fashion/slider/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                        <div className="home-content row">
                                            <div className="col-xxl-4 col-lg-5 col-md-6 col-sm-7 col-9">
                                                <h3>
                                                    Sale <span className="theme-color">70% OFF</span>
                                                </h3>
                                                <h1 data-animation-in="fadeInUp">New Tranding Fashion</h1>
                                                <h6 className="mb-4" data-animation-in="fadeInUp" data-delay-in="0.4">
                                                    BUY ONE GET ONE <span className="theme-color">FREE</span>
                                                </h6>
                                                <div className="discover-block" data-animation-in="fadeInUp" data-delay-in="0.7">
                                                    <div className="d-flex">
                                                        <a href="undefined" className="play-icon theme-bg-color">
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                        <div className="discover-content">
                                                            <h4 className="theme-color mb-1">Discover</h4>
                                                            <h6>Our Collection</h6>
                                                        </div>
                                                    </div>
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
        </Fragment>
    );
}

export default Slider;
