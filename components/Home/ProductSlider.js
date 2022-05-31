import React, { useEffect } from 'react';

export default function ProductSlider({ dataProduct }) {
    const { title, subtitle, products } = dataProduct;
    useEffect(() => {
        let slider = $('.slide-4').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        return () => slider.slick('unslick');
    }, []);

    return (
        <section class="ratio_asos">
            <div class="container">
                <div class="row m-0">
                    <div class="col-sm-12 p-0">
                        <div class="title title-2 text-center">
                            <h2>{title}</h2>
                            <h5 class="text-color">{subtitle}</h5>
                        </div>
                        <div class="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space">
                            <div>
                                <div class="product-box">
                                    <div class="img-wrapper">
                                        <div class="front">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/front/1.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="back">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/back/1.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="cart-wrap">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="addtocart-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#addtocart"
                                                    >
                                                        <i data-feather="shopping-bag"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quick-view"
                                                    >
                                                        <i data-feather="eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i data-feather="refresh-cw"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="wishlist.html"
                                                        class="wishlist"
                                                    >
                                                        <i data-feather="heart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-details">
                                        <div class="rating-details">
                                            <span class="font-light grid-content">
                                                B&Y Jacket
                                            </span>
                                            <ul class="rating mt-0">
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="main-price">
                                            <a
                                                href="product-left-sidebar.html"
                                                class="font-default"
                                            >
                                                <h5>Slim Fit Plastic Coat</h5>
                                            </a>
                                            <div class="listing-content">
                                                <span class="font-light">
                                                    Regular Fit
                                                </span>
                                                <p class="font-light">
                                                    Lorem ipsum, dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Sit, deserunt?
                                                    Asperiores aliquam
                                                    voluptatum culpa aliquid ab
                                                    ducimus eaque illum,
                                                    quibusdam reiciendis id ad
                                                    consectetur quis, animi qui,
                                                    minus quidem eveniet!
                                                    Dolorum magnam numquam,
                                                    asperiores accusantium
                                                    architecto placeat quam
                                                    officia, tempore
                                                    repellendus.
                                                </p>
                                            </div>
                                            <h3 class="theme-color">$78.00</h3>
                                            <button
                                                onclick="location.href = 'cart.html';"
                                                class="btn listing-content"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="product-box">
                                    <div class="img-wrapper">
                                        <div class="front">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/front/2.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="back">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/back/2.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="label-block">
                                            <span class="label label-black">
                                                New
                                            </span>
                                            <span class="label label-theme">
                                                50% Off
                                            </span>
                                        </div>
                                        <div class="cart-wrap">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="addtocart-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#addtocart"
                                                    >
                                                        <i data-feather="shopping-bag"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quick-view"
                                                    >
                                                        <i data-feather="eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i data-feather="refresh-cw"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="wishlist.html"
                                                        class="wishlist"
                                                    >
                                                        <i data-feather="heart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-details">
                                        <div class="rating-details">
                                            <span class="font-light grid-content">
                                                Jacket
                                            </span>
                                            <ul class="rating mt-0">
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="main-price">
                                            <a
                                                href="product-left-sidebar.html"
                                                class="font-default"
                                            >
                                                <h5>Blue Leather Jacket</h5>
                                            </a>
                                            <div class="listing-content">
                                                <span class="font-light">
                                                    Regular Fit
                                                </span>
                                                <p class="font-light">
                                                    Lorem ipsum, dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Sit, deserunt?
                                                    Asperiores aliquam
                                                    voluptatum culpa aliquid ab
                                                    ducimus eaque illum,
                                                    quibusdam reiciendis id ad
                                                    consectetur quis, animi qui,
                                                    minus quidem eveniet!
                                                    Dolorum magnam numquam,
                                                    asperiores accusantium
                                                    architecto placeat quam
                                                    officia, tempore
                                                    repellendus.
                                                </p>
                                            </div>
                                            <h3 class="theme-color">$60.00</h3>
                                            <button
                                                onclick="location.href = 'cart.html';"
                                                class="btn listing-content"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="product-box">
                                    <div class="img-wrapper">
                                        <div class="front">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/front/3.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="back">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/back/3.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="cart-wrap">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="addtocart-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#addtocart"
                                                    >
                                                        <i data-feather="shopping-bag"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quick-view"
                                                    >
                                                        <i data-feather="eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i data-feather="refresh-cw"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="wishlist.html"
                                                        class="wishlist"
                                                    >
                                                        <i data-feather="heart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-details">
                                        <div class="rating-details">
                                            <span class="font-light grid-content">
                                                Dress
                                            </span>
                                            <ul class="rating mt-0">
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="main-price">
                                            <a
                                                href="product-left-sidebar.html"
                                                class="font-default"
                                            >
                                                <h5>
                                                    Military Ball Night Dress
                                                </h5>
                                            </a>
                                            <div class="listing-content">
                                                <span class="font-light">
                                                    Regular Fit
                                                </span>
                                                <p class="font-light">
                                                    Lorem ipsum, dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Sit, deserunt?
                                                    Asperiores aliquam
                                                    voluptatum culpa aliquid ab
                                                    ducimus eaque illum,
                                                    quibusdam reiciendis id ad
                                                    consectetur quis, animi qui,
                                                    minus quidem eveniet!
                                                    Dolorum magnam numquam,
                                                    asperiores accusantium
                                                    architecto placeat quam
                                                    officia, tempore
                                                    repellendus.
                                                </p>
                                            </div>
                                            <h3 class="theme-color">$85.00</h3>
                                            <button
                                                onclick="location.href = 'cart.html';"
                                                class="btn listing-content"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="product-box">
                                    <div class="img-wrapper">
                                        <div class="front">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/front/4.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="back">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/back/4.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="label-block">
                                            <span class="label label-black">
                                                New
                                            </span>
                                            <span class="label label-theme">
                                                50% Off
                                            </span>
                                        </div>
                                        <div class="cart-wrap">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="addtocart-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#addtocart"
                                                    >
                                                        <i data-feather="shopping-bag"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quick-view"
                                                    >
                                                        <i data-feather="eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i data-feather="refresh-cw"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="wishlist.html"
                                                        class="wishlist"
                                                    >
                                                        <i data-feather="heart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-details">
                                        <div class="rating-details">
                                            <span class="font-light grid-content">
                                                Jacket
                                            </span>
                                            <ul class="rating mt-0">
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="main-price">
                                            <a
                                                href="product-left-sidebar.html"
                                                class="font-default"
                                            >
                                                <h5>
                                                    Full Slive Yellow Jacket
                                                </h5>
                                            </a>
                                            <div class="listing-content">
                                                <span class="font-light">
                                                    Regular Fit
                                                </span>
                                                <p class="font-light">
                                                    Lorem ipsum, dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Sit, deserunt?
                                                    Asperiores aliquam
                                                    voluptatum culpa aliquid ab
                                                    ducimus eaque illum,
                                                    quibusdam reiciendis id ad
                                                    consectetur quis, animi qui,
                                                    minus quidem eveniet!
                                                    Dolorum magnam numquam,
                                                    asperiores accusantium
                                                    architecto placeat quam
                                                    officia, tempore
                                                    repellendus.
                                                </p>
                                            </div>
                                            <h3 class="theme-color">$69.00</h3>
                                            <button
                                                onclick="location.href = 'cart.html';"
                                                class="btn listing-content"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="product-box">
                                    <div class="img-wrapper">
                                        <div class="front">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/front/2.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="back">
                                            <a href="product-left-sidebar.html">
                                                <img
                                                    src="/images/fashion/product/back/2.jpg"
                                                    class="bg-img blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="label-block">
                                            <span class="label label-black">
                                                New
                                            </span>
                                            <span class="label label-theme">
                                                50% Off
                                            </span>
                                        </div>
                                        <div class="cart-wrap">
                                            <ul>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        class="addtocart-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#addtocart"
                                                    >
                                                        <i data-feather="shopping-bag"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quick-view"
                                                    >
                                                        <i data-feather="eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="compare.html">
                                                        <i data-feather="refresh-cw"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="wishlist.html"
                                                        class="wishlist"
                                                    >
                                                        <i data-feather="heart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-details">
                                        <div class="rating-details">
                                            <span class="font-light grid-content">
                                                Jacket
                                            </span>
                                            <ul class="rating mt-0">
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star theme-color"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="main-price">
                                            <a
                                                href="product-left-sidebar.html"
                                                class="font-default"
                                            >
                                                <h5>Blue Leather Jacket</h5>
                                            </a>
                                            <div class="listing-content">
                                                <span class="font-light">
                                                    Regular Fit
                                                </span>
                                                <p class="font-light">
                                                    Lorem ipsum, dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Sit, deserunt?
                                                    Asperiores aliquam
                                                    voluptatum culpa aliquid ab
                                                    ducimus eaque illum,
                                                    quibusdam reiciendis id ad
                                                    consectetur quis, animi qui,
                                                    minus quidem eveniet!
                                                    Dolorum magnam numquam,
                                                    asperiores accusantium
                                                    architecto placeat quam
                                                    officia, tempore
                                                    repellendus.
                                                </p>
                                            </div>
                                            <h3 class="theme-color">$60.00</h3>
                                            <button
                                                onclick="location.href = 'cart.html';"
                                                class="btn listing-content"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
