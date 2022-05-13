import Script from 'next/script';
import { useEffect } from 'react';
import SubscribeBox from '../../components/Common/SubscribeBox';
import ProductCard from '../../components/Product/ProductCard';
import Sidebar from '../../components/ProductCategory/Sidebar';

function ProductCategory() {
    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.bg-img').each(function () {
                var el = $(this),
                    src = el.attr('src'),
                    parent = el.parent();

                parent.css({
                    'background-image': 'url(' + src + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    display: 'block',
                });

                el.hide();
            });
        })(jQuery);

        feather.replace();

        $(function () {
            var $range = $('.js-range-slider'),
                $inputFrom = $('.js-input-from'),
                $inputTo = $('.js-input-to'),
                instance,
                min = 0,
                max = 5000,
                from = 0,
                to = 0;

            $range.ionRangeSlider({
                type: 'double',
                min: min,
                max: max,
                from: 0,
                to: 3000,
                prefix: '$ ',
                onStart: updateInputs,
                onChange: updateInputs,
                step: 100,
                prettify_enabled: true,
                prettify_separator: '.',
                values_separator: ' - ',
                force_edges: true,
            });

            instance = $range.data('ionRangeSlider');

            function updateInputs(data) {
                from = '$' + data.from;
                to = '$' + data.to;

                $inputFrom.prop('value', from);
                $inputTo.prop('value', to);
            }

            $inputFrom.on('input', function () {
                var val = $(this).prop('value');

                // validate
                if (val < min) {
                    val = min;
                } else if (val > to) {
                    val = to;
                }

                instance.update({
                    from: val,
                });
            });

            $inputTo.on('input', function () {
                var val = $(this).prop('value');

                // validate
                if (val < from) {
                    val = from;
                } else if (val > max) {
                    val = max;
                }

                instance.update({
                    to: val,
                });
            });
        });

        $('.filter-btn').click(function () {
            $('.bg-overlay, .category-option').addClass('show');
        });
        $('.button-close, .bg-overlay').click(function () {
            $('.bg-overlay, .category-option').removeClass('show');
        });

        var contentwidth = jQuery(window).width();
        if (contentwidth < '991') {
            $('.hide-btn').click(function () {
                $('.bg-overlay, .category-option').addClass('show');
            });
            $('.button-close, .bg-overlay').click(function () {
                $('.bg-overlay, .category-option').removeClass('show');
            });
        }

        $('.hide-btn').click(function () {
            var $this = $(this);
            $this.toggleClass('hide-btn');
            if ($this.hasClass('hide-btn')) {
                $this.text('Hide Filter');
            } else {
                $this.text('Show Filter');
            }
        });

        if ($(window).width() > '992') {
            $('.hide-btn').on('click', function (e) {
                $('.category-side').toggleClass('show');
                $('.category-product').toggleClass('col-lg-12');
                $('.category-product').toggleClass('col-lg-9');
            });
        }

        $('.onclick-title h6').click(function () {
            $(this)
                .parent('.onclick-title')
                .toggleClass('show')
                .siblings()
                .removeClass('show');
        });

        $('.filter-show-button a').click(function () {
            $('.bg-overlay, .top-filter-section').addClass('show');
        });
        $('.back-btn, .bg-overlay').click(function () {
            $('.bg-overlay, .top-filter-section').removeClass('show');
        });

        $(document).ready(function () {
            $('.save-details').click(function () {
                $('.save-details').removeClass('show');
                $(this).addClass('show');
            });
        });

        $(document).ready(function () {
            $('.category-box').click(function () {
                if (!$(this).hasClass('active')) {
                    $('.category-box.active').removeClass('active');
                    $(this).addClass('active');
                }
            });
        });

        $(document).ready(function () {
            $('.category-color li a').click(function () {
                if (!$(this).hasClass('active')) {
                    $('i.active').removeClass('active');
                    $(this).addClass('active');
                }
            });
        });

        $('.grid-options .grid-btn').on('click', function () {
            $('.product-list-section').removeClass('list-style');
        });

        $('.grid-options .list-btn').on('click', function () {
            $('.product-list-section').addClass('list-style');
        });

        $('.two-grid').on('click', function (e) {
            $('.product-list-section')
                .removeClass(
                    'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style'
                )
                .addClass('row-cols-2');
        });
        $('.three-grid').on('click', function (e) {
            $('.product-list-section')
                .removeClass(
                    'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style'
                )
                .addClass('row-cols-md-3 row-cols-2');
        });
        $('.grid-btn').on('click', function (e) {
            $('.product-list-section')
                .removeClass(
                    'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style'
                )
                .addClass('row-cols-lg-4 row-cols-md-3 row-cols-2');
        });
        $('.five-grid').on('click', function (e) {
            $('.product-list-section')
                .removeClass('list-style')
                .addClass(
                    'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2'
                );
        });
        var contentwidth = $(window).width();
        if (contentwidth < '1199') {
            $('.grid-options .grid-btn').addClass('active');
        }
        if (contentwidth < '991') {
            $('.grid-options .three-grid').addClass('active');
        }
        if (contentwidth < '767') {
            $('.grid-options .two-grid').addClass('active');
        }

        $('.grid-options ul li').click(function () {
            $('.grid-options li.active').removeClass('active');
            $(this).addClass('active');
        });
    }, []);

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
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
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
                            <Sidebar />
                        </div>

                        <div className="col-lg-9 col-12 ratio_30">
                            <div className="banner-deatils">
                                <div className="banner-image">
                                    <img
                                        src="/images/fashion/banner.jpg"
                                        className="img-fluid bg-img blur-up lazyload"
                                        alt=""
                                    />
                                    <div className="banner-content">
                                        <div>
                                            <h3>Shop The Latest Trends</h3>
                                            <p>
                                                Shop the latest clothing trends
                                                with our weekly edit of what's
                                                new in online at Voxo. From out
                                                latest woman collection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-contain mt-3 mb-5">
                                    <p className="font-light">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged.
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
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Kurtas</span>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Jackets</span>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Blazers</span>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    aria-label="Close"
                                                ></button>
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
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        24 Page per view
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu"
                                                        aria-labelledby="dropdownMenuButton1"
                                                    >
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="undefined"
                                                            >
                                                                Alphabetically
                                                                A-Z
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="undefined"
                                                            >
                                                                Alphabetically
                                                                Z-A
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="undefined"
                                                            >
                                                                Price, High To
                                                                Low
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="undefined"
                                                            >
                                                                Price, Low To
                                                                High
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="undefined"
                                                            >
                                                                Date, Old To New
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="undefined"
                                                            >
                                                                Date, New To Old
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="dropdown select-featured">
                                                <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Select Featured
                                                </button>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton1"
                                                >
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="undefined"
                                                        >
                                                            Jeans
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="undefined"
                                                        >
                                                            T-Shirt
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="undefined"
                                                        >
                                                            Shirt
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="undefined"
                                                        >
                                                            Jacket
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="undefined"
                                                        >
                                                            Hoodie
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="grid-options d-sm-inline-block d-none">
                                            <ul className="d-flex">
                                                <li className="two-grid">
                                                    <a>
                                                        <img
                                                            src="/svg/grid-2.svg"
                                                            className="img-fluid blur-up lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="three-grid d-md-inline-block d-none">
                                                    <a>
                                                        <img
                                                            src="/svg/grid-3.svg"
                                                            className="img-fluid blur-up lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="grid-btn active d-lg-inline-block d-none">
                                                    <a>
                                                        <img
                                                            src="/svg/grid.svg"
                                                            className="img-fluid blur-up lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="list-btn">
                                                    <a>
                                                        <img
                                                            src="/svg/list.svg"
                                                            className="img-fluid blur-up lazyload"
                                                            alt=""
                                                        />
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
                                    <ProductCard />
                                </div>
                                {/* Prodcut setion */}
                            </div>

                            <nav className="page-section">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                            aria-label="Previous"
                                        >
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            aria-label="Next"
                                        >
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

            <SubscribeBox />
        </>
    );
}

export default ProductCategory;
