import store, { persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NextNProgress from "nextjs-progressbar";

import Layout from "../components/Layout";

import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import "../styles/vendors/bootstrap.css";
import "../styles/vendors/font-awesome.css";
import "../styles/vendors/feather-icon.css";
import "../styles/vendors/animate.css";
import "../styles/vendors/ion.rangeSlider.min.css";
import "../styles/vendors/slick/slick.css";
import "../styles/vendors/slick/slick-theme.css";
import "@sendbird/uikit-react/dist/index.css";
import "../styles/globals.css";
import "../styles/compare.css";
import "../styles/style_minhhieu/index.css";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { configSearch, updateData } from "../components/component_vuong/Common";
import algoliasearch from "algoliasearch";
import { useRouter } from "next/router";
import { useEffect } from "react";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

const { appId, apikey, indexName } = configSearch;
const searchClient = algoliasearch(appId, apikey);
const index = searchClient.initIndex('product');

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   useEffect(() => {
      updateData(index)
   }, [])
   
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
               <NextNProgress color="#dc3545" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />
               <InstantSearch searchClient={searchClient} indexName={indexName} routing={router.pathname!=='/compare'}>
                  <Layout>
                     <SkeletonTheme baseColor="#eaeaea" highlightColor="#fff">
                        <Component {...pageProps} />
                     </SkeletonTheme>
                  </Layout>
               </InstantSearch>
               <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
         </PersistGate>
      </Provider>
   );
}

export default MyApp;
