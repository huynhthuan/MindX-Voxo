import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import SubscribeBox from "../../components/Common/SubscribeBox";
import Breadcrumb from "../../components/component_vuong/Common/Breadcrumb";
import PagePagination from "../../components/component_vuong/Common/PagePagination";
import RatingDetails from "../../components/Product/RatingDetails";
import { fetchApiAllReviews } from "../../src/api/Api_vuong/fetchApi";

function Review() {
   const {
      query: { page = "1" },
   } = useRouter();
   const queryClient = useQueryClient();
   const { isLoading, data = {}, error } = useQuery(["allReviews", page], () => fetchApiAllReviews(page));
   useEffect(() => {
      if (data.data?.length > 0) {
         queryClient.prefetchQuery(["allReviews", +page + 1 + ""], () => fetchApiAllReviews(+page + 1 + ""));
      }
   }, [data, page, queryClient]);

   if (isLoading) return "Loading...";
   const totalPages = data.headers["x-wp-totalpages"];
   return (
      <>
         <Breadcrumb title={"Review"} content={"Review"} />

         <section className="review-section section-b-space">
            <div className="container">
               <div className="row g-4 grid">
                  {data.data.map(({ review, reviewer_avatar_urls, reviewer, rating }, key) => (
                     <div key={key} className="grid-item col-lg-4 col-sm-6">
                        <div className="review-box">
                           <div className="review-name" dangerouslySetInnerHTML={{ __html: review }}></div>
                           <div className="review-image">
                              <div className="review-profile">
                                 <img src={reviewer_avatar_urls["24"]} className="img-fluid blur-up lazyload" alt="" />
                              </div>
                              <i className="fas fa-quote-right"></i>
                              <div className="image-name">
                                 <h3>{reviewer}</h3>
                                 <RatingDetails rating={rating} />
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <PagePagination totalPages={totalPages} />
            </div>
         </section>

         <SubscribeBox />

         <Script src="/js/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
         <Script src="/js/portfolio-grid.js" strategy="afterInteractive"></Script>
      </>
   );
}

export default Review;
