import { useEffect } from 'react';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';

function ContactUs() {
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
    }, []);

    return (
        <>
            <Breadcrumb title={'Contact us'} />

            {/* Contact Section Start */}
            <section className="contact-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="materialContainer">
                                <div className="material-details">
                                    <div className="title title1 title-effect mb-1 title-left">
                                        <h2>Contact Us</h2>
                                        <p className="ms-0 w-100">
                                            Your email address will not be
                                            published. Required fields are
                                            marked *
                                        </p>
                                    </div>
                                </div>
                                <div className="row g-4 mt-md-1 mt-2">
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="first"
                                            className="form-label"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first"
                                            placeholder="Enter Your First Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="last"
                                            className="form-label"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last"
                                            placeholder="Enter Your Last Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Your Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="email2"
                                            className="form-label"
                                        >
                                            Confirm Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email2"
                                            placeholder="Enter Your Confirm Email Address"
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label
                                            htmlFor="comment"
                                            className="form-label"
                                        >
                                            Comment
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="comment"
                                            rows="5"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="col-auto">
                                        <button
                                            className="btn btn-solid-default"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="contact-details">
                                <div>
                                    <h2>Let's get in touch</h2>
                                    <h5 className="font-light">
                                        We're open for any suggestion or just to
                                        have a chat
                                    </h5>
                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <i data-feather="map-pin"></i>
                                        </div>
                                        <div className="contact-title">
                                            <h4>Address :</h4>
                                            <p>
                                                1418 Riverwood Drive, Suite 3245
                                                Cottonwood, CA 96052, United
                                                States
                                            </p>
                                        </div>
                                    </div>

                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <i data-feather="phone"></i>
                                        </div>
                                        <div className="contact-title">
                                            <h4>Phone Number :</h4>
                                            <p>+ 185659635</p>
                                            <p>+ 658651167</p>
                                        </div>
                                    </div>

                                    <div className="contact-box">
                                        <div className="contact-icon">
                                            <i data-feather="mail"></i>
                                        </div>
                                        <div className="contact-title">
                                            <h4>Email Address :</h4>
                                            <p>voxo123@gmail.com</p>
                                            <p>voxo987@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section End */}

            {/* Map Section start */}
            <section className="contact-section">
                <div className="container-fluid">
                    <div className="row gy-4">
                        <div className="col-12 p-0">
                            <div className="location-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7227.225249699896!2d55.17263937326456!3d25.081115462415855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1632538854272!5m2!1sen!2sin"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Map Section End */}

            <SubscribeBox />
        </>
    );
}

export default ContactUs;
