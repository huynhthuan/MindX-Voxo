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
            <Configure hitsPerPage={4} />
            <CustomSearchBox />
            <CustomHits />
      </div>
   );
}

export default Search;
