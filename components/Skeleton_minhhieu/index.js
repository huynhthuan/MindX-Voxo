import Skeleton from "react-loading-skeleton";

const CategoryPostSkeleton = () => {
  return <div className="grid-item col-lg-3 col-md-4 col-sm-6">
      <Skeleton height={'15rem'} width='100%'/>
      <Skeleton count={2} width='100%' height='1.5rem' className="mt-3"/>
      <Skeleton count={4} width='100%' className="mt-3"/>
  </div>
}

const NewPostBlogListSkeleton = () => {
  return <div className="col-12">
      <div className="row">
        <div className="col-lg-4">
          <Skeleton height='20rem'/>
        </div>
        <div className="col-lg-8">
          <Skeleton height='1.5rem' width='40%'/>
          <Skeleton count={5} className='mt-3'/>
        </div>
    </div>
  </div>
}

const DetailPostSkeleton = () => {
  return <div>
    <Skeleton height='25rem'/>
    <Skeleton className='mt-4' width='30%'/>
    <Skeleton height='1.5rem' className="mt-4"/>
    <Skeleton height='1.5rem' className="mt-3"/>
    <Skeleton className="mt-4"/>
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>            
}

const RelatedPostSkeleton = () => {
  return <div>
    <Skeleton height={'15rem'} width='100%'/>
    <Skeleton/>
    <Skeleton/>
    <Skeleton width='30%'/>
  </div>
}

export { CategoryPostSkeleton, NewPostBlogListSkeleton, DetailPostSkeleton, RelatedPostSkeleton };