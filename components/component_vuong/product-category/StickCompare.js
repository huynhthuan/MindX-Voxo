import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Product/ProductCard";
import MostPopularCard from "./MostPopularCard";

function StickCompare() {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = Object.values(compareProduct);
      return null
   return (
      <div className="position-fixed bottom-0 w-100 " style={{ zIndex: "1", backgroundColor: "white" }}>
         stick compare
         <div className="">
            <div className="d-flex justify-content-evenly">
               {listCompare.map((item, key) => (
                  <MostPopularCard key={key} {...item}/>
               ))}
            </div>
         </div>
      </div>
   );
}

export default StickCompare;
