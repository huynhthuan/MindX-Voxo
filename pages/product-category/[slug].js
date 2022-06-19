import { useRouter } from "next/router";
import { useEffect } from "react";
import SubscribeBox from "../../components/Common/SubscribeBox";
import Sidebar from "../../components/ProductCategory/Sidebar";
import BannerDetail from "../../components/component_vuong/product-category/BannerDetail";
import { functionJqueryProductCategory } from "../../components/component_vuong/Common";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SortSearchProduct from "../../components/component_vuong/searchProduct/SortSearchProduct";
import CustomHitSearchProduct from "../../components/component_vuong/searchProduct/CustomHitSearchProduct";
import { useRefinementList } from "react-instantsearch-hooks-web";

function ProductCategory(props) {
   const {
      query: { slug },
   } = useRouter();
   const { refine, canRefine } = useRefinementList({ attribute: "categories.name" });

   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   useEffect(() => {
      slug && refine(slug);
   }, [slug]);
   
   if (!canRefine || !slug) return;
   return (
      <>
         <Breadcrumb title="Shop Listing" />

         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-4">
                     <Sidebar {...props} />
                  </div>
                  <div className="col-lg-9 col-12 ratio_30">
                     <BannerDetail />
                     <SortSearchProduct itemPerPage={12} />
                     <CustomHitSearchProduct />
                  </div>
               </div>
            </div>
         </section>

         <SubscribeBox />

      </>
   );
}

export default ProductCategory;
