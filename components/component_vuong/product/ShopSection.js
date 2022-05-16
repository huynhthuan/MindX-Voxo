import React from "react";
import { conventToCurrency } from "../Common";
import ClothReview from "./ClothReview";

function ShopSection({ data = {} }) {
   const {
      id,
      price,
      slug,
      name,
      rating_count,
      stock_quantity,
      categories,
      images,
      average_rating,
      on_sale,
      sale_price,
      attributes,
      featured,
      shipping_required,
   } = data;
   if (!data.id) return "Loading...";
   return (
      <section>
         <div className="container">
            <div className="row gx-4 gy-5">
               <div className="col-lg-12 col-12">
                  <div className="details-items">
                     <div className="row g-4">
                        <div className="col-md-6">
                           <div className="row g-4 ratio_asos">
                              {images.slice(0, 1).map(({ src, alt }, key) => (
                                 <div key={key} className="col-12">
                                    <img src={src} className="img-fluid w-100" alt={alt} />
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className="col-md-6">
                           <div className="cloth-details-size">
                              <div className="product-count">
                                 <ul>
                                    <li>
                                       <img src="/images/gif/fire.gif" className="img-fluid blur-up lazyload" alt="image" />
                                       <span className="p-counter">37</span>
                                       <span className="lang">orders in last 24 hours</span>
                                    </li>
                                    <li>
                                       <img src="/images/gif/person.gif" className="img-fluid user_img blur-up lazyload" alt="image" />
                                       <span className="p-counter">44</span>
                                       <span className="lang">active view this</span>
                                    </li>
                                 </ul>
                              </div>

                              <div className="details-image-concept">
                                 <h2>{name}</h2>
                              </div>

                              <div className="label-section">
                                 <span className="badge badge-grey-color">#1 Best seller</span>
                                 <span className="label-text">in {categories[0].name}</span>
                              </div>

                              <h3 className="price-detail">
                                 {conventToCurrency(price)}
                                 {on_sale && (
                                    <>
                                       <del>$459.00</del>
                                       <span>55% off</span>
                                    </>
                                 )}
                              </h3>

                              <div className="color-image">
                                 <div className="image-select">
                                    <h5>Color :</h5>
                                    <div className="size-box">
                                       <ul>
                                          {attributes
                                             .filter((item) => item.name === "Color")[0]
                                             .options.map((item, index) => (
                                                <li className={"border rounded m-2 p-2"} role={"button"} key={index}>
                                                   {item}
                                                </li>
                                             ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div id="selectSize" className="addeffect-section product-description border-product">
                                 <h6 className="product-title size-text">
                                    select size
                                    <a href="undefined" data-bs-toggle="modal" data-bs-target="#sizemodal">
                                       size chart
                                    </a>
                                 </h6>

                                 <h6 className="error-message">please select size</h6>

                                 <div className="size-box">
                                    <ul>
                                       {attributes
                                          .filter((item) => item.name === "Size")[0]
                                          .options.map((item, key) => (
                                             <li key={key}>{item}</li>
                                          ))}
                                    </ul>
                                 </div>

                                 <h6 className="product-title product-title-2 d-block">quantity</h6>

                                 <div className="qty-box">
                                    <div className="input-group">
                                       <span className="input-group-prepend">
                                          <button type="button" className="btn quantity-left-minus" data-type="minus" data-field="">
                                             <i className="fas fa-minus"></i>
                                          </button>
                                       </span>
                                       <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                                       <span className="input-group-prepend">
                                          <button type="button" className="btn quantity-right-plus" data-type="plus" data-field="">
                                             <i className="fas fa-plus"></i>
                                          </button>
                                       </span>
                                    </div>
                                 </div>
                              </div>

                              <div className="product-buttons">
                                 <a href="wishlist.html" className="btn btn-solid">
                                    <i className="fa fa-bookmark fz-16 me-2"></i>
                                    <span>Wishlist</span>
                                 </a>
                                 <a href="undefined" id="cartEffect" className="btn btn-solid hover-solid btn-animation">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>Add To Cart</span>
                                 </a>
                              </div>

                              <ul className="product-count shipping-order">
                                 <li>
                                    <img src="/images/gif/truck.png" className="img-fluid blur-up lazyload" alt="image" />
                                    {shipping_required && <span className="lang">Free shipping for orders above $500 USD</span>}
                                 </li>
                              </ul>

                              <div className="mt-2 mt-md-3 border-product">
                                 <h6 className="product-title hurry-title d-block">
                                    Hurry Up! Left <span>{stock_quantity}</span> in stock
                                 </h6>
                                 <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "70%" }}></div>
                                 </div>
                                 <div className="font-light timer-5">
                                    <h5>Order in the next to get</h5>
                                    <ul className="timer1">
                                       <li className="counter">
                                          <h5 id="days">&#9251;</h5> Days :
                                       </li>
                                       <li className="counter">
                                          <h5 id="hours">&#9251;</h5> Hour :
                                       </li>
                                       <li className="counter">
                                          <h5 id="minutes">&#9251;</h5> Min :
                                       </li>
                                       <li className="counter">
                                          <h5 id="seconds">&#9251;</h5> Sec
                                       </li>
                                    </ul>
                                 </div>
                              </div>

                              <div className="border-product">
                                 <h6 className="product-title d-block">share it</h6>
                                 <div className="product-icon">
                                    <ul className="product-social">
                                       <li>
                                          <a href="https://www.facebook.com/">
                                             <i className="fab fa-facebook-f"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="https://www.google.com/">
                                             <i className="fab fa-google-plus-g"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="https://twitter.com/">
                                             <i className="fab fa-twitter"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="https://www.instagram.com/">
                                             <i className="fab fa-instagram"></i>
                                          </a>
                                       </li>
                                       <li className="pe-0">
                                          <a href="https://www.google.com/">
                                             <i className="fas fa-rss"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* <ClothReview/> */}
            </div>
         </div>
      </section>
   );
}

export default ShopSection;
