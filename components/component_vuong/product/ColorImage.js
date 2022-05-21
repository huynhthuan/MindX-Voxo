import React from "react";
import { useQuery } from "react-query";
import { fetchApiColoImage } from "../../../src/api/Api_vuong/fetchApiGetCategories";
import { useRouter } from "next/router";

function ColorImage({ related_ids = [], imageSef }) {
   const router = useRouter();
   const { isLoading, data = [], error } = useQuery("colorImage", () => fetchApiColoImage(related_ids));
   if (isLoading) return "Loading...";
   data.push(imageSef);
   const handleClick = (slug, id) => {
      router.push("/product/" + slug + "?id=" + id);
   };
   return (
      <div className="size-box">
         <ul className="image-section">
            {data.map(({ id, src, alt, slug }, index) => (
               <li key={index} className="border rounded " role="button" onClick={(e) => handleClick(slug, id)}>
                  <img src={src} className="img-fluid blur-up lazyload" alt={alt} />
               </li>
            ))}
         </ul>
      </div>
   );
}

export default ColorImage;
