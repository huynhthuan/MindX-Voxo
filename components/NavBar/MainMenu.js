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
                            <Link href="/shop">
                                <a className="nav-link menu-title">shop</a>
                            </Link>
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
                        <li>
                            <Link href="/review">
                                <a className="nav-link menu-title">Review</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">
                                <a className="nav-link menu-title">Faq</a>
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link href="/contact-us">
                                <a className="nav-link menu-title">
                                    Contact us
                                </a>
                            </Link>
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
