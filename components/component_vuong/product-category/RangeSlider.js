import React, { useEffect } from "react";
import { useRange, useSearchBox } from "react-instantsearch-hooks-web";
import { functionJqueryProductCategory } from "../Common";

function RangeSlider() {
   const { refine, range, canRefine,format,sendEvent,start } = useRange({ attribute: "price" });
   const { query } = useSearchBox();
   console.log(`  ~ canRefine`, canRefine);
   console.log(`  ~ range`, range);

   let rangeSlice = "";
   useEffect(() => {
    console.log(`  ~ render`, )

      canRefine &&
         $(function () {
            let $range = $(".js-range-slider"),
               min = range.min,
               max = range.max;

            // eslint-disable-next-line react-hooks/exhaustive-deps
            $range.ionRangeSlider({
               type: "double",
               min: min,
               max: max,
               from: min,
               to: max,
               prefix: "$ ",
               step: 1,
               prettify_enabled: true,
               prettify_separator: ".",
               values_separator: " - ",
               force_edges: true,

               onFinish: function (data) {
                  console.log("data.to", data);
                  refine([data.from, data.to]);
                //   start([data.from, data.to])
               },
            });
            // rangeSlice = $range.data("ionRangeSlider");
            // rangeSlice.update({
            //    from: range.min,
            //    to: range.max,
            // });
         });

   }, [canRefine, query, range.min, range.max]);

   return (
      <div className="range-slider category-list">
         <input type="text" className="js-range-slider" defaultValue="" />
      </div>
   );
}

export default RangeSlider;
