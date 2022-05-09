import React from "react";

function RatingDetails({ rating}) {
   return (
      <ul className="rating mt-0">
         ({rating})
         {Array(Math.floor(rating))
            .fill(0)
            .map((item, index) => (
               <li key={index}>
                  <i className="fas fa-star theme-color"></i>
               </li>
            ))}
         {Array(5 - Math.floor(rating))
            .fill(0)
            .map((item, index) => (
               <li key={index}>
                  <i className="fas fa-star" style={{ color: "red" }}></i>
               </li>
            ))}
      </ul>
   );
}

export default RatingDetails;
