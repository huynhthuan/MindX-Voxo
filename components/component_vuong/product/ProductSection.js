import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchApiGetCategories, fetchApiProductSection } from "../../../src/api/Api_vuong/fetchApi";
import { useRouter } from "next/router";
import ProductCard from "../../Product/ProductCard";

function ProductSection({ id, categories }) {
   const {
      isLoading,
      data = [],
      error,
   } = useQuery(["ProductSection",id], () => fetchApiProductSection(categories[0].id, id), {
      enabled: Boolean(categories),
   });
   useEffect(() => {
      let slick = $(".slide-4").slick({
         dots: true,
         infinite: true,
         speed: 500,
         arrows: false,
         slidesToShow: 4,
         slidesToScroll: 1,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 2,
               },
            },
            {
               breakpoint: 420,
               settings: {
                  slidesToShow: 2,
               },
            },
         ],
      });

      return () => {
         slick.slick("unslick");
      };
   }, [data]);
   
   if (isLoading) return "Loading..."

   return (
      <section className="ratio_asos section-b-space overflow-hidden">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h2 className="mb-lg-4 mb-3 ">Customers Also Bought These</h2>
                  <div className="product-wrapper product-style-2 p-0 slide-4 light-arrow bottom-space">
                     {data.map((item, index) => (
                        <div key={index}>
                           <ProductCard {...item} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductSection;
