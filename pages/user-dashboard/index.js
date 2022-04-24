function UserDashboard() {
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
                            <h3>User Dashboard</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        User Dashboard
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* user dashboard section start */}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs custome-nav-tabs flex-column category-option" id="myTab">
                                <li className="nav-item mb-2">
                                    <button className="nav-link font-light active" id="tab" data-bs-toggle="tab" data-bs-target="#dash" type="button">
                                        <i className="fas fa-angle-right"></i>Dashboard
                                    </button>
                                </li>

                                <li className="nav-item mb-2">
                                    <button className="nav-link font-light" id="1-tab" data-bs-toggle="tab" data-bs-target="#order" type="button">
                                        <i className="fas fa-angle-right"></i>Orders
                                    </button>
                                </li>

                                <li className="nav-item mb-2">
                                    <button className="nav-link font-light" id="2-tab" data-bs-toggle="tab" data-bs-target="#wishlist" type="button">
                                        <i className="fas fa-angle-right"></i>Wishlist
                                    </button>
                                </li>

                                <li className="nav-item mb-2">
                                    <button className="nav-link font-light" id="3-tab" data-bs-toggle="tab" data-bs-target="#save" type="button">
                                        <i className="fas fa-angle-right"></i>Saved Address
                                    </button>
                                </li>

                                <li className="nav-item mb-2">
                                    <button className="nav-link font-light" id="4-tab" data-bs-toggle="tab" data-bs-target="#pay" type="button">
                                        <i className="fas fa-angle-right"></i>Payment
                                    </button>
                                </li>

                                <li className="nav-item mb-2">
                                    <button className="nav-link font-light" id="5-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">
                                        <i className="fas fa-angle-right"></i>Profile
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link font-light" id="6-tab" data-bs-toggle="tab" data-bs-target="#security" type="button">
                                        <i className="fas fa-angle-right"></i>Security
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-9">
                            <div className="filter-button dash-filter dashboard">
                                <button className="btn btn-solid-default btn-sm fw-bold filter-btn">Show Menu</button>
                            </div>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="dash">
                                    <div className="dashboard-right">
                                        <div className="dashboard">
                                            <div className="page-title title title1 title-effect">
                                                <h2>My Dashboard</h2>
                                            </div>
                                            <div className="welcome-msg">
                                                <h6 className="font-light">
                                                    Hello, <span>MARK JECNO !</span>
                                                </h6>
                                                <p className="font-light">
                                                    From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a
                                                    link below to view or edit information.
                                                </p>
                                            </div>

                                            <div className="order-box-contain my-4">
                                                <div className="row g-4">
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="order-box">
                                                            <div className="order-box-image">
                                                                <img src="/images/svg/box.png" className="img-fluid blur-up lazyload" alt="" />
                                                            </div>
                                                            <div className="order-box-contain">
                                                                <img src="/images/svg/box1.png" className="img-fluid blur-up lazyload" alt="" />
                                                                <div>
                                                                    <h5 className="font-light">total order</h5>
                                                                    <h3>3648</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="order-box">
                                                            <div className="order-box-image">
                                                                <img src="/images/svg/sent.png" className="img-fluid blur-up lazyload" alt="" />
                                                            </div>
                                                            <div className="order-box-contain">
                                                                <img src="/images/svg/sent1.png" className="img-fluid blur-up lazyload" alt="" />
                                                                <div>
                                                                    <h5 className="font-light">pending orders</h5>
                                                                    <h3>215</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="order-box">
                                                            <div className="order-box-image">
                                                                <img src="/images/svg/wishlist.png" className="img-fluid blur-up lazyload" alt="" />
                                                            </div>
                                                            <div className="order-box-contain">
                                                                <img src="/images/svg/wishlist1.png" className="img-fluid blur-up lazyload" alt="" />
                                                                <div>
                                                                    <h5 className="font-light">wishlist</h5>
                                                                    <h3>63874</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box-account box-info">
                                                <div className="box-head">
                                                    <h3>Account Information</h3>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="box">
                                                            <div className="box-title">
                                                                <h4>Contact Information</h4>
                                                                <a href="undefined">Edit</a>
                                                            </div>
                                                            <div className="box-content">
                                                                <h6 className="font-light">MARK JECNO</h6>
                                                                <h6 className="font-light">MARk-JECNO@gmail.com</h6>
                                                                <a href="undefined">Change Password</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="box">
                                                            <div className="box-title">
                                                                <h4>Newsletters</h4>
                                                                <a href="undefined">Edit</a>
                                                            </div>
                                                            <div className="box-content">
                                                                <h6 className="font-light">You are currently not subscribed to any newsletter.</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="box address-box">
                                                        <div className="box-title">
                                                            <h4>Address Book</h4>
                                                            <a href="undefined">Manage Addresses</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <div className="row g-4">
                                                                <div className="col-sm-6">
                                                                    <h6 className="font-light">Default Billing Address</h6>
                                                                    <h6 className="font-light">You have not set a default billing address.</h6>
                                                                    <a href="undefined">Edit Address</a>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <h6 className="font-light">Default Shipping Address</h6>
                                                                    <h6 className="font-light">You have not set a default shipping address.</h6>
                                                                    <a href="undefined">Edit Address</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade table-dashboard dashboard wish-list-section" id="order">
                                    <div className="box-head mb-3">
                                        <h3>My Order</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table cart-table">
                                            <thead>
                                                <tr className="table-head">
                                                    <th scope="col">image</th>
                                                    <th scope="col">Order Id</th>
                                                    <th scope="col">Product Details</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">View</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/1.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="mt-0">#125021</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Outwear & Coats</p>
                                                    </td>
                                                    <td>
                                                        <p className="success-button btn btn-sm">Shipped</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="undefined">
                                                            <i className="far fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/2.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="mt-0">#125367</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Outwear & Coats</p>
                                                    </td>
                                                    <td>
                                                        <p className="danger-button btn btn-sm">Pending</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="undefined">
                                                            <i className="far fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/3.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#125948</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Sweatshirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="success-button btn btn-sm">Shipped</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="undefined">
                                                            <i className="far fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/4.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#127569</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Hoodie t-shirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="success-button btn btn-sm">Shipped</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="undefined">
                                                            <i className="far fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/5.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#125753</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Hoodie t-shirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="danger-button btn btn-sm">Canceled</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="undefined">
                                                            <i className="far fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/6.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#125021</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Sweatshirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="danger-button btn btn-sm">Canceled</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="undefined">
                                                            <i className="far fa-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="tab-pane fade table-dashboard dashboard wish-list-section" id="wishlist">
                                    <div className="box-head mb-3">
                                        <h3>My Wishlish</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table cart-table">
                                            <thead>
                                                <tr className="table-head">
                                                    <th scope="col">image</th>
                                                    <th scope="col">Order Id</th>
                                                    <th scope="col">Product Details</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/1.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#125021</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Outwear & Coats</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="cart.html" className="btn btn-solid-default btn-sm fw-bold">
                                                            Move to Cart
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/2.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#125367</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Outwear & Coats</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="cart.html" className="btn btn-solid-default btn-sm fw-bold">
                                                            Move to Cart
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/3.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#125948</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Sweatshirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="cart.html" className="btn btn-solid-default btn-sm fw-bold">
                                                            Move to Cart
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/4.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#127569</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Hoodie t-shirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="cart.html" className="btn btn-solid-default btn-sm fw-bold">
                                                            Move to Cart
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/5.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#127569</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Hoodie t-shirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="cart.html" className="btn btn-solid-default btn-sm fw-bold">
                                                            Move to Cart
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="product-left-sidebar.html">
                                                            <img src="/images/fashion/product/front/6.jpg" className="blur-up lazyload" alt="" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">#125021</p>
                                                    </td>
                                                    <td>
                                                        <p className="fs-6 m-0">Men's Sweatshirt</p>
                                                    </td>
                                                    <td>
                                                        <p className="theme-color fs-6">$49.54</p>
                                                    </td>
                                                    <td>
                                                        <a href="cart.html" className="btn btn-solid-default btn-sm fw-bold">
                                                            Move to Cart
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="tab-pane fade dashboard" id="save">
                                    <div className="box-head">
                                        <h3>Save Address</h3>
                                        <button className="btn btn-solid-default btn-sm fw-bold ms-auto" data-bs-toggle="modal" data-bs-target="#addAddress">
                                            <i className="fas fa-plus"></i>
                                            Add New Address
                                        </button>
                                    </div>
                                    <div className="save-details-box">
                                        <div className="row g-3">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="save-details">
                                                    <div className="save-name">
                                                        <h5>Mark Jugal</h5>
                                                        <div className="save-position">
                                                            <h6>Home</h6>
                                                        </div>
                                                    </div>

                                                    <div className="save-address">
                                                        <p className="font-light">549 Sulphur Springs Road</p>
                                                        <p className="font-light">Downers Grove, IL</p>
                                                        <p className="font-light">60515</p>
                                                    </div>

                                                    <div className="mobile">
                                                        <p className="font-light mobile">Mobile No. +1-123-456-7890</p>
                                                    </div>

                                                    <div className="button">
                                                        <a href="undefined" className="btn btn-sm">
                                                            Edit
                                                        </a>
                                                        <a href="undefined" className="btn btn-sm">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-md-6">
                                                <div className="save-details">
                                                    <div className="save-name">
                                                        <h5>Method Zaki</h5>
                                                        <div className="save-position">
                                                            <h6>Office</h6>
                                                        </div>
                                                    </div>

                                                    <div className="save-address">
                                                        <p className="font-light">549 Sulphur Springs Road</p>
                                                        <p className="font-light">Downers Grove, IL</p>
                                                        <p className="font-light">60515</p>
                                                    </div>

                                                    <div className="mobile">
                                                        <p className="font-light mobile">Mobile No. +1-123-456-7890</p>
                                                    </div>

                                                    <div className="button">
                                                        <a href="undefined" className="btn btn-sm">
                                                            Edit
                                                        </a>
                                                        <a href="undefined" className="btn btn-sm">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-md-6">
                                                <div className="save-details">
                                                    <div className="save-name">
                                                        <h5>Mark Jugal</h5>
                                                        <div className="save-position">
                                                            <h6>Home</h6>
                                                        </div>
                                                    </div>

                                                    <div className="save-address">
                                                        <p className="font-light">549 Sulphur Springs Road</p>
                                                        <p className="font-light">Downers Grove, IL</p>
                                                        <p className="font-light">60515</p>
                                                    </div>

                                                    <div className="mobile">
                                                        <p className="font-light mobile">Mobile No. +1-123-456-7890</p>
                                                    </div>

                                                    <div className="button">
                                                        <a href="undefined" className="btn btn-sm">
                                                            Edit
                                                        </a>
                                                        <a href="undefined" className="btn btn-sm">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade dashboard" id="pay">
                                    <div className="box-head">
                                        <h3>Card & Payment</h3>
                                        <button className="btn btn-solid-default btn-sm fw-bold ms-auto" data-bs-toggle="modal" data-bs-target="#addPayment">
                                            <i className="fas fa-plus"></i>
                                            Add New Card
                                        </button>
                                    </div>

                                    <div className="card-details-section">
                                        <div className="row g-4">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="payment-card-detail">
                                                    <div className="card-details">
                                                        <div className="card-number">
                                                            <h4>XXXX - XXXX - XXXX - 2548</h4>
                                                        </div>

                                                        <div className="valid-detail">
                                                            <div className="title">
                                                                <span>valid</span>
                                                                <span>thru</span>
                                                            </div>
                                                            <div className="date">
                                                                <h3>12/23</h3>
                                                            </div>
                                                            <div className="primary">
                                                                <span className="badge bg-pill badge-light">primary</span>
                                                            </div>
                                                        </div>

                                                        <div className="name-detail">
                                                            <div className="name">
                                                                <h5>mark jecno</h5>
                                                            </div>
                                                            <div className="card-img">
                                                                <img src="/images/payment-icon/1.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="edit-card">
                                                        <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                                            <i className="far fa-edit"></i> edit
                                                        </a>
                                                        <a href="undefined">
                                                            <i className="far fa-minus-square"></i>
                                                            delete
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="edit-card-mobile">
                                                    <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                                        <i className="far fa-edit"></i> edit
                                                    </a>
                                                    <a href="undefined">
                                                        <i className="far fa-minus-square"></i>
                                                        delete
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6">
                                                <div className="payment-card-detail">
                                                    <div className="card-details card-visa">
                                                        <div className="card-number">
                                                            <h4>XXXX - XXXX - XXXX - 2548</h4>
                                                        </div>

                                                        <div className="valid-detail">
                                                            <div className="title">
                                                                <span>valid</span>
                                                                <span>thru</span>
                                                            </div>
                                                            <div className="date">
                                                                <h3>12/23</h3>
                                                            </div>
                                                            <div className="primary">
                                                                <span className="badge bg-pill badge-light">primary</span>
                                                            </div>
                                                        </div>

                                                        <div className="name-detail">
                                                            <div className="name">
                                                                <h5>mark jecno</h5>
                                                            </div>
                                                            <div className="card-img">
                                                                <img src="/images/payment-icon/2.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="edit-card">
                                                        <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                                            <i className="far fa-edit"></i> edit
                                                        </a>
                                                        <a href="undefined">
                                                            <i className="far fa-minus-square"></i>
                                                            delete
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="edit-card-mobile">
                                                    <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                                        <i className="far fa-edit"></i> edit
                                                    </a>
                                                    <a href="undefined">
                                                        <i className="far fa-minus-square"></i>
                                                        delete
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6">
                                                <div className="payment-card-detail">
                                                    <div className="card-details dabit-card">
                                                        <div className="card-number">
                                                            <h4>XXXX - XXXX - XXXX - 2548</h4>
                                                        </div>

                                                        <div className="valid-detail">
                                                            <div className="title">
                                                                <span>valid</span>
                                                                <span>thru</span>
                                                            </div>
                                                            <div className="date">
                                                                <h3>12/23</h3>
                                                            </div>
                                                            <div className="primary">
                                                                <span className="badge bg-pill badge-light">primary</span>
                                                            </div>
                                                        </div>

                                                        <div className="name-detail">
                                                            <div className="name">
                                                                <h5>mark jecno</h5>
                                                            </div>
                                                            <div className="card-img">
                                                                <img src="/images/payment-icon/3.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="edit-card">
                                                        <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                                            <i className="far fa-edit"></i> edit
                                                        </a>
                                                        <a href="undefined">
                                                            <i className="far fa-minus-square"></i>
                                                            delete
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="edit-card-mobile">
                                                    <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                                        <i className="far fa-edit"></i> edit
                                                    </a>
                                                    <a href="undefined">
                                                        <i className="far fa-minus-square"></i>
                                                        delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade dashboard-profile dashboard" id="profile">
                                    <div className="box-head">
                                        <h3>Profile</h3>
                                        <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                                            Edit
                                        </a>
                                    </div>
                                    <ul className="dash-profile">
                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Company Name</h6>
                                            </div>
                                            <div className="right">
                                                <h6>Voxo Fashion</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Country / Region</h6>
                                            </div>
                                            <div className="right">
                                                <h6>Downers Grove, IL</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Year Established</h6>
                                            </div>
                                            <div className="right">
                                                <h6>2018</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Total Employees</h6>
                                            </div>
                                            <div className="right">
                                                <h6>101 - 200 People</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Category</h6>
                                            </div>
                                            <div className="right">
                                                <h6>Clothing</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Street Address</h6>
                                            </div>
                                            <div className="right">
                                                <h6>549 Sulphur Springs Road</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">City/State</h6>
                                            </div>
                                            <div className="right">
                                                <h6>Downers Grove, IL</h6>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Zip</h6>
                                            </div>
                                            <div className="right">
                                                <h6>60515</h6>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="box-head mt-lg-5 mt-3">
                                        <h3>Login Details</h3>
                                        <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                                            Edit
                                        </a>
                                    </div>

                                    <ul className="dash-profile">
                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Email Address</h6>
                                            </div>
                                            <div className="right">
                                                <h6>mark.jugal@gmail.com</h6>
                                            </div>
                                            <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                                                Edit
                                            </a>
                                        </li>

                                        <li>
                                            <div className="left">
                                                <h6 className="font-light">Phone No.</h6>
                                            </div>
                                            <div className="right">
                                                <h6>+1-202-555-0198</h6>
                                            </div>
                                            <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                                                Edit
                                            </a>
                                        </li>

                                        <li className="mb-0">
                                            <div className="left">
                                                <h6 className="font-light">Password</h6>
                                            </div>
                                            <div className="right">
                                                <h6>●●●●●●</h6>
                                            </div>
                                            <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                                                Edit
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-pane fade dashboard-security dashboard" id="security">
                                    <div className="box-head">
                                        <h3>Delete Your Account</h3>
                                    </div>
                                    <div className="security-details">
                                        <h5 className="font-light mt-3">
                                            Hi <span> Mark Enderess,</span>
                                        </h5>
                                        <p className="font-light mt-1">We Are Sorry To Here You Would Like To Delete Your Account.</p>
                                    </div>

                                    <div className="security-details-1 mb-0">
                                        <div className="page-title">
                                            <h4 className="fw-bold">Note</h4>
                                        </div>
                                        <p className="font-light">
                                            Deleting your account will permanently remove your profile, personal settings, and all other associated information. Once your account is deleted, You will
                                            be logged out and will be unable to log back in.
                                        </p>

                                        <p className="font-light mb-4">If you understand and agree to the above statement, and would still like to delete your account, than click below</p>

                                        <button className="btn btn-solid-default btn-sm fw-bold rounded" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                            Delete Your Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* user dashboard section end */}

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

            {/* Reset Password Modal Start */}
            <div className="modal fade reset-email-modal" id="resetEmail">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">
                                Comfirm Email
                            </h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body pt-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label font-light">
                                        Email address
                                    </label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="comfirmEmail" className="form-label font-light">
                                        Comfirm Email address
                                    </label>
                                    <input type="email" className="form-control" id="comfirmEmail" />
                                </div>
                                <div>
                                    <label htmlFor="exampleInputPassword1" className="form-label font-light">
                                        Password
                                    </label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer pt-0">
                            <button className="btn bg-secondary rounded-1 modal-close-button" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button className="btn btn-solid-default rounded-1" data-bs-dismiss="modal">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reset Password Modal End */}

            {/* Add Address Modal Start */}
            <div className="modal fade add-address-modal" id="addAddress">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label font-light">
                                        Full Name
                                    </label>
                                    <input type="text" className="form-control" id="name" placeholder="full name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label font-light">
                                        Full Address
                                    </label>
                                    <input type="text" className="form-control" id="address" placeholder="123, abcd, xyz" />
                                </div>
                                <div>
                                    <label htmlFor="number" className="form-label font-light">
                                        Mobile
                                    </label>
                                    <input type="number" className="form-control" id="number" placeholder="+1-123-456-7890" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer pt-0 text-end d-block">
                            <button type="button" className="btn bg-secondary text-white rounded-1 modal-close-button" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button className="btn btn-solid-default rounded-1" data-bs-dismiss="modal">
                                Save Address
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Address Modal End */}

            {/* Add Payment Modal Start */}
            <div className="modal fade payment-modal" id="addPayment">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="name" className="form-label">
                                    Card Type
                                </label>
                                <select className="form-select form-select-lg mb-4">
                                    <option defaultChecked disabled>
                                        Choose Your Card
                                    </option>
                                    <option defaultValue="1">Creadit Card</option>
                                    <option defaultValue="2">Debit Card</option>
                                    <option defaultValue="3">Debit Card and ATM</option>
                                </select>

                                <div className="mb-4">
                                    <label htmlFor="card" className="form-label">
                                        Name On Card
                                    </label>
                                    <input type="text" className="form-control" id="card" placeholder="Name card" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cAddress" className="form-label">
                                        Card Number
                                    </label>
                                    <input type="number" className="form-control" id="cAddress" placeholder="XXXX-XXXX-XXXX-XXXX" />
                                </div>
                                <div className="row">
                                    <div className="col-md-8 mb-4">
                                        <label htmlFor="expiry" className="form-label">
                                            Expiry Date
                                        </label>
                                        <input type="date" className="form-control font-light" id="expiry" />
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <label htmlFor="cvv" className="form-label">
                                            CVV
                                        </label>
                                        <input type="number" className="form-control" id="cvv" placeholder="XX9" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer pt-0 text-end d-block">
                            <button type="button" className="btn bg-secondary text-white rounded-1 modal-close-button" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button className="btn btn-solid-default rounded-1" data-bs-dismiss="modal">
                                Save Card Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Payment Modal End */}

            {/* Comfirm Delete Modal Start */}
            <div className="modal delete-account-modal fade" id="deleteModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body pb-3 text-center mt-4">
                            <h4>Are you sure you want to delete your account?</h4>
                        </div>
                        <div className="modal-footer d-block text-center mb-4">
                            <button className="btn btn-solid-default btn-sm fw-bold rounded" data-bs-target="#doneModal" data-bs-toggle="modal" data-bs-dismiss="modal">
                                Yes Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal delete-account-modal fade" id="doneModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body pb-3 text-center mt-4">
                            <h4>Done!!! Delete Your Account</h4>
                        </div>
                        <div className="modal-footer d-block text-center mb-4">
                            <button className="btn btn-solid-default btn-sm fw-bold rounded" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">
                                Okay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Comfirm Delete Modal End */}
        </>
    );
}

export default UserDashboard;
