import React from "react";
import { fetchApiReviewProduct } from "../../src/api/Api_vuong/fetchApi";

function LoadMore({id, totalItems, children }) {
   console.log(`  ~ totalItems`, totalItems);

   const handleClick=()=>{
       console.log('click');
   }
   return (
      <>
      {children}
         <div className="d-flex justify-content-center m-3">
            <button className="btn btn-warning border rounded" onClick={handleClick}>Load More</button>
         </div>
      </>
   );
}

export default LoadMore;
