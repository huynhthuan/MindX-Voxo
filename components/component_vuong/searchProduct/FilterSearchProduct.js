import React, { useEffect, useState } from "react";
import { ClearRefinements, RangeInput, useClearRefinements, useRange, useRefinementList } from "react-instantsearch-hooks-web";
import { RefinementList } from "react-instantsearch-hooks-web";
import { functionJqueryProductCategory } from "../Common";
import CustomRangeSlider from "../product-category/RangeSlider";
import RangeSlider from "../product-category/RangeSlider";
import FilterItemsComponent from "./FilterItemsComponent";

function FilterSearchProduct() {
   const [renderRangeSlider, setRenderRangeSlider] = useState(1);
   const refinementListColor = useRefinementList({ attribute: "attributes_color", limit: Infinity });
   const refinementListCategory = useRefinementList({ attribute: "categories_product", limit: Infinity });
   const refinementListMaterial = useRefinementList({ attribute: "material", limit: Infinity });
   const refinementListDiscount = useRefinementList({ attribute: "discount", limit: Infinity });

   const {
      canRefine,
      createURL,
      refine: refineClearRefinements,
   } = useClearRefinements({ includedAttributes: ["price", "attributes_color", "categories_product", "material"] });

   const { refine: refineColor, items: itemsColor } = refinementListColor;
   const { refine: refineCategory, items: itemsCategory } = refinementListCategory;
   const { refine: refineMaterial, items: itemsMaterial } = refinementListMaterial;
   const { refine: refineDiscount, items: itemsDiscount } = refinementListDiscount;

   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   const handleClearRefinements = () => {
      refineClearRefinements();
      const elementChecked = document.getElementsByClassName("checkbox_animated check-it");
      const listElement = [...elementChecked];
      listElement.map((element, index) => {
         element.checked = false;
      });
      setRenderRangeSlider(renderRangeSlider+1);
   };

   const filterColor = { name: "Color", listItems: itemsColor, refine: refineColor },
      filterCategory = { name: "Category", listItems: itemsCategory, refine: refineCategory },
      filterMaterial = { name: "Material", listItems: itemsMaterial, refine: refineMaterial },
      filterDiscount = { name: "Discount", listItems: itemsDiscount, refine: refineDiscount };

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
                        <button className="btn btn-danger rounded p-2 ms-4 " onClick={() => handleClearRefinements()} hidden={!canRefine}>
                           Clear All
                        </button>
                     </h6>
                  </li>

                  <FilterItemsComponent {...filterColor} />
                  <FilterItemsComponent {...filterCategory} />
                  <FilterItemsComponent {...filterMaterial} />

                  <li className="onclick-title">
                     <h6>Price</h6>
                     {/* {1 && <RangeSlider />} */}
                     <div className="onclick-content">
                     <CustomRangeSlider  />

                     </div>
                  </li>

                  {/* <FilterItemsComponent {...filterDiscount} disCount /> */}

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
