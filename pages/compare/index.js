import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { conventToCurrency } from "../../components/component_vuong/Common";
import OnSale from "../../components/component_vuong/product/OnSale";
import RatingDetails from "../../components/Product/RatingDetails";
import { removeProductCompare } from "../../store/compare/compareSlice";

function Compare() {
   const compare = useSelector((state) => state.compare.value);
   const dispatch = useDispatch();
   const handleRemove = (id) => {
      const arr = [...compare];
      arr.splice(arr.map((item) => item.id).indexOf(id),1);
      dispatch(removeProductCompare(arr))
   };
   return (
      <>
         <Breadcrumb title={"Compare"} />
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
                                    {compare.map(({ id }, key) => (
                                       <td key={key} onClick={() => handleRemove(id)}>
                                          <a className="btn btn-solid-blue">Remove</a>
                                       </td>
                                    ))}
                                 </tr>
                                 <tr className="table-product-details">
                                    <td></td>
                                    {compare.map(
                                       ({ id, price, slug, name, categories, regular_price, images, average_rating, on_sale, featured }, key) => (
                                          <td key={key}>
                                             <div className="product-box">
                                                <div className="product-image">
                                                   <a className="w-100 blur-up lazyload">
                                                      <img src={images[0].src} className="img-fluid bg-img blur-up lazyload" alt={images[0].alt} />
                                                   </a>
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
                                          </td>
                                       )
                                    )}
                                 </tr>

                                 <tr className="table-cart-button">
                                    <td></td>
                                    {compare.map((item, key) => (
                                       <td key={key}>
                                          <a href="cart.html" className="btn btn-solid-blue">
                                             + Add to cart
                                          </a>
                                       </td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Customer Rating</td>
                                    {compare.map(({ average_rating, rating_count }, key) => (
                                       <td key={key}>
                                          <RatingDetails average_rating={average_rating} rating_count={rating_count} />
                                       </td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>BRAND</td>
                                    {compare.map(({ attributes }, key) => (
                                       <td key={key}>{attributes[2].options[0]}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Generic Name</td>
                                    {compare.map(({ categories }, key) => (
                                       <td key={key}>{categories[0].name}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Department</td>
                                    {compare.map(({ categories }, key) => (
                                       <td key={key}>{categories[1].name}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Manufacturer</td>
                                    {compare.map(({ categories }, key) => (
                                       <td key={key}>PAGE INDUSTRIES LIMITED</td>
                                    ))}

                                 </tr>

                                 <tr>
                                    <td>color</td>
                                    {compare.map(({ attributes }, key) => (
                                       <td key={key}>{attributes[0].options.join(", ")}</td>
                                    ))}
                                 </tr>

                                 <tr>
                                    <td>Date First Available</td>
                                    {compare.map(({ date_created }, key) => (
                                       <td key={key}>{new Date(date_created).toLocaleDateString()}</td>
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
