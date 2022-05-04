import { useEffect } from 'react';

function RelatedPostSlide() {
    useEffect(() => {
        $('.slide-4').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
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
    }, []);

    return (
        <section className="section-b-space block-shadow-space ratio3_2">
            <div className="container">
                <div className="slide-4 product-wrapper slick-lg-space">
                    <div>
                        <div className="card blog-categority">
                            <a href="blog-details.html" className="blog-img">
                                <img
                                    src="/images/inner-page/product/9.jpg"
                                    alt=""
                                    className="card-img-top blur-up lazyload bg-img"
                                />
                            </a>
                            <div className="card-body">
                                <a href="blog-details.html">
                                    <h2 className="card-title">
                                        How to make the perfect morning coffee,
                                        according to the science
                                    </h2>
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
                                <img
                                    src="/images/inner-page/product/8.jpg"
                                    alt=""
                                    className="card-img-top blur-up lazyload bg-img"
                                />
                            </a>
                            <div className="card-body">
                                <a href="blog-details.html">
                                    <h2 className="card-title">
                                        How to make the perfect morning coffee,
                                        according to the science
                                    </h2>
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
                                <img
                                    src="/images/inner-page/product/4.jpg"
                                    alt=""
                                    className="card-img-top blur-up lazyload bg-img"
                                />
                            </a>
                            <div className="card-body">
                                <a href="blog-details.html">
                                    <h2 className="card-title">
                                        How to make the perfect morning coffee,
                                        according to the science
                                    </h2>
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
                                <img
                                    src="/images/inner-page/product/16.jpg"
                                    alt=""
                                    className="card-img-top blur-up lazyload bg-img"
                                />
                            </a>
                            <div className="card-body">
                                <a href="blog-details.html">
                                    <h2 className="card-title">
                                        How to make the perfect morning coffee,
                                        according to the science
                                    </h2>
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
                                <img
                                    src="/images/inner-page/product/13.jpg"
                                    alt=""
                                    className="card-img-top blur-up lazyload bg-img"
                                />
                            </a>
                            <div className="card-body">
                                <a href="blog-details.html">
                                    <h2 className="card-title">
                                        How to make the perfect morning coffee,
                                        according to the science
                                    </h2>
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
    );
}

export default RelatedPostSlide;
