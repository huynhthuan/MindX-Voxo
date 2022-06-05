import React from "react";
import { useSelector } from "react-redux";
import MostPopularCard from "../product-category/MostPopularCard";
import AddCompare from "./AddCompare";
function HitCompare({ hit }) {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = Object.values(compareProduct);

   return (
      <div className="d-flex my-2">
         <MostPopularCard {...hit} className='m-0 p-0' hiddenCategories/>
         <div className="ms-auto">
            <AddCompare listCompare={listCompare} item={hit} />
         </div>
      </div>
   );
}

export default HitCompare;
