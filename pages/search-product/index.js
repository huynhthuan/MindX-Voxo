import algoliasearch from "algoliasearch";
import React, { useEffect } from "react";
import { Configure, InstantSearch } from "react-instantsearch-hooks-web";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { configSearch, functionJquery, functionJqueryProductCategory } from "../../components/component_vuong/Common";
import CustomHitSearchProduct from "../../components/component_vuong/searchProduct/CustomHitSearchProduct";
import Filter from "../../components/component_vuong/searchProduct/Filter";
import Sort from "../../components/component_vuong/searchProduct/Sort";

export default function Index() {
   useEffect(() => {
      functionJqueryProductCategory();
      // top filter

      $(".onclick-title h6").click(function () {
         $(this).parent(".onclick-title").toggleClass("show").siblings().removeClass("show");
      });

      $(document).mouseup(function (e) {
         var topFilter = $(".top-filter-section .onclick-title");
         if (!topFilter.is(e.target) && topFilter.has(e.target).length === 0) {
            $(".top-filter-section .onclick-title").removeClass("show");
         }
      });
   }, []);
   const { appId, apikey, indexName } = configSearch;
   const searchClient = algoliasearch(appId, apikey);

   return (
      <>
         <Breadcrumb title={"Search product"} />
         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-12 ratio_30">
                     <div className="container">
                        <InstantSearch searchClient={searchClient} indexName={indexName} routing>
                           <div className="search-panel">
                              <div className="left-panel">
                                 <Configure hitsPerPage={10} />
                                 {/* <CustomRefinementList attribute="attributes.options"  limit={55} operator="or" showmore/> */}
                              </div>
                              <div className="search-panel__filters"></div>
                              <div className="search-panel__results">
                                 <Filter />
                                 <Sort />
                                 <CustomHitSearchProduct />
                              </div>
                           </div>
                        </InstantSearch>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}
