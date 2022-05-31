import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchApiPostReviewProduct, fetchApiReviewProduct } from "../../../src/api/Api_vuong/fetchApi";
import LoadMore from "../../Common/LoadMore";
import RatingDetails from "../../Product/RatingDetails";
import { convertObjectToParams } from "../Common";

function ReviewsProduct({ id = 2625 }) {
   const [isPostReviews, setIsPostReviews] = useState(false);
   const {
      isLoading,
      data = { data: [], headers: "" },
      error,
      refetch,
   } = useQuery(["reviews", id], () => fetchApiReviewProduct(id), { enabled: Boolean(id) });
   if (isLoading) return "Loading...";

   const totalItems = data.headers["x-wp-total"] || 0;
   const handleSubmit = async (e) => {
      setIsPostReviews(true);
      e.preventDefault();
      const data = {
         product_id: id,
         review: e.target[3].value,
         rating: e.target[0].value,
         reviewer: e.target[1].value,
         reviewer_email: e.target[2].value,
      };
      const url = convertObjectToParams(data);
      const arrForm = [...e.target];
      const res = await fetchApiPostReviewProduct(url, id);
      if (res[0]) {
         refetch();
         arrForm.map((item) => (item.value = ""));
      }
      setIsPostReviews(false);
   };
   return (
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
                        <input type="text" disabled={isPostReviews} className="form-control" id="name" placeholder="Enter your name" required />
                     </div>

                     <div className="col-12 col-md-6">
                        <label className="mb-1" htmlFor="id">
                           Email Address
                        </label>
                        <input type="email" disabled={isPostReviews} className="form-control" id="email" placeholder="Email Address" required />
                     </div>

                     <div className="col-12">
                        <label className="mb-1" htmlFor="comments">
                           Comments
                        </label>
                        <textarea
                           disabled={isPostReviews}
                           className="form-control"
                           placeholder="Leave a comment here"
                           id="comments"
                           style={{ height: 100 }}
                           required
                        ></textarea>
                     </div>

                     <div className="col-12">
                        <button type="submit" disabled={isPostReviews} className="btn default-light-theme default-theme default-theme-2">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            </div>

            <div className="col-12 mt-4">
               <div className="customer-review-box">
                  <h4>Customer Reviews</h4>
                  {!data.data[0] && <p className="alert alert-warning w-100 text-center">There are no review in this product</p>}
                  <LoadMore totalItems={totalItems} id={id}>
                     {data.data.map(({ date_created, reviewer_avatar_urls, review, rating, reviewer }, index) => (
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
                  </LoadMore>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ReviewsProduct;
