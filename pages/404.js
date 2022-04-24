export default function Custom404() {
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
                            <h3>404</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        404
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* 404 Section Start */}
            <section className="page-not-found section-b-space">
                <div className="container">
                    <div className="row gx-md-2 gx-0 gy-md-0 gy-3">
                        <div className="col-md-8 m-auto">
                            <div className="page-image">
                                <img src="/images/inner-page/404.png" className="img-fluid blur-up lazyload" alt="" />
                            </div>
                        </div>

                        <div className="col-md-8 mx-auto mt-md-5 mt-3">
                            <div className="page-container pass-forgot">
                                <div>
                                    <h2>page not found</h2>
                                    <p>The page you are looking for doesn't exist or an other error occurred. Go back, or head over to choose a new direction.</p>
                                    <a href="index.html" className="btn btn-solid-default">
                                        Back Home Page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 404 Section End */}

            {/* Subscribe Section Start */}
            <section className="subscribe-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="subscribe-details">
                                <h2 className="mb-3">Subscribe Our News</h2>
                                <h6 className="font-light">Subscribe and receive our newsletters to follow the news about our fresh and fantastic Products.</h6>
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
            {/* Subscribe Section End */}
        </>
    );
}
