import { useQuery } from 'react-query';
import { BlOG_LIST_CATEGORY } from '../../utils/api_minhhieu';
import PostCardMansory from '../../components/Posts/PostCardMansory';
import { CategoryPostSkeleton } from '../../components/Skeleton_minhhieu';

function ListPostByCategory() {
  const { isLoading, error, data } = useQuery('repoData', async () =>
    {
      const res = await fetch(BlOG_LIST_CATEGORY + '43');
  
      const data = await res.json();

      return {
          responseInfo: data, 
          totalPost: res.headers.get('x-wp-total'),
          totalPage: res.headers.get('x-wp-totalpages')
      }
    }
  );

  if (isLoading) 
    return <>
        {
          Array(8).fill(0).map((item, index) => {
              return <CategoryPostSkeleton key = {index} />
          })
        }
    </>

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      {
        data.responseInfo && data.responseInfo.map( (item,index) => {
          return <div className="grid-item col-lg-3 col-md-4 col-sm-6" key={index}>
              <PostCardMansory {...item}/>
          </div>
        })
      }
    </>
  )
}

export default ListPostByCategory;
