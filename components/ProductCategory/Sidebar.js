import { useRef, useState } from "react";
import { useRouter } from "next/router";
import MostPopular from "./MostPopular";

function Sidebar({ resBrand, resColor, resSize }) {
   const ref=useRef()
   console.log(`  ~ ref`, ref.current?.value)
   const router = useRouter();
   const { query, pathname } = router;
   const arrColor = query.pa_color ? query.pa_color.split(",") : [];
   const arrSize = query.pa_size ? query.pa_size.split(",") : [];
   const arrBrand = query.pa_brand ? query.pa_brand.split(",") : [];

   const handleChecked = (e, idAttribute, arrAttribute, nameAttribute) => {
      if (e.target.checked) {
         arrAttribute.push(idAttribute);
      } else {
         arrAttribute.splice(arrAttribute.indexOf(idAttribute), 1);
      }
      router.push(
         {
            pathname: pathname,
            query: {
               ...query,
               [nameAttribute]: arrAttribute.join(),
            },
         },
         null,
         { shallow: true }
      );
   };
   return (
      <div className="category-option">
         <div className="button-close mb-3">
            <button className="btn p-0">
               <i data-feather="arrow-left"></i> Close
            </button>
         </div>
         <div className="accordion category-name" id="accordionExample">
            <div className="accordion-item category-rating">
               <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                     Brand
                  </button>
               </h2>
               <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body category-scroll">
                     <ul className="category-list">
                        {resBrand.map(({ name, count, id, slug }, key) => (
                           <li key={key}>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    type="checkbox"
                                    id="flexCheckDefault1"
                                    onChange={(e) => handleChecked(e, String(id), arrBrand, "pa_brand")}
                                    checked={arrBrand.includes(String(id))}
                                 />
                                 <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    {name}
                                 </label>
                                 <p className="font-light">({count})</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="accordion-item category-color">
               <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                     Color
                  </button>
               </h2>
               <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                     <ul className="category-list">
                        {resColor.map(({ name, count, id, slug }, key) => (
                           <li key={key} className="w-100">
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    type="checkbox"
                                    id="flexCheckDefault1"
                                    onChange={(e) => handleChecked(e, String(id), arrColor, "pa_color")}
                                    checked={arrColor.includes(String(id))}
                                 />
                                 <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    {name}
                                 </label>
                                 <p className="font-light">({count})</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="accordion-item category-price"  >
               <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                     Price
                  </button>
               </h2>
               <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample" >
                  <div className="accordion-body" >
                     <div className="range-slider category-list" >
                        <input type="text" className="js-range-slider" defaultValue="" ref={ref}  onFocus={()=>console.log('aaa')}/>
                     </div>
                  </div>
               </div>
            </div>

            <div className="accordion-item category-rating">
               <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                     Size
                  </button>
               </h2>
               <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                  <div className="accordion-body category-scroll">
                     <ul className="category-list">
                        {resSize.map(({ name, count, id, slug }, key) => (
                           <li key={key}>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    type="checkbox"
                                    id="flexCheckDefault10"
                                    onChange={(e) => handleChecked(e, String(id), arrSize, "pa_size")}
                                    checked={arrSize.includes(String(id))}
                                 />
                                 <label className="form-check-label" htmlFor="flexCheckDefault10">
                                    {name}
                                 </label>
                                 <p className="font-light">({count})</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="accordion-item">
               <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                     Discount Range
                  </button>
               </h2>
               <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                     <ul className="category-list">
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault19" />
                              <label className="form-check-label" htmlFor="flexCheckDefault19">
                                 5% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault20" />
                              <label className="form-check-label" htmlFor="flexCheckDefault20">
                                 10% and above
                              </label>
                           </div>
                        </li>
                        <li>
                           <div className="form-check ps-0 custome-form-check">
                              <input className="checkbox_animated check-it" type="checkbox" id="flexCheckDefault21" />
                              <label className="form-check-label" htmlFor="flexCheckDefault21">
                                 20% and above
                              </label>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <MostPopular />
         </div>
      </div>
   );
}

export default Sidebar;
