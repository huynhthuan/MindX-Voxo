import React, { useEffect, useState } from "react";
import { ClearRefinements, RangeInput, useClearRefinements, useRange, useRefinementList } from "react-instantsearch-hooks-web";
import { RefinementList } from "react-instantsearch-hooks-web";
import { functionJqueryProductCategory } from "../Common";
import RangeSlider from "../product-category/RangeSlider";

function FilterSearchProduct() {
   const refinementListColor = useRefinementList({ attribute: "attributes_color", limit: Infinity });
   const refinementListPrice = useRefinementList({ attribute: "price", limit: Infinity });
   const refinementListCategory = useRefinementList({ attribute: "categories_product", limit: Infinity });
   const refinementListMaterial = useRefinementList({ attribute: "material", limit: Infinity });

   const { canRefine, createURL, refine: refineClearRefinements } = useClearRefinements({ includedAttributes: "price" });
   console.log(`  ~ canRefine`, canRefine);

   const { refine: refineColor, items: itemsColor } = refinementListColor;
   const { refine: refinePrice, items: itemsPrice } = refinementListPrice;
   const { refine: refineCategory, items: itemsCategory } = refinementListCategory;
   const { refine: refineMaterial, items: itemsMaterial } = refinementListMaterial;

   // const rangePrice = useRange({ attribute: "price" });

   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   const handleCheckedPrice = (index) => {
      const price = itemsPrice
         .map((item) => item.value)
         .filter((price) => {
            if (index !== 9 && price <= (index + 1) * 10 && price > index * 10) return price;
         });
      price.map((price) => refinePrice(price));
      // refineRange([index*10,(index+1)*10])
   };
   const handleClearRefinements = () => {
      console.log("s");
      refineClearRefinements();
   };

   const listFilter = [
      { name: "Color", listItems: itemsColor, refine: refineColor },
      { name: "Category", listItems: itemsCategory, refine: refineCategory },
      { name: "Material", listItems: itemsMaterial, refine: refineMaterial },
   ];

   return (
      <div className="row gx-4 gy-5 ">
         <div className="col-12">
            <div className="filter-show-button mb-1">
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
                     <h6 className="theme-color">
                        filter :
                        <button className="btn btn-danger rounded p-2 ms-4" onClick={() => handleClearRefinements()} hidden={!canRefine}>
                           Clear All
                        </button>
                     </h6>
                  </li>
                  {/* <ClearRefinements
                  includedAttributes={'price'}
                     classNames={{
                        button: "btn btn-warning rounded  p-2",
                        disabledButton: "btn btn-light rounded p-2",
                     }}
                  /> */}
                  {listFilter.map(({ name, listItems, refine }) => (
                     <li className="onclick-title" key={name}>
                        <h6>{name}</h6>
                        <ul className="onclick-content">
                           {listItems.map(({ value, count }, index) => (
                              <li key={index}>
                                 <div className="form-check ps-0 custome-form-check">
                                    <input
                                       className="checkbox_animated check-it"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                       defaultChecked={false}
                                       onChange={() => refine(value)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault12">
                                       {value}
                                    </label>
                                    <div className="ms-auto">({count})</div>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </li>
                  ))}

                  <li className="onclick-title">
                     <h6>Price</h6>

                     <RangeSlider />

                     {/* <RefinementList
                        attribute="price"
                        classNames={{
                           list: "onclick-content",
                           item: "form-check ps-0 custome-form-check",
                           checkbox: "checkbox_animated check-it",
                           label: "form-check-label",
                        }}
                     /> */}

                     {/* <ul className="onclick-content">
                        {Array(Math.round(rangePrice.range.max / 10))
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
                     </ul> */}
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
               </ul>
            </div>
         </div>
      </div>
   );
}

export default FilterSearchProduct;
