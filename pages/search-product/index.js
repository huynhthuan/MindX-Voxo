import algoliasearch from "algoliasearch";
import React, { useEffect } from "react";
import { Configure, InstantSearch } from "react-instantsearch-hooks-web";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { configSearch, functionJquery, functionJqueryProductCategory } from "../../components/component_vuong/Common";
import CustomSearchBox from "../../components/component_vuong/compare/CustomSearchBox";
import CustomHitSearchProduct from "../../components/component_vuong/searchProduct/CustomHitSearchProduct";
import Filter from "../../components/component_vuong/searchProduct/Filter";
import Sort from "../../components/component_vuong/searchProduct/Sort";

export default function Index() {
   useEffect(() => {
      functionJqueryProductCategory();
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
                                 <CustomSearchBox>
                                    <Filter />
                                    <Sort />
                                    <CustomHitSearchProduct />
                                 </CustomSearchBox>
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
