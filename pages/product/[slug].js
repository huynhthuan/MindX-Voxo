import Script from 'next/script';

function ProductDetail() {
    return (
        <>
            {/* Breadcrumb section start*/}
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
                            <h3>Product Sticky</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Product Sticky
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Shop Section start */}
            <section>
                <div className="container">
                    <div className="row gx-4 gy-5">
                        <div className="col-lg-12 col-12">
                            <div className="details-items">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="row g-4 ratio_asos">
                                            <div className="col-12">
                                                <img src="/images/fashion/1.jpg" className="img-fluid w-100" alt="" />
                                            </div>
                                            <div className="col-12">
                                                <img src="/images/fashion/2.jpg" className="img-fluid w-100" alt="" />
                                            </div>
                                            <div className="col-12">
                                                <img src="/images/fashion/3.jpg" className="img-fluid w-100 image_zoom_cls-2 blur-up lazyload" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="cloth-details-size">
                                            <div className="product-count">
                                                <ul>
                                                    <li>
                                                        <img src="/images/gif/fire.gif" className="img-fluid blur-up lazyload" alt="image" />
                                                        <span className="p-counter">37</span>
                                                        <span className="lang">orders in last 24 hours</span>
                                                    </li>
                                                    <li>
                                                        <img src="/images/gif/person.gif" className="img-fluid user_img blur-up lazyload" alt="image" />
                                                        <span className="p-counter">44</span>
                                                        <span className="lang">active view this</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="details-image-concept">
                                                <h2>Brand New t-Shirt</h2>
                                            </div>

                                            <div className="label-section">
                                                <span className="badge badge-grey-color">#1 Best seller</span>
                                                <span className="label-text">in fashion</span>
                                            </div>

                                            <h3 className="price-detail">
                                                $32.96 <del>$459.00</del>
                                                <span>55% off</span>
                                            </h3>

                                            <div className="color-image">
                                                <div className="image-select">
                                                    <h5>Color :</h5>
                                                    <ul className="image-section">
                                                        <li>
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/5.jpg" className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/6.jpg" className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/7.jpg" className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div id="selectSize" className="addeffect-section product-description border-product">
                                                <h6 className="product-title size-text">
                                                    select size
                                                    <a href="undefined" data-bs-toggle="modal" data-bs-target="#sizemodal">
                                                        size chart
                                                    </a>
                                                </h6>

                                                <h6 className="error-message">please select size</h6>

                                                <div className="size-box">
                                                    <ul>
                                                        <li>
                                                            <a href="undefined">s</a>
                                                        </li>
                                                        <li>
                                                            <a href="undefined">m</a>
                                                        </li>
                                                        <li>
                                                            <a href="undefined">l</a>
                                                        </li>
                                                        <li>
                                                            <a href="undefined">xl</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <h6 className="product-title product-title-2 d-block">quantity</h6>

                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                            <button type="button" className="btn quantity-left-minus" data-type="minus" data-field="">
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                        </span>
                                                        <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                                                        <span className="input-group-prepend">
                                                            <button type="button" className="btn quantity-right-plus" data-type="plus" data-field="">
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-buttons">
                                                <a href="wishlist.html" className="btn btn-solid">
                                                    <i className="fa fa-bookmark fz-16 me-2"></i>
                                                    <span>Wishlist</span>
                                                </a>
                                                <a href="undefined" id="cartEffect" className="btn btn-solid hover-solid btn-animation">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    <span>Add To Cart</span>
                                                </a>
                                            </div>

                                            <ul className="product-count shipping-order">
                                                <li>
                                                    <img src="/images/gif/truck.png" className="img-fluid blur-up lazyload" alt="image" />
                                                    <span className="lang">Free shipping for orders above $500 USD</span>
                                                </li>
                                            </ul>

                                            <div className="mt-2 mt-md-3 border-product">
                                                <h6 className="product-title hurry-title d-block">
                                                    Hurry Up! Left <span>10</span> in stock
                                                </h6>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }}></div>
                                                </div>
                                                <div className="font-light timer-5">
                                                    <h5>Order in the next to get</h5>
                                                    <ul className="timer1">
                                                        <li className="counter">
                                                            <h5 id="days">&#9251;</h5> Days :
                                                        </li>
                                                        <li className="counter">
                                                            <h5 id="hours">&#9251;</h5> Hour :
                                                        </li>
                                                        <li className="counter">
                                                            <h5 id="minutes">&#9251;</h5> Min :
                                                        </li>
                                                        <li className="counter">
                                                            <h5 id="seconds">&#9251;</h5> Sec
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="border-product">
                                                <h6 className="product-title d-block">share it</h6>
                                                <div className="product-icon">
                                                    <ul className="product-social">
                                                        <li>
                                                            <a href="https://www.facebook.com/">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <i className="fab fa-google-plus-g"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://twitter.com/">
                                                                <i className="fab fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.instagram.com/">
                                                                <i className="fab fa-instagram"></i>
                                                            </a>
                                                        </li>
                                                        <li className="pe-0">
                                                            <a href="https://www.google.com/">
                                                                <i className="fas fa-rss"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="cloth-review">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#desc" type="button">
                                            Description
                                        </button>

                                        <button className="nav-link" id="nav-speci-tab" data-bs-toggle="tab" data-bs-target="#speci" type="button">
                                            Specifications
                                        </button>

                                        <button className="nav-link" id="nav-size-tab" data-bs-toggle="tab" data-bs-target="#nav-guide" type="button">
                                            Sizing Guide
                                        </button>

                                        <button className="nav-link" id="nav-question-tab" data-bs-toggle="tab" data-bs-target="#question" type="button">
                                            Q & A
                                        </button>

                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#review" type="button">
                                            Review
                                        </button>
                                    </div>
                                </nav>

                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="desc">
                                        <div className="shipping-chart">
                                            <div className="part">
                                                <h4 className="inner-title mb-2">Give you a complete account of the system</h4>
                                                <p className="font-light">
                                                    Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur
                                                    in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                                                    except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying
                                                    consequences, or one who avoids a pain that produces no resultant pleasure.
                                                </p>
                                            </div>

                                            <div className="row g-3 align-items-center">
                                                <div className="col-lg-8">
                                                    <p className="font-light">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem nemo? Tempora vitae assumenda laudantium unde magni, soluta repudiandae
                                                        quam, neque voluptate deleniti consequatur laboriosam veritatis? Tempore dolor molestias voluptatum! Minima possimus, pariatur sed, quasi
                                                        provident dolorum unde molestias, assumenda consequuntur odit magni blanditiis obcaecati? Ea corporis odit dolorem fuga, fugiat soluta
                                                        consequuntur magni.
                                                    </p>

                                                    <div className="part mt-3">
                                                        <h5 className="inner-title mb-2">fabric:</h5>
                                                        <p className="font-light">
                                                            Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.Art silk is
                                                            manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.
                                                        </p>
                                                        <p className="font-light">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                            since the 1500s
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <img src="/images/fashion/slider/1.jpg" className="img-fluid rounded blur-up lazyload" alt="" />
                                                </div>

                                                <div className="col-lg-8 order-lg-2 mt-4">
                                                    <p className="font-light">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem nemo? Tempora vitae assumenda laudantium unde magni, soluta repudiandae
                                                        quam, neque voluptate deleniti consequatur laboriosam veritatis? Tempore dolor molestias voluptatum! Minima possimus, pariatur sed, quasi
                                                        provident dolorum unde molestias, assumenda consequuntur odit magni blanditiis obcaecati? Ea corporis odit dolorem fuga, fugiat soluta
                                                        consequuntur magni.
                                                    </p>
                                                    <div className="part mt-3">
                                                        <p className="font-light">
                                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio repellat numquam perspiciatis eum quis ab, sed dicta tenetur fugit culpa, aut
                                                            distinctio deserunt quisquam ipsam reprehenderit iure? Adipisci, optio enim? Voluptates voluptatum neque id ad commodi quisquam dolorem
                                                            vitae inventore quasi! Officiis facere, iusto tempore atque magnam voluptas. Architecto laboriosam deleniti hic veritatis nesciunt. Aut
                                                            officia quasi inventore et. Debitis.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 order-lg-0 mt-4">
                                                    <img src="/images/fashion/slider/2.jpg" className="img-fluid rounded blur-up lazyload" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="speci">
                                        <div className="pro mb-4">
                                            <p className="font-light">
                                                The Model is wearing a white blouse from our stylist's collection, see the image for a mock-up of what the actual blouse would look like.it has text
                                                written on it in a black cursive language which looks great on a white color.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="table table-part">
                                                    <tbody>
                                                        <tr>
                                                            <th>Product Dimensions</th>
                                                            <td>15 x 15 x 3 cm; 250 Grams</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Date First Available</th>
                                                            <td>5 April 2021</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Manufacturer‏</th>
                                                            <td>Aditya Birla Fashion and Retail Limited</td>
                                                        </tr>
                                                        <tr>
                                                            <th>ASIN</th>
                                                            <td>B06Y28LCDN</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Item model number</th>
                                                            <td>AMKP317G04244</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Department</th>
                                                            <td>Men</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Item Weight</th>
                                                            <td>250 G</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Item Dimensions LxWxH</th>
                                                            <td>15 x 15 x 3 Centimeters</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Net Quantity</th>
                                                            <td>1 U</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Included Components‏</th>
                                                            <td>1-T-shirt</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Generic Name</th>
                                                            <td>T-shirt</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade overflow-auto" id="nav-guide">
                                        <div className="table-responsive">
                                            <table className="table table-pane mb-0">
                                                <tbody>
                                                    <tr className="bg-color">
                                                        <th className="my-2">US Sizes</th>
                                                        <td>6</td>
                                                        <td>6.5</td>
                                                        <td>7</td>
                                                        <td>8</td>
                                                        <td>8.5</td>
                                                        <td>9</td>
                                                        <td>9.5</td>
                                                        <td>10</td>
                                                        <td>10.5</td>
                                                        <td>11</td>
                                                    </tr>

                                                    <tr>
                                                        <th>Euro Sizes</th>
                                                        <td>39</td>
                                                        <td>39</td>
                                                        <td>40</td>
                                                        <td>40-41</td>
                                                        <td>41</td>
                                                        <td>41-42</td>
                                                        <td>42</td>
                                                        <td>42-43</td>
                                                        <td>43</td>
                                                        <td>43-44</td>
                                                    </tr>

                                                    <tr className="bg-color">
                                                        <th>UK Sizes</th>
                                                        <td>5.5</td>
                                                        <td>6</td>
                                                        <td>6.5</td>
                                                        <td>7</td>
                                                        <td>7.5</td>
                                                        <td>8</td>
                                                        <td>8.5</td>
                                                        <td>9</td>
                                                        <td>10.5</td>
                                                        <td>11</td>
                                                    </tr>

                                                    <tr>
                                                        <th>Inches</th>
                                                        <td>9.25"</td>
                                                        <td>9.5"</td>
                                                        <td>9.625"</td>
                                                        <td>9.75"</td>
                                                        <td>9.9735"</td>
                                                        <td>10.125"</td>
                                                        <td>10.25"</td>
                                                        <td>10.5"</td>
                                                        <td>10.765"</td>
                                                        <td>10.85</td>
                                                    </tr>

                                                    <tr className="bg-color">
                                                        <th>CM</th>
                                                        <td>23.5</td>
                                                        <td>24.1</td>
                                                        <td>24.4</td>
                                                        <td>25.4</td>
                                                        <td>25.7</td>
                                                        <td>26</td>
                                                        <td>26.7</td>
                                                        <td>27</td>
                                                        <td>27.3</td>
                                                        <td>27.5</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="question">
                                        <div className="question-answer">
                                            <ul>
                                                <li>
                                                    <div className="que">
                                                        <i className="fas fa-question"></i>
                                                        <div className="que-details">
                                                            <h6>Is it compatible with all WordPress themes?</h6>
                                                            <p className="font-light">
                                                                If you want to see a demonstration version of the premium plugin, you can see that in this page. If you want to see a demonstration
                                                                version of the premium plugin, you can see that in this page. If you want to see a demonstration version of the premium plugin, you can
                                                                see that in this page.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="que">
                                                        <i className="fas fa-question"></i>
                                                        <div className="que-details">
                                                            <h6>How can I try the full-featured plugin? </h6>
                                                            <p className="font-light">
                                                                Compatibility with all themes is impossible, because they are too many, but generally if themes are developed according to WordPress and
                                                                WooCommerce guidelines, YITH plugins are compatible with them. Compatibility with all themes is impossible, because they are too many,
                                                                but generally if themes are developed according to WordPress and WooCommerce guidelines, YITH plugins are compatible with them.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="que">
                                                        <i className="fas fa-question"></i>
                                                        <div className="que-details">
                                                            <h6>Is it compatible with all WordPress themes?</h6>
                                                            <p className="font-light">
                                                                If you want to see a demonstration version of the premium plugin, you can see that in this page. If you want to see a demonstration
                                                                version of the premium plugin, you can see that in this page. If you want to see a demonstration version of the premium plugin, you can
                                                                see that in this page.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="review">
                                        <div className="row g-4">
                                            <div className="col-lg-4">
                                                <div className="customer-rating">
                                                    <h2>Customer reviews</h2>
                                                    <ul className="rating my-2 d-inline-block">
                                                        <li>
                                                            <i className="fas fa-star theme-color"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star theme-color"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star theme-color"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star"></i>
                                                        </li>
                                                    </ul>

                                                    <div className="global-rating">
                                                        <h5 className="font-light">82 Ratings</h5>
                                                    </div>

                                                    <ul className="rating-progess">
                                                        <li>
                                                            <h5 className="me-3">5 Star</h5>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{ width: '78%' }}
                                                                    aria-valuenow="50"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                            <h5 className="ms-3">78%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">4 Star</h5>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{ width: '68%' }}
                                                                    aria-valuenow="50"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                            <h5 className="ms-3">62%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">3 Star</h5>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{ width: '68%' }}
                                                                    aria-valuenow="50"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                            <h5 className="ms-3">44%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">2 Star</h5>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{ width: '68%' }}
                                                                    aria-valuenow="50"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                            <h5 className="ms-3">30%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">1 Star</h5>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{ width: '68%' }}
                                                                    aria-valuenow="50"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                            <h5 className="ms-3">18%</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-8">
                                                <p className="d-inline-block me-2">Rating</p>
                                                <ul className="rating mb-3 d-inline-block">
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                                <div className="review-box">
                                                    <form className="row g-4">
                                                        <div className="col-12 col-md-6">
                                                            <label className="mb-1" htmlFor="name">
                                                                Name
                                                            </label>
                                                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                                                        </div>

                                                        <div className="col-12 col-md-6">
                                                            <label className="mb-1" htmlFor="id">
                                                                Email Address
                                                            </label>
                                                            <input type="email" className="form-control" id="id" placeholder="Email Address" required />
                                                        </div>

                                                        <div className="col-12">
                                                            <label className="mb-1" htmlFor="comments">
                                                                Comments
                                                            </label>
                                                            <textarea className="form-control" placeholder="Leave a comment here" id="comments" style={{ height: 100 }} required></textarea>
                                                        </div>

                                                        <div className="col-12">
                                                            <button type="submit" className="btn default-light-theme default-theme default-theme-2">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <div className="customer-review-box">
                                                    <h4>Customer Reviews</h4>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="/images/inner-page/review-image/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>Mike K</h5>
                                                            <ul className="rating my-2 d-inline-block">
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <p className="font-light">
                                                                I purchased my Tab S2 at Best Buy but I wanted to share my thoughts on Amazon. I'm not going to go over specs and such since you can
                                                                read those in a hundred other places. Though I will say that the "new" version is preloaded with Marshmallow and now uses a Qualcomm
                                                                octacore processor in place of the Exynos that shipped with the first gen.
                                                            </p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
                                                        </div>
                                                    </div>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="/images/inner-page/review-image/2.jpg" className="img-fluid blur-up lazyload" alt="" />
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>Norwalker</h5>
                                                            <ul className="rating my-2 d-inline-block">
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <p className="font-light">
                                                                Pros: Nice large(9.7") screen. Bright colors. Easy to setup and get started. Arrived on time. Cons: a bit slow on response, but expected
                                                                as tablet is 2 generations old. But works fine and good value for the money.
                                                            </p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
                                                        </div>
                                                    </div>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="/images/inner-page/review-image/3.jpg" className="img-fluid blur-up lazyload" alt="" />
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>B. Perdue</h5>
                                                            <ul className="rating my-2 d-inline-block">
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <p className="font-light">Love the processor speed and the sensitivity of the touch screen.</p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
                                                        </div>
                                                    </div>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="/images/inner-page/review-image/4.jpg" className="img-fluid blur-up lazyload" alt="" />
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>MSL</h5>
                                                            <ul className="rating my-2 d-inline-block">
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star theme-color"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <p className="font-light">
                                                                I purchased the Tablet May 2017 and now April 2019 I have to charge it everyday. I don't watch movies on it..just play a game or two
                                                                while on lunch. I guess now I need to power it down for future use.
                                                            </p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section end */}

            {/* product section start */}
            <section className="ratio_asos section-b-space overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-lg-4 mb-3">Customers Also Bought These</h2>
                            <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space">
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/front/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">B&Y Jacket</span>
                                                <ul className="rating mt-0">
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="product-left-sidebar.html" className="font-default">
                                                    <h5>Slim Fit Plastic Coat</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Regular Fit</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$78.00</h3>
                                                <button className="btn listing-content">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/front/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="label-block">
                                                <span className="label label-black">New</span>
                                                <span className="label label-theme">50% Off</span>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Jacket</span>
                                                <ul className="rating mt-0">
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="product-left-sidebar.html" className="font-default">
                                                    <h5>Blue Leather Jacket</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Regular Fit</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$60.00</h3>
                                                <button className="btn listing-content">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/front/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Dress</span>
                                                <ul className="rating mt-0">
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="product-left-sidebar.html" className="font-default">
                                                    <h5>Military Ball Night Dress</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Regular Fit</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$85.00</h3>
                                                <button className="btn listing-content">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/front/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="label-block">
                                                <span className="label label-black">New</span>
                                                <span className="label label-theme">50% Off</span>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Jacket</span>
                                                <ul className="rating mt-0">
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="product-left-sidebar.html" className="font-default">
                                                    <h5>Full Slive Yellow Jacket</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Regular Fit</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$69.00</h3>
                                                <button className="btn listing-content">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/front/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="label-block">
                                                <span className="label label-black">New</span>
                                                <span className="label label-theme">50% Off</span>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Jacket</span>
                                                <ul className="rating mt-0">
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star theme-color"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="product-left-sidebar.html" className="font-default">
                                                    <h5>Blue Leather Jacket</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Regular Fit</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$60.00</h3>
                                                <button className="btn listing-content">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* product section end */}

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

            <Script src="/js/sticky-cart-bottom.js" strategy="afterInteractive"></Script>
            <Script src="/js/timer.js" strategy="afterInteractive"></Script>
            <Script src="/js/check-box-select.js" strategy="afterInteractive"></Script>
            <Script src="/js/ion.rangeSlider.min.js" strategy="afterInteractive"></Script>
            <Script src="/js/filter.js" strategy="afterInteractive"></Script>
            <Script src="/js/cart_modal_resize.js" strategy="afterInteractive"></Script>
        </>
    );
}

export default ProductDetail;
