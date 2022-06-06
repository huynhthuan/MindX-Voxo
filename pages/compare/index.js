import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { functionJquery, getListCompare } from "../../components/component_vuong/Common";
import ProductCard from "../../components/Product/ProductCard";
import RatingDetails from "../../components/Product/RatingDetails";
import { removeProductCompare } from "../../store/compare/compareSlice";
import CompareItem from "../../components/component_vuong/compare/CompareItem";
import SearchCompare from "../../components/component_vuong/compare/SearchCompare";
import AddCompare from "../../components/component_vuong/compare/AddCompare";

function Compare() {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = getListCompare(compareProduct);
   const recentlyViewed = useSelector((state) => state.recentlyViewedProducts.entities);
   const listRecentlyViewed = Object.values(recentlyViewed);

   const dispatch = useDispatch();
   const handleRemove = (id = "", event) => {
      event.preventDefault();
      dispatch(removeProductCompare(id));
   };
   useEffect(() => {
      functionJquery;
   }, []);
   useEffect(() => {
      const element = document.getElementById("close-modal");
      return () => {
         element.click();
      };
   }, []);

   return (
      <>
         <Breadcrumb title={"Compare"} />
         <div className="" id="close-modal2"></div>
         <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl ">
               <div className="modal-content">
                  <div className="modal-header">
                     <h3 className="modal-title" id="exampleModalLabel">
                        <div className="d-flex justify-content-center mt-3 ms-5 ">Recently Viewed Products</div>
                     </h3>
                     <button type="button" className="btn-close mt-2" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body ratio_30 ">
                     <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section mx-3">
                        {listRecentlyViewed.slice(0, 4).map((item, key) => (
                           <ProductCard {...item} key={key} disAction>
                              <AddCompare listCompare={listCompare} item={item} />
                           </ProductCard>
                        ))}
                     </div>
                     <div className="" id="scroll-search"></div>
                     <SearchCompare listCompare={listCompare} />
                  </div>
                  <div className="modal-footer">
                     <button type="button" id="close-modal" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="comparemodal-body">
                        <div className="table-wrapper table-responsive ratio_asos">
                           <table className="table table-striped-1">
                              <tbody>
                                 <tr className="table-cart-button">
                                    <td></td>
                                    {listCompare.map(({ id }, key) => (
                                       <td key={key} onClick={(event) => handleRemove(id, event)}>
                                          {id && <a className="btn btn-warning">Remove</a>}
                                       </td>
                                    ))}
                                 </tr>
                                 <tr className="table-product-details">
                                    <td></td>
                                    {listCompare.map((item, index) => (
                                       <CompareItem {...item} key={index} />
                                    ))}
                                 </tr>

                                 <tr className="table-cart-button">
                                    <td></td>
                                    {listCompare.map((item, key) => (
                                       <td key={key}>
                                          {item.id && (
                                             <a href="cart.html" className="btn btn-solid-blue">
                                                + Add to cart
                                             </a>
                                          )}
                                       </td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Customer Rating</td>
                                    {listCompare.map(({ average_rating, rating_count }, key) => (
                                       <td key={key}>
                                          {average_rating && <RatingDetails average_rating={average_rating} rating_count={rating_count} />}
                                       </td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>BRAND</td>
                                    {listCompare.map(({ attributes }, key) => (
                                       <td key={key}>{attributes && attributes[2].options[0]}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Generic Name</td>
                                    {listCompare.map(({ categories }, key) => (
                                       <td key={key}>{categories && categories[0].name}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Department</td>
                                    {listCompare.map(({ categories }, key) => (
                                       <td key={key}>{categories && categories[1].name}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Manufacturer</td>
                                    {listCompare.map(({ categories }, key) => (
                                       <td key={key}>{categories && "PAGE INDUSTRIES LIMITED"}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>color</td>
                                    {listCompare.map(({ attributes }, key) => (
                                       <td key={key}>{attributes && attributes[0].options.join(", ")}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Date First Available</td>
                                    {listCompare.map(({ date_created }, key) => (
                                       <td key={key}>{date_created && new Date(date_created).toLocaleDateString()}</td>
                                    ))}
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <SubscribeBox />
      </>
   );
}

export default Compare;
