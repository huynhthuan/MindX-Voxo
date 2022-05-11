import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';

function PostCard({id,title}) {

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
        <div className="masonary-blog box-shadow">
            <a href="blog-details.html" style={{width:'30%', backgroundColor:'#ddd'}}>
                <img
                    src={
                        !isLoading && data._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url
                    }
                    className="card-img-top bg-img blur-up lazyload"
                    alt=""
                    style={{
                        height: '15rem',
                        objectFit: 'fill'
                    }}
                />
            </a>
            <div className="card-body card-body-width">
                <h6 className="masonary-name">PRODUCT UPDATE</h6>
                <a href="blog-details.html">
                    <h2 className="card-title">{title.rendered}</h2>
                </a>
                <p className="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet et soluta recusandae aspernatur consectetur id nisi
                    dolorum earum consequuntur, voluptas velit illo repellat
                    minus dolores ipsa nemo laudantium. Modi, iure.
                </p>
                <div className="blog-profile">
                    <div className="image-profile">
                        <img
                            src={!isLoading && data._embedded.author[0].avatar_urls["24"]}
                            className="img-fluid blur-up lazyload"
                            alt=""
                        />
                    </div>

                    <div className="image-name">
                        <h3>{!isLoading && data._embedded.author[0].name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
