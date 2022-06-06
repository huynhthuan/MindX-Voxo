import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchBox } from "react-instantsearch-hooks-web";
import { functionJqueryProductCategory, functionJquerySearchFull } from "../Common";

function CustomSearchBoxNavBar() {
   const { query, refine ,clear} = useSearchBox();
   const router = useRouter();
   useEffect(() => {
      functionJquerySearchFull();
   }, []);
   useEffect(() => {
      return () => {
         clear();
         console.log(`  ~ clear`);
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
            onChange={(e) => refine(e.target.value)}
         />
         <span className="input-group-text close-search">
            <i data-feather="x" className="font-light"></i>
         </span>
      </div>
   );
}

export default CustomSearchBoxNavBar;
