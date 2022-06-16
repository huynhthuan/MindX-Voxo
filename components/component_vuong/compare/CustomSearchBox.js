import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchBox } from "react-instantsearch-hooks-web";

let timer = 0;

function CustomSearchBox() {
   const { query, refine, clear, isSearchStalled } = useSearchBox();

   const elementInput = document.getElementById("input-search");
   const handleSearch = (e) => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
         refine(elementInput.value);
      }, 500);
   };
 

   return (
      <>
         <section className="search-section  p-0">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="title title1 text-center m-0">
                        <h3>Search For Products</h3>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-8 mx-auto ">
                     <div className="search-bar">
                        <div className="input-group search-bar w-100 mb-3">
                           <input
                              id="input-search"
                              type="search"
                              className="form-control"
                              placeholder="Search"
                              defaultValue={query}
                              onChange={(e) => handleSearch(e)}
                           />
                           <button className="input-group-text" id="basic-addon3" onClick={handleSearch}>
                              <i className="fas fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default CustomSearchBox;
