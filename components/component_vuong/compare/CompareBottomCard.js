import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import OnSale from "../product/OnSale";
import { conventToCurrency, functionJquery } from "../Common";
import { useDispatch } from "react-redux";
import { removeProductCompare } from "../../../store/compare/compareSlice";

function CompareBottomCard({ id, price, name, regular_price, images, on_sale, slug, typeSmall, categories }) {
   const dispatch = useDispatch();
   const elementCompareBottom = document.getElementById("compare-bottom");
   
   const handleCollapse = () => {
      console.log('ssss');
      elementCompareBottom?.setAttribute("hidden",true);
   };
   const handleRemove = (id = "", event) => {
      event.preventDefault();
      dispatch(removeProductCompare(id));
   };

   useEffect(() => {
      functionJquery();
   }, [id]);

   return (
      <div>
         {!name ? (
            <div  className="compare-button-card">
               <div className="d-flex justify-content-center ">
                  <button type="button" className="btn rounded-pill mt-3  border" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleCollapse}>
                     <div className="fs-4 fw-lighter">+</div>
                  </button>
               </div>
            </div>
         ) : (
            <div className="product-box position-relative compare-button-card" >
               <button type="button" className="btn-close" onClick={(event) => handleRemove(id, event)}></button>
               <div className=" round-arrow1">
                  <div className="row g-3">
                     <div className="col-12">
                        <div className="product-image ">
                           <Link href={"/product/" + slug}>
                              <a className="w-100 blur-up lazyload">
                                 <img src={images[0].src} className="img-fluid bg-img blur-up lazyload" alt={images[0].alt} />
                              </a>
                           </Link>
                           <div className="product-details" hidden={false}>
                              <Link href={"/product/" + slug} passHref>
                                 <h3>{name}</h3>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default CompareBottomCard;
