import Script from 'next/script';

function ProductCategory() {
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
                            <h3>Shop Listing</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Shop Fashion
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Shop Section start */}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="category-option">
                                <div className="button-close mb-3">
                                    <button className="btn p-0">
                                        <i data-feather="arrow-left"></i> Close
                                    </button>
                                </div>
                                <div className="accordion category-name" id="accordionExample">
                                    <div className="accordion-item category-rating">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                Brand
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body category-scroll">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault1" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                Zara
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault2" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                                Allen Solly
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault3" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                                Louis Philippe
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault4" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                                                                Louis Philippe Sport
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault5" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault5">
                                                                H&M
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault6" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault6">
                                                                Fila
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault7" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault7">
                                                                Puma
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault8" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault8">
                                                                Nike
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault9" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault9">
                                                                HRX
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item category-color">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                Color
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className="category-list">
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="undefined">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item category-price">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                                Price
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="range-slider category-list">
                                                    <input type="text" className="js-range-slider" defaultValue="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item category-rating">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                                Category
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                                            <div className="accordion-body category-scroll">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault10" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault10">
                                                                Shirts
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault11" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault11">
                                                                T-shirts Solly
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault12" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault12">
                                                                Kurtas
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault13" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault13">
                                                                Sweatshirts
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault14" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault14">
                                                                Jackets
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault15" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault15">
                                                                Blazers
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault16" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault16">
                                                                Puma
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault17" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault17">
                                                                Nike
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault18" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault18">
                                                                HRX
                                                            </label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                                Discount Range
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault19" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault19">
                                                                5% and above
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault20" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault20">
                                                                10% and above
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault21" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault21">
                                                                20% and above
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Slider section start */}
                                    <div className="most-popular">
                                        <div className="title title-2 text-lg-start">
                                            <h3>Most Popular</h3>
                                        </div>

                                        <div className="product-slider round-arrow1">
                                            <div>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/1.jpg" className="blur-up lazyload" alt="" />
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="undefined" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del> <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/2.jpg" className="blur-up lazyload" alt="" />
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="undefined" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del> <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/3.jpg" className="blur-up lazyload" alt="" />
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="undefined" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del> <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/6.jpg" className="blur-up lazyload" alt="" />
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="undefined" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del> <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/7.jpg" className="blur-up lazyload" alt="" />
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="undefined" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del> <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="undefined">
                                                                <img src="/images/fashion/product/front/8.jpg" className="blur-up lazyload" alt="" />
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="undefined" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del> <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Slider Section End */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-12 ratio_30">
                            <div className="banner-deatils">
                                <div className="banner-image">
                                    <img src="/images/fashion/banner.jpg" className="img-fluid bg-img blur-up lazyload" alt="" />
                                    <div className="banner-content">
                                        <div>
                                            <h3>Shop The Latest Trends</h3>
                                            <p>Shop the latest clothing trends with our weekly edit of what's new in online at Voxo. From out latest woman collection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-contain mt-3 mb-5">
                                    <p className="font-light">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                            <div className="row g-4">
                                {/* filter button */}
                                <div className="filter-button">
                                    <button className="btn filter-btn p-0">
                                        <i data-feather="align-left"></i> Filter
                                    </button>
                                </div>
                                {/* filter button */}

                                {/* label and featured section */}
                                <div className="col-md-12">
                                    <ul className="short-name">
                                        <li>
                                            <div className="label-tag">
                                                <span>Shirts</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Kurtas</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Jackets</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Blazers</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <a href="undefined">
                                                    <span>Clear All</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12">
                                    <div className="filter-options">
                                        <div className="select-options">
                                            <div className="page-view-filter">
                                                <div className="dropdown select-featured">
                                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        24 Page per view
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li>
                                                            <a className="dropdown-item" href="undefined">
                                                                Alphabetically A-Z
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="undefined">
                                                                Alphabetically Z-A
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="undefined">
                                                                Price, High To Low
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="undefined">
                                                                Price, Low To High
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="undefined">
                                                                Date, Old To New
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="undefined">
                                                                Date, New To Old
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="dropdown select-featured">
                                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select Featured
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li>
                                                        <a className="dropdown-item" href="undefined">
                                                            Jeans
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="undefined">
                                                            T-Shirt
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="undefined">
                                                            Shirt
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="undefined">
                                                            Jacket
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="undefined">
                                                            Hoodie
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="grid-options d-sm-inline-block d-none">
                                            <ul className="d-flex">
                                                <li className="two-grid">
                                                    <a href="undefined">
                                                        <img src="/svg/grid-2.svg" className="img-fluid blur-up lazyload" alt="" />
                                                    </a>
                                                </li>
                                                <li className="three-grid d-md-inline-block d-none">
                                                    <a href="undefined">
                                                        <img src="/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" />
                                                    </a>
                                                </li>
                                                <li className="grid-btn active d-lg-inline-block d-none">
                                                    <a href="undefined">
                                                        <img src="/svg/grid.svg" className="img-fluid blur-up lazyload" alt="" />
                                                    </a>
                                                </li>
                                                <li className="list-btn">
                                                    <a href="undefined">
                                                        <img src="/svg/list.svg" className="img-fluid blur-up lazyload" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* label and featured section */}

                            {/* Prodcut setion */}
                            <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
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
                                                    <h5 className="ms-0">Slim Fit Plastic Coat</h5>
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
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="product-left-sidebar.html" className="font-default">
                                                    <h5 className="ms-0">Blue Leather Jacket</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Jacket</span>
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
                                                <span className="font-light grid-content">Coat</span>
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
                                                    <h5 className="ms-0">Military Ball Night Dress</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Coat</span>
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
                                                    <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Jacket</span>
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
                                                    <img src="/images/fashion/product/front/5.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/5.jpg" className="bg-img blur-up lazyload" alt="" />
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
                                                <span className="font-light grid-content">Full Jacket</span>
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
                                                    <h5 className="ms-0">Full Jacket Ladies</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Full Jacket</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$40.00</h3>
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
                                                    <img src="/images/fashion/product/front/6.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/6.jpg" className="bg-img blur-up lazyload" alt="" />
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
                                                <span className="font-light grid-content">T-Shirt</span>
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
                                                    <h5 className="ms-0">Full Slive Black T-Shirt</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">T-Shirt</span>
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
                                                    <img src="/images/fashion/product/front/7.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/7.jpg" className="bg-img blur-up lazyload" alt="" />
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
                                                <span className="font-light grid-content">Fashion</span>
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
                                                    <h5 className="ms-0">Latest Fashion Cloth</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Fashion</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$54.00</h3>
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
                                                    <img src="/images/fashion/product/front/8.jpg" className="bg-img blur-up lazyload" alt="" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="product-left-sidebar.html">
                                                    <img src="/images/fashion/product/back/8.jpg" className="bg-img blur-up lazyload" alt="" />
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
                                                    <h5 className="ms-0">Full Black Slive Jacket</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Jacket</span>
                                                    <p className="font-light">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus eaque illum,
                                                        quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat
                                                        quam officia, tempore repellendus.
                                                    </p>
                                                </div>
                                                <h3 className="theme-color">$99.00</h3>
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
                                                    <h5 className="ms-0">Slim Fit Plastic Coat</h5>
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
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="product-left-sidebar.html" className="font-default">
                                                    <h5 className="ms-0">Blue Leather Jacket</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Jacket</span>
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
                                                <span className="font-light grid-content">Coat</span>
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
                                                    <h5 className="ms-0">Military Ball Night Dress</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Coat</span>
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
                                                    <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                                </a>
                                                <div className="listing-content">
                                                    <span className="font-light">Jacket</span>
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
                                {/* Prodcut setion */}
                            </div>

                            <nav className="page-section">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="undefined" aria-label="Previous">
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="undefined">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="undefined">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="undefined">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" aria-label="Next">
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section end */}

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

            <Script src="/js/add-remove.js" strategy="afterInteractive"></Script>
            <Script src="/js/price-filter.js" strategy="afterInteractive"></Script>
            <Script src="/js/ion.rangeSlider.min.js" strategy="afterInteractive"></Script>
            <Script src="/js/filter.js" strategy="afterInteractive"></Script>
        </>
    );
}

export default ProductCategory;
