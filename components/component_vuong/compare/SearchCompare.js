import React, { useRef } from "react";
import algoliasearch from "algoliasearch/lite";
import { ClearRefinements, Configure, Hits, InstantSearch, Pagination, SearchBox } from "react-instantsearch-hooks-web";
import Hit from "./Hit";
import CustomSearchBox from "./CustomSearchBox";

function SearchCompare() {
   const searchClient = algoliasearch("IM4IS8NYBU", "8170a857ccd774d90ce8f2780527a6db");

   return (
     
         <div className="container">
            <InstantSearch searchClient={searchClient} indexName="product" >
               <div className="search-panel">
                  <div className="left-panel">
                     {/* <CustomRefinementList attribute="attributes.options"  limit={55} operator="or" showmore/> */}
                     <Configure hitsPerPage={10} />
                  </div>
                  <div className="search-panel__filters" ></div>
                  <div className="search-panel__results" >
                     {/* <SearchBox
                        placeholder="Search Product"
                        className="searchbox"
                   
                     /> */}
                     <CustomSearchBox>
                        <Hits hitComponent={Hit} />
                        <div className="pagination">
                           <Pagination />
                        </div>
                     </CustomSearchBox>
                  </div>
               </div>
            </InstantSearch>
         </div>
     
   );
}

export default SearchCompare;
