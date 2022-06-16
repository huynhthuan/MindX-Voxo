import React from "react";
import { Configure} from "react-instantsearch-hooks-web";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

function Search() {
   return (
      <div className="container">
            <Configure hitsPerPage={4} />
            <CustomSearchBox />
            <CustomHits />
      </div>
   );
}

export default Search;
