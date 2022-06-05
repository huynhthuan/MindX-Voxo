import React from "react";

function Filter() {
   return (
      <div className="row gx-4 gy-5 mt-1">
         <div className="col-12">
            <div className="filter-show-button mb-3">
               <a href="#" className="mobile-filter border-top-0">
                  <i data-feather="align-left" className="img-fluid blur-up lazyloaded"></i>
                  <h5>latest filter</h5>
               </a>
            </div>
         </div>

         <div className="col-12 m-0">
            <div className="top-filter-section">
               <ul>
                  <li className="back-btn">
                     <div className="mobile_back text-end">
                        <span>Back</span>
                        <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
                     </div>
                  </li>

                  <li className="filter-title">
                     <h6 className="theme-color">filter :</h6>
                  </li>

                  <li className="onclick-title">
                     <h6>Category</h6>
                     <ul className="onclick-content">
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Art
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault11" />
                              <label className="form-check-label" htmlFor="flexCheckDefault11">
                                 Style
                              </label>
                           </div>
                        </li>
                     </ul>
                  </li>

                  <li className="onclick-title">
                     <h6>Material</h6>
                     <ul className="onclick-content">
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault12" />
                              <label className="form-check-label" htmlFor="flexCheckDefault12">
                                 Plastic
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault18" />
                              <label className="form-check-label" htmlFor="flexCheckDefault18">
                                 Plywood
                              </label>
                           </div>
                        </li>
                     </ul>
                  </li>

                  <li className="onclick-title">
                     <h6>Price</h6>
                     <ul className="onclick-content">
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault19" />
                              <label className="form-check-label" htmlFor="flexCheckDefault19">
                                 Rs. 120 to Rs. 300
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault20" />
                              <label className="form-check-label" htmlFor="flexCheckDefault20">
                                 Rs. 300 to Rs. 425
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault21" />
                              <label className="form-check-label" htmlFor="flexCheckDefault21">
                                 Rs. 425 to Rs. 540
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault22" />
                              <label className="form-check-label" htmlFor="flexCheckDefault22">
                                 Rs. 540 to Rs. 600
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault23" />
                              <label className="form-check-label" htmlFor="flexCheckDefault23">
                                 Rs. 600 to Rs. 760
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault24" />
                              <label className="form-check-label" htmlFor="flexCheckDefault24">
                                 Rs. 760 to Rs. 850
                              </label>
                           </div>
                        </li>
                     </ul>
                  </li>

                  <li className="onclick-title">
                     <h6>Discount</h6>
                     <ul className="onclick-content">
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault25" />
                              <label className="form-check-label" htmlFor="flexCheckDefault25">
                                 10% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault26" />
                              <label className="form-check-label" htmlFor="flexCheckDefault26">
                                 20% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault27" />
                              <label className="form-check-label" htmlFor="flexCheckDefault27">
                                 30% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault28" />
                              <label className="form-check-label" htmlFor="flexCheckDefault28">
                                 40% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault29" />
                              <label className="form-check-label" htmlFor="flexCheckDefault29">
                                 50% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault30" />
                              <label className="form-check-label" htmlFor="flexCheckDefault30">
                                 60% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault31" />
                              <label className="form-check-label" htmlFor="flexCheckDefault31">
                                 70% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault32" />
                              <label className="form-check-label" htmlFor="flexCheckDefault32">
                                 80% and above
                              </label>
                           </div>
                        </li>
                     </ul>
                  </li>

                  <li className="onclick-title">
                     <h6>Default Sorting</h6>
                     <ul className="onclick-content">
                        <li className="dropdown-list">
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault33" />
                              <label className="form-check-label" htmlFor="flexCheckDefault33">
                                 Sort By Popularity
                              </label>
                           </div>
                        </li>
                        <li className="dropdown-list">
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault34" />
                              <label className="form-check-label" htmlFor="flexCheckDefault34">
                                 Sort by average rating
                              </label>
                           </div>
                        </li>
                        <li className="dropdown-list">
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault35" />
                              <label className="form-check-label" htmlFor="flexCheckDefault35">
                                 Sort by latest
                              </label>
                           </div>
                        </li>
                        <li className="dropdown-list">
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault36" />
                              <label className="form-check-label" htmlFor="flexCheckDefault36">
                                 Sort by price: low to high
                              </label>
                           </div>
                        </li>
                        <li className="dropdown-list">
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault37" />
                              <label className="form-check-label" htmlFor="flexCheckDefault37">
                                 Sort by price: high to low
                              </label>
                           </div>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Filter;
