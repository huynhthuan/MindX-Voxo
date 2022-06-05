import { Pagination, useHits } from "react-instantsearch-hooks-web";
import HitCompare from "./HitCompare";


function CustomHits() {
   const { hits } = useHits();

   return (
      <>
         {hits.map((item, index) => (
            <HitCompare key={index} hit={item} />
         ))}
         {hits.length > 0 ? <Pagination className="mt-3" /> : <p className="alert alert-warning mt-3 w-100 text-center">There is no result</p>}
      </>
   );
}

export default CustomHits;
