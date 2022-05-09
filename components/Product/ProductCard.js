import { useEffect } from "react";
import { conventToCurrency } from "../Common_vuong";
import RatingDetails from "./RatingDetails";

function ProductCart({ id, price, name, rating_count, categories, images, average_rating, sale_price, on_sale, featured }) {
   useEffect(() => {
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
   }, []);

   return (
      <div className="product-box">
         <div className="img-wrapper">
            <div className="front">
               <a href="product-left-sidebar.html">
                  <img src={images[0].src} className="bg-img blur-up lazyload" alt="" />
               </a>
            </div>
            <div className="back">
               <a href="product-left-sidebar.html">
                  <img src={images[4].src} className="bg-img blur-up lazyload" alt="" />
               </a>
            </div>
            <div className="label-block">
               {featured && <span className="label label-black">New</span>}
               {on_sale && <span className="label label-theme">{sale_price}% Off</span>}
            </div>
            <div className="cart-wrap">
               <ul>
                  <li>
                     <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                        <i data-feather="shopping-bag"></i>
                     </a>
                  </li>
                  <li>
                     <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                        <i data-feather="eye"></i>
                     </a>
                  </li>
                  <li>
                     <a href="compare.html">
                        <i data-feather="refresh-cw"></i>
                     </a>
                  </li>
                  <li>
                     <a href="wishlist.html" className="wishlist">
                        <i data-feather="heart"></i>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="product-details">
            <div className="rating-details">
               <span className="font-light grid-content">{categories[0].name}</span>
               <RatingDetails rating={average_rating} />
            </div>
            <div className="main-price">
               <a href="product-left-sidebar.html" className="font-default">
                  <h5>{name}</h5>  
               </a>
               <div className="listing-content">
                  <span className="font-light">Jacket</span>
                  <p className="font-light">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid ab ducimus
                     eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem eveniet! Dolorum magnam numquam, asperiores
                     accusantium architecto placeat quam officia, tempore repellendus.
                  </p>
               </div>
               <h3 className="theme-color">{conventToCurrency(price)}</h3>
               <button className="btn listing-content">Add To Cart</button>
            </div>
         </div>
      </div>
   );
}

export default ProductCart;
