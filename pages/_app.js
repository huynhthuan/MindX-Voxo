import store, { persistor } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Layout from '../components/Layout';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

import '../styles/globals.css';

import NextNProgress from 'nextjs-progressbar';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <NextNProgress
                        color="#dc3545"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={4}
                        showOnShallow={true}
                    />
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
