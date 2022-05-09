import Skeleton from "react-loading-skeleton";

const CategoryPostSkeleton = () => {
  return <div className="grid-item col-lg-3 col-md-4 col-sm-6">
      <Skeleton height={'15rem'} width='100%'/>
      <Skeleton count={4} width='100%'/>
  </div>
}

const NewPostBlogListSkeleton = () => {
  return <div className="col-12" key={index}>
    <div className="masonary-blog box-shadow">

    </div>
  </div>
}

export { CategoryPostSkeleton, NewPostBlogListSkeleton };