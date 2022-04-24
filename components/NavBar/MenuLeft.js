import Link from 'next/link';

function MenuLeft() {
    return (  <div className="menu-left">
    <div className="brand-logo">
        <Link href="/">
            <a>
                <img src="/images/logo.png" className="img-fluid blur-up lazyload" alt="logo" />
            </a>
        </Link>
    </div>
    <div className="category-menu">
        <div className="category-dropdown">
            <div className="close-btn d-xl-none">
                Category List
                <span className="back-category">
                    <i className="fa fa-angle-left"></i>
                </span>
            </div>
            <ul>
                <li className="submenu">
                    <a href="undefined">watches</a>
                    <ul className="category-mega-menu">
                        <li>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="category-childmenu">
                                        <div className="title-category">
                                            <h6>Watch Brands</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="shop-left-sidebar.html">Coros</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Titan</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Citizen</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Casio</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Movado</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Tissot</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="category-childmenu">
                                        <div className="title-category">
                                            <h6>Watch Display</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="shop-left-sidebar.html">Analog</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Digital</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Hybrid</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Tactile</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Touchscreen</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="category-childmenu">
                                        <div className="title-category">
                                            <h6>Watch Style</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="shop-left-sidebar.html">Casual</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Dress</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Fashion</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Luxury</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="category-banner">
                                        <img src="/images/electronics/banner/4.jpg" className="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="shop-left-sidebar.html">footwear</a>
                </li>

                <li className="submenu">
                    <a href="undefined">clothing</a>
                    <ul className="category-mega-menu">
                        <li>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="category-childmenu">
                                        <div className="title-category">
                                            <h6>Women's fashion</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="shop-left-sidebar.html">Dress</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Skirts</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Western wear</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Etahnic wear</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Sports wear</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="category-childmenu">
                                        <div className="title-category">
                                            <h6>Men's fashion</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="shop-left-sidebar.html">Sports wear</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Etahnic wear</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">Western wear</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="category-childmenu">
                                        <div className="title-category">
                                            <h6>Accesories</h6>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="shop-left-sidebar.html">earrings</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">fashion jewellery</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">ties</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">caps and hats</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">cufflinks</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">precious jewellery</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html">necklaces</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="category-banner">
                                        <img src="/images/banner/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="shop-left-sidebar.html">Accessories</a>
                </li>
                <li>
                    <a href="shop-left-sidebar.html">Home & decor</a>
                </li>
                <li>
                    <a href="shop-left-sidebar.html">Bags</a>
                </li>
                <li>
                    <a href="shop-left-sidebar.html">Kitchan</a>
                </li>
            </ul>
        </div>
    </div>
</div> );
}

export default MenuLeft;