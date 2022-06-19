import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

function PostCardMansory({ id, title, excerpt, slug }) {
    const { isLoading, error, data, isFetching, refetch } = useQuery(
        'media',
        async () => {
            const res = await fetch(BLOG_LIST + id + '?_embed');

            const data = await res.json();

            return data;
        }
    );

    useEffect(() => {
        refetch();
    }, [id]);

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className="card masonary-blog" style={{ height: '100%' }}>
            <Link href={`/blog/posts/${slug}`}>
                <a className="w-100">
                    {isFetching ? (
                        <Skeleton className="ratio ratio-4x3"></Skeleton>
                    ) : (
                        <img
                            src={
                                data?._embedded['wp:featuredmedia'][0]
                                    .media_details.sizes.medium_large.source_url
                            }
                            alt=""
                            className="card-img-top blur-up lazyload"
                        />
                    )}
                </a>
            </Link>
            <div className="card-body">
                <Link href={`/blog/posts/${slug}`}>
                    <a>
                        <h2 className="card-title">{title.rendered}</h2>
                    </a>
                </Link>
                <p
                    className="font-light"
                    dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                ></p>
                <div className="blog-profile">
                    {!isLoading && data && (
                        <>
                            <div className="image-profile">
                                <img
                                    src={
                                        data?._embedded.author[0].avatar_urls[
                                            '24'
                                        ]
                                    }
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </div>

                            <div className="image-name">
                                <h3>{data?._embedded.author[0].name}</h3>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostCardMansory;
