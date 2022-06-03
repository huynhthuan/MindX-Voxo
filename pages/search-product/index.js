import React, { useEffect } from "react";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { functionJquery } from "../../components/component_vuong/Common";

export default function Index() {
   useEffect(() => {
      functionJquery;
   }, []);

   return (
      <>
         <Breadcrumb title={"Search product"} />

         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-12 ratio_30">
                     <div className="row gx-4 gy-5">
                        <div className="col-12">
                           <div className="filter-show-button mb-3">
                              <a href="#" className="mobile-filter border-top-0">
                                 <i data-feather="align-left" className="img-fluid blur-up lazyloaded"></i>
                                 <h5>latest filter</h5>
                              </a>
                           </div>
                        </div>

                        <div className="col-12 m-0">
                           <div className="top-filter-section">
                              <ul>
                                 <li className="back-btn">
                                    <div className="mobile_back text-end">
                                       <span>Back</span>
                                       <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
                                    </div>
                                 </li>

                                 <li className="filter-title">
                                    <h6 className="theme-color">filter :</h6>
                                 </li>

                                 <li className="onclick-title">
                                    <h6>Category</h6>
                                    <ul className="onclick-content">
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Art
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault1" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                Bedroom
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault2" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                Chair
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault3" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                Creative
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault4" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault4">
                                                Design
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault5" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault5">
                                                Furniture
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault6" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault6">
                                                Gardan
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault7" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault7">
                                                Home
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault8" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault8">
                                                Inside
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault9" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault9">
                                                Kitchen
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault10" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault10">
                                                Living Room
                                             </label>
                                          </div>
                                       </li>

                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault11" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault11">
                                                Style
                                             </label>
                                          </div>
                                       </li>
                                    </ul>
                                 </li>

                                 <li className="onclick-title">
                                    <h6>Material</h6>
                                    <ul className="onclick-content">
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault12" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault12">
                                                Plastic
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault13" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault13">
                                                Wood
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault14" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault14">
                                                Metal
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault15" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault15">
                                                Glass
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault16" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault16">
                                                Texttile
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault17" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault17">
                                                Steel
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault18" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault18">
                                                Plywood
                                             </label>
                                          </div>
                                       </li>
                                    </ul>
                                 </li>

                                 <li className="onclick-title">
                                    <h6>Price</h6>
                                    <ul className="onclick-content">
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault19" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault19">
                                                Rs. 120 to Rs. 300
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault20" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault20">
                                                Rs. 300 to Rs. 425
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault21" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault21">
                                                Rs. 425 to Rs. 540
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault22" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault22">
                                                Rs. 540 to Rs. 600
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault23" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault23">
                                                Rs. 600 to Rs. 760
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault24" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault24">
                                                Rs. 760 to Rs. 850
                                             </label>
                                          </div>
                                       </li>
                                    </ul>
                                 </li>

                                 <li className="onclick-title">
                                    <h6>Discount</h6>
                                    <ul className="onclick-content">
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault25" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault25">
                                                10% and above
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault26" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault26">
                                                20% and above
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault27" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault27">
                                                30% and above
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault28" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault28">
                                                40% and above
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault29" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault29">
                                                50% and above
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault30" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault30">
                                                60% and above
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault31" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault31">
                                                70% and above
                                             </label>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault32" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault32">
                                                80% and above
                                             </label>
                                          </div>
                                       </li>
                                    </ul>
                                 </li>

                                 <li className="onclick-title">
                                    <h6>Default Sorting</h6>
                                    <ul className="onclick-content">
                                       <li className="dropdown-list">
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault33" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault33">
                                                Sort By Popularity
                                             </label>
                                          </div>
                                       </li>
                                       <li className="dropdown-list">
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault34" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault34">
                                                Sort by average rating
                                             </label>
                                          </div>
                                       </li>
                                       <li className="dropdown-list">
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault35" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault35">
                                                Sort by latest
                                             </label>
                                          </div>
                                       </li>
                                       <li className="dropdown-list">
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault36" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault36">
                                                Sort by price: low to high
                                             </label>
                                          </div>
                                       </li>
                                       <li className="dropdown-list">
                                          <div className="form-check ps-0 custome-form-check">
                                             <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault37" />
                                             <label className="form-check-label" htmlFor="flexCheckDefault37">
                                                Sort by price: high to low
                                             </label>
                                          </div>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="row g-4">
                        <h3>25 Results Found</h3>

                        {/* label and featured section */}
                        <div className="col-12">
                           <ul className="short-name">
                              <li>
                                 <div className="label-tag">
                                    <span>Shirts</span>
                                    <button type="button" className="btn-close" aria-label="Close"></button>
                                 </div>
                              </li>
                              <li>
                                 <div className="label-tag">
                                    <span>Kurtas</span>
                                    <button type="button" className="btn-close" aria-label="Close"></button>
                                 </div>
                              </li>
                              <li>
                                 <div className="label-tag">
                                    <span>Jackets</span>
                                    <button type="button" className="btn-close" aria-label="Close"></button>
                                 </div>
                              </li>
                              <li>
                                 <div className="label-tag">
                                    <span>Blazers</span>
                                    <button type="button" className="btn-close" aria-label="Close"></button>
                                 </div>
                              </li>
                              <li>
                                 <div className="label-tag">
                                    <a href="#">
                                       <span>Clear All</span>
                                    </a>
                                 </div>
                              </li>
                           </ul>
                        </div>

                        <div className="col-12">
                           <div className="filter-options">
                              <div className="select-options">
                                 <div className="page-view-filter">
                                    <div className="dropdown select-featured">
                                       <button
                                          className="btn dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton1"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                       >
                                          24 Page per view
                                       </button>
                                       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                          <li>
                                             <a className="dropdown-item" href="#">
                                                Alphabetically A-Z
                                             </a>
                                          </li>
                                          <li>
                                             <a className="dropdown-item" href="#">
                                                Alphabetically Z-A
                                             </a>
                                          </li>
                                          <li>
                                             <a className="dropdown-item" href="#">
                                                Price, High To Low
                                             </a>
                                          </li>
                                          <li>
                                             <a className="dropdown-item" href="#">
                                                Price, Low To High
                                             </a>
                                          </li>
                                          <li>
                                             <a className="dropdown-item" href="#">
                                                Date, Old To New
                                             </a>
                                          </li>
                                          <li>
                                             <a className="dropdown-item" href="#">
                                                Date, New To Old
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="dropdown select-featured">
                                    <button
                                       className="btn dropdown-toggle"
                                       type="button"
                                       id="dropdownMenuButton1"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false"
                                    >
                                       Select Featured
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                       <li>
                                          <a className="dropdown-item" href="#">
                                             Jeans
                                          </a>
                                       </li>
                                       <li>
                                          <a className="dropdown-item" href="#">
                                             T-Shirt
                                          </a>
                                       </li>
                                       <li>
                                          <a className="dropdown-item" href="#">
                                             Shirt
                                          </a>
                                       </li>
                                       <li>
                                          <a className="dropdown-item" href="#">
                                             Jacket
                                          </a>
                                       </li>
                                       <li>
                                          <a className="dropdown-item" href="#">
                                             Hoodie
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="grid-options d-sm-inline-block d-none">
                                 <ul className="d-flex">
                                    <li className="two-grid">
                                       <a href="#">
                                          <img src="/svg/grid-2.svg" className="img-fluid blur-up lazyload" alt="" />
                                       </a>
                                    </li>
                                    <li className="three-grid d-md-inline-block d-none">
                                       <a href="#">
                                          <img src="/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" />
                                       </a>
                                    </li>
                                    <li className="grid-btn d-lg-inline-block d-none">
                                       <a href="#">
                                          <img src="/svg/grid.svg" className="img-fluid blur-up lazyload" alt="" />
                                       </a>
                                    </li>
                                    <li className="five-grid active d-xl-inline-block d-none">
                                       <a href="#">
                                          <img src="/svg/grid-5.svg" className="img-fluid blur-up lazyload" alt="" />
                                       </a>
                                    </li>
                                    <li className="list-btn">
                                       <a href="#">
                                          <img src="/svg/list.svg" className="img-fluid blur-up lazyload" alt="" />
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* label and featured section */}

                     {/* Prodcut setion */}
                     <div className="row g-sm-4 g-3 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gx-sm-4 gx-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">B&Y Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Regular Fit</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$78.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Blue Leather Jacket</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Jacket</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$60.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Coat</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Military Ball Night Dress</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Coat</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$85.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Jacket</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$69.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/5.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/5.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Full Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Full Jacket Ladies</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Full Jacket</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$40.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/6.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/6.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">T-Shirt</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Full Slive Black T-Shirt</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">T-Shirt</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$69.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/7.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/7.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Fashion</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Latest Fashion Cloth</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Fashion</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$54.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/8.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/8.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Full Black Slive Jacket</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Jacket</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$99.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">B&Y Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Regular Fit</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$78.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/2.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Blue Leather Jacket</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Jacket</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$60.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/3.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Coat</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Military Ball Night Dress</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Coat</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$85.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <div className="product-box">
                              <div className="img-wrapper">
                                 <div className="front">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/front/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="back">
                                    <a href="product-left-sidebar.html">
                                       <img src="/images/fashion/product/back/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                    </a>
                                 </div>
                                 <div className="cart-wrap">
                                    <ul>
                                       <li>
                                          <a href="#" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                                             <i data-feather="shopping-bag"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view">
                                             <i data-feather="eye"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="compare.html">
                                             <i data-feather="refresh-cw"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="wishlist.html" className="wishlist">
                                             <i data-feather="heart"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="product-details">
                                 <div className="rating-details">
                                    <span className="font-light grid-content">Jacket</span>
                                    <ul className="rating mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="main-price">
                                    <a href="product-left-sidebar.html" className="font-default">
                                       <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                    </a>
                                    <div className="listing-content">
                                       <span className="font-light">Jacket</span>
                                       <p className="font-light">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                          aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus quidem
                                          eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia, tempore
                                          repellendus.
                                       </p>
                                    </div>
                                    <h3 className="theme-color">$69.00</h3>
                                    <button className="btn listing-content">Add To Cart</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* Prodcut setion */}
                     </div>

                     <nav className="page-section">
                        <ul className="pagination">
                           <li className="page-item">
                              <a className="page-link" href="#" aria-label="Previous">
                                 <span aria-hidden="true">
                                    <i className="fas fa-chevron-left"></i>
                                 </span>
                              </a>
                           </li>
                           <li className="page-item active">
                              <a className="page-link" href="#">
                                 1
                              </a>
                           </li>
                           <li className="page-item">
                              <a className="page-link" href="#">
                                 2
                              </a>
                           </li>
                           <li className="page-item">
                              <a className="page-link" href="#">
                                 3
                              </a>
                           </li>
                           <li className="page-item">
                              <a className="page-link" aria-label="Next">
                                 <span aria-hidden="true">
                                    <i className="fas fa-chevron-right"></i>
                                 </span>
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}
