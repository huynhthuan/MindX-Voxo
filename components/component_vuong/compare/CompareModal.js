import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import { useSelector } from "react-redux";
import ProductCard from "../../Product/ProductCard";
import { functionJquery, getListCompare } from "../Common";
import AddCompare from "./AddCompare";
import Search from "./Search";

// function CompareModal() {
//    const [render, setRender] = useState(false);
//    console.log(`  ~ render`, render);
//    return <CompareModalChildren />;
//    return (
//       <div className="" id="render-compare-modal" onClick={() => setRender(true)}>
//          {/* {render && <CompareModalChildren />} */}
//       </div>
//    );
// }

function CompareModal() {
   const recentlyViewed = useSelector((state) => state.recentlyViewedProducts.entities);
   const listRecentlyViewed = Object.values(recentlyViewed);
   const { clear } = useSearchBox();
   const router = useRouter();

   useEffect(() => {
      functionJquery();
   }, []);

   useEffect(() => {
      const elementCloseModal = document.getElementById("close-modal");
      return () => {
         elementCloseModal.click();
      };
   }, [router.pathname]);

   return (
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-xl ">
            <div className="modal-content">
               <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                     <div className="d-flex justify-content-center mt-3 ms-5 ">Recently Viewed Products</div>
                  </h3>
                  <button type="button" className="btn-close mt-2" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body ratio_30 ">
                  <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-2 row-cols-2 mt-1 mb-4 custom-gy-5 product-style-2 ratio_asos product-list-section mx-3">
                     {listRecentlyViewed.slice(0, 4).map((item, key) => (
                        <ProductCard {...item} key={key} disAction>
                           <AddCompare item={item} />
                        </ProductCard>
                     ))}
                  </div>

                  {/* Search compare */}
                  <Search />
               </div>
               <div className="modal-footer">
                  <button type="button" id="close-modal" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => clear()}>
                     Close
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CompareModal;
