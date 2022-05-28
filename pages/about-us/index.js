import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';

export default function AboutUs() {
    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
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
            <section class="overflow-hidden">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-xl-5 offset-xl-1">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <img
                                        src="/images/inner-page/review-image/6.jpg"
                                        class="img-fluid rounded-3 about-image"
                                        alt=""
                                    />
                                </div>
                                <div class="col-md-6">
                                    <img
                                        src="/images/inner-page/review-image/7.jpg"
                                        class="img-fluid rounded-3 about-image"
                                        alt=""
                                    />
                                </div>
                                <div class="col-12 ratio_40">
                                    <div>
                                        <img
                                            src="/images/inner-page/review-image/8.jpg"
                                            class="img-fluid rounded-3 team-image bg-img"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-5">
                            <div class="about-details">
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
            <section class="service-section about-page service-style-2 section-b-space">
                <div class="container">
                    <div class="row g-4 g-sm-3">
                        <div class="col-xl-3 col-sm-6">
                            <div class="service-wrap">
                                <div class="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#customer"></use>
                                    </svg>
                                </div>
                                <div class="service-content">
                                    <h3 class="mb-2">Customer Servcies</h3>
                                    <span class="font-light">
                                        Top notch customer service.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6">
                            <div class="service-wrap">
                                <div class="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#shop"></use>
                                    </svg>
                                </div>
                                <div class="service-content">
                                    <h3 class="mb-2">Pickup At Any Store</h3>
                                    <span class="font-light">
                                        Free shipping on orders over $65.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6">
                            <div class="service-wrap">
                                <div class="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#secure-payment"></use>
                                    </svg>
                                </div>
                                <div class="service-content">
                                    <h3 class="mb-2">Secured Payment</h3>
                                    <span class="font-light">
                                        We accept all major credit cards.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6">
                            <div class="service-wrap">
                                <div class="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#return"></use>
                                    </svg>
                                </div>
                                <div class="service-content">
                                    <h3 class="mb-2">Free Returns</h3>
                                    <span class="font-light">
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
            <section class="section-b-space team-leader-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="title title1 text-center">
                                <h2>Meet Our Team</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero assumenda hic porro
                                    odio voluptas qui quod sed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="product-wrapper leader-section slick-lg-space slide-5_1 ratio_asos">
                        <div>
                            <div class="leader-contain">
                                <div class="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/1.jpg"
                                        class="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul class="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="leader-contain">
                                <div class="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/2.jpg"
                                        class="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul class="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="leader-contain">
                                <div class="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/3.jpg"
                                        class="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul class="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="leader-contain">
                                <div class="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/4.jpg"
                                        class="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul class="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="leader-contain">
                                    <h3>Jonathan Warner</h3>
                                    <h6>CEO</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="leader-contain">
                                <div class="leader-image">
                                    <img
                                        src="/images/inner-page/review-image/5.jpg"
                                        class="img-fluid bg-img"
                                        alt=""
                                    />
                                    <ul class="social-media">
                                        <li>
                                            <a href="www.facebook.html">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.twitter.html">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="www.google.html">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="leader-contain">
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
            <section class="testimonial-section section-b-space">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="title title1 text-center">
                                <h2>Testimonial</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero assumenda hic porro
                                    odio voluptas qui quod sed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slider product-wrapper slide-3-1 slick-lg-space">
                        <div>
                            <div class="testimonial-contain">
                                <div class="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/1.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div class="testimonial-details">
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 class="details-images">
                                        <i class="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i class="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="testimonial-contain">
                                <div class="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/2.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div class="testimonial-details">
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 class="details-images">
                                        <i class="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i class="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="testimonial-contain">
                                <div class="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/3.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div class="testimonial-details">
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 class="details-images">
                                        <i class="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i class="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="testimonial-contain">
                                <div class="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/4.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div class="testimonial-details">
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 class="details-images">
                                        <i class="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i class="fas fa-quote-right"></i>
                                    </h5>
                                    <h5>
                                        <strong>Johnkee</strong> / Apply.co
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="testimonial-contain">
                                <div class="textimonial-image">
                                    <img
                                        src="/images/inner-page/review-image/5.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div class="testimonial-details">
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star theme-color"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 class="details-images">
                                        <i class="fas fa-quote-left"></i>Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Quidem cum consequatur
                                        sit cupiditate, quaerat sint porro
                                        deserunt voluptas eligendi impedit.
                                        <i class="fas fa-quote-right"></i>
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
