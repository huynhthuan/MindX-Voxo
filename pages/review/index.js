import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { errorModal } from "../../components/component_vuong/Common";
import PagePagination from "../../components/component_vuong/Common/PagePagination";
import PlaceHolderReviewPage from "../../components/component_vuong/review/PlaceHolderReviewPage";
import RatingDetails from "../../components/Product/RatingDetails";
import { fetchApi, fetchApiAllReviews } from "../../src/api/Api_vuong/fetchApi";

function Review() {
   const {
      query: { page = "1" },
   } = useRouter();
   const queryClient = useQueryClient();
   const {
      isLoading,
      data = { headers: {} },
      error,
      isError,
      isFetching,
   } = useQuery(["allReviews", page], () => fetchApiAllReviews(page), {
      keepPreviousData: true,
      staleTime: 60000,
   });
   useEffect(() => {
      queryClient.prefetchQuery(["allReviews", +page + 1 + ""], () => fetchApiAllReviews(+page + 1 + ""));
   }, [data, page, queryClient]);

   const totalPages = data.headers["x-wp-totalpages"] || 0;

   useEffect(() => {
      errorModal(isError, error);
   }, [error, isError]);

   return (
      <>
         <Breadcrumb title={"Review"} />

      { <section className="review-section section-b-space" id="list-items">
            <div className="container">
               <div className="row g-4 grid">
                  {isLoading || isError || isFetching ? (
                     <PlaceHolderReviewPage />
                  ) : (
                     data.data.map(({ review, reviewer_avatar_urls, reviewer, rating }, key) => (
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
                                    <RatingDetails average_rating={rating} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))
                  )}
               </div>
            </div>
         </section>}
         {!temp}
         <PagePagination totalPages={totalPages} />

         <SubscribeBox />

         <Script src="/js/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
         <Script src="/js/portfolio-grid.js" strategy="afterInteractive"></Script>
      </>
   );
}

export default Review;

const temp=    <section className="review-section section-b-space">
<div className="container">
    <div className="row g-4 grid">
        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        This was a great experience. I explained to Greg what I was looking for and he brought samples with him that met my criteria exactly as to product quality and
                        price. He was very knowledgeable about the products and very easy to work with. I was able to schedule the work within two weeks of signing the contract and
                        they were able to do the demo and installation in two days.
                    </p>

                    <p>
                        They did a very good job on the installation and they also cleaned up after themselves, including vacuuming the newly laid carpet. I have never had a carpet
                        installer do that! Everyone I spoke with at Tish was very accommodating. I highly recommend them.
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        Tish installed hardwood flooring in our dining room and family room. Greg Hollinden measured, provided reasonable quote and provided outstanding installation.
                        Their installer, Shane did a superior job. Future flooring needs will be addressed by Tish!
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/2.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        I was very impressed with the service I received from Tish Flooring. They we’re prompt, courteous and professional. It was a fantastic value for my money and
                        they followed up to make sure I was happy with their service. Everyone I came in contact with was wonderful! I would highly recommend Tish Flooring.
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/3.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>Tish Flooring has been great from the beginning to the end of this transaction … Very professional, well priced, and extremely customer service oriented.</p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/4.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        Great. They are a great company to deal with. Came out very timely, always had good follow up, very nice people to deal with and reasonably priced. I would
                        definitely use them again.
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/5.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        They were wonderful! Excellent all the way through! We had the carpet picked out and they were so easy to work with. They are highly communicative and respond
                        efficiently! We would use them again in a heartbeat!
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>They are very professional and their craftsmanship is a testament to the pride in their work.</p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/2.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        We would like thank Tish Flooring for a great product and to compliment the installers for the excellent service they provided. We were very pleased with the
                        overall quality of service we received. Both installers displayed professionalism and the ability to get the work done in an efficient and timely manner.
                    </p>

                    <p>
                        Most of all, they were knowledgeable about their product and eager to answer all of our questions. We were astonished with the end product and will be sure to
                        mention Tish Flooring to friends and family who are in need of new flooring. Such a commitment to great customer service is to be commended.
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/3.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        A very positive experience from start to finish! They were very accommodating of my schedule, reasonably priced, very professional and neat during installation.
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/4.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>
                        Tish was very professional. They were also one of the most responsive companies I have ever worked with. I would email or call, and get a response within a
                        couple hours at max. My project manager went above and beyond to find me the carpet color I wanted in the quality I desired. We will definitely use them again
                        when we replace our upstairs carpet.
                    </p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/5.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>They do great work. They are very fair, very timely, and great to work with.</p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>

        <div className="grid-item col-lg-4 col-sm-6">
            <div className="review-box">
                <div className="review-name">
                    <p>From the first contact the process was smooth and very professional…</p>
                </div>
                <div className="review-image">
                    <div className="review-profile">
                        <img src="/images/inner-page/review-image/2.jpg" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                    <i className="fas fa-quote-right"></i>
                    <div className="image-name">
                        <h3>John wike</h3>
                        <ul className="rating">
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
                </div>
            </div>
        </div>
    </div>
</div>
</section>