function Checkout() {
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
                            <h3>Checkout</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Checkout
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Cart Section Start */}
            <section className="section-b-space">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <h3 className="mb-3">Billing address</h3>
                            <form className="needs-validation">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label htmlFor="fname" className="form-label">
                                            First Name
                                        </label>
                                        <input type="text" className="form-control" id="fname" placeholder="Enter First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname" className="form-label">
                                            Last Name
                                        </label>
                                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname" className="form-label">
                                            Username
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                @
                                            </span>
                                            <input type="text" className="form-control" placeholder="Username" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">
                                            Email address
                                        </label>
                                        <input type="email" className="form-control" id="email" placeholder="example@example.com" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
                                        <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="1234 Main St" required />
                                        <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="address2" className="form-label">
                                            Address 2
                                        </label>
                                        <input type="text" className="form-control" id="address2" aria-describedby="emailHelp" placeholder="1234 Main St" required />
                                    </div>

                                    <div className="col-md-5">
                                        <label htmlFor="validationCustom04" className="form-label">
                                            Country
                                        </label>
                                        <select className="form-select custome-form-select" id="validationCustom04">
                                            <option defaultChecked disabled value="">
                                                Choose...
                                            </option>
                                            <option>United States</option>
                                            <option>India</option>
                                            <option>America</option>
                                            <option>South America</option>
                                            <option>Dubai</option>
                                            <option>Hong Kong</option>
                                            <option>Indonesia</option>
                                            <option>Pakistan</option>
                                            <option>Saudi Arabia</option>
                                            <option>China</option>
                                        </select>
                                        <div className="invalid-feedback">Please select a valid country.</div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom04" className="form-label">
                                            State
                                        </label>
                                        <select className="form-select custome-form-select" id="validationCustom05">
                                            <option defaultChecked disabled value="">
                                                Choose...
                                            </option>
                                            <option>Bhutan</option>
                                            <option>Burundi</option>
                                            <option>Comoros</option>
                                            <option>Dilhi</option>
                                            <option>Mumbai</option>
                                            <option>Surat</option>
                                            <option>Abu & Ambaji</option>
                                            <option>Japan</option>
                                            <option>Cuba</option>
                                            <option>Zambia</option>
                                        </select>
                                        <div className="invalid-feedback">Please provide a valid state.</div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label">
                                            Zip
                                        </label>
                                        <input type="text" className="form-control" id="zip" aria-describedby="emailHelp" placeholder="1234 Main St" />
                                    </div>
                                </div>
                                <div className="form-check ps-0 mt-3 custome-form-check">
                                    <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault11" />
                                    <label className="form-check-label checkout-label" htmlFor="flexCheckDefault11">
                                        Save this information for next time
                                    </label>
                                </div>

                                <hr className="my-lg-5 my-4" />

                                <h3 className="mb-3">Payment</h3>

                                <div className="d-block my-3">
                                    <div className="form-check custome-radio-box">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="credit" />
                                        <label className="form-check-label" htmlFor="credit">
                                            Credit card
                                        </label>
                                    </div>

                                    <div className="form-check custome-radio-box">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="debit" />
                                        <label className="form-check-label" htmlFor="debit">
                                            Debit card
                                        </label>
                                    </div>

                                    <div className="form-check custome-radio-box">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="paypal" />
                                        <label className="form-check-label" htmlFor="paypal">
                                            PayPal
                                        </label>
                                    </div>
                                </div>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label htmlFor="cc-name" className="form-label">
                                            Name on card
                                        </label>
                                        <input type="text" className="form-control" id="cc-name" />
                                        <div id="emailHelp" className="form-text">
                                            Full name as displayed on card
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cc-number" className="form-label">
                                            Credit card number
                                        </label>
                                        <input type="text" className="form-control" id="cc-number" required="" />
                                        <div className="invalid-feedback">Credit card number is required</div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="expiration" className="form-label">
                                            Expiration
                                        </label>
                                        <input type="text" className="form-control" id="expiration" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="cc-cvv" className="form-label">
                                            CVV
                                        </label>
                                        <input type="text" className="form-control" id="cc-cvv" />
                                    </div>
                                </div>
                                <button className="btn btn-solid-default mt-4" type="submit">
                                    Continue to checkout
                                </button>
                            </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="your-cart-box">
                                <h3 className="mb-3 d-flex text-capitalize">
                                    Your cart<span className="badge bg-theme new-badge rounded-pill ms-auto bg-dark">3</span>
                                </h3>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Product name</h6>
                                            <small>Brief description</small>
                                        </div>
                                        <span>$12</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Second product</h6>
                                            <small>Brief description</small>
                                        </div>
                                        <span>$8</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Third item</h6>
                                            <small>Brief description</small>
                                        </div>
                                        <span>$5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed active">
                                        <div className="text-dark">
                                            <h6 className="my-0">Promo code</h6>
                                            <small>EXAMPLECODE</small>
                                        </div>
                                        <span>-$5</span>
                                    </li>
                                    <li className="list-group-item d-flex lh-condensed justify-content-between">
                                        <span className="fw-bold">Total (USD)</span>
                                        <strong>$20</strong>
                                    </li>
                                </ul>

                                <form className="card border-0">
                                    <div className="input-group custome-imput-group">
                                        <input type="text" className="form-control" placeholder="Promo code" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-solid-default rounded-0">
                                                Redeem
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cart Section End */}

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

export default Checkout;
