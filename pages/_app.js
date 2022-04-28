import { SessionProvider } from 'next-auth/react';

import Layout from '../components/Layout';

import '../styles/vendors/bootstrap.css';
import '../styles/vendors/font-awesome.css';
import '../styles/vendors/feather-icon.css';
import '../styles/vendors/animate.css';
import '../styles/vendors/ion.rangeSlider.min.css';
import '../styles/vendors/slick/slick.css';
import '../styles/vendors/slick/slick-theme.css';
import '../styles/demo2.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;
