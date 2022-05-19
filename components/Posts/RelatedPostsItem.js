import { useDetailPost } from '../../src/api_minhhieu/detailPostApi';

const RelatedPostsItem = ({postId}) => {

    const { isLoading, error, data, isFetching } = useDetailPost(postId);

    if (error) return 'An error has occurred: ' + error.message;

    return <div>
        {
            isLoading || !data
                ? 
                    null
                :
                    <div className="card blog-categority">
                        <a href="blog-details.html" className="blog-img">
                            <img
                                src={
                                    data.data._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url
                                }
                                alt=""
                                className="card-img-top blur-up lazyload bg-img"
                            />
                        </a>
                        <div className="card-body">
                            <a href="blog-details.html">
                                <h2 className="card-title">
                                    {
                                        data.data.title.rendered
                                    }
                                </h2>
                            </a>
                            <div className="blog-profile">
                                <div className="image-name">
                                    <h3>{data.data._embedded.author[0].name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
        }
        
    </div>
}

export default RelatedPostsItem;