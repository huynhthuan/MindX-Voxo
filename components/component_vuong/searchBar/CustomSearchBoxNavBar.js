import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useSearchBox } from "react-instantsearch-hooks-web";
import { functionJqueryProductCategory, functionJquerySearchFull } from "../Common";

function CustomSearchBoxNavBar() {
   const { query, refine, clear } = useSearchBox();
   const router = useRouter();
   const ref = useRef();

   useEffect(() => {
      functionJquerySearchFull();
   }, []);

   useEffect(() => {
      const refValue = ref.current.value;
      refine(refValue);
      
      return () => {
         clear();
      };
   }, [router.pathname]);

   return (
      <div className="input-group">
         <span className="input-group-text">
            <i data-feather="search" className="font-light"></i>
         </span>
         <input
            type="text"
            className="form-control search-type"
            placeholder="Search here.."
            defaultValue={query}
            ref={ref}
            onChange={(e) => refine(e.target.value)}
         />
         <span className="input-group-text close-search">
            <i data-feather="x" className="font-light"></i>
         </span>
      </div>
   );
}

export default CustomSearchBoxNavBar;
