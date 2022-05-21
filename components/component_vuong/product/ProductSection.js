import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchApiGetCategories, fetchApiProductSection } from "../../../src/api/Api_vuong/fetchApiGetCategories";
import { useRouter } from "next/router";
import ProductCard from "../../Product/ProductCard";

function ProductSection({ id, categories }) {
   const router = useRouter();
   const {
      isLoading,
      data = [],
      error,
   } = useQuery("ProductSection", () => fetchApiProductSection(categories[0].id, id), {
      enabled: Boolean(categories),
   });
   useEffect(() => {
      // $(document).ready(function () {
      //    $(".autoplay").slick({
      //       slidesToShow: 5,
      //       slidesToScroll: 1,
      //       autoplay: true,
      //       autoplaySpeed: 1500,
      //       speed: 1000,
      //    });
      // });

      $(".slide-4").slick({
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
   }, [data]);
   if (isLoading) return <div>Loading...</div>;
   const handleClick = (slug, id) => {
      slug = slug || "no-name";
      router.push(`/product/${slug}?id=${id}`);
   };
   return (
      <section className="ratio_asos section-b-space overflow-hidden ">
         {/* <div className="container">
            <div className="row g-sm-4 g-3  mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section  autoplay">
               {data.map((item, index) => (
                  <ProductCard {...item} key={index} />
               ))}
            </div>
         </div> */}
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h2 className="mb-lg-4 mb-3 ">Customers Also Bought These</h2>
                  <div className="row g-4 ratio_asos slider-for">
                     <div className="">
                        {data.map((item, index) => (
                           <ProductCard {...item} key={index} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductSection;
