import Skeleton from "react-loading-skeleton";

const CategoryPostSkeleton = () => {
  return <div className="grid-item col-lg-3 col-md-4 col-sm-6">
    <div className="card masonary-blog">
      <Skeleton height={'15rem'} width={'90%'}/>
      <div className="card-body">
        <Skeleton count={4} width={'90%'}/>
      </div>
    </div>
  </div>
}

export { CategoryPostSkeleton };