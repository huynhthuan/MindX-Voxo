import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchApiPostReviewProduct } from "../../../src/api/Api_vuong/fetchApi";
import RatingDetails from "../../Product/RatingDetails";
import { convertObjectToParams, filter_meta_data } from "../Common";
import ReviewsProduct from "./ReviewsProduct";

function ClothReview({ description, meta_data = [], id }) {
   useEffect(() => {
      const descElement = document.getElementById("desc");
      const speciElement = document.getElementById("speci");
      const nav_guideElement = document.getElementById("nav-guide");
      if (descElement) descElement.innerHTML = description;
      if (speciElement) speciElement.innerHTML = meta_data.filter((item) => item.key === "specifications")[0]?.value;
      if (nav_guideElement) nav_guideElement.innerHTML = meta_data.filter((item) => item.key === "guide")[0]?.value;
   }, [description, meta_data]);

   const listQA = meta_data ? filter_meta_data(meta_data, "question_and_answers", "question", "answer") : [];

   return (
      <div className="container">
         <div className="row gx-4 gy-5">
            <div className="col-12">
               <div className="cloth-review">
                  <nav>
                     <div className="nav nav-tabs " id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#desc" type="button">
                           Description
                        </button>

                        <button className="nav-link" id="nav-speci-tab" data-bs-toggle="tab" data-bs-target="#speci" type="button">
                           Specifications
                        </button>

                        <button className="nav-link" id="nav-size-tab" data-bs-toggle="tab" data-bs-target="#nav-guide" type="button">
                           Sizing Guide
                        </button>

                        <button className="nav-link" id="nav-question-tab" data-bs-toggle="tab" data-bs-target="#question" type="button">
                           Q & A
                        </button>

                        <button className="nav-link " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#review" type="button">
                           Review
                        </button>
                     </div>
                  </nav>

                  <div className="tab-content" id="nav-tabContent">
                     <div className="tab-pane fade show active" id="desc"></div>
                     <div className="tab-pane fade" id="speci"></div>
                     <div className="tab-pane fade overflow-auto" id="nav-guide"></div>

                     <div className="tab-pane fade" id="question">
                        <div className="question-answer">
                           <ul>
                              {listQA.map(({ answer, question }, key) => (
                                 <li key={key}>
                                    <div className="que">
                                       <i className="fas fa-question"></i>
                                       <div className="que-details">
                                          <h6>{question}</h6>
                                          <p className="font-light">{answer}</p>
                                       </div>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <ReviewsProduct id={id} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ClothReview;
