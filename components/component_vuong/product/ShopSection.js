import React, { useEffect } from "react";
import Link from "next/link";
import { conventToCurrency, filter_meta_data, timeCoundown } from "../Common";
import ColorImage from "./ColorImage";
import { useRouter } from "next/router";
import Countdown from "./Countdown";
import SelectSize from "./SelectSize";

function ShopSection(props = {}) {
   const router = useRouter();
   const {
      slug,
      id,
      price,
      name,
      stock_quantity,
      categories,
      images,
      on_sale,
      attributes,
      shipping_required,
      regular_price,
      date_on_sale_to,
      acf: { list_variation },
   } = props;

   return (
      <section>
         <div className="container">
            <div className="row gx-4 gy-5">
               <div className="col-lg-12 col-12">
                  <div className="details-items">
                     <div className="row g-4">
                        <div className="col-md-6">
                           <div className="row g-4 ratio_asos slider-for">
                              {images.map(({ src, alt }, key) => (
                                 <div key={key} className="col-12 ">
                                    <img src={src} className="img-fluid w-100" alt={alt} />
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className="col-md-6">
                           <div className="cloth-details-size">
                              <div className="details-image-concept">
                                 <h2>{name}</h2>
                              </div>

                              <div className="label-section">
                                 {categories.map(({ slug, name }, key) => (
                                    <Link href={"/product-category/" + slug} key={key}>
                                       <a
                                          className="badge badge-grey-color me-2"
                                       >
                                          in {name}
                                       </a>
                                    </Link>
                                 ))}
                              </div>

                              <h3 className="price-detail">
                                 {conventToCurrency(price)}
                                 {on_sale && (
                                    <>
                                       <del>{conventToCurrency(regular_price)}</del>
                                       <span>{Math.floor((1 - price / regular_price) * 100)}% off</span>
                                    </>
                                 )}
                              </h3>

                              <ColorImage list_variation={list_variation} />
                              <SelectSize attributes={attributes} />

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

                              {date_on_sale_to && <Countdown stock_quantity={stock_quantity} date_on_sale_to={date_on_sale_to} />}

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
            </div>
         </div>
      </section>
   );
}

export default ShopSection;
