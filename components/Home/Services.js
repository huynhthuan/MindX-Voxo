function Services() {
    return (
        <section className="service-section service-style-2 section-b-space">
            <div className="container">
                <div className="row g-4 g-sm-3">
                    <div className="col-xl-3 col-sm-6">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <svg>{/* <use xlink:href="svg/icons.svg#customer"></use> */}</svg>
                            </div>
                            <div className="service-content">
                                <h3 className="mb-2">Customer Servcies</h3>
                                <span className="font-light">Top notch customer service.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <svg>{/* <use xlink:href="svg/icons.svg#shop"></use> */}</svg>
                            </div>
                            <div className="service-content">
                                <h3 className="mb-2">Pickup At Any Store</h3>
                                <span className="font-light">Free shipping on orders over $65.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <svg>{/* <use xlink:href="svg/icons.svg#secure-payment"></use> */}</svg>
                            </div>
                            <div className="service-content">
                                <h3 className="mb-2">Secured Payment</h3>
                                <span className="font-light">We accept all major credit cards.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <svg>{/* <use xlink:href="svg/icons.svg#return"></use> */}</svg>
                            </div>
                            <div className="service-content">
                                <h3 className="mb-2">Free Returns</h3>
                                <span className="font-light">30-days free return policy.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
