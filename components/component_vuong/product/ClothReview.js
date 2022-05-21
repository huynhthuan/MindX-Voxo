import React, { useEffect, useState } from "react";
import { fetchApi, fetchApiReviewProduct } from "../../../src/api/Api_vuong/fetchApiGetCategories";
import RatingDetails from "../../Product/RatingDetails";
import { convertObjectToParams } from "../Common";

function ClothReview({ data = {} }) {
   const [reviews, setReviews] = useState(data.reviews || []);
   const [isLoadingreviews, setIsLoadingReviews] = useState(false);
   let arrQA = [];
   useEffect(() => {
      const descElement = document.getElementById("desc");
      const speciElement = document.getElementById("speci");
      const nav_guideElement = document.getElementById("nav-guide");
      if (descElement) descElement.innerHTML = data.description;
      if (speciElement) speciElement.innerHTML = data.meta_data.filter((item) => item.key === "specifications")[0].value;
      if (nav_guideElement) nav_guideElement.innerHTML = data.meta_data.filter((item) => item.key === "guide")[0].value;
   }, [data]);
   if (!data.id) return "Loading...";
   const { id } = data;
   if (data.meta_data) {
      const totalQA = data.meta_data.filter((item, index) => item.key === "question_and_answers")[0].value;
      for (let index = 0; index < totalQA; index++) {
         const question = data.meta_data.filter((item) => item.key === "question_and_answers_" + index + "_question")[0].value;
         const answers = data.meta_data.filter((item) => item.key === "question_and_answers_" + index + "_answer")[0].value;
         arrQA.push({ answers, question });
      }
   }
   const handleSubmit = async (e) => {
      setIsLoadingReviews(true);
      e.preventDefault();
      const data = {
         product_id: id,
         reviewer: e.target[1].value,
         reviewer_email: e.target[2].value,
         review: e.target[3].value,
         rating: e.target[0].value,
      };
      console.log(`  ~ data`, data)
      const url = convertObjectToParams(data);
      const arrForm = [...e.target];
      const res = await fetchApiReviewProduct(url, id);
      if (res[0]) {
         setReviews(res);
         arrForm.map((item) => (item.value = ""));
      }
      setIsLoadingReviews(false);
   };

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
                              {arrQA.map(({ answers, question }, key) => (
                                 <li key={key}>
                                    <div className="que">
                                       <i className="fas fa-question"></i>
                                       <div className="que-details">
                                          <h6>{question}</h6>
                                          <p className="font-light">{answers}</p>
                                       </div>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="review">
                        <div className="row g-4">
                           <div className="col-lg-4">
                              <div className="customer-rating">
                                 <h2>Customer reviews</h2>
                                 <ul className="rating my-2 d-inline-block">
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

                                 <div className="global-rating">
                                    <h5 className="font-light">82 Ratings</h5>
                                 </div>

                                 <ul className="rating-progess">
                                    <li>
                                       <h5 className="me-3">5 Star</h5>
                                       <div className="progress">
                                          <div
                                             className="progress-bar"
                                             role="progressbar"
                                             style={{ width: "78%" }}
                                             aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100"
                                          ></div>
                                       </div>
                                       <h5 className="ms-3">78%</h5>
                                    </li>
                                    <li>
                                       <h5 className="me-3">4 Star</h5>
                                       <div className="progress">
                                          <div
                                             className="progress-bar"
                                             role="progressbar"
                                             style={{ width: "68%" }}
                                             aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100"
                                          ></div>
                                       </div>
                                       <h5 className="ms-3">62%</h5>
                                    </li>
                                    <li>
                                       <h5 className="me-3">3 Star</h5>
                                       <div className="progress">
                                          <div
                                             className="progress-bar"
                                             role="progressbar"
                                             style={{ width: "68%" }}
                                             aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100"
                                          ></div>
                                       </div>
                                       <h5 className="ms-3">44%</h5>
                                    </li>
                                    <li>
                                       <h5 className="me-3">2 Star</h5>
                                       <div className="progress">
                                          <div
                                             className="progress-bar"
                                             role="progressbar"
                                             style={{ width: "68%" }}
                                             aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100"
                                          ></div>
                                       </div>
                                       <h5 className="ms-3">30%</h5>
                                    </li>
                                    <li>
                                       <h5 className="me-3">1 Star</h5>
                                       <div className="progress">
                                          <div
                                             className="progress-bar"
                                             role="progressbar"
                                             style={{ width: "68%" }}
                                             aria-valuenow="50"
                                             aria-valuemin="0"
                                             aria-valuemax="100"
                                          ></div>
                                       </div>
                                       <h5 className="ms-3">18%</h5>
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-8">
                              <div className="review-box">
                                 <form className="row g-4" onSubmit={(e) => handleSubmit(e)}>
                                    <p className="d-inline-block me-2">Rating</p>
                                    <RatingDetails change={true} />
                                    <div className="col-12 col-md-6">
                                       <label className="mb-1" htmlFor="name">
                                          Name
                                       </label>
                                       <input
                                          type="text"
                                          disabled={isLoadingreviews}
                                          className="form-control"
                                          id="name"
                                          placeholder="Enter your name"
                                          required
                                       />
                                    </div>

                                    <div className="col-12 col-md-6">
                                       <label className="mb-1" htmlFor="id">
                                          Email Address
                                       </label>
                                       <input
                                          type="email"
                                          disabled={isLoadingreviews}
                                          className="form-control"
                                          id="id"
                                          placeholder="Email Address"
                                          required
                                       />
                                    </div>

                                    <div className="col-12">
                                       <label className="mb-1" htmlFor="comments">
                                          Comments
                                       </label>
                                       <textarea
                                          disabled={isLoadingreviews}
                                          className="form-control"
                                          placeholder="Leave a comment here"
                                          id="comments"
                                          style={{ height: 100 }}
                                          required
                                       ></textarea>
                                    </div>

                                    <div className="col-12">
                                       <button
                                          type="submit"
                                          disabled={isLoadingreviews}
                                          className="btn default-light-theme default-theme default-theme-2"
                                       >
                                          Submit
                                       </button>
                                    </div>
                                 </form>
                              </div>
                           </div>

                           <div className="col-12 mt-4">
                              <div className="customer-review-box">
                                 <h4>Customer Reviews</h4>
                                 {!reviews[0] && <p className="alert alert-warning w-100 text-center">There are no review in this product</p>}
                                 {reviews.map(({ date_created, reviewer_avatar_urls, review, rating, reviewer }, index) => (
                                    <div key={index} className="customer-section">
                                       <div className="customer-profile">
                                          <img src={reviewer_avatar_urls["24"]} className="img-fluid blur-up lazyload" alt="" />
                                       </div>

                                       <div className="customer-details">
                                          <h5>{reviewer}</h5>
                                          <RatingDetails rating={rating} />
                                          <p className="font-light" dangerouslySetInnerHTML={{ __html: review }}></p>
                                          <p className="date-custo font-light">{date_created}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ClothReview;
