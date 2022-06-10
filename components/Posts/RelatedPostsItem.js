import { useDetailPost } from '../../src/api_minhhieu/detailPostApi';
import { transferDate } from '../../utils/helpers';

const RelatedPostsItem = ({postSlug}) => {

    const { error, data, isFetching } = useDetailPost(postSlug);

    if (error) return 'An error has occurred: ' + error.message;

    return <div>
        {
            isFetching || !data
                ? 
                    null
                :
                    <div className="card blog-categority">
                        <a href="blog-details.html" className="blog-img">
                            <img
                                src={
                                    data.data[0]._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url
                                }
                                alt=""
                                className="card-img-top blur-up lazyload bg-img"
                            />
                        </a>
                        <div className="card-body">
                            <a href="blog-details.html">
                                <h2 className="card-title">
                                    {
                                        data.data[0].title.rendered
                                    }
                                </h2>
                            </a>
                            <div className="blog-profile">
                                <div className="image-name">
                                    <h3>{data.data[0]._embedded.author[0].name}</h3>
                                    <span style={{color:'#7e7e7e'}}>{transferDate(data.data[0].date)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
        }
    </div>
}

export default RelatedPostsItem;