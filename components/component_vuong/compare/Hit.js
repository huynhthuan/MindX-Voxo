import React from "react";
import { Highlight } from "react-instantsearch-hooks-web";
import { useSelector } from "react-redux";
import ProductCard from "../../Product/ProductCard";
import MostPopularCard from "../product-category/MostPopularCard";
import AddCompare from "./AddCompare";
function Hit({ hit }) {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = Object.values(compareProduct);

   return (
      <>
         <MostPopularCard {...hit} />
         <div className="ms-auto">
            <AddCompare listCompare={listCompare} item={hit} />
         </div>
      </>
   );
}

export default Hit;
