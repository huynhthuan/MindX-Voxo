import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import OnSale from "../product/OnSale";
import { conventToCurrency, functionJquery } from "../Common";
import { useDispatch } from "react-redux";
import { removeProductCompare } from "../../../store/compare/compareSlice";

function CompareItem({ id, price, name, regular_price, images, on_sale, slug }) {
   const dispatch = useDispatch();
   const handleRemove = (id = "", event) => {
      event.preventDefault();
      dispatch(removeProductCompare(id));
   };
   useEffect(() => {
      functionJquery();
   }, [id]);

   return (
      <td>
         {!name ? (
            <div style={{ minHeight: "300px" }}>
               <div className="d-flex justify-content-center ">
                  <button type="button" className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Add Product
                  </button>
               </div>
               <div className="d-flex justify-content-center h-100 m-2 fs-6">Compare more product</div>
            </div>
         ) : (
            <div className="product-box position-relative">
               <button type="button" className="btn-close fs-6 position-absolute" onClick={(event) => handleRemove(id, event)}></button>
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
                        <span hidden={!on_sale} className="font-light mx-2">
                           {conventToCurrency(regular_price)}
                        </span>
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
