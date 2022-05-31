import React from "react";
import { conventToCurrency } from "../Common";

function MostPopularCard(props) {
    const {acf:{front_image},categories,name,price,regular_price}=props
   console.log(`  ~ props`, props)
   return (
      <div className="product-slider round-arrow1">
         <div className="row g-3">
            <div className="col-12">
               <div className="product-image">
                  <a >
                     <img src={front_image} className="blur-up lazyload" alt="" />
                  </a>
                  <div className="product-details">
                     <h6 className="font-light">{categories[0].name}</h6>
                     <a  className="">
                        <h3>{name}</h3>
                     </a>
                     <h4 className="font-light mt-1">
                        <del>{conventToCurrency(regular_price)}</del> <span className="theme-color">{conventToCurrency(price)}</span>
                     </h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MostPopularCard;
