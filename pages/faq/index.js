import { Fragment, useEffect } from "react";
import { useQuery } from "react-query";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { fetchApiFaq } from "../../src/api/Api_vuong/fetchApi";

function Faq() {
   const { isLoading, data, error } = useQuery("faq", fetchApiFaq);
   useEffect(() => {
      functionJQuery();
   }, [data]);
   if (isLoading) return "Loading...";
   console.log(`  ~ data`, data);
   <div className="faq-heading" id="1">
      <i data-feather="help-circle" className="theme-color"></i>
      <div className="faq-option">
         <h3>How does it work?</h3>
         <h6 className="font-light">
            When choosing a static caravan you will probably look for the holiday park which meets your requirements and the move onto the caravan
            selection the right holiday park is vital to ensure a long term ownership.
         </h6>
      </div>
   </div>;
   return (
      <>
         <Breadcrumb title={"How can we help you?"} />

         {/* FAQ Section Start */}
         <section className="faq-section mt-0">
            <div className="container">
               <div className="row g-lg-5 g-4">
                  <div className="col-md-4 zi-1">
                     <div className="faq-contain">
                        <div className="faq-image">
                           <img src="/images/inner-page/faq/guides.png" className="img-fluid blur-up lazyload" alt="" />
                        </div>
                        <h2>Guides</h2>
                        <h5>Guides related to buying products, latest trends, upcoming products.</h5>
                     </div>
                  </div>

                  <div className="col-md-4 zi-1">
                     <div className="faq-contain">
                        <div className="faq-image">
                           <img src="/images/inner-page/faq/faq.png" className="img-fluid blur-up lazyload" alt="" />
                        </div>
                        <h2>FAQ</h2>
                        <h5>Need some help with your order or gor a question that you need answered.</h5>
                     </div>
                  </div>

                  <div className="col-md-4 zi-1">
                     <div className="faq-contain">
                        <div className="faq-image">
                           <img src="/images/inner-page/faq/community.png" className="img-fluid blur-up lazyload" alt="" />
                        </div>
                        <h2>Community</h2>
                        <h5>Join our large community who will help you in any query.</h5>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* FAQ Section End */}

         <section className="faq-details section-b-space">
            <div className="container">
               <div className="row g-4">
                  <div className="col-md-4">
                     <div className="faq-link-box">
                        <ul>
                           {data.map(({ question, answer }, key) => (
                              <li key={key} role="button">
                                 <a href={`#${key + 1}`}>
                                    <h4>{key + 1}.</h4>
                                    <h5>{question}</h5>
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-7 col-md-8">
                     {data.map(({ question, answer }, key) => (
                        <div className="faq-heading " id={key + 1} key={key}>
                           <i data-feather="help-circle" className="theme-color" ></i>
                           <div className="faq-option">
                              <h3>{question}</h3>
                              <h6 className="font-light">{answer}</h6>
                           </div>
                        </div>

                        //     <div className="faq-heading" id="1">
                        //     <i
                        //         data-feather="help-circle"
                        //         className="theme-color"
                        //     ></i>
                        //     <div className="faq-option">
                        //         <h3>How does it work?</h3>
                        //         <h6 className="font-light">
                        //             When choosing a static caravan you will
                        //             probably look for the holiday park which
                        //             meets your requirements and the move
                        //             onto the caravan selection the right
                        //             holiday park is vital to ensure a long
                        //             term ownership.
                        //         </h6>
                        //     </div>
                        // </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         <SubscribeBox />
      </>
   );
}

export default Faq;

const functionJQuery = () => {
    (function ($) {
        "use strict";
        console.log('ss');
      $(".bg-top").parent().addClass("b-top");
      $(".bg-bottom").parent().addClass("b-bottom");
      $(".bg-center").parent().addClass("b-center");
      $(".bg-left").parent().addClass("b-left");
      $(".bg-right").parent().addClass("b-right");
      $(".bg_size_content").parent().addClass("b_size_content");
      $(".bg-img").parent().addClass("bg-size");
      $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
      $(".bg-img").each(function () {
         var el = $(this),
            src = el.attr("src"),
            parent = el.parent();

         parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            display: "block",
         });

         el.hide();
      });
   })(jQuery);
   feather.replace();
};
