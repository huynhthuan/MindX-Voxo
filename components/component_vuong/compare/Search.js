import React from "react";
import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-hooks-web";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";
import { configSearch } from "../Common";

function Search() {
   const { appId, apikey, indexName } = configSearch;
   const searchClient = algoliasearch(appId, apikey);

   return (
      <div className="container">
         <InstantSearch searchClient={searchClient} indexName={indexName}>
            <div className="search-panel">
               <div className="left-panel">
                  <Configure hitsPerPage={4} />
                  {/* <CustomRefinementList attribute="attributes.options"  limit={55} operator="or" showmore/> */}
               </div>
               <div className="search-panel__filters"></div>
               <div className="search-panel__results">
                  <CustomSearchBox>
                     <CustomHits />
                  </CustomSearchBox>
               </div>
            </div>
         </InstantSearch>
      </div>
   );
}

export default Search;
