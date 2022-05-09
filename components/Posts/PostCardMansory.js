import { useQuery } from 'react-query';
import { FEATURED_MEDIA, POST_AUTHOR } from '../../utils/api_minhhieu';

function PostCardMansory({id,date,title,content,excerpt,featured_media,author}) {
    console.log(POST_AUTHOR + author);
    const { isLoading, error, data } = useQuery('media', async () =>
        {
            const res = await fetch(FEATURED_MEDIA + featured_media);
        
            const data = await res.json();

            return data;
        }
    );

    if (error) 
        return 'An error has occurred: ' + error.message;

    // const { isLoadingAuthor, errorFetchAuthor, dataAuthor } = useQuery('author', async () =>
    //     {
    //         const res = await fetch(POST_AUTHOR + author);
        
    //         const dataAuthor = await res.json();

    //         return dataAuthor;
    //     }
    // );

    // console.log(dataAuthor);

    // if (errorFetchAuthor) return 'An error has occurred: ' + error.message

    return (
        <div className="card masonary-blog">
            <a href="blog-details.html">
                <img
                    src={
                        !isLoading && data.guid.rendered
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
                        // !isLoadingAuthor
                        //     && 
                        //         <>
                        //             <div className="image-profile">
                        //                 <img
                        //                     // src={dataAuthor.avatar_urls['24']}
                        //                     className="img-fluid blur-up lazyload"
                        //                     alt=""
                        //                 />
                        //             </div>

                        //             <div className="image-name">
                        //                 {/* <h3>{dataAuthor.name}</h3> */}
                        //             </div>
                        //         </>
                    }
                </div>
            </div>
        </div>
    );
}

export default PostCardMansory;
