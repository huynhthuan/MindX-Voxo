import React, { useEffect, useState } from "react";
import { ClearRefinements, useClearRefinements, useRange, useRefinementList } from "react-instantsearch-hooks-web";
import { functionJqueryProductCategory } from "../Common";

function FilterSearchProduct({ resBrand, resColor = [], resSize, sortHits, setSortHits }) {
   const refinementListColor = useRefinementList({ attribute: "attributes.options", limit: 55 });
   const refinementListPrice = useRefinementList({ attribute: "price", limit: 55 });
   const { canRefine, createURL, refine: refineClearRefinements } = useClearRefinements();
   const { refine: refineColor, items: itemsColor } = refinementListColor;
   const { refine: refinePrice, items: itemsPrice } = refinementListPrice;
   const rangePrice =useRange({attribute:'price'})
   // console.log(`  ~ rangePrice`, rangePrice.range.max)

   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   const handleCheckedFilterColor = (name) => {
      refineColor(name);
   };

   const handleCheckedPrice = (index) => {
      const price = itemsPrice
         .map((item) => item.value)
         .filter((price) => {
            if (index !== 9 && price <= (index + 1) * 10 && price > index * 10) return price;
         });
      price.map((price) => refinePrice(price));
      // refineRange([index*10,(index+1)*10])
   };
   // const handleClearRefinements = () => {
   //    refineClearRefinements();
   // };

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
                  {/* <button className="btn btn-warning rounded p-2" onClick={() => handleClearRefinements()}>
                     Clear All
                  </button>
                  <ClearRefinements
                     classNames={{
                        button: "btn btn-warning rounded  p-2",
                        disabledButton: "btn btn-light rounded p-2",
                     }}
                  /> */}
                  <li className="onclick-title">
                     <h6>Color</h6>
                     <ul className="onclick-content">
                        {resColor.map(({ name }, index) => (
                           <li key={index}>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    onChange={() => handleCheckedFilterColor(name)}
                                 />
                                 <label className="form-check-label" htmlFor="flexCheckDefault12">
                                    {name}
                                 </label>
                              </div>
                           </li>
                        ))}
                     </ul>
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
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault1" />
                              <label className="form-check-label" htmlFor="flexCheckDefault1">
                                 Bedroom
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault2" />
                              <label className="form-check-label" htmlFor="flexCheckDefault2">
                                 Chair
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault3" />
                              <label className="form-check-label" htmlFor="flexCheckDefault3">
                                 Creative
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault4" />
                              <label className="form-check-label" htmlFor="flexCheckDefault4">
                                 Design
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault5" />
                              <label className="form-check-label" htmlFor="flexCheckDefault5">
                                 Furniture
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault6" />
                              <label className="form-check-label" htmlFor="flexCheckDefault6">
                                 Gardan
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault7" />
                              <label className="form-check-label" htmlFor="flexCheckDefault7">
                                 Home
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault8" />
                              <label className="form-check-label" htmlFor="flexCheckDefault8">
                                 Inside
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault9" />
                              <label className="form-check-label" htmlFor="flexCheckDefault9">
                                 Kitchen
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault10" />
                              <label className="form-check-label" htmlFor="flexCheckDefault10">
                                 Living Room
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
                              <input
                                 className="checkbox_animated check-it"
                                 type="checkbox"
                                 id="flexCheckDefault12"
                                 onChange={(e) => handleCheckedFilterColor(e, name)}
                              />
                              <label className="form-check-label" htmlFor="flexCheckDefault12">
                                 Ali
                              </label>
                           </div>
                        </li>

                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault13" />
                              <label className="form-check-label" htmlFor="flexCheckDefault13">
                                 Wood
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault14" />
                              <label className="form-check-label" htmlFor="flexCheckDefault14">
                                 Metal
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault15" />
                              <label className="form-check-label" htmlFor="flexCheckDefault15">
                                 Glass
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault16" />
                              <label className="form-check-label" htmlFor="flexCheckDefault16">
                                 Texttile
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault17" />
                              <label className="form-check-label" htmlFor="flexCheckDefault17">
                                 Steel
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
                        {Array(Math.round(rangePrice.range.max/10))
                           .fill(0)
                           .map((item, index) => (
                              <li key={index}>
                                 <div className="form-check ps-0 custome-form-check">
                                    <input
                                       className="checkbox_animated check-it"
                                       type="checkbox"
                                       id="flexCheckDefault19"
                                       onChange={() => handleCheckedPrice(index)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault19">
                                       Rs. {index * 10} to Rs. {(index + 1) * 10}
                                    </label>
                                 </div>
                              </li>
                           ))}
                     </ul>
                  </li>
                  {/* <li className="onclick-title">
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
                  </li> */}

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

                  {/* <li className="onclick-title">
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
                  </li> */}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default FilterSearchProduct;
