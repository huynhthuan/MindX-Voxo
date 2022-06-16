import { useEffect } from "react";
import { conventToCurrency, functionJquery } from "../component_vuong/Common";
import RatingDetails from "./RatingDetails";
import Link from "next/link";
import OnSale from "../component_vuong/product/OnSale";
import AddCompare from "../component_vuong/compare/AddCompare";

function ProductCard(props) {
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
      acf={},
      short_description,
      disAction,
     
   } = props;
   useEffect(() => {
      functionJquery();
   }, [front_image,acf]);

   return (
      <div className="product-box">
         <div className="img-wrapper">
            <div className="front">
               <Link href={"/product/" + slug} passHref>
                  <a>
                     <img src={front_image||acf.front_image} className="bg-img blur-up lazyload" alt="" />
                  </a>
               </Link>
            </div>
            <div className="back">
               <Link href={"/product/" + slug} passHref>
                  <a>
                     <img src={back_image||acf.back_image} className="bg-img blur-up lazyload" alt="" />
                  </a>
               </Link>
            </div>
            <div className="label-block">
               {featured && <span className="label label-black">New</span>}
               <OnSale on_sale={on_sale} price={price} regular_price={regular_price} />
            </div>
            <div hidden={disAction} className="cart-wrap">
               <ul>
                  <li>
                     <a className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                        <i data-feather="shopping-bag"></i>
                     </a>
                  </li>
                  <li>
                     <a data-bs-toggle="modal" data-bs-target="#quick-view">
                        <i data-feather="eye"></i>
                     </a>
                  </li>
                  <AddCompare inCard item={props} />
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
               <Link href={"/product-category/" + categories[0].slug}>
                  <a className="font-light grid-content">{categories[0].name}</a>
               </Link>
               <RatingDetails average_rating={average_rating} showNum />
            </div>
            <div className="main-price">
               <div onClick={() => handleClick(slug, id)} role="button" className="font-default">
                  <h5>{name}</h5>
               </div>
               <div className="listing-content">
                  <span className="font-light">Jacket</span>
                  <p className="font-light" dangerouslySetInnerHTML={{ __html: short_description }}></p>
               </div>
               <h3 className="theme-color">{conventToCurrency(price)}</h3>
               <button className="btn listing-content">Add To Cart</button>
            </div>
         </div>
         {props.children}
         <div className="" id="footer-card"></div>
      </div>
   );
}

export default ProductCard;
