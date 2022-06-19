import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductCompare } from "../../../store/compare/compareSlice";
import { getListCompare } from "../Common";

function AddCompare({ item = {}, inCard }) {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = getListCompare(compareProduct);
   const dispatch = useDispatch();
   const elementCloseModal = document.getElementById("close-modal");
   const infoCompareHTML = `<div class="bg-dark text-white p-3 m-2 rounded ">Please remove products to continue comparing!</div>`;
   const elementCompareBottom = document.getElementById("compare-bottom");
   const {
      id,
      price,
      slug,
      name,
      categories,
      regular_price,
      average_rating,
      on_sale,
      featured,
      back_image,
      front_image,
      acf,
      short_description,
      objectID,
      images,
   } = item;

   const handleAddCompare = () => {
      let elementInfoCompare = document.getElementById("info-compare");
      const elementCompareBottom = document.getElementById("compare-bottom");
      !inCard && elementCloseModal.click();
      if (Object.values(compareProduct).length < 4) {
         dispatch(
            addProductCompare({
               id,
               price,
               slug,
               name,
               categories,
               average_rating,
               on_sale,
               featured,
               back_image,
               front_image,
               acf,
               short_description,
               objectID,
               regular_price,
               images,
            })
         );
         elementCompareBottom.removeAttribute("hidden");
      } else {
         elementCompareBottom.removeAttribute("hidden");
         elementInfoCompare.innerHTML = infoCompareHTML;
         setTimeout(() => (elementInfoCompare.innerHTML = ""), 2000);
      }
   };

   useEffect(() => {
      return () => {
         elementCompareBottom && elementCompareBottom.setAttribute("hidden", true);
      };
   }, []);

   return (
      <>
         {inCard ? (
            <li onClick={handleAddCompare} role="button">
               <a>
                  <i data-feather="refresh-cw"></i>
               </a>
            </li>
         ) : (
            <div className="d-flex justify-content-center mt-3 ">
               <button
                  disabled={listCompare.map(({ objectID, id }) => objectID || id).includes(item.objectID || item.id)}
                  className="btn btn-warning "
                  onClick={handleAddCompare}
               >
                  {listCompare.map(({ objectID, id }) => objectID || id).includes(item.objectID || item.id) ? "In Compare" : "Add Compare"}
               </button>
            </div>
         )}
      </>
   );
}

export default AddCompare;
