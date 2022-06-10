import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import SubscribeBox from "../../components/Common/SubscribeBox";
import PlaceHolderCard from "../../components/Product/PlaceHolderCard";
import ProductCard from "../../components/Product/ProductCard";
import Sidebar from "../../components/ProductCategory/Sidebar";
import { fetchApi, fetchApiGetCategories } from "../../src/api/Api_vuong/fetchApi";
import BannerDetail from "../../components/component_vuong/product-category/BannerDetail";
import Filter from "../../components/component_vuong/product-category/Filter";
import PagePagination from "../../components/component_vuong/Common/PagePagination";
import { errorModal, functionJqueryProductCategory } from "../../components/component_vuong/Common";
import StickCompare from "../../components/component_vuong/product-category/StickCompare";
import Breadcrumb from "../../components/Common/BreadCrumb";

function ProductCategory(props) {
   // props = dataSlice;
   const queryClient = useQueryClient();
   const { query } = useRouter();
   const { page = "1" } = query;
   const { slug, per_page = "12" } = query;
   const {
      isLoading,
      data = { data: [], headers: "" },
      error,
      isError,
      isFetching,
   } = useQuery(["products", { ...query }], () => fetchApiGetCategories(query), {
      enabled: Boolean(slug),
      keepPreviousData: true,
      staleTime: 60000,
   });

   useEffect(() => {
      queryClient.prefetchQuery(["products", { ...query, page: +page + 1 + "" }], () => fetchApiGetCategories({ ...query, page: +page + 1 + "" }));
   }, [data, page, queryClient, query]);

   useEffect(functionJqueryProductCategory, [data]);
   useEffect(() => {
      errorModal(isError, error);
   }, [isError, error]);

   const { headers, idCategory } = data;
   const { "x-wp-totalpages": totalPages = 0 } = headers;

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
                     <Filter idCategory={idCategory} slug={slug} />
                     <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
                        {isLoading || isFetching || isError ? (
                           Array(+per_page)
                              .fill(null)
                              .map((item, index) => <PlaceHolderCard key={index} />)
                        ) : data.data[0] ? (
                           data.data.map((item, index) => <ProductCard {...item} key={index} />)
                        ) : (
                           <p className="alert alert-warning w-100 text-center">There are no products in this category.</p>
                        )}
                     </div>
                     <PagePagination totalPages={totalPages} />
                  </div>
               </div>
            </div>
         </section>
         <SubscribeBox />
         <StickCompare />
      </>
   );
}

export const getStaticPaths = async () => {
   return {
      paths: [], //indicates that no page needs be created at build time
      fallback: "blocking", //indicates the type of fallback
   };
};
export const getStaticProps = async () => {
   const resBrand = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/1/terms");
   const resColor = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/2/terms");
   const resSize = await fetchApi("https://voxohub.xyz/wp-json/wc/v3/products/attributes/3/terms");
   return { props: { resBrand: resBrand.data, resColor: resColor.data, resSize: resSize.data } };
};

export default ProductCategory;
