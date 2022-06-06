import React from "react";
import { Pagination, useHits, usePagination, useSearchBox } from "react-instantsearch-hooks-web";
import ProductCard from "../../Product/ProductCard";
import PagePagination from "../Common/PagePagination";

function CustomHitSearchProduct({ hit }) {
   const { hits, results, bindEvent, sendEvent } = useHits();
   console.log(`  ~ hits`, hits[0])
   const { query } = useSearchBox();
   const { isFirstPage, isLastPage, canRefine, createURL, currentRefinement, nbHits, nbPages, pages, refine } = usePagination();

   return (
      <>
         <div className="row g-sm-4 g-3 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gx-sm-4 gx-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
            {hits.map((item, index) => (
               <ProductCard key={index} {...item} />
            ))}
         </div>
         {hits.length > 0 || !query ? (
            <Pagination
               totalPages={results.nbPages}
               padding={4}
               showFirst={!isFirstPage}
               showNext={false}
               showPrevious={false}
               showLast={!isLastPage}
               classNames={{
                  root: "page-section mb-3",
                  list: "pagination",
                  item: "page-item",
                  selectedItem: "page-item active",
                  link:'page-link',
               }}
            />
         ) : (
            <p className="alert alert-warning mt-3 w-100 text-center ">There is no result</p>
         )}
      </>
   );
}

export default CustomHitSearchProduct;
