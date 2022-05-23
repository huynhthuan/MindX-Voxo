import Script from "next/script";
import { useRouter } from "next/router";
import { fetchApiProductBySlug } from "../../src/api/Api_vuong/fetchApi";
import { useQuery } from "react-query";
import Breadcrumb from "../../components/component_vuong/Common/Breadcrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import ShopSection from "../../components/component_vuong/product/ShopSection";
import ProductSection from "../../components/component_vuong/product/ProductSection";
import ClothReview from "../../components/component_vuong/product/ClothReview";
import { useEffect, useState } from "react";

function ProductDetail() {
   const { slug } = useRouter().query;
   const { isLoading, error, data={} } = useQuery(["product", slug], () => fetchApiProductBySlug(slug), { enabled: Boolean(slug) });
   if(isLoading) return 'Loading...'
   // console.log(`  ~ data product`, data)
   return (
      <>
         <Breadcrumb title="Product Sticky" content="Product Sticky" />
         <ShopSection {...data} />
         <ClothReview {...data}/>
         <ProductSection {...data}/>
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
