function OrderTracking() {
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
                            <h3>Order Tracking</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Order tracking
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Order Track Section Start */}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 overflow-hidden">
                            <div className="order-left-image ratio_asos">
                                <div className="tracking-product-image">
                                    <img src="/images/fashion/banner/3.jpg" className="img-fluid bg-img blur-up lazyload" alt="" />
                                </div>

                                <div className="order-image-contain">
                                    <h4>Van Heusen Men's Solid Regular Fit Polo</h4>

                                    <div className="tracker-number">
                                        <p className="font-light">
                                            Order Number : <span>W765EWR8568871</span>
                                        </p>
                                        <p className="font-light">
                                            Brand : <span>Van Heusen</span>
                                        </p>
                                        <p className="font-light mb-0">
                                            Order Placed : <span>June 25, 2021</span>
                                        </p>
                                    </div>
                                    <ol className="progtrckr">
                                        <li className="progtrckr-done">
                                            <h5>Order Processing</h5>
                                            <h6>05:43 AM</h6>
                                        </li>
                                        <li className="progtrckr-done">
                                            <h5>Pre-Production</h5>
                                            <h6>01:21 PM</h6>
                                        </li>
                                        <li className="progtrckr-done">
                                            <h5>In Production</h5>
                                            <h6>Processing</h6>
                                        </li>
                                        <li className="progtrckr-todo">
                                            <h5>Shipped</h5>
                                            <h6>Pending</h6>
                                        </li>
                                        <li className="progtrckr-todo">
                                            <h5>Delivered</h5>
                                            <h6>Pending</h6>
                                        </li>
                                    </ol>

                                    <h5 className="font-light">Your items is on the way. Tracking information will be available within 24 hours.</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 overflow-visible">
                            <div className="tracker-table">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className="table-head">
                                                <th scope="col">Date</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Discription</th>
                                                <th scope="col">Location</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>21/05/2021</p>
                                                </td>
                                                <td>
                                                    <p>12:21 AM</p>
                                                </td>
                                                <td>
                                                    <p className="fw-bold">Shipped Info</p>
                                                </td>
                                                <td>
                                                    <p>3 SW. Summit St. Lithonia, GA 30038</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p>15/04/2021</p>
                                                </td>
                                                <td>
                                                    <p>01:00 PM</p>
                                                </td>
                                                <td>
                                                    <p className="fw-bold">Shipped</p>
                                                </td>
                                                <td>
                                                    <p>70 Rockwell Lane Falls Church, VA 22041</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p>04/05/2021</p>
                                                </td>
                                                <td>
                                                    <p>03:58 AM</p>
                                                </td>
                                                <td>
                                                    <p className="fw-bold">Shipped Info Received</p>
                                                </td>
                                                <td>
                                                    <p>13 Durham St. The Villages, FL 32162</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p>30/04/2021</p>
                                                </td>
                                                <td>
                                                    <p>06:26 PM</p>
                                                </td>
                                                <td>
                                                    <p className="fw-bold">Origin Scan</p>
                                                </td>
                                                <td>
                                                    <p>38 Saxon Lane Mobile, AL 36605</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p>02/02/2021</p>
                                                </td>
                                                <td>
                                                    <p>3:45 PM</p>
                                                </td>
                                                <td>
                                                    <p className="fw-bold">Shipped Info Received</p>
                                                </td>
                                                <td>
                                                    <p>3 Willow Street Chillicothe, OH 45601</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p>14/01/2021</p>
                                                </td>
                                                <td>
                                                    <p>12:21 AM</p>
                                                </td>
                                                <td>
                                                    <p className="fw-bold">Shipped</p>
                                                </td>
                                                <td>
                                                    <p>35 Brickyard Rd. Marshalltown, IA 50158</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Order Track Section End */}

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

export default OrderTracking;
