import Swal from "sweetalert2";

export const conventToCurrency = (price) =>
   Number(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
   });
export const convertObjectToParams = (obj) =>
   Object.entries(obj)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

export const filter_meta_data = (meta_data, keyTotal, keyFirst, keySecond) => {
   let arrFilter = [];
   const totalItem = meta_data.filter((item, index) => item.key === keyTotal)[0]?.value;
   for (let index = 0; index < totalItem; index++) {
      const valueFirst = meta_data.filter((item) => item.key === `${keyTotal}_${index}_${keyFirst}`)[0]?.value;
      const valueSecond = meta_data.filter((item) => item.key === `${keyTotal}_${index}_${keySecond}`)[0]?.value;
      arrFilter.push({ [keyFirst]: valueFirst, [keySecond]: valueSecond });
   }
   return arrFilter;
};

export const errorModal = (isError, error) => {
   if (isError) {
      Swal.fire({
         title: "Error!",
         text: error,
         icon: "error",
         confirmButtonText: "Close",
      });
   }
};

export const functionJquery = () => {
   console.log('jq');
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
};