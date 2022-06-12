import Script from "next/script";
import { useRouter } from "next/router";
import { fetchApiProductBySlug } from "../../src/api/Api_vuong/fetchApi";
import { useQuery } from "react-query";
import SubscribeBox from "../../components/Common/SubscribeBox";
import ShopSection from "../../components/component_vuong/product/ShopSection";
import ProductSection from "../../components/component_vuong/product/ProductSection";
import ClothReview from "../../components/component_vuong/product/ClothReview";
import { useEffect, useState } from "react";
import PlaceHolderShopSection from "../../components/component_vuong/product/PlaceHolderShopSection";
import { errorModal, functionJquery, functionJqueryProductCategory, functionJquerySearchFull } from "../../components/component_vuong/Common";
import PlaceHolderClothReview from "../../components/component_vuong/product/PlaceHolderClothReview";
import PlaceHolderProductSection from "../../components/component_vuong/product/PlaceHolderProductSection";
import { useDispatch, useSelector } from "react-redux";
import { addRecentlyViewedProducts } from "../../store/recentlyViewedProducts/recentlyViewedProductsSlice";
import Breadcrumb from "../../components/Common/BreadCrumb";

function ProductDetail() {
   const router = useRouter();
   const {
      query: { slug },
      isReady,
   } = router;
   const recentlyViewedProducts = useSelector((state) => state.recentlyViewedProducts);
   const dispatch = useDispatch();

   const {
      isLoading,
      error,
      data = {},
      isError,
      isFetching,
   } = useQuery(["product", slug], () => fetchApiProductBySlug(slug), { enabled: Boolean(slug) });
   
   if (isReady && !slug) {
      router.push({
         pathname: `/404`,
      });
   }
   useEffect(() => {
      errorModal(isError, error);
   }, [isError, error]);

   useEffect(() => {
      if (data.id) {
         dispatch(addRecentlyViewedProducts(data));
      }
   }, [data]);

   useEffect(() => {
      functionJquerySearchFull();
   }, []);

   if (!slug) return null;
   if (data.data_null) {
      router.push("/404");
      return;
   }

   return (
      <>
         <Breadcrumb title="Product Sticky" />

         {isLoading || isError || isFetching ? <PlaceHolderShopSection /> : <ShopSection {...data} />}
         {isLoading || isError || isFetching ? <PlaceHolderClothReview /> : <ClothReview {...data} />}
         {isLoading || isError || isFetching ? <PlaceHolderProductSection /> : <ProductSection {...data} />}

         <SubscribeBox />
         <Script src="/js/sticky-cart-bottom.js" strategy="afterInteractive"></Script>
         {/* <Script src="/js/timer.js" strategy="afterInteractive"></Script> */}
         <Script src="/js/check-box-select.js" strategy="afterInteractive"></Script>
         <Script src="/js/ion.rangeSlider.min.js" strategy="afterInteractive"></Script>
         <Script src="/js/filter.js" strategy="afterInteractive"></Script>
         <Script src="/js/cart_modal_resize.js" strategy="afterInteractive"></Script>
      </>
   );
}

export default ProductDetail;
