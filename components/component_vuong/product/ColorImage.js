import React from "react";
import { useQuery } from "react-query";
import { fetchApiColorImage } from "../../../src/api/Api_vuong/fetchApi";
import { useRouter } from "next/router";

function ColorImage({ listVariation = [], imageSef }) {
   const router = useRouter();
   const { isLoading, data = [], error } = useQuery(["colorImage",...listVariation], () => fetchApiColorImage(listVariation),{cacheTime:10});
   if (isLoading) return "Loading...";
   const handleClick = (e) => {
      const element=document.getElementsByClassName('image-item')
      Array.from(element).map(item=>item.classList.remove('active'))
      e.target.parentElement.classList.add('active')
      // router.push("/product/" + slug + "?id=" + id);
   };
   return (
      <div className="color-image">
         <div className="image-select">
            <h5>Color :</h5>
            <div className="size-box">
               <ul className="image-section">
                  {data.map(({ source_url, alt }, index) => (
                     <li key={index} className="border rounded image-item" role="button" onClick={(e) => handleClick(e)}>
                        <img src={source_url} className="img-fluid blur-up lazyload" alt={alt} />
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default ColorImage;
