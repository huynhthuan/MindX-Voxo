import store, { persistor } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Layout from '../components/Layout';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

import '../styles/vendors/bootstrap.css';
import '../styles/vendors/font-awesome.css';
import '../styles/vendors/feather-icon.css';
import '../styles/vendors/animate.css';
import '../styles/vendors/ion.rangeSlider.min.css';
import '../styles/vendors/slick/slick.css';
import '../styles/vendors/slick/slick-theme.css';
import '../styles/demo2.css';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <SkeletonTheme
                            baseColor="#eaeaea"
                            highlightColor="#fff"
                        >
                            <Component {...pageProps} />
                        </SkeletonTheme>
                    </Layout>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
