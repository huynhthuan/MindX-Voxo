import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addProductCompare } from "../../../store/compare/compareSlice";
import { getListCompare } from "../Common";

function AddCompare({ item = {} }) {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = getListCompare(compareProduct);
   const dispatch = useDispatch();
   const elementCloseModal = document.getElementById("close-modal");
   const handleAddCompare = (item = {}) => {
      elementCloseModal.click();
      Object.values(compareProduct).length < 4
         ? dispatch(addProductCompare(item))
         : Swal.fire({
              title: "limited 4 items",
              icon: "error",
           });
   };

   return (
      <div className="d-flex justify-content-center mt-3">
         <button
            disabled={listCompare.map((product) => product.id).includes(item.id)}
            className="btn btn-warning "
            onClick={() => handleAddCompare(item)}
         >
            {listCompare.map((product) => product.id).includes(item.id) ? "In Compare" : "Add Compare"}
         </button>
      </div>
   );
}

export default AddCompare;
