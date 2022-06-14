import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductCompare } from "../../../store/compare/compareSlice";
import { getListCompare } from "../Common";
import { ToastContainer, toast, Slide } from "react-toastify";

function AddCompare({ item = {}, inCard }) {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = getListCompare(compareProduct);
   const dispatch = useDispatch();
   const elementCloseModal = document.getElementById("close-modal");
   let elementInfoCompare = document.getElementById("info-compare");
   const infoCompareHTML = `<div class="bg-dark text-white p-3 rounded ">Please remove products to continue comparing!</div>`;
   const elementCompareBottom = document.getElementById("compare-bottom");

   const handleAddCompare = () => {
      !inCard && elementCloseModal.click();
      if (Object.values(compareProduct).length < 4) {
         dispatch(addProductCompare(item));
         elementCompareBottom && elementCompareBottom.removeAttribute("hidden");
      } else {
         elementCompareBottom && elementCompareBottom.removeAttribute("hidden");
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
               <button disabled={listCompare.map((product) => product.id).includes(item.id)} className="btn btn-warning " onClick={handleAddCompare}>
                  {listCompare.map((product) => product.id).includes(item.id) ? "In Compare" : "Add Compare"}
               </button>
            </div>
         )}
      </>
   );
}

export default AddCompare;
