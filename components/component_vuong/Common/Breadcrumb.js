import React from "react";

function Breadcrumb({ title, content }) {
   return (
      <section className="breadcrumb-section section-b-space">
         <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h3>{title}</h3>
                  <nav>
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                           <a href="index.html">
                              <i className="fas fa-home"></i>
                           </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                           {content}
                        </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Breadcrumb;
