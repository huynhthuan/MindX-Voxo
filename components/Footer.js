import Link from 'next/link';

function Footer() {
    return (
        <>
            {/* footer start */}
            <footer className="footer-sm-space">
                <div className="main-footer">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-contact">
                                    <div className="brand-logo">
                                        <a
                                            href="index.html"
                                            className="footer-logo"
                                        >
                                            <svg className="svg-icon">
                                                <use
                                                    className="fill-color"
                                                    xlinkHref="/svg/icons.svg#logo"
                                                ></use>
                                            </svg>
                                            <img
                                                src="/images/logo.png"
                                                className="img-fluid blur-up lazyload"
                                                alt="logo"
                                            />
                                        </a>
                                    </div>
                                    <ul className="contact-lists">
                                        <li>
                                            <span>
                                                <b>phone:</b>
                                                <span className="font-light">
                                                    {' '}
                                                    + 185659635
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <b>Address:</b>
                                                <span className="font-light">
                                                    {' '}
                                                    1418 Riverwood Drive, Suite
                                                    3245 Cottonwood, CA 96052,
                                                    United States
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <b>Email:</b>
                                                <span className="font-light">
                                                    {' '}
                                                    Voxo123@gmail.com
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <div className="footer-title">
                                        <h3>About us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a className="font-dark">
                                                        Home
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop">
                                                    <a className="font-dark">
                                                        Shop
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">
                                                    <a className="font-dark">
                                                        About Us
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">
                                                    <a className="font-dark">
                                                        Blog
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">
                                                    <a className="font-dark">
                                                        Contact
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <div className="footer-title">
                                        <h3>New Categories</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <a
                                                    href="shop-left-sidebar.html"
                                                    className="font-dark"
                                                >
                                                    Latest Shoes
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-left-sidebar.html"
                                                    className="font-dark"
                                                >
                                                    Branded Jeans
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-left-sidebar.html"
                                                    className="font-dark"
                                                >
                                                    New Jackets
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-left-sidebar.html"
                                                    className="font-dark"
                                                >
                                                    Colorfull Hoodies
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-left-sidebar.html"
                                                    className="font-dark"
                                                >
                                                    Shiner Goggles
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <div className="footer-title">
                                        <h3>Get Help</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <Link href="/user-dashboard?tab=order">
                                                    <a className="font-dark">
                                                        Your Orders
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/user-dashboard">
                                                    <a className="font-dark">
                                                        Your Account
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist">
                                                    <a className="font-dark">
                                                        Your Wishlist
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <a className="font-dark">
                                                        Shopping FAQs
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
                                <div className="footer-newsletter">
                                    <h3>Let’s stay in touch</h3>
                                    <form
                                        action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                                        className="form-newsletter  needs-validation"
                                        method="post"
                                        id="mc-embedded-subscribe-form"
                                        name="mc-embedded-subscribe-form"
                                        target="_blank"
                                    >
                                        <div className="input-group mb-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Email Address"
                                            />
                                            <span
                                                className="input-group-text"
                                                id="basic-addon4"
                                            >
                                                <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <p className="font-dark mb-0">
                                            Keep up to date with our latest news
                                            and special offers.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="container">
                        <div className="row gy-3">
                            <div className="col-md-6">
                                <ul>
                                    <li className="font-dark">We accept:</li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/1.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/2.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/3.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/4.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-0 font-dark">
                                    © 2022, Voxo Theme. Made with heart by
                                    Pixelstrap
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}

            {/* sticky cart bottom start */}
            <div className="sticky-bottom-cart">
                <div className="container">
                    <div className="cart-content">
                        <div className="product-image">
                            <img
                                src="/images/fashion/instagram/1.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                            />
                            <div className="content">
                                <h5>men yellow jacket</h5>
                                <h6>
                                    $32.96
                                    <del className="font-light">$459.00</del>
                                    <span>55% off</span>
                                </h6>
                            </div>
                        </div>
                        <div className="selection-section">
                            <div className="form-group mb-0">
                                <select
                                    id="inputState"
                                    className="form-control form-select"
                                >
                                    <option disabled defaultChecked>
                                        Choose color...
                                    </option>
                                    <option>Pink</option>
                                    <option>Blue</option>
                                    <option>Grey</option>
                                    <option>Pink</option>
                                </select>
                            </div>
                            <div className="form-group mb-0">
                                <select
                                    id="input-state"
                                    className="form-control form-select"
                                >
                                    <option defaultChecked disabled>
                                        Choose size...
                                    </option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Extra Large</option>
                                </select>
                            </div>
                        </div>
                        <div className="add-btn">
                            <a
                                className="btn default-light-theme default-theme default-theme-2 outline-button wishlist-btn"
                                href="wishlist.html"
                            >
                                <i className="fa fa-bookmark"></i> Wishlist
                            </a>
                            <a
                                className="btn default-light-theme default-theme default-theme-2 outline-button"
                                href="cart.html"
                            >
                                <i className="fas fa-shopping-cart"></i> Add To
                                Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* sticky cart bottom end */}

            {/* recently purchase product */}
            <div className="recently-purchase d-md-flex d-none">
                <img
                    src="/images/fashion/instagram/3.jpg"
                    alt="img-fluid blur-up lazyload"
                />
                <div className="media-body">
                    <div>
                        <h4>Some recently purchase this item</h4>
                        <a href="undefined">
                            <span className="product-name">Floral Dress</span>
                        </a>
                        <small className="timeAgo">50 minutes ago</small>
                    </div>
                </div>
                <a href="undefined" className="close-popup fa fa-times"></a>
            </div>
            {/* recently purchase product */}

            {/* Size Modal Start */}
            <div className="modal modal-size fade" id="sizemodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img
                                src="/images/size-chart.jpg"
                                alt=""
                                className="img-fluid blur-up lazyload"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Size Modal End */}

            {/* Add To Cart Notification */}
            <div className="added-notification">
                <img
                    src="/images/fashion/banner/2.jpg"
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
                <h3>added to cart</h3>
            </div>
            {/* Add To Cart Notification */}

            {/* Quick view modal start */}
            <div className="modal fade quick-view-modal" id="quick-view">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        <div className="modal-body">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="quick-view-image">
                                        <div className="quick-view-slider ratio_2">
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/4.jpg"
                                                    className="img-fluid bg-img blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/5.jpg"
                                                    className="img-fluid bg-img blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/6.jpg"
                                                    className="img-fluid bg-img blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/7.jpg"
                                                    className="img-fluid bg-img blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                        </div>
                                        <div className="quick-nav">
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/4.jpg"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/5.jpg"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/6.jpg"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src="/images/fashion/product/front/7.jpg"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="product"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="product-right">
                                        <h2 className="mb-2">
                                            Men's Hoodie t-shirt
                                        </h2>
                                        <ul className="rating mt-1">
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
                                            <li className="font-light">
                                                (In stock)
                                            </li>
                                        </ul>
                                        <div className="price mt-3">
                                            <h3>$20.00</h3>
                                        </div>
                                        <div className="color-types">
                                            <h4>colors</h4>
                                            <ul className="color-variant mb-0">
                                                <li className="bg-half-light selected"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-blue1"></li>
                                                <li className="bg-black1"></li>
                                            </ul>
                                        </div>
                                        <div className="size-detail">
                                            <h4>size</h4>
                                            <ul className="">
                                                <li className="selected">S</li>
                                                <li>M</li>
                                                <li>L</li>
                                                <li>XL</li>
                                            </ul>
                                        </div>
                                        <div className="product-details">
                                            <h4>product details</h4>
                                            <ul>
                                                <li>
                                                    <span className="font-light">
                                                        Style :
                                                    </span>{' '}
                                                    Hoodie
                                                </li>
                                                <li>
                                                    <span className="font-light">
                                                        Catgory :
                                                    </span>{' '}
                                                    T-shirt
                                                </li>
                                                <li>
                                                    <span className="font-light">
                                                        Tags:
                                                    </span>{' '}
                                                    summer, organic
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-btns">
                                            <a
                                                href="cart.html"
                                                className="btn btn-solid-default btn-sm"
                                            >
                                                Add to cart
                                            </a>
                                            <a
                                                href="product-left-sidebar.html"
                                                className="btn btn-solid-default btn-sm"
                                            >
                                                View details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quick view modal end */}

            {/* Cart Successful Start */}
            <div
                className="modal fade cart-modal"
                id="addtocart"
                tabIndex="-1"
                role="dialog"
                aria-label="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <div className="modal-contain">
                                <div>
                                    <div className="modal-messages">
                                        <i className="fas fa-check"></i>{' '}
                                        3-stripes full-zip hoodie successfully
                                        added to you cart.
                                    </div>
                                    <div className="modal-product">
                                        <div className="modal-contain-img">
                                            <img
                                                src="/images/fashion/instagram/4.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="modal-contain-details">
                                            <h4>Premier Cropped Skinny Jean</h4>
                                            <p className="font-light my-2">
                                                Yellow, Qty : 3
                                            </p>
                                            <div className="product-total">
                                                <h5>
                                                    TOTAL :{' '}
                                                    <span>$1,140.00</span>
                                                </h5>
                                            </div>
                                            <div className="shop-cart-button mt-3">
                                                <a
                                                    href="shop-left-sidebar.html"
                                                    className="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                                                >
                                                    CONTINUE SHOPPING
                                                </a>
                                                <a
                                                    href="cart.html"
                                                    className="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                                                >
                                                    VIEW CART
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ratio_asos mt-4">
                                <div className="container">
                                    <div className="row m-0">
                                        <div className="col-sm-12 p-0">
                                            <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space spacing-slider">
                                                <div>
                                                    <div className="product-box">
                                                        <div className="img-wrapper">
                                                            <div className="front">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        src="/images/fashion/product/front/1.jpg"
                                                                        className="bg-img blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product-details text-center">
                                                            <div className="rating-details d-block text-center">
                                                                <span className="font-light grid-content">
                                                                    B&Y Jacket
                                                                </span>
                                                            </div>
                                                            <div className="main-price mt-0 d-block text-center">
                                                                <h3 className="theme-color">
                                                                    $78.00
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="product-box">
                                                        <div className="img-wrapper">
                                                            <div className="front">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        src="/images/fashion/product/front/2.jpg"
                                                                        className="bg-img blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product-details text-center">
                                                            <div className="rating-details d-block text-center">
                                                                <span className="font-light grid-content">
                                                                    B&Y Jacket
                                                                </span>
                                                            </div>
                                                            <div className="main-price mt-0 d-block text-center">
                                                                <h3 className="theme-color">
                                                                    $78.00
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="product-box">
                                                        <div className="img-wrapper">
                                                            <div className="front">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        src="/images/fashion/product/front/3.jpg"
                                                                        className="bg-img blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product-details text-center">
                                                            <div className="rating-details d-block text-center">
                                                                <span className="font-light grid-content">
                                                                    B&Y Jacket
                                                                </span>
                                                            </div>
                                                            <div className="main-price mt-0 d-block text-center">
                                                                <h3 className="theme-color">
                                                                    $78.00
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="product-box">
                                                        <div className="img-wrapper">
                                                            <div className="front">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        src="/images/fashion/product/front/4.jpg"
                                                                        className="bg-img blur-up lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product-details text-center">
                                                            <div className="rating-details d-block text-center">
                                                                <span className="font-light grid-content">
                                                                    B&Y Jacket
                                                                </span>
                                                            </div>
                                                            <div className="main-price mt-0 d-block text-center">
                                                                <h3 className="theme-color">
                                                                    $78.00
                                                                </h3>
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
                </div>
            </div>
            {/* Cart Successful End */}

            {/* Newsletter modal start  */}
            <div className="modal fade newletter-modal" id="newsletter">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <img
                                src="/images/newletter-icon.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                            />
                            <div className="modal-title">
                                <h2 className="tt-title">
                                    Sign up for our Newsletter!
                                </h2>
                                <p className="font-light">
                                    Never miss any new updates or products we
                                    reveal, stay up to date.
                                </p>
                                <p className="font-light">Oh, and it's free!</p>

                                <div className="input-group mb-3">
                                    <input
                                        placeholder="Email"
                                        className="form-control"
                                        type="text"
                                    />
                                </div>

                                <div className="cancel-button text-center">
                                    <button
                                        className="btn default-theme w-100"
                                        data-bs-dismiss="modal"
                                        type="button"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter modal end */}

            {/* tap to top Section Start */}
            <div className="tap-to-top">
                <a href="#home">
                    <i className="fas fa-chevron-up"></i>
                </a>
            </div>
            {/* tap to top Section End */}

            <div className="bg-overlay"></div>
        </>
    );
}

export default Footer;
