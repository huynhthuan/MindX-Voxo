import { useRouter } from "next/router";
import { useEffect } from "react";
import { Configure, useSearchBox } from "react-instantsearch-hooks-web";
import { functionJquerySearchFull } from "../component_vuong/Common";
import CustomSearchBoxNavBar from "../component_vuong/searchBar/CustomSearchBoxNavBar";
import HitNavbar from "../component_vuong/searchBar/HitNavbar";

function SearchBar() {
   const { query, refine, clear, isSearchStalled } = useSearchBox();
   const router = useRouter();
   
   useEffect(() => {
      functionJquerySearchFull();
   }, []);

   useEffect(() => {
      if (query.length >0 && router.pathname !== "/search-product") {
         router.push("/search-product/?product[query]=" + query);
      }
   }, [query.length]);

   return (
      <div className="search-full ">
         <Configure hitsPerPage={4} />
         <CustomSearchBoxNavBar />
         <HitNavbar />
      </div>
   );
}

export default SearchBar;
