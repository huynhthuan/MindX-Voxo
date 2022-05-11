import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function PageSection({ totalPages, page = "1", query }) {
   const router = useRouter();
   return (
      <nav className="page-section">
         <ul className="pagination">
            {page !== "1" && (
               <li className="page-item">
                  <a
                     className="page-link"
                     aria-label="Previous"
                     role="button"
                     onClick={() => {
                        router.push(
                           {
                              pathname: "/product-category/" + query.slug,
                           },
                           null,
                           {
                              scroll: false,
                           }
                        );
                     }}
                  >
                     <span aria-hidden="true">
                        <i className="fas fa-chevron-left"></i>
                     </span>
                  </a>
               </li>
            )}
            <PagePagination {...{ totalPages, page }}>
               {Array.from(Array(+totalPages).keys())
                  .slice(page > 3 && totalPages > 8 ? page - 3 : 0)
                  .map((item, index) => (
                     <li key={item} className={item + 1 === +page ? "page-item active" : "page-item"} role="button">
                        <a
                           onClick={() => {
                              router.push(
                                 {
                                    pathname: "/product-category/" + query.slug,
                                    query: {
                                       ...router.query,
                                       page: item + 1,
                                    },
                                 },
                                 null,
                                 {
                                    scroll: false,
                                 }
                              );
                           }}
                           className="page-link"
                        >
                           {item + 1}
                        </a>
                     </li>
                  ))}
            </PagePagination>
            {page !== totalPages && (
               <li className="page-item">
                  <a
                     className="page-link"
                     aria-label="Next"
                     role="button"
                     onClick={() => {
                        router.push(
                           {
                              pathname: "/product-category/" + query.slug,
                              query: { ...router.query, page: totalPages },
                           },
                           null,
                           {
                              scroll: false,
                           }
                        );
                     }}
                  >
                     <span aria-hidden="true">
                        <i className="fas fa-chevron-right"></i>
                     </span>
                  </a>
               </li>
            )}
         </ul>
      </nav>
   );
}

function PagePagination({ children, totalPages, page }) {
   const rest = children.length < 9 && totalPages > 8 && "...";
   if (children.length < 9) return [rest, ...children];
   return [...children.slice(0, 5), "...", ...children.slice(-2)];
}

export default PageSection;
