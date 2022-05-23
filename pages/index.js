import React, { Fragment, useEffect } from 'react';
import BannerProductCategory from '../components/Banners/BannerProductCategory';
import BannerProductCategoryGrid from '../components/Banners/BannerProductCategoryGrid';
import BannerTimer from '../components/Banners/BannerTimer';
import CategorySlider from '../components/Home/CategorySlider';
import InstagramSlider from '../components/Home/InstagramSlider';
import ProductGrid from '../components/Home/ProductGrid';
import Services from '../components/Home/Services';
import Slider from '../components/Home/Slider';

export async function getStaticProps() {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    // return {
    //   props: {
    //     posts,
    //   },
    // }
}

export default function Home({dataHome}) {
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
    }, []);

    return (
        <Fragment>
            <Slider />

            <BannerProductCategory />

            {/* <ProductGrid /> */}

            <CategorySlider />

            <BannerProductCategoryGrid />

            {/* <ProductGrid /> */}

            <BannerTimer />

            <InstagramSlider />

            <Services />
        </Fragment>
    );
}
