function BannerProductCategoryGrid() {
    return (
        <section className="banner-style-2 offer-banner">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title title-2 text-center">
                            <h2>New Offers</h2>
                            <h5 className="text-color">Just For You</h5>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-6 ratio2_1">
                        <div className="collection-banner p-right text-right">
                            <a href="shop-left-sidebar.html" className="banner-img">
                                <img src="images/fashion/banner/4.jpg" className="bg-img blur-up lazyload" alt="" />
                            </a>
                            <div className="banner-text">
                                <div className="banner-content">
                                    <span className="span-top">
                                        New <span className="theme-color">Collections</span>
                                    </span>
                                    <h2>
                                        {' '}
                                        New Red Jackets from <span className="theme-color">$48</span>
                                    </h2>
                                    <button type="button" className="btn btn-solid-default">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-lg-12 ratio_40">
                                <div className="collection-banner p-left banner-title">
                                    <a href="shop-left-sidebar.html" className="banner-img">
                                        <img src="images/fashion/banner/5.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                    <div className="banner-text">
                                        <div className="banner-content">
                                            <h3 className="h-bottom">
                                                New Hoodies from <span className="theme-color">$34</span>
                                            </h3>
                                            <button type="button" className="btn btn-solid-default">
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 ratio2_3">
                                <div className="collection-banner p-center text-center">
                                    <a href="shop-left-sidebar.html" className="banner-img">
                                        <img src="images/fashion/banner/6.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                    <a href="shop-left-sidebar.html" className="contain-banner">
                                        <div className="banner-content with-bg">
                                            <h3 className="mb-1">New jacket</h3>
                                            <span>Discount -70%</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 ratio2_3">
                                <div className="collection-banner p-center text-center">
                                    <a href="shop-left-sidebar.html" className="banner-img">
                                        <img src="images/fashion/banner/7.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                    <a href="shop-left-sidebar.html" className="contain-banner">
                                        <div className="banner-content with-bg">
                                            <h3 className="mb-1">New jacket</h3>
                                            <span>Discount -70%</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerProductCategoryGrid;
