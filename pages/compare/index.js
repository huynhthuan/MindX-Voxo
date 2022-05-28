import { Fragment, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { conventToCurrency } from "../../components/component_vuong/Common";
import OnSale from "../../components/component_vuong/product/OnSale";
import ProductCard from "../../components/Product/ProductCard";
import RatingDetails from "../../components/Product/RatingDetails";
import { addProductCompare, removeProductCompare } from "../../store/compare/compareSlice";
import Swal from "sweetalert2";

function Compare() {
   const compareProduct = useSelector((state) => state.compare.entities);
   console.log(`  ~ compareProduct`, compareProduct);
   const listCompare = [...Object.values(compareProduct), ...Array(4 - Object.values(compareProduct).length).fill({})];
   const recentlyViewed = useSelector((state) => state.recentlyViewedProducts.entities);
   console.log(`  ~ recentlyViewed`, recentlyViewed);
   const listRecentlyViewed = Object.values(recentlyViewed).filter((item) => !listCompare.map((item) => item.id).includes(item.id));

   const dispatch = useDispatch();
   const handleRemove = (id) => {
      dispatch(removeProductCompare(id));
   };
   useEffect(() => {
      jQuery;
   }, []);

   const handleAdd = (item) => {
      console.log("add");
      Object.values(compareProduct).length< 4
         ? dispatch(addProductCompare(item))
         : Swal.fire({
              title: "limited 4 items",
              icon: "error",
           });
   };

   return (
      <>
         <Breadcrumb title={"Compare"} />
         <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
               <div className="modal-content">
                  <div className="modal-header">
                     <h3 className="modal-title" id="exampleModalLabel">
                        <div className="d-flex justify-content-center mt-3 ms-3 ">Recently Viewed Products</div>
                     </h3>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body ratio_30">
                     <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
                        {listRecentlyViewed.slice(0, 4).map((item, key) => (
                           <ProductCard {...item} key={key}>
                              <div className="d-flex justify-content-center mt-3">
                                 <button
                                    disabled={listCompare.map((product) => product.id).includes(item.id)}
                                    className="btn btn-warning"
                                    onClick={() => handleAdd(item)}
                                 >
                                    {listCompare.map((product) => product.id).includes(item.id) ? "In Compare" : "Add Compare"}
                                 </button>
                              </div>
                           </ProductCard>
                        ))}
                     </div>
                     <div className="">Search</div>
                     <input type="text" />
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                     </button>
                     {/* <button type="button" className="btn btn-primary">Save changes</button> */}
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
                                       <td key={key} onClick={() => handleRemove(id)}>
                                          {id && <a className="btn btn-warning">Remove</a>}
                                       </td>
                                    ))}
                                 </tr>
                                 <tr className="table-product-details">
                                    <td></td>
                                    {listCompare.map(({ price, name, regular_price, images, on_sale, slug }, key) => (
                                       <td key={key}>
                                          {!name ? (
                                             // <button onClick={handleAdd}>ADD</button>
                                             <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Add Compare
                                             </button>
                                          ) : (
                                             <div className="product-box">
                                                <div className="product-image">
                                                   <Link href={"/product/" + slug}>
                                                      <a className="w-100 blur-up lazyload">
                                                         <img src={images[0].src} className="img-fluid bg-img blur-up lazyload" alt={images[0].alt} />
                                                      </a>
                                                   </Link>
                                                </div>
                                                <div className="product-details">
                                                   <div>
                                                      <a>
                                                         <h6 className="fw-bold">{name}</h6>
                                                      </a>
                                                   </div>

                                                   <div className="price-details mt-2">
                                                      <h6 className="font-green">
                                                         {conventToCurrency(price)}
                                                         <span className="font-light mx-2">{conventToCurrency(regular_price)}</span>
                                                         <OnSale on_sale={on_sale} price={price} regular_price={regular_price} />
                                                      </h6>
                                                   </div>
                                                </div>
                                             </div>
                                          )}
                                       </td>
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

const jQuery = () => {
   (function ($) {
      "use strict";
      $(".bg-top").parent().addClass("b-top");
      $(".bg-bottom").parent().addClass("b-bottom");
      $(".bg-center").parent().addClass("b-center");
      $(".bg-left").parent().addClass("b-left");
      $(".bg-right").parent().addClass("b-right");
      $(".bg_size_content").parent().addClass("b_size_content");
      $(".bg-img").parent().addClass("bg-size");
      $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
      $(".bg-img").each(function () {
         var el = $(this),
            src = el.attr("src"),
            parent = el.parent();

         parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            display: "block",
         });

         el.hide();
      });
   })(jQuery);
   feather.replace();
};
