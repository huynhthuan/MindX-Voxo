import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';

function PostCardMansory({id,date,title,content,excerpt,featured_media,author}) {
    const { isLoading, error, data } = useQuery('media', async () =>
        {
            const res = await fetch(BLOG_LIST + id + '?_embed');
        
            const data = await res.json();

            return data;
        }
    );

    if (error) 
        return 'An error has occurred: ' + error.message;

    return (
        <div className="card masonary-blog">
            <a href="blog-details.html">
                <img
                    src={
                        !isLoading && data._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url
                    }
                    alt=""
                    className="card-img-top blur-up lazyload"
                />
            </a>
            <div className="card-body">
                <a href="blog-details.html">
                    <h2 className="card-title">{title.rendered}</h2>
                </a>
                <p className="font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sapiente porro eligendi, delectus, molestias illo
                    exercitationem sequi a, expedita error ea itaque ab. Ullam
                    culpa, fugit magnam recusandae porro labore eligendi?
                </p>
                <div className="blog-profile">
                    {
                        !isLoading
                            &&
                                data 
                                    && 
                                        <>
                                            <div className="image-profile">
                                                <img
                                                    src={data._embedded.author[0].avatar_urls["24"]}
                                                    className="img-fluid blur-up lazyload"
                                                    alt=""
                                                />
                                            </div>

                                            <div className="image-name">
                                                <h3>{data._embedded.author[0].name}</h3>
                                            </div>
                                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default PostCardMansory;
