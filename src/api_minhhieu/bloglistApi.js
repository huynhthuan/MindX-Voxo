import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import PostCard from '../../components/Posts/PostCard';

function Post() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(BLOG_LIST).then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data);

  return (
    <>
      {
        data.map((item,index) => {
          return <div className="col-12" key={index}>
            <PostCard {...item}/>
          </div>
        })
      }
    </>
  )
}

export default Post;