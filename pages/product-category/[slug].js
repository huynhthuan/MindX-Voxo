import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import SubscribeBox from "../../components/Common/SubscribeBox";
import Breadcrumb from "../../components/component_vuong/Common/Breadcrumb";
import PlaceHolderCard from "../../components/Product/PlaceHolderCard";
import ProductCard from "../../components/Product/ProductCard";
import Sidebar from "../../components/ProductCategory/Sidebar";
import { fetchApi, fetchApiGetCategories } from "../../src/api/Api_vuong/fetchApi";
import BannerDetail from "../../components/component_vuong/product-category/BannerDetail";
import Filter from "../../components/component_vuong/product-category/Filter";
import PagePagination from "../../components/component_vuong/Common/PagePagination";
import { errorModal } from "../../components/component_vuong/Common";
import { toast, ToastContainer } from "react-toastify";
import { dataFetch, dataSlice } from "./data";

function ProductCategory(props) {
   props = dataSlice;
   const queryClient = useQueryClient();
   const { query } = useRouter();
   const { page = "1" } = query;
   const { slug, per_page = "12" } = query;
   // const {
   //    isLoading,
   //    data = { data: [], headers: "" },
   //    error,
   //    isError,
   //    isFetching,
   // } = useQuery(["products", { ...query }], () => fetchApiGetCategories(query), {
   //    enabled: Boolean(slug),
   //    keepPreviousData: true,
   //    staleTime: 60000,
   // });
   let isLoading,
      error,
      isError,
      isFetching = false,
      data = dataFetch;

   useEffect(() => {
      queryClient.prefetchQuery(["products", { ...query, page: +page + 1 + "" }], () => fetchApiGetCategories({ ...query, page: +page + 1 + "" }));
   }, [data, page, queryClient, query]);

   useEffect(functionJquery, []);
   useEffect(() => {
      errorModal(isError, error);
   }, [isError, error]);

   const { headers, idCategory } = data;
   const { "x-wp-totalpages": totalPages = 0 } = headers;

   return (
      <>
         <Breadcrumb title="Shop Listing" content=" Shop Fashion" />
         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-4">
                     <Sidebar {...props} />
                  </div>
                  <div className="col-lg-9 col-12 ratio_30">
                     <BannerDetail />
                     <Filter idCategory={idCategory} slug={slug} />
                     <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
                        {isLoading || isFetching || isError ? (
                           Array(+per_page)
                              .fill(null)
                              .map((item, index) => <PlaceHolderCard key={index} />)
                        ) : data.data[0] ? (
                           data.data.map((item, index) => <ProductCard {...item} key={index} />)
                        ) : (
                           <p className="alert alert-warning w-100 text-center">There are no products in this category.</p>
                        )}
                     </div>
                     <PagePagination totalPages={totalPages} />
                  </div>
               </div>
            </div>
         </section>
         <SubscribeBox />
      </>
   );
}

// export const getStaticPaths = async () => {
//    return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: "blocking", //indicates the type of fallback
//    };
// };
// export const getStaticProps = async () => {
//    const resBrand = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/1/terms");
//    const resColor = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/2/terms");
//    const resSize = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/3/terms");
//    return { props: { resBrand: resBrand.data, resColor: resColor.data, resSize: resSize.data } };
// };

export default ProductCategory;

const functionJquery = () => {
   (function ($) {
      "use strict";
      $(".bg-top").parent().addClass("b-top");
      $(".bg-bottom").parent().addClass("b-bottom");
      $(".bg-center").parent().addClass("b-center");
      $(".bg-left").parent().addClass("b-left");
      $(".bg-right").parent().addClass("b-right");
      $(".bg_size_content").parent().addClass("b_size_content");
      $(".bg-img").parent().addClass("bg-size");
      $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
      $(".bg-img").each(function () {
         var el = $(this),
            src = el.attr("src"),
            parent = el.parent();

         parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            display: "block",
         });

         el.hide();
      });
   })(jQuery);

   feather.replace();

   $(function () {
      var $range = $(".js-range-slider"),
         $inputFrom = $(".js-input-from"),
         $inputTo = $(".js-input-to"),
         instance,
         min = 0,
         max = 5000,
         from = 0,
         to = 0;

      $range.ionRangeSlider({
         type: "double",
         min: min,
         max: max,
         from: 0,
         to: 3000,
         prefix: "$ ",
         onStart: updateInputs,
         onChange: updateInputs,
         step: 100,
         prettify_enabled: true,
         prettify_separator: ".",
         values_separator: " - ",
         force_edges: true,
      });

      instance = $range.data("ionRangeSlider");

      function updateInputs(data) {
         from = "$" + data.from;
         to = "$" + data.to;

         $inputFrom.prop("value", from);
         $inputTo.prop("value", to);
      }

      $inputFrom.on("input", function () {
         var val = $(this).prop("value");

         // validate
         if (val < min) {
            val = min;
         } else if (val > to) {
            val = to;
         }

         instance.update({
            from: val,
         });
      });

      $inputTo.on("input", function () {
         var val = $(this).prop("value");

         // validate
         if (val < from) {
            val = from;
         } else if (val > max) {
            val = max;
         }

         instance.update({
            to: val,
         });
      });
   });

   $(".filter-btn").click(function () {
      $(".bg-overlay, .category-option").addClass("show");
   });
   $(".button-close, .bg-overlay").click(function () {
      $(".bg-overlay, .category-option").removeClass("show");
   });

   var contentwidth = jQuery(window).width();
   if (contentwidth < "991") {
      $(".hide-btn").click(function () {
         $(".bg-overlay, .category-option").addClass("show");
      });
      $(".button-close, .bg-overlay").click(function () {
         $(".bg-overlay, .category-option").removeClass("show");
      });
   }

   $(".hide-btn").click(function () {
      var $this = $(this);
      $this.toggleClass("hide-btn");
      if ($this.hasClass("hide-btn")) {
         $this.text("Hide Filter");
      } else {
         $this.text("Show Filter");
      }
   });

   if ($(window).width() > "992") {
      $(".hide-btn").on("click", function (e) {
         $(".category-side").toggleClass("show");
         $(".category-product").toggleClass("col-lg-12");
         $(".category-product").toggleClass("col-lg-9");
      });
   }

   $(".onclick-title h6").click(function () {
      $(this).parent(".onclick-title").toggleClass("show").siblings().removeClass("show");
   });

   $(".filter-show-button a").click(function () {
      $(".bg-overlay, .top-filter-section").addClass("show");
   });
   $(".back-btn, .bg-overlay").click(function () {
      $(".bg-overlay, .top-filter-section").removeClass("show");
   });

   $(document).ready(function () {
      $(".save-details").click(function () {
         $(".save-details").removeClass("show");
         $(this).addClass("show");
      });
   });

   $(document).ready(function () {
      $(".category-box").click(function () {
         if (!$(this).hasClass("active")) {
            $(".category-box.active").removeClass("active");
            $(this).addClass("active");
         }
      });
   });

   $(document).ready(function () {
      $(".category-color li a").click(function () {
         if (!$(this).hasClass("active")) {
            $("i.active").removeClass("active");
            $(this).addClass("active");
         }
      });
   });

   $(".grid-options .grid-btn").on("click", function () {
      $(".product-list-section").removeClass("list-style");
   });

   $(".grid-options .list-btn").on("click", function () {
      $(".product-list-section").addClass("list-style");
   });

   $(".two-grid").on("click", function (e) {
      $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-2");
   });
   $(".three-grid").on("click", function (e) {
      $(".product-list-section").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style").addClass("row-cols-md-3 row-cols-2");
   });
   $(".grid-btn").on("click", function (e) {
      $(".product-list-section")
         .removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 list-style")
         .addClass("row-cols-lg-4 row-cols-md-3 row-cols-2");
   });
   $(".five-grid").on("click", function (e) {
      $(".product-list-section").removeClass("list-style").addClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2");
   });
   var contentwidth = $(window).width();
   if (contentwidth < "1199") {
      $(".grid-options .grid-btn").addClass("active");
   }
   if (contentwidth < "991") {
      $(".grid-options .three-grid").addClass("active");
   }
   if (contentwidth < "767") {
      $(".grid-options .two-grid").addClass("active");
   }

   $(".grid-options ul li").click(function () {
      $(".grid-options li.active").removeClass("active");
      $(this).addClass("active");
   });
};
