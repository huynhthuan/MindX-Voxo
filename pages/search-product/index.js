import algoliasearch from "algoliasearch";
import React, { useEffect } from "react";
import { Configure, InstantSearch, RefinementList, SearchBox } from "react-instantsearch-hooks-web";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { configSearch, functionJqueryProductCategory } from "../../components/component_vuong/Common";
import SortCatergory from "../../components/component_vuong/product-category/Filter";
import CustomHitSearchProduct from "../../components/component_vuong/searchProduct/CustomHitSearchProduct";
import Filter from "../../components/component_vuong/searchProduct/FilterSearchProduct";
import SortSearchProduct from "../../components/component_vuong/searchProduct/SortSearchProduct";

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
                     <Filter />
                     <SortSearchProduct />
                     <Configure hitsPerPage={10} />
                     {/* <CustomRefinementList attribute="attributes.options"  limit={55} operator="or" showmore/> */}
                     <RefinementList  attribute="attributes.options"  limit={55} operator="or" showmore/>
                     <CustomHitSearchProduct />
                  </div>
               </div>
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}
