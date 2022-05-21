import React, { useEffect } from "react";
import { conventToCurrency, timeCoundown } from "../Common";
import ColorImage from "./ColorImage";
import { useRouter } from "next/router";

function ShopSection({ data = {} }) {
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
      related_ids,
      date_on_sale_to,
   } = data;
   useEffect(() => {
      $(document).ready(function () {
         $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".slider-nav",
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 1000,
            dots: false,
            infinite: false,
         });
         $(".slider-nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            dots: true,
            centerMode: true,
            focusOnSelect: true,
         });
      });
      const second = 1000,
         minute = second * 60,
         hour = minute * 60,
         day = hour * 24;
      if (!document.getElementById("days")) return;
      const countDown = new Date(date_on_sale_to).getTime(),
         myTime = setInterval(function () {
            const now = new Date().getTime(),
               distance = countDown - now;
            (document.getElementById("days").innerText = Math.floor(distance / day)),
               (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
               (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
               (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));
         }, second);
      return () => {
         clearInterval(myTime);
      };
   }, [date_on_sale_to, data]);

   const slider_for = `{ "slidesToShow": 1,"slidesToScroll": 1,"arrows": false,"fade": true,"asNavFor": ".slider-nav","autoplay": true,"autoplaySpeed": 11500,"speed": 1000,"dots": false,"infinite": false,}`;
   const slider_nav = `{"slidesToShow": 5,"slidesToScroll": 1,"asNavFor": ".slider-for","dots": true,"centerMode": true,"focusOnSelect": true,}`;
   if (!data.id) return <p>Loading...</p>;
   return (
      <section>
         <div className="container">
            <div className="row gx-4 gy-5">
               <div className="col-lg-12 col-12">
                  <div className="details-items">
                     <div className="row g-4">
                        <div className="col-md-6">
                           <div className="row g-4 ratio_asos slider-for" data-slick={slider_for}>
                              {images.map(({ src, alt }, key) => (
                                 <div key={key} className="col-12 ">
                                    <img src={src} className="img-fluid w-100" alt={alt} />
                                 </div>
                              ))}
                           </div>
                           <div className="row ratio_asos slider-nav mb-3" data-slick={slider_nav}>
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
                                    <span
                                       key={key}
                                       className="badge badge-grey-color me-2"
                                       role="button"
                                       onClick={() => router.push("/product-category/" + slug)}
                                    >
                                       in {name}
                                    </span>
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

                              <div className="color-image">
                                 <div className="image-select">
                                    <h5>Color :</h5>
                                    <ColorImage related_ids={related_ids} imageSef={{ src: images[0].src, id: id, alt: images[0].alt, slug: slug }} />
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
                              {date_on_sale_to && (
                                 <div className="mt-2 mt-md-3 border-product">
                                    <h6 className="product-title hurry-title d-block">
                                       Hurry Up! Left <span>{stock_quantity}</span> in stock
                                    </h6>

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
                              )}

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
