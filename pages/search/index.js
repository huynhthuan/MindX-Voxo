import { useEffect, useRef, useState } from 'react';
import Sidebar from '../../components/Blog/Sidebar';
import SubscribeBox from '../../components/Common/SubscribeBox';
import PostCard from '../../components/Posts/PostCard';
import { useSearchPosts } from '../../src/api_minhhieu/searchPostsApi';
import { useRouter } from 'next/router';
import { NewPostBlogListSkeleton } from '../../components/Skeleton_minhhieu';

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

    const router = useRouter();
    const page = router.query.page ? router.query.page : 1;
    const {keyword} = router.query;
    const searchVal = useRef('');
    const [requireKW, setRequireKW] = useState(false);
    const [allowFetch, setAllowFetch] = useState(false);

    const { isLoading, error, data, refetch } = useSearchPosts({ keyword:keyword, page: page, allowFetch: allowFetch });

    console.log(data);

    if (error) router.push('/notfound');

    useEffect(() => {
        if (keyword) {
            setAllowFetch(true);
            refetch();
        }
    },[keyword])

    const handleInputChange = (event) => {
        if (!searchVal.current.value) {
            console.log(searchVal.current.value);
            setRequireKW(true);
        } else {
            setRequireKW(false);
        }
    }

    const handleSearch = () => {
        if (!searchVal.current.value) {
            setRequireKW(true);
        } else {
            router.push({
                pathname:'/search',
                query:{keyword:searchVal.current.value}
            });
        }
        
    }

    const handleInputKeyDown = (event) => {
        if (event.charCode == 13 || event.keyCode == 13) {
            if (!searchVal.current.value) {
                setRequireKW(true);
            } else {
                router.push({
                    pathname:'/search',
                    query:{keyword:searchVal.current.value}
                });
            }
        }
    }

    return (
        <>
            <section className="search-section position-relative">
                <div className='position-absolute bottom-100 mb-1 fw-bold theme-color' hidden={!requireKW}>
                    Please enter keyword 
                </div>
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
                                        ref={searchVal}
                                        type="search"
                                        className="form-control"
                                        placeholder="Search"
                                        onChange={handleInputChange}
                                        onKeyDown={handleInputKeyDown}
                                    />
                                    <button
                                        className="input-group-text"
                                        id="basic-addon3"
                                        onClick={handleSearch}
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
                                {
                                    !isLoading 
                                        ? 
                                            data?.responseInfo.length > 0
                                                ? 
                                                    data.responseInfo.map( (item,index) => {
                                                        return <div className="col-12" key={index}>
                                                            <PostCard {...item}/>
                                                        </div>
                                                    })
                                                :
                                                    <div className="theme-color h4">No posts found for keyword "{router.query.keyword}"</div>
                                        :
                                            Array(10).fill(0).map((item, index) => {
                                                return <NewPostBlogListSkeleton key={index}/>
                                            })
                                }
                            </div>
                            {
                                data 
                                    &&
                                        data.totalPage*1 !== 0
                                            &&
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
                                                                {
                                                                    Array(data.totalPage*1).fill(0).map((item,index) => {
                                                                        return <li className={"page-item " + ( index+1 == page ? "active" : "" )} key={index}>
                                                                                <a
                                                                                    className="page-link"
                                                                                    href="undefined"
                                                                                >
                                                                                    {index * 1 + 1}
                                                                                </a>
                                                                            </li>
                                                                    })
                                                                }
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
                            }
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
