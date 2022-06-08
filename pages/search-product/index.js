import React, { useEffect, useState } from "react";
import { Configure } from "react-instantsearch-hooks-web";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { functionJqueryProductCategory } from "../../components/component_vuong/Common";
import CustomHitSearchProduct from "../../components/component_vuong/searchProduct/CustomHitSearchProduct";
import Filter from "../../components/component_vuong/searchProduct/FilterSearchProduct";
import SortSearchProduct from "../../components/component_vuong/searchProduct/SortSearchProduct";
import { fetchApi } from "../../src/api/Api_vuong/fetchApi";

export default function Index(props) {
   const [hitsPerPage, setHitsPerPage] = useState(null);
   const [sortHits, setSortHits] = useState(null);

   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   return (
      <>
         <Breadcrumb title={"Search product"} />

         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-12 ratio_30">
                     <Filter {...props} sortHits={sortHits} setSortHits={setSortHits} />
                     <SortSearchProduct setHitsPerPage={setHitsPerPage} hitsPerPage={hitsPerPage} />
                     <Configure hitsPerPage={hitsPerPage || 10} />

                     {/* <SortBy
                        defaultRefinement="product"
                        items={[
                           { label: "Featured", value: "product" },
                           { label: "Price (asc)", value: "price-asc" },
                           { label: "Price (desc)", value: "price-desc" },
                           { label: "Name (asc)", value: "name-asc" },
                           { label: "Name (desc)", value: "name-desc" },
                           { label: "Date (asc)", value: "date-asc" },
                           { label: "Date (desc)", value: "date-desc" },
                        ]}
                     />
                     <RefinementList attribute="attributes.options" limit={55} operator="or" showmore="true" />
                     <RefinementList attribute="categories.name" limit={55} operator="or" showmore="true" />
                     <RefinementList attribute="price" limit={55} operator="or" showmore="true" /> */}

                     <CustomHitSearchProduct />
                  </div>
               </div>
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}

export const getStaticProps = async () => {
   const resBrand = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/1/terms");
   const resColor = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/2/terms");
   const resSize = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/3/terms");
   return { props: { resBrand: resBrand.data, resColor: resColor.data, resSize: resSize.data } };
};
