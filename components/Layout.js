import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/auth/authSlice';
import { ToastContainer, toast, Slide } from 'react-toastify';

function Layout({ children }) {
    let { cookie_expiration, cookie } = useSelector((state) => state.auth);
    let dispatch = useDispatch();
    const { theme } = useSelector((state) => state.webSetting);
    useEffect(() => {
        if (!cookie) {
            return;
        }

        let cookieCheck = setInterval(() => {
            if (moment().format('X') >= cookie_expiration) {
                toast.warn('Your login session has expired!', {
                    position: 'bottom-left',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                dispatch(logOut());
                clearInterval(cookieCheck);
            }
        }, 1000);

        return () => clearInterval(cookieCheck);
    }, [cookie_expiration]);

    useEffect(() => {
        if (theme === 'light') {
            $('body').removeClass('dark');
            $('body').addClass('light');
        } else {
            $('body').removeClass('light');
            $('body').addClass('dark');
        }
    }, [theme]);

    return (
        <Fragment>
            <Head>
                <link
                    rel="icon"
                    href="/images/favicon/2.png"
                    type="image/x-icon"
                />
                <link rel="apple-touch-icon" href="/images/favicon/2.png" />
                <meta name="theme-color" content="#e22454" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta name="apple-mobile-web-app-title" content="Voxo" />
                <meta
                    name="msapplication-TileImage"
                    content="/images/favicon/2.png"
                />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com/"
                    crossOrigin="true"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com/"
                    crossOrigin="true"
                />

                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="Voxo" />
                <meta name="keywords" content="Voxo" />
                <meta name="author" content="Voxo" />
                <link
                    rel="icon"
                    href="/images/favicon/2.png"
                    type="image/x-icon"
                />
                <title>Voxo</title>
                <link rel="preconnect" href="https://fonts.gstatic.com/" />
            </Head>

            <Navbar />

            <main>{children}</main>
            <Footer />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Slide}
            />
        </Fragment>
    );
}

export default Layout;
