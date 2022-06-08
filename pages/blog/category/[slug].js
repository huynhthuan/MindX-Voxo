import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SubscribeBox from '../../../components/Common/SubscribeBox';
import PostCardMansory from '../../../components/Posts/PostCardMansory';
import Link from 'next/link';
import Head from 'next/head';
import { CategoryPostSkeleton } from '../../../components/Skeleton_minhhieu';
import { useBlogListCategory } from '../../../src/api_minhhieu/bloglistcategoryApi';

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

    const router = useRouter();
    const page = router.query.page ? router.query.page : 1;
    const category = router.query.slug;

    const { isLoading, error, data, isFetching, refetch } = useBlogListCategory({category: category,page: page});

    // useEffect(() => {
    //     refetch();
    // }, [page || category ]);

    if (error) return 'An error has occurred: ' + error.message;

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
                            <h3 style={{textTransform: 'capitalize'}}>Blog {category}</h3>
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
                                        style={{textTransform: 'capitalize'}}
                                    >
                                        {category}
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
                    <div className="row g-4 d-flex mt-3" style={{ 'height': "unset !important"}}>
                        {/* minhhieu */}
                        {
                            isFetching 
                                ?   
                                    Array(12).fill(0).map((item, index) => {
                                        return <CategoryPostSkeleton key = {index} />
                                    })
                                : 
                                    data.responseInfo && data.responseInfo.map( (item,index) => {
                                        return <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
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
                                        <div
                                            className="page-link"
                                            onClick={() => {
                                                if ( page > 1 ) {
                                                    router.push({
                                                        pathname:`/blog/category/${category}`,
                                                        query: {page: page * 1 - 1}
                                                    })
                                                }
                                            }}
                                        >
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                        </div>
                                    </li>
                                    {/* minhhieu */}
                                    {
                                        !isLoading &&
                                            data.totalPage && Array(data.totalPage * 1).fill(0).map((item, index) => {
                                                return <li className={"page-item " + ( index + 1 == page ? "active" : "" )} key={index}>
                                                    <div
                                                        className="page-link"
                                                        onClick={() => {
                                                            router.push({
                                                                pathname:`/blog/category/${category}`,
                                                                query: {page: index + 1}
                                                            })
                                                        }}
                                                    >
                                                        {index+1}
                                                    </div>
                                                </li>
                                            })
                                    }
                                    <li className="page-item">
                                        <div
                                            className="page-link"
                                            onClick={() => {
                                                if ( page < data.totalPage * 1 ) {
                                                    router.push({
                                                        pathname:`/blog/category/${category}`,
                                                        query: {page: page * 1 + 1}
                                                    })
                                                }
                                            }}
                                        >
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </div>
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
