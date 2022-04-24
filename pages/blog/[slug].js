function BlogDetail() {
    return (
        <>
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
                            <h3>Blog Details</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Blog Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Details Blog Section Start */}
            <section className="masonary-blog-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-9 col-md-8 order-md-1 ratio_square">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="blog-details">
                                        <div className="blog-image-box">
                                            <img src="/images/inner-page/product/10.jpg" alt="" className="card-img-top" />
                                            <div className="blog-title">
                                                <div>
                                                    <div className="social-media media-center">
                                                        <a href="https://www.facebook.com/" target="new">
                                                            <div className="social-icon-box social-color">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </div>
                                                        </a>
                                                        <a href="https://twitter.com/" target="new">
                                                            <div className="social-icon-box social-color">
                                                                <i className="fab fa-twitter"></i>
                                                            </div>
                                                        </a>
                                                        <a href="https://in.pinterest.com/" target="new">
                                                            <div className="social-icon-box social-color">
                                                                <i className="fab fa-pinterest-p"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-detail-contain">
                                            <span className="font-light">August 15 2021</span>
                                            <h2 className="card-title">Just a Standard Format Post.</h2>
                                            <p className="font-light firt-latter">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.looked up one of the more obscure Latin words, consectetur, from a Lorem
                                                Ipsum passage.
                                            </p>

                                            <p className="font-light">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
                                                years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                                                a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                                                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                                                the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                                                1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                                                Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                            </p>

                                            <p className="font-light">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                                                Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                                                English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                                                uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour
                                                and the like.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-profile box-center mb-lg-5 mb-4">
                                        <div className="image-profile">
                                            <img src="/images/inner-page/review-image/2.jpg" className="img-fluid blur-up lazyload" alt="" />
                                        </div>

                                        <div className="image-name text-weight">
                                            <h3>John wike</h3>
                                            <h6>15 Aug 2021</h6>
                                        </div>
                                    </div>

                                    <div className="row g-2">
                                        <div className="col-12">
                                            <div className="minus-spacing mb-2">
                                                <h3>Leave Comments</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <label htmlFor="fname" className="form-label">
                                                First Name
                                            </label>
                                            <input type="text" className="form-control" id="fname" placeholder="Enter First Name" required />
                                        </div>
                                        <div className="col-lg-4">
                                            <label htmlFor="lname" className="form-label">
                                                Last Name
                                            </label>
                                            <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" required />
                                        </div>

                                        <div className="col-lg-4">
                                            <label htmlFor="email" className="form-label">
                                                Email address
                                            </label>
                                            <input type="email" className="form-control" id="email" placeholder="example@example.com" required />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="textarea" className="form-label">
                                                Comments
                                            </label>
                                            <textarea rows="3" className="form-control" id="textarea" placeholder="Leave a comment here" required></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-solid-default btn-spacing mt-2">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="left-side">
                                {/* Search Bar Start */}
                                <div className="search-section">
                                    <div className="input-group search-bar">
                                        <input type="search" className="form-control search-input" placeholder="Search" />
                                        <button className="input-group-text search-button" id="basic-addon3">
                                            <i className="fas fa-search text-color"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* Search Bar End */}

                                {/* Popular Post Start */}
                                <div className="popular-post mt-4">
                                    <div className="popular-title">
                                        <h3>Popular Posts</h3>
                                    </div>

                                    <div className="popular-image">
                                        <div className="popular-number">
                                            <h4 className="theme-color">01</h4>
                                        </div>
                                        <div className="popular-contain">
                                            <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                                            <p className="font-light mb-1">
                                                <span>King Monster</span> in <span>News</span>
                                            </p>
                                            <div className="review-box">
                                                <span className="font-light clock-time">
                                                    <i data-feather="clock"></i>15m ago
                                                </span>
                                                <span className="font-light eye-icon">
                                                    <i data-feather="eye"></i>8641
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="popular-image">
                                        <div className="popular-number">
                                            <h4 className="theme-color">02</h4>
                                        </div>
                                        <div className="popular-contain">
                                            <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                                            <p className="font-light mb-1">
                                                <span>King Monster</span> in <span>News</span>
                                            </p>
                                            <div className="review-box">
                                                <span className="font-light clock-time">
                                                    <i data-feather="clock"></i>15m ago
                                                </span>
                                                <span className="font-light eye-icon">
                                                    <i data-feather="eye"></i>8641
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="popular-image">
                                        <div className="popular-number">
                                            <h4 className="theme-color">03</h4>
                                        </div>
                                        <div className="popular-contain">
                                            <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                                            <p className="font-light mb-1">
                                                <span>King Monster</span> in <span>News</span>
                                            </p>
                                            <div className="review-box">
                                                <span className="font-light clock-time">
                                                    <i data-feather="clock"></i>15m ago
                                                </span>
                                                <span className="font-light eye-icon">
                                                    <i data-feather="eye"></i>8641
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="popular-image">
                                        <div className="popular-number">
                                            <h4 className="theme-color">04</h4>
                                        </div>
                                        <div className="popular-contain">
                                            <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
                                            <p className="font-light mb-1">
                                                <span>King Monster</span> in <span>News</span>
                                            </p>
                                            <div className="review-box">
                                                <span className="font-light clock-time">
                                                    <i data-feather="clock"></i>15m ago
                                                </span>
                                                <span className="font-light eye-icon">
                                                    <i data-feather="eye"></i>8641
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Popular Post End */}

                                {/* Category section Start */}
                                <div className="category-section popular-post mt-4">
                                    <div className="popular-title">
                                        <h3>Category</h3>
                                    </div>
                                    <ul>
                                        <li className="category-box">
                                            <a href="blog-left-sidebar.html">
                                                <div className="category-product">
                                                    <div className="cate-shape">
                                                        <i className="fas fa-globe text-color"></i>
                                                    </div>

                                                    <div className="cate-contain">
                                                        <h5 className="text-color">Global</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="category-box">
                                            <a href="blog-left-sidebar.html">
                                                <div className="category-product">
                                                    <div className="cate-shape">
                                                        <i className="fas fa-building text-color"></i>
                                                    </div>

                                                    <div className="cate-contain">
                                                        <h5 className="text-color">Business</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="category-box">
                                            <a href="blog-left-sidebar.html">
                                                <div className="category-product">
                                                    <div className="cate-shape">
                                                        <i className="fas fa-play text-color"></i>
                                                    </div>

                                                    <div className="cate-contain">
                                                        <h5 className="text-color">Entertainmant</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="category-box">
                                            <a href="blog-left-sidebar.html">
                                                <div className="category-product">
                                                    <div className="cate-shape">
                                                        <i className="fas fa-tshirt text-color"></i>
                                                    </div>

                                                    <div className="cate-contain">
                                                        <h5 className="text-color">Sports</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="category-box">
                                            <a href="blog-left-sidebar.html">
                                                <div className="category-product">
                                                    <div className="cate-shape">
                                                        <i className="fas fa-dumbbell text-color"></i>
                                                    </div>

                                                    <div className="cate-contain">
                                                        <h5 className="text-color">Health</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Category section End */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Details Blog Section End */}

            {/* related blog start */}
            <section className="section-b-space block-shadow-space ratio3_2">
                <div className="container">
                    <div className="slide-4 product-wrapper slick-lg-space">
                        <div>
                            <div className="card blog-categority">
                                <a href="blog-details.html" className="blog-img">
                                    <img src="/images/inner-page/product/9.jpg" alt="" className="card-img-top blur-up lazyload bg-img" />
                                </a>
                                <div className="card-body">
                                    <a href="blog-details.html">
                                        <h2 className="card-title">How to make the perfect morning coffee, according to the science</h2>
                                    </a>
                                    <div className="blog-profile">
                                        <div className="image-name">
                                            <h3>John wike</h3>
                                            <h6>15 Aug 2021</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card blog-categority">
                                <a href="blog-details.html" className="blog-img">
                                    <img src="/images/inner-page/product/8.jpg" alt="" className="card-img-top blur-up lazyload bg-img" />
                                </a>
                                <div className="card-body">
                                    <a href="blog-details.html">
                                        <h2 className="card-title">How to make the perfect morning coffee, according to the science</h2>
                                    </a>
                                    <div className="blog-profile">
                                        <div className="image-name">
                                            <h3>John wike</h3>
                                            <h6>15 Aug 2021</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card blog-categority">
                                <a href="blog-details.html" className="blog-img">
                                    <img src="/images/inner-page/product/4.jpg" alt="" className="card-img-top blur-up lazyload bg-img" />
                                </a>
                                <div className="card-body">
                                    <a href="blog-details.html">
                                        <h2 className="card-title">How to make the perfect morning coffee, according to the science</h2>
                                    </a>
                                    <div className="blog-profile">
                                        <div className="image-name">
                                            <h3>John wike</h3>
                                            <h6>15 Aug 2021</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card blog-categority">
                                <a href="blog-details.html" className="blog-img">
                                    <img src="/images/inner-page/product/16.jpg" alt="" className="card-img-top blur-up lazyload bg-img" />
                                </a>
                                <div className="card-body">
                                    <a href="blog-details.html">
                                        <h2 className="card-title">How to make the perfect morning coffee, according to the science</h2>
                                    </a>
                                    <div className="blog-profile">
                                        <div className="image-name">
                                            <h3>John wike</h3>
                                            <h6>15 Aug 2021</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card blog-categority">
                                <a href="blog-details.html" className="blog-img">
                                    <img src="/images/inner-page/product/13.jpg" alt="" className="card-img-top blur-up lazyload bg-img" />
                                </a>
                                <div className="card-body">
                                    <a href="blog-details.html">
                                        <h2 className="card-title">How to make the perfect morning coffee, according to the science</h2>
                                    </a>
                                    <div className="blog-profile">
                                        <div className="image-name">
                                            <h3>John wike</h3>
                                            <h6>15 Aug 2021</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* related blog end */}

            {/* Popular Posts Section Start */}
            <section className="subscribe-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="subscribe-details">
                                <h2 className="mb-3">Subscribe Our News</h2>
                                <h6 className="font-light">Subscribe and receive our newsletters to follow the news about our fresh and fantastic Shoes Products.</h6>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                            <div className="subsribe-input">
                                <div className="input-group">
                                    <input type="text" className="form-control subscribe-input" placeholder="Your Email Address" />
                                    <button className="btn btn-solid-default" type="button">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Posts Section End */}
        </>
    );
}

export default BlogDetail;
