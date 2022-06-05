import React from "react";
import { Pagination, useHits, useSearchBox } from "react-instantsearch-hooks-web";
import ProductCard from "../../Product/ProductCard";
import PagePagination from "../Common/PagePagination";

function CustomHitSearchProduct({ hit }) {
   const { hits, results, bindEvent, sendEvent } = useHits();
   const { query } = useSearchBox();
   const { nbPages } = results;
   return (
      <>
         <div className="row g-sm-4 g-3 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gx-sm-4 gx-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
            {hits.map((item, index) => (
               <ProductCard key={index} {...item} />
            ))}
            {hits.length > 0 || !query ? (
               <PagePagination className="mt-3" totalPages={nbPages} />
            ) : (
               <p className="alert alert-warning mt-3 w-100 text-center ">There is no result</p>
            )}
         </div>
      </>
   );
}

export default CustomHitSearchProduct;
