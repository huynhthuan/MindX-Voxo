import { useEffect } from "react";
import { conventToCurrency, functionJquery } from "../component_vuong/Common";
import RatingDetails from "./RatingDetails";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { addProductCompare, removeProductCompare } from "../../store/compare/compareSlice";
import { useDispatch, useSelector } from "react-redux";
import OnSale from "../component_vuong/product/OnSale";

function ProductCard(props) {
   const router = useRouter();
   const compareProduct = useSelector((state) => Object.values(state.compare.entities));

   const dispatch = useDispatch();
   const {
      id,
      price,
      slug,
      name,
      categories,
      regular_price,
      images,
      average_rating,
      on_sale,
      featured,
      acf: { back_image, front_image },
      short_description,
      disAction,
   } = props;
   useEffect(() => {
      functionJquery();
   }, [front_image]);

   const handleAddCompare = () => {
      compareProduct.length < 4 && dispatch(addProductCompare(props));
      Swal.fire({
         title: compareProduct.length > 3 ? "limited 4 items" : "add product " + (compareProduct.length + 1) + "/4",
         icon: compareProduct.length > 3 ? "error" : "success",
         showCancelButton: true,
         cancelButtonText: "Ok",
         cancelButtonColor: "#d90429",
         confirmButtonText: "Compare",
      }).then((res) => {
         if (res.isConfirmed) {
            router.push("/compare");
         }
      });
    
   };
   return (
      <div className="product-box">
         <div className="img-wrapper">
            <div className="front">
               <Link href={"/product/" + slug} passHref>
                  <a>
                     <img src={front_image} className="bg-img blur-up lazyload" alt="" />
                  </a>
               </Link>
            </div>
            <div className="back">
               <Link href={"/product/" + slug} passHref>
                  <a>
                     <img src={back_image} className="bg-img blur-up lazyload" alt="" />
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
                     <a href="undefined" className="addtocart-btn" data-bs-toggle="modal" data-bs-target="#addtocart">
                        <i data-feather="shopping-bag"></i>
                     </a>
                  </li>
                  <li>
                     <a href="undefined" data-bs-toggle="modal" data-bs-target="#quick-view">
                        <i data-feather="eye"></i>
                     </a>
                  </li>
                  <li onClick={handleAddCompare}>
                     <a>
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
               <span className="font-light grid-content">{categories[0].name}</span>
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

