import { useEffect } from 'react';
import Sidebar from '../../components/Blog/Sidebar';
import SubscribeBox from '../../components/Common/SubscribeBox';
import PostCard from '../../components/Posts/PostCard';

function Search() {
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
            <section className="search-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title title1 text-center">
                                <h2>Search For Posts</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <div className="search-bar">
                                <div className="input-group search-bar w-100  mb-5">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                    <button
                                        className="input-group-text"
                                        id="basic-addon3"
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="left-sidebar-section masonary-blog-section mb-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <h2 className="mb-2">Posts for keyword: </h2>
                        </div>
                        <div className="col-lg-9 col-md-7 ratio_square">
                            <div className="row g-4 g-xl-5 pb-5">
                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>

                                <div className="col-12">
                                    <PostCard />
                                </div>
                            </div>

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
                                            <li className="page-item active">
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
                                            </li>
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

                        <div className="col-lg-3 col-md-5">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeBox />
        </>
    );
}

export default Search;
