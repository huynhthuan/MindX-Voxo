import React, { useState } from "react";

function RatingDetails({change,rating}) {
   const [ratingChange, setRatingChange] = useState(rating);
   const handleRating = (index) => {
     change&& setRatingChange(index);
   };
   return (
      <ul className="rating mt-0">
         {Array(5)
            .fill(0)
            .map((item, index) =>
               index + 1 <= ratingChange ? (
                  <li key={index} role="button" onClick={() => handleRating(index + 1)}>
                     <i className="fas fa-star theme-color"></i>
                  </li>
               ) : (
                  <li key={index} role="button" onClick={() => handleRating(index + 1)}>
                     <i className="fas fa-star"></i>
                  </li>
               )
            )}
         ({ratingChange})
         <input name='rating' className="d-none" type="text" value={!ratingChange&&5} required/>
      </ul>
   );
}

export default RatingDetails;
