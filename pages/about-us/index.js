import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';

export default function AboutUs() {
    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClassName('b-top');
            $('.bg-bottom').parent().addClassName('b-bottom');
            $('.bg-center').parent().addClassName('b-center');
            $('.bg-left').parent().addClassName('b-left');
            $('.bg-right').parent().addClassName('b-right');
            $('.bg_size_content').parent().addClassName('b_size_content');
            $('.bg-img').parent().addClassName('bg-size');
            $('.bg-img.blur-up').parent().addClassName('blur-up lazyload');
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

        let slideTeam = $('.slide-5_1').slick({
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        let slideTestimonial = $('.slide-3-1').slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                    },
                },
            ],
        });

        return () => {
            slideTeam.slick('unslick');
            slideTestimonial.slick('unslick');
        };
    }, []);

    return (
        <>
            <Breadcrumb title={'About Us'} />
            {/* team leader section Start */}
            <section className="overflow-hidden">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-5 offset-xl-1">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <img
                                        src="/images/inner-page/review-image/6.jpg"
                                        className="img-fluid rounded-3 about-image"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="/images/inner-page/review-image/7.jpg"
                                        className="img-fluid rounded-3 about-image"
                                        alt=""
                                    />
                                </div>
                                <div className="col-12 ratio_40">
                                    <div>
                                        <img
                                            src="/images/inner-page/review-image/8.jpg"
                                            className="img-fluid rounded-3 team-image bg-img"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="about-details">
                                <div>
                                    <h2>WHO WE ARE</h2>
                                    <h3>largest Online fashion destination</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Totam, culpa!
                                        Asperiores labore amet nemo ullam odit
                                        atque adipisci, hic, aliquid animi
                                        fugiat praesentium quidem. Perspiciatis,
                                        expedita!
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Totam, culpa!
                                        Asperiores labore amet nemo ullam odit
                                        atque adipisci, hic, aliquid animi
                                        fugiat praesentium quidem. Perspiciatis,
                                        expedita!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* team leader section End */}

            {/* service section start */}
            <section className="service-section about-page service-style-2 section-b-space">
                <div className="container">
                    <div className="row g-4 g-sm-3">
                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#customer"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">Customer Servcies</h3>
                                    <span className="font-light">
                                        Top notch customer service.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#shop"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">Pickup At Any Store</h3>
                                    <span className="font-light">
                                        Free shipping on orders over $65.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#secure-payment"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">Secured Payment</h3>
                                    <span className="font-light">
                                        We accept all major credit cards.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#return"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">Free Returns</h3>
                                    <span className="font-light">
                                        30-days free return policy.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service section end */}

            {/* Leader section start */}
            <section className="section-b-space team-leader-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title title1 text-center">
                                <h2>Meet Our Team</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero assumenda hic porro
                                    odio voluptas qui quod sed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-wrapper leader-section slick-lg-space slide-5_1 ratio_asos">
                        <div>
                            <div className="leader-contain">
                                <div className="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/1.jpg"
                                        className="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul className="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="leader-contain">
                                <div className="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/2.jpg"
                                        className="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul className="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="leader-contain">
                                <div className="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/3.jpg"
                                        className="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul className="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="leader-contain">
                                <div className="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/4.jpg"
                                        className="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul className="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="leader-contain">
                                <div className="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/5.jpg"
                                        className="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul className="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* leader section End */}

            {/* testimonial section start */}
            <section className="testimonial-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title title1 text-center">
                                <h2>Testimonial</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero assumenda hic porro
                                    odio voluptas qui quod sed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider product-wrapper slide-3-1 slick-lg-space">
                        <div>
                            <div className="testimonial-contain">
                                <div className="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div className="testimonial-details">
                                    <ul className="rating">
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
                                    <h5 className="details-images">
                                        <i className="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i className="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="testimonial-contain">
                                <div className="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/2.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div className="testimonial-details">
                                    <ul className="rating">
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
                                    <h5 className="details-images">
                                        <i className="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i className="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="testimonial-contain">
                                <div className="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/3.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div className="testimonial-details">
                                    <ul className="rating">
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
                                    <h5 className="details-images">
                                        <i className="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i className="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="testimonial-contain">
                                <div className="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/4.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div className="testimonial-details">
                                    <ul className="rating">
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
                                    <h5 className="details-images">
                                        <i className="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i className="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="testimonial-contain">
                                <div className="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/5.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div className="testimonial-details">
                                    <ul className="rating">
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
                                    <h5 className="details-images">
                                        <i className="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i className="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial section end */}

            <SubscribeBox />
        </>
    );
}
