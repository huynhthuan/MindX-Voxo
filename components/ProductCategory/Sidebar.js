import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import MostPopular from "./MostPopular";
import RangeSlider from "../component_vuong/product-category/RangeSlider";
import { Configure, RefinementList, useRefinementList } from "react-instantsearch-hooks-web";
import FilterItemsComponent from "../component_vuong/searchProduct/FilterItemsComponent";
import AccordionCategory from "./AccordionCategory";
import RatingDetails from "../Product/RatingDetails";
import AccordionRating from "./AccordionRating";
import { functionJqueryProductCategory } from "../component_vuong/Common";
import AccordionDiscount from "./AccordionDiscount";

function Sidebar() {

   useEffect(() => {
      functionJqueryProductCategory();
   }, []);
   return (
      <div className="category-option">
         <div className="button-close mb-3">
            <button className="btn p-0">
               <i data-feather="arrow-left"></i> Close
            </button>
         </div>
         <div className="accordion category-name" id="accordionExample">
            <AccordionCategory attribute="pa_brand" name="Brand" />
            <AccordionCategory attribute="price" name="Price">
               <RangeSlider />
            </AccordionCategory>
            <AccordionCategory attribute="pa_color" name="Color" />
            <AccordionCategory attribute="average_rating" name="Rating">
               <AccordionRating />
            </AccordionCategory>
            <AccordionCategory attribute="discount" name="Discount" >
               <AccordionDiscount/>
            </AccordionCategory>

            <MostPopular />
         </div>
      </div>
   );
}

export default Sidebar;
