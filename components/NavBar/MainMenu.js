import Link from 'next/link';

function MainMenu() {
    return (
        <nav>
            <div className="main-navbar">
                <div id="mainnav">
                    <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar"></i>
                    </div>
                    <ul className="nav-menu">
                        <li className="back-btn d-xl-none">
                            <div className="close-btn">
                                Menu
                                <span className="mobile-back">
                                    <i className="fa fa-angle-left"></i>
                                </span>
                            </div>
                        </li>
                        <li className="mega-menu dropdown home-menu">
                            <a href="undefined" className="nav-link menu-title">
                                home
                            </a>
                            <div className="mega-menu-container menu-content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="opensubmegamenu">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="index.html"
                                                                className="megamenu-image"
                                                            >
                                                                <img
                                                                    src="/images/demo-image/fashion.jpg"
                                                                    className="img-fluid blur-up lazyload"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="megamenu-image-title pb-0">
                                                    <h5 className="mb-0">
                                                        Fashion Demo
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="opensubmegamenu">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="flower-demo.html"
                                                                className="megamenu-image"
                                                            >
                                                                <img
                                                                    src="/images/demo-image/flower.jpg"
                                                                    className="img-fluid blur-up lazyload"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="megamenu-image-title pb-0">
                                                    <h5 className="mb-0">
                                                        Flowers Demo
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="opensubmegamenu">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="furniture-demo.html"
                                                                className="megamenu-image"
                                                            >
                                                                <img
                                                                    src="/images/demo-image/furniture.jpg"
                                                                    className="img-fluid blur-up lazyload"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="megamenu-image-title pb-0">
                                                    <h5 className="mb-0">
                                                        Furniture Demo
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="opensubmegamenu">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="electronic-demo.html"
                                                                className="megamenu-image"
                                                            >
                                                                <img
                                                                    src="/images/demo-image/electonic.jpg"
                                                                    className="img-fluid blur-up lazyload"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="megamenu-image-title pb-0">
                                                    <h5 className="mb-0">
                                                        Electronic Demo
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="opensubmegamenu">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="shoes-demo.html"
                                                                className="megamenu-image"
                                                            >
                                                                <img
                                                                    src="/images/demo-image/shoes.jpg"
                                                                    className="img-fluid blur-up lazyload"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="megamenu-image-title pb-0">
                                                    <h5 className="mb-0">
                                                        Shoes Demo
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="opensubmegamenu">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="vegetables-demo.html"
                                                                className="megamenu-image"
                                                            >
                                                                <img
                                                                    src="/images/demo-image/vagetables.jpg"
                                                                    className="img-fluid blur-up lazyload"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="megamenu-image-title pb-0">
                                                    <h5 className="mb-0">
                                                        Vegetables Demo
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="undefined" className="nav-link menu-title">
                                shop
                            </a>
                            <ul className="nav-submenu menu-content">
                                <li>
                                    <a href="shop-canvas-filter.html">
                                        Shop Canvas Filter
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-category-slider.html">
                                        Shop Category Filter
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-filter-hide.html">
                                        Shop Filter Hide
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-left-sidebar.html">
                                        Shop Left Sidebar
                                        <span>Trending</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-list-infinite.html">
                                        Shop List Infinite
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-list.html">Shop List</a>
                                </li>
                                <li>
                                    <a href="shop-no-sidebar.html">
                                        Shop No Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-right-sidebar.html">
                                        Shop Right Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-top-filter.html">
                                        Shop Top Filter
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-with-category.html">
                                        Shop With Category{' '}
                                        <span className="tren-budge">New</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="/product-category">
                                <a className="nav-link menu-title">product</a>
                            </Link>
                            <ul className="nav-submenu menu-content">
                                <li>
                                    <Link href="/product-category/123">
                                        <a>Product 4 Images</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="product-360-view.html">
                                        Product 360 View
                                    </a>
                                </li>
                                <li>
                                    <a href="product-bundle.html">
                                        Product Bundle
                                    </a>
                                </li>
                                <li>
                                    <a href="product-left-sidebar.html">
                                        Product Left Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="product-left-thumbnail.html">
                                        Product Left thumbnail
                                    </a>
                                </li>
                                <li>
                                    <a href="product-no-sidebar.html">
                                        Product No Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="product-right-sidebar.html">
                                        Product Right Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="product-right-thumbnail.html">
                                        Product Right thumbnail
                                    </a>
                                </li>
                                <li>
                                    <a href="product-sticky.html">
                                        Product Sticky
                                    </a>
                                </li>
                                <li>
                                    <a href="product-video-thumbnail.html">
                                        Product Video Thumbnail
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="mega-menu dropdown ratio_40">
                            <a href="undefined" className="nav-link menu-title">
                                <div className="gradient-title">Voxo plus</div>
                            </a>
                            <div className="mega-menu-container poster-bg-image menu-content">
                                <div className="container-fluid">
                                    <div className="row row-cols-5">
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="submenu-title">
                                                    <h5>Email Template</h5>
                                                </div>
                                                <div className="submenu-content opensubmegamenu">
                                                    <ul className="list">
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/abandonment-email.html">
                                                                Abandonment
                                                                Email
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/black-friday.html">
                                                                Black Fridday
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/email-template-1.html">
                                                                Email Template 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/email-template-2.html">
                                                                Email Template 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/offer.html">
                                                                Offer Template
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/order-success-1.html">
                                                                Order Success 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/order-success-2.html">
                                                                Order Success 2
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="submenu-title">
                                                    <h5>Email Template</h5>
                                                </div>
                                                <div className="submenu-content opensubmegamenu">
                                                    <ul className="list">
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/product-review.html">
                                                                Product Review
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/reset-password.html">
                                                                Reset Password
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/email-template/welcome.html">
                                                                Welcome Template
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="link-section">
                                                <div className="submenu-title">
                                                    <h5>Invoice Template</h5>
                                                </div>
                                                <div className="submenu-content opensubmegamenu">
                                                    <ul className="list">
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-1.html">
                                                                Invoice 1
                                                                Template
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-2.html">
                                                                Invoice 2
                                                                Template
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-3.html">
                                                                Invoice 3
                                                                Template
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="submenu-title">
                                                    <h5>Portfolio Page</h5>
                                                </div>
                                                <div className="submenu-content opensubmegamenu">
                                                    <ul className="list">
                                                        <li>
                                                            <a href="portfolio-2-grid.html">
                                                                Portfolio 2 Grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-2-masonary.html">
                                                                Portfolio 2
                                                                Masonary
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-3-grid.html">
                                                                Portfolio 3 Grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-3-masonary.html">
                                                                Portfolio 3
                                                                Masonary
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-4-grid.html">
                                                                Portfolio 4 Grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-4-masonary.html">
                                                                Portfolio 4
                                                                Masonary
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="portfolio-no-space.html">
                                                                Portfolio No
                                                                Space
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="submenu-title">
                                                    <h5>Element Page</h5>
                                                </div>
                                                <div className="submenu-content opensubmegamenu">
                                                    <ul className="list">
                                                        <li>
                                                            <a href="element-button.html">
                                                                Element Button
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="element-category.html">
                                                                Element Category
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="element-collection-banner.html">
                                                                Element
                                                                Collection
                                                                Banner
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="element-deal-banner.html">
                                                                Element Deal
                                                                Banner
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="element-header.html">
                                                                Element Header
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="element-home.html">
                                                                Element Home
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="element-product.html">
                                                                Element Product
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mega-box">
                                            <div className="link-section">
                                                <div className="submenu-title">
                                                    <h5>Cookie Bar</h5>
                                                </div>
                                                <div className="submenu-content opensubmegamenu">
                                                    <ul className="list">
                                                        <li>
                                                            <a href="furniture-demo.html">
                                                                Bottom
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="electronic-demo.html">
                                                                Bottom Left
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index.html">
                                                                Bottom Right
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="link-section">
                                                <div className="submenu-title">
                                                    <h5>Search</h5>
                                                </div>
                                                <div className="submenu-content opensubmegamenu">
                                                    <ul className="list">
                                                        <li>
                                                            <a href="vegetables-demo.html">
                                                                Ajax Search
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="undefined" className="nav-link menu-title">
                                pages
                            </a>
                            <ul className="nav-submenu menu-content">
                                <li>
                                    <a href="404.html">404</a>
                                </li>
                                <li>
                                    <a href="log-in.html">Log In</a>
                                </li>
                                <li>
                                    <a href="sign-up.html">Register</a>
                                </li>
                                <li>
                                    <a href="forgot.html">Forgot Password</a>
                                </li>
                                <li>
                                    <a href="cart.html">cart</a>
                                </li>
                                <li>
                                    <a href="checkout.html">checkout</a>
                                </li>
                                <li>
                                    <a href="coming-soon.html">
                                        coming soon<span>trending</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="compare.html">compare</a>
                                </li>
                                <li>
                                    <a href="contact-us.html">contact us</a>
                                </li>
                                <li>
                                    <a href="faq.html">faq</a>
                                </li>
                                <li>
                                    <a href="order-success.html">
                                        order success
                                    </a>
                                </li>
                                <li>
                                    <a href="order-tracking.html">
                                        order tracking
                                    </a>
                                </li>
                                <li>
                                    <a href="review.html">review</a>
                                </li>
                                <li>
                                    <a href="search.html">search</a>
                                </li>
                                <li>
                                    <a href="user-dashboard.html">
                                        user dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="wishlist.html">wishlist</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="/blog">
                                <a className="nav-link menu-title">blog</a>
                            </Link>
                            <ul className="nav-submenu menu-content">
                                <li>
                                    <Link href="/blog/category/business">
                                        <a>Business</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/entertainment">
                                        <a>Entertainment</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/global">
                                        <a>Global</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/health">
                                        <a>Health</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/sports">
                                        <a>Sports</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="mobile-poster d-flex d-xl-none">
                            <img
                                src="/images/pwa.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mobile-contain">
                                <h5>Enjoy app-like experience</h5>
                                <p className="font-light">
                                    With this Screen option you can use Website
                                    like an App.
                                </p>
                                <a
                                    href="undefined"
                                    id="installApp"
                                    className="btn btn-solid-default btn-spacing w-100"
                                >
                                    ADD TO HOMESCREEN
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainMenu;
