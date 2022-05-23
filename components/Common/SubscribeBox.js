function SubscribeBox() {
    return (
        <section className="subscribe-section section-b-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="subscribe-details">
                            <h2 className="mb-3">Subscribe Our News</h2>
                            <h6 className="font-light">
                                Subscribe and receive our newsletters to follow
                                the news about our fresh and fantastic Products.
                            </h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                        <div className="subsribe-input">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control subscribe-input"
                                    placeholder="Your Email Address"
                                />
                                <button
                                    className="btn btn-solid-default"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SubscribeBox;
