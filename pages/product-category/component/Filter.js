import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Filter() {
   const [itemsPerPage, setItemsPerPage] = useState("24");
   // console.log(`  ~ itemsPerPage`, itemsPerPage);
   const router = useRouter();
   const {categories}=router.query
   useEffect(() => {
      setItemsPerPage(router.query.per_page);
   }, [router.query.per_page]);

   console.log(`  ~ router`, router, "per_page", router.query.per_page);
   return (
      <div>
         <div className="row g-4">
            {/* filter button */}
            <div className="filter-button">
               <button className="btn filter-btn p-0">
                  <i data-feather="align-left"></i> Filter
               </button>
            </div>
            {/* filter button */}

            {/* label and featured section */}
            <div className="col-md-12">
               <ul className="short-name">
                  <li>
                     <div className="label-tag">
                        <span>Shirts</span>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                     </div>
                  </li>
                  <li>
                     <div className="label-tag">
                        <span>Kurtas</span>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                     </div>
                  </li>
                  <li>
                     <div className="label-tag">
                        <span>Jackets</span>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                     </div>
                  </li>
                  <li>
                     <div className="label-tag">
                        <span>Blazers</span>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                     </div>
                  </li>
                  <li>
                     <div className="label-tag">
                        <a href="undefined">
                           <span>Clear All</span>
                        </a>
                     </div>
                  </li>
               </ul>
            </div>

            <div className="col-12">
               <div className="filter-options">
                  <div className="select-options">
                     <div className="page-view-filter">
                        <select
                           className="form-select"
                           aria-label="Default select example"
                           defaultValue={`/product-category/accessories?orderby=id&order=asc&categories=${categories}&per_page=${itemsPerPage}`}
                           onChange={(event) => router.push(event.target.value)}
                        >
                           <option value={`/product-category/accessories?orderby=id&order=asc&categories=${categories}&per_page=${itemsPerPage}`}>
                              Sort items
                           </option>
                           <option value={`/product-category/accessories?orderby=title&order=asc&categories=${categories}&per_page=${itemsPerPage}`}>
                              Alphabetically A-Z
                           </option>
                           <option value={`/product-category/accessories?orderby=title&order=desc&categories=${categories}&per_page=${itemsPerPage}`}>
                              Alphabetically Z-A
                           </option>
                           <option value={`/product-category/accessories?orderby=price&order=desc&categories=${categories}&per_page=${itemsPerPage}`}>
                              Price, High To Low
                           </option>
                           <option value={`/product-category/accessories?orderby=price&order=asc&categories=${categories}&per_page=${itemsPerPage}`}>
                              Price, Low To High
                           </option>
                           <option value={`/product-category/accessories?orderby=date&order=asc&categories=${categories}&per_page=${itemsPerPage}`}>
                              Date, Old To New
                           </option>
                           <option value={`/product-category/accessories?orderby=date&order=desc&categories=${categories}&per_page=${itemsPerPage}`}>
                              Date, New To Old
                           </option>
                        </select>
                     </div>

                     <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue="24"
                        // defaultValue={router.query.per_page}
                        onChange={(event) => {
                           router.push({
                              pathname: "/product-category/accessories",
                              query: { ...router.query, per_page: event.target.value, page: "1" },
                           });
                           setItemsPerPage(event.target.value);
                        }}
                     >
                        <option value="12">12 items per page</option>
                        <option value="24">24 items per page</option>
                        <option value="48">48 items per page</option>
                     </select>
                  </div>
                  <div className="grid-options d-sm-inline-block d-none">
                     <ul className="d-flex">
                        <li className="two-grid">
                           <a>
                              <img src="/svg/grid-2.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                        <li className="three-grid d-md-inline-block d-none">
                           <a>
                              <img src="/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                        <li className="grid-btn active d-lg-inline-block d-none">
                           <a>
                              <img src="/svg/grid.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                        <li className="list-btn">
                           <a>
                              <img src="/svg/list.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Filter;
