import { useEffect } from 'react';
import SubscribeBox from '../../../components/Common/SubscribeBox';
import PostCardMansory from '../../../components/Posts/PostCardMansory';
import Link from 'next/link';
import Head from 'next/head';

function Category() {
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

            setTimeout(() => {
                $('.grid').isotope({
                    itemSelector: '.grid-item',
                });
            }, 100);
        })(jQuery);
        feather.replace();
    }, []);

    return (
        <>
            <Head>
                <title>Blog Listing</title>
            </Head>
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
                            <h3>Blog Masonary</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item"
                                        aria-current="page"
                                    >
                                        <Link href="/blog">
                                            <a>Blog /</a>
                                        </Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Blog Masonary
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Masonary Blog Section Start */}
            <section className="masonary-blog-section section-b-space">
                <div className="container">
                    <div className="row g-4 filter-gallery mt-3 grid">
                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        {/* Quote section start */}
                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>
                        {/* Quote section end */}

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        {/* Quote section start */}
                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>
                        {/* Quote section end */}

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        {/* Quote section start */}
                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>
                        {/* Quote section end */}

                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>

                        {/* Quote section start */}
                        <div className="grid-item col-lg-3 col-md-4 col-sm-6">
                            <PostCardMansory />
                        </div>
                        {/* Quote section end */}
                    </div>
                </div>
            </section>
            {/* Masonary Blog Section End */}

            <SubscribeBox />
        </>
    );
}

export default Category;
