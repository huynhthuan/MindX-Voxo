import React, { useEffect } from "react";
import Link from "next/link";
import OnSale from "../product/OnSale";
import { conventToCurrency, functionJquery } from "../Common";

function CompareItem({ id, price, name, regular_price, images, on_sale, slug }) {
   useEffect(() => {
      functionJquery();
   }, [id]);

   return (
      <td>
         {!name ? (
            // <Link href={"/product/smocked-cotton-dress"} passHref>
            //    <button>ADD</button>
            // </Link>
             <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Compare
             </button>
         ) : (
            <div className="product-box">
               <div className="product-image">
                  <Link href={"/product/" + slug}>
                     <a className="w-100 blur-up lazyload">
                        <img src={images[0].src} className="img-fluid bg-img blur-up lazyload" alt={images[0].alt} />
                     </a>
                  </Link>
               </div>
               <div className="product-details">
                  <div>
                     <a>
                        <h6 className="fw-bold">{name}</h6>
                     </a>
                  </div>

                  <div className="price-details mt-2">
                     <h6 className="font-green">
                        {conventToCurrency(price)}
                        <span className="font-light mx-2">{conventToCurrency(regular_price)}</span>
                        <OnSale type="compare" on_sale={on_sale} price={price} regular_price={regular_price} />
                     </h6>
                  </div>
               </div>
            </div>
         )}
      </td>
   );
}

export default CompareItem;
