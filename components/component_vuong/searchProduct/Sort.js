import React from "react";

function Sort() {
   return (
      <div className="row g-4">
         <h3>25 Results Found</h3>

         {/* label and featured section */}
         {/* <div className="col-12">
            <ul className="short-name">
               <li>
                  <div className="label-tag">
                     <span>Shirts</span>
                     <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
               </li>
               <li>
                  <div className="label-tag">
                     <span>Kurtas</span>
                     <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
               </li>
               <li>
                  <div className="label-tag">
                     <span>Jackets</span>
                     <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
               </li>
               <li>
                  <div className="label-tag">
                     <span>Blazers</span>
                     <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
               </li>
               <li>
                  <div className="label-tag">
                     <a href="#">
                        <span>Clear All</span>
                     </a>
                  </div>
               </li>
            </ul>
         </div> */}

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
                           24 Page per view
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           <li>
                              <a className="dropdown-item" href="#">
                                 Alphabetically A-Z
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Alphabetically Z-A
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Price, High To Low
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Price, Low To High
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Date, Old To New
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Date, New To Old
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="dropdown select-featured">
                     <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Featured
                     </button>
                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                           <a className="dropdown-item" href="#">
                              Jeans
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              T-Shirt
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              Shirt
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              Jacket
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              Hoodie
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="grid-options d-sm-inline-block d-none">
                  <ul className="d-flex">
                     <li className="two-grid">
                        <a href="#">
                           <img src="/svg/grid-2.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="three-grid d-md-inline-block d-none">
                        <a href="#">
                           <img src="/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="grid-btn d-lg-inline-block d-none">
                        <a href="#">
                           <img src="/svg/grid.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="five-grid active d-xl-inline-block d-none">
                        <a href="#">
                           <img src="/svg/grid-5.svg" className="img-fluid blur-up lazyload" alt="" />
                        </a>
                     </li>
                     <li className="list-btn">
                        <a href="#">
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

export default Sort;
