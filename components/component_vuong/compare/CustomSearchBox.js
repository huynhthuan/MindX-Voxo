import React from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";

function CustomSearchBox(props) {
   const { query, refine, clear, isSearchStalled } = useSearchBox();

   const elementInputSearch = document.getElementById("input-scroll");

   if (query) {
      location.href = "#scroll-search";
      elementInputSearch.focus();
   }
   return (
      <>
         <section className="search-section mt-5 p-0">
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
                           <a href="#scroll-search" id="scroll-click"></a>
                           <input
                              id="input-scroll"
                              type="search"
                              className="form-control"
                              placeholder="Search"
                              onChange={(e) => {
                                 refine(e.target.value);
                              }}
                           />
                           <button className="input-group-text" id="basic-addon3">
                              <i className="fas fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {query && props.children}
      </>
   );
}

export default CustomSearchBox;
