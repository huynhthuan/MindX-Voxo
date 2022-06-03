import React from "react";
import { conventToCurrency } from "../Common";
import Link from "next/link";

function MostPopularCard(props) {
   const {
      acf: { front_image },
      categories,
      name,
      price,
      regular_price,
      slug,
   } = props;
   return (
      <div className="product-slider round-arrow1">
         <div className="row g-3">
            <div className="col-12">
               <div className="product-image">
                  <Link href={"/product/" + slug} passHref>
                     <a>
                        <img src={front_image} className="blur-up lazyload" alt="" />
                     </a>
                  </Link>
                  <div className="product-details">
                     <h6 className="font-light">{categories[0].name}</h6>
                     <Link href={"/product/" + slug} passHref>
                        <a className="">
                           <h3>{name}</h3>
                        </a>
                     </Link>
                     <h4 className="font-light mt-1">
                        <del hidden={regular_price === price}>{conventToCurrency(regular_price)}</del>{" "}
                        <span className="theme-color">{conventToCurrency(price)}</span>
                     </h4>
                  </div>
               </div>
               {props.children}
            </div>
         </div>
      </div>
   );
}

export default MostPopularCard;
