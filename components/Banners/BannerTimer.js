import React, { useEffect } from 'react';

function BannerTimer() {
    useEffect(() => {
        let second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countDown = new Date('Aug 21, 2023 00:00:00').getTime();
        let timer = setInterval(function () {
            let now = new Date().getTime(),
                distance = countDown - now;

            $('#days1').text(Math.floor(distance / day));
            $('#hours1').text(Math.floor((distance % day) / hour));
            $('#minutes1').text(Math.floor((distance % hour) / minute));
            $('#seconds1').text(Math.floor((distance % minute) / second));
        }, second);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="timer-banner-style-2">
            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-12">
                        <div className="discount-image-details discount-spacing">
                            <img
                                src="images/fashion/banner/8.jpg"
                                className="bg-img blur-up lazyload"
                                alt=""
                            />

                            <div className="discunt-details">
                                <div>
                                    <div className="heart-button heart-button-2">
                                        <i className="fas fa-heart theme-color"></i>
                                    </div>

                                    <h5 className="mt-3">
                                        Special Discount{' '}
                                        <span className="theme-color">
                                            70% OFF
                                        </span>
                                    </h5>
                                    <h2 className="my-3 deal-text">
                                        Deal Of The Day <br />
                                        from{' '}
                                        <span className="theme-color">$75</span>
                                    </h2>
                                    <div className="timer-style-2 mt-xl-1 my-2 justify-content-center d-flex">
                                        <ul>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="days1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Days
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="hours1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Hour
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="minutes1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Min
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="seconds1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Sec
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn default-light-theme default-theme mt-2"
                                    >
                                        Shop Now
                                    </button>

                                    <div className="timer-bg timer-bg-center d-lg-block d-none">
                                        <h3 className="mt-0">Latest Jacket</h3>
                                        <span>BUY ONE GET ONE FREE</span>
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

export default BannerTimer;
