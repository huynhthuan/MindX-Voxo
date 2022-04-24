import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import Script from 'next/script';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/favicon/2.png" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/images/favicon/2.png" />
                <meta name="theme-color" content="#e22454" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="apple-mobile-web-app-title" content="Voxo" />
                <meta name="msapplication-TileImage" content="/images/favicon/2.png" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />

                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Voxo" />
                <meta name="keywords" content="Voxo" />
                <meta name="author" content="Voxo" />
                <link rel="icon" href="/images/favicon/2.png" type="image/x-icon" />
                <title>Voxo</title>

                <link rel="preconnect" href="https://fonts.gstatic.com/" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
                <script src="/js/jquery-3.5.1.min.js"></script>
            </Head>

            <Navbar />
            <main>{children}</main>
            <Footer />

            <Script src="/js/bootstrap/bootstrap.bundle.min.js" strategy="afterInteractive"></Script>

            <Script src="/js/feather/feather.min.js" strategy="beforeInteractive"></Script>

            <Script src="/js/lazysizes.min.js" strategy="afterInteractive"></Script>

            <Script src="/js/slick/slick.js" strategy="beforeInteractive"></Script>
            <Script src="/js/slick/slick-animation.min.js" strategy="beforeInteractive"></Script>
            <Script src="/js/slick/custom_slick.js" strategy="afterInteractive"></Script>

            <Script src="/js/newsletter.js" strategy="afterInteractive"></Script>

            <Script src="/js/cart_modal_resize.js" strategy="afterInteractive"></Script>

            <Script src="/js/cart_modal_resize.js" strategy="afterInteractive"></Script>

            <Script src="/js/bootstrap/bootstrap-notify.min.js" strategy="afterInteractive"></Script>

            <Script src="/js/script.js" strategy="afterInteractive"></Script>
        </>
    );
}
