import React from "react";

function FilterItemsComponent({ name, listItems, refine ,disCount}) {
   return (
      <li className="onclick-title" key={name}>
         <h6>{name}</h6>
         <ul className="onclick-content">
            {listItems.map(({ value, count }, index) => (
               <li key={index}>
                  <div className="form-check ps-0 custome-form-check">
                     <input
                        className="checkbox_animated check-it"
                        type="checkbox"
                        // id="flexCheckDefault"
                        defaultChecked={false}
                        onChange={() => refine(value)}
                     />
                     <label className="form-check-label" htmlFor="flexCheckDefault12">
                        {value}{disCount&&'% and above'}
                     </label>
                     <div className="ms-auto">({count})</div>
                  </div>
               </li>
            ))}
         </ul>
      </li>
   );
}

export default FilterItemsComponent;
