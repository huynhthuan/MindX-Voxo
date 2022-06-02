import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';
import {CONTACT_US} from '../../utils/api_minhhieu/index';

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

    const [contactForm, setContactForm] = useState({
        'first-name':'',
        'last-name':'',
        'your-email':'',
        'your-comment':''
    });

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    const [firstnameEmpty, setFirstnameEmpty] = useState(false);
    const [lastnameEmpty, setLastnameEmpty] = useState(false);
    const [commentEmpty, setCommentEmpty] = useState(false);

    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    const handlecontactFormPropertiesChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]:e.target.value
        }) 
    }

    const handleSubmit = () => {
        console.log(contactForm);
        // if (contactForm['first-name']) {
        //     setFirstnameEmpty(true);
        // } else if (contactForm['last-name']) {
        //     setLastnameEmpty(true);
        // }
        // if (validateEmail(contactForm['your-email'])) {
        //     setEmailConfirmed(false);
        //     const formData = new FormData();
        //     formData.append('first-name',contactForm['first-name']);
        //     formData.append('last-name',contactForm['last-name']);
        //     formData.append('your-email',contactForm['your-email']);
        //     formData.append('your-comment',contactForm['your-comment']);
        // } else {
        //     setEmailInvalid(true);
        // }
        // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.current.value))
        // {
        //     setEmailInValid(false);
        //     const formData = new FormData();
        //     formData.append("your-email",userEmail.current.value);
        //     axios({
        //         url: SUBSCRIBE_EMAIL,
        //         data: formData,
        //         method: 'POST',
        //         headers: { "Content-Type": "multipart/form-data" },
        //     })
        //     .then( res => {
        //         if (res.status === 200) {
        //             console.log(res);
        //             setAlertInfo({
        //                 result:true,
        //                 text:'Subscribe successfull',
        //                 displayTime:3000
        //             })
        //         } else {
        //             setAlertInfo({
        //                 result:false,
        //                 text:'Subscribe Failed',
        //                 displayTime:3000
        //             })
        //         }
        //     })
    }

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
                                    <div className="col-md-6 position-relative">
                                        <label
                                            htmlFor="first"
                                            className="form-label"
                                        >
                                            First Name <span className='theme-color'>*</span>
                                        </label>
                                        <input
                                            // value={contactForm['first-name']}
                                            type="text"
                                            className="form-control"
                                            id="first"
                                            placeholder="Enter Your First Name"
                                            name='first-name'
                                            required
                                            onChange={handlecontactFormPropertiesChange}
                                        />
                                        <div hidden={!firstnameEmpty} className='position-absolute top-100 theme-color mt-1'>First name can not be empty</div>
                                    </div>
                                    <div className="col-md-6 position-relative">
                                        <label
                                            htmlFor="last"
                                            className="form-label"
                                        >
                                            Last Name <span className='theme-color'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last"
                                            placeholder="Enter Your Last Name"
                                            required
                                            name='last-name'
                                            onChange={handlecontactFormPropertiesChange}
                                        />
                                        <div hidden={!lastnameEmpty} className='position-absolute top-100 theme-color mt-1'>Last name can not be empty</div>
                                    </div>
                                    <div className="col-md-6 pt-lg-2 position-relative">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email <span className='theme-color'>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Your Email Address"
                                            required
                                            name='your-email'
                                            onChange={handlecontactFormPropertiesChange}
                                        />
                                        <div hidden={!emailInvalid} className='position-absolute top-100 theme-color mt-1'>Email invalid</div>
                                    </div>
                                    <div className="col-md-6 pt-lg-2 position-relative">
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
                                        <div hidden={!emailConfirmed} className='position-absolute top-100 theme-color mt-1'>Confirm email incorrect</div>
                                    </div>

                                    <div className="col-12 position-relative pt-2">
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
                                            name='your-comment'
                                            onChange={handlecontactFormPropertiesChange}
                                        ></textarea>
                                        <div hidden={!commentEmpty} className='position-absolute top-100 theme-color mt-1'>Comment is empty</div>
                                    </div>

                                    <div className="col-auto pt-2">
                                        <button
                                            className="btn btn-solid-default"
                                            type="submit"
                                            onClick={handleSubmit}
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
