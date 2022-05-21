import React, { useEffect, useState } from "react";

function RatingDetails({ change, rating, mediumRating }) {
   const [ratingChange, setRatingChange] = useState("");
   const handleRating = (index) => {
      change && setRatingChange(index);
   };
   useEffect(() => setRatingChange(rating), [rating]);
   return (
      <ul className="rating mt-0">
         {Array(5)
            .fill(0)
            .map((item, index) =>
               index + 1 <= +ratingChange ? (
                  <li key={index} role="button" onClick={() => handleRating(index + 1)}>
                     <i className="fas fa-star theme-color"></i>
                  </li>
               ) : (
                  <li key={index} role="button" onClick={() => handleRating(index + 1)}>
                     <i className="fas fa-star"></i>
                  </li>
               )
            )}
         {!change && <>({ratingChange === "0.00" ? 0 : ratingChange})</>}
         <input type="hidden" value={ratingChange || 5} />
      </ul>
   );
}

export default RatingDetails;
