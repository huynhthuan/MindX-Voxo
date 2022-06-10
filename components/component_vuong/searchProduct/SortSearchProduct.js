import React, { useEffect } from "react";
import { useHits, useSortBy } from "react-instantsearch-hooks-web";
import { functionJqueryProductCategory } from "../Common";

function SortSearchProduct({ setHitsPerPage, hitsPerPage }) {
   const {
 hits,
      results: { nbHits },
 
   } = useHits();
//  console.log(`  ~ hits`, hits[0])

   const { refine} = useSortBy({
      items: [
         { label: "Featured", value: "product" },
         { label: "Price (asc)", value: "price_asc" },
         { label: "Price (desc)", value: "price_desc" },
         { label: "Name (asc)", value: "name_asc" },
         { label: "Name (desc)", value: "name_desc" },
         { label: "Date (asc)", value: "date-asc" },
         { label: "Date (desc)", value: "date-desc" },
      ],
   });
   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   const handleSort = (value) => {
      refine(value);
   };

   return (
      <div className="row g-4">
         <h3>{nbHits} Results Found</h3>

         <div className="col-12">
            <div className="filter-options">
               <div className="select-options">
                  <div className="page-view-filter">
                     <div className="dropdown select-featured">
                        <button
                           className="btn dropdown-toggle"
                           type="button"
                           id="dropdownMenuButton1"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           {/* 24 Page per view */}
                           Sort Items
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           <li role='button' onClick={() => handleSort("name-asc")}>
                              <a className="dropdown-item">Alphabetically A-Z</a>
                           </li>
                           <li role='button' onClick={() => handleSort("name-desc")}>
                              <a className="dropdown-item">Alphabetically Z-A</a>
                           </li>
                           <li role='button' onClick={() => handleSort("price-asc")}>
                              <a className="dropdown-item">Price, High To Low</a>
                           </li>
                           <li role='button' onClick={() => handleSort("price-desc")}>
                              <a className="dropdown-item">Price, Low To High</a>
                           </li>
                           <li role='button' onClick={() => handleSort("date-asc")}>
                              <a className="dropdown-item">Date, Old To New</a>
                           </li>
                           <li role='button' onClick={() => handleSort("date-desc")}>
                              <a className="dropdown-item">Date, New To Old</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="dropdown select-featured">
                     <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {hitsPerPage} Page per view
                     </button>
                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {[10, 20, 40].map((num, index) => (
                           <li key={index} onClick={() => setHitsPerPage(num)} role="button">
                              <a className="dropdown-item">{num} Page per view</a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="grid-options d-sm-inline-block d-none">
                  <ul className="d-flex">
                     <li className="two-grid">
                        <a >
                           <img src="/svg/grid-2.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="three-grid d-md-inline-block d-none">
                        <a >
                           <img src="/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="grid-btn d-lg-inline-block d-none">
                        <a >
                           <img src="/svg/grid.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="five-grid active d-xl-inline-block d-none">
                        <a >
                           <img src="/svg/grid-5.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="list-btn">
                        <a >
                           <img src="/svg/list.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SortSearchProduct;
