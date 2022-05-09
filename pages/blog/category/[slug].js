import { useState,useEffect } from 'react';
import { useQuery } from 'react-query';
import SubscribeBox from '../../../components/Common/SubscribeBox';
import PostCardMansory from '../../../components/Posts/PostCardMansory';
import Link from 'next/link';
import Head from 'next/head';
import { BlOG_LIST_CATEGORY } from '../../../utils/api_minhhieu';
import { CategoryPostSkeleton } from '../../../components/Skeleton_minhhieu';

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

    const { isLoading, error, data } = useQuery('repoData', async () =>
        {
            const res = await fetch(BlOG_LIST_CATEGORY + '43');
        
            const data = await res.json();

            return {
                responseInfo: data, 
                totalPost: res.headers.get('x-wp-total'),
                totalPage: res.headers.get('x-wp-totalpages')
            }
        
        }
    );

    if (isLoading) 
        return <>
            {
                Array(10).fill(0).map((item, index) => {
                    return <CategoryPostSkeleton key = {index} />
                })
            }
        </>

    if (error) return 'An error has occurred: ' + error.message

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
                        {/* minhhieu */}
                        {
                            data.responseInfo && data.responseInfo.map( (item,index) => {
                                return <div className="grid-item col-lg-3 col-md-4 col-sm-6" key={index}>
                                    <PostCardMansory {...item}/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
            {/* Masonary Blog Section End */}

            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="page-section mt-0">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                        </a>
                                    </li>
                                    {/* minhhieu */}
                                    {
                                        data.totalPage && Array(data.totalPage * 1).fill(0).map((item, index) => {
                                            return <li className="page-item active">
                                                <a
                                                    className="page-link"
                                                    href="undefined"
                                                >
                                                    {index+1}
                                                </a>
                                            </li>
                                        })
                                    }
                                    {/* <li className="page-item active">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            3
                                        </a>
                                    </li> */}
                                    <li className="page-item">
                                        <a className="page-link">
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeBox />
        </>
    );
}

export default Category;
