import { useEffect } from 'react';
import { useRelatedPosts } from '../../src/api_minhhieu/relatedPostsApi';
import RelatedPostsItem from './RelatedPostsItem';
import { RelatedPostSkeleton } from '../../components/Skeleton_minhhieu/index';

function RelatedPostSlide({info}) {

    const { isLoading, error, data, isFetching } = useRelatedPosts({ categoryId:info.categoryId, excludeId:info.excludeId });

    useEffect(() => {
        if (data) {
            $('.slide-4').slick({
                dots: true,
                infinite: true,
                speed: 500,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                ],
            });
        }
    }, [data]);

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <section className="section-b-space block-shadow-space ratio3_2">
            <div className="container">
                <div className="slide-4 product-wrapper slick-lg-space">
                    {
                        isLoading || !data
                            ?
                                Array(4).fill(0).map((item,index) => {
                                    return <RelatedPostSkeleton key={index} />
                                })
                            :
                                data.map((item,index) => {
                                    return <RelatedPostsItem key={index} postId={item.id}/>
                                })
                    }
                </div>
            </div>
        </section>
    );
}

export default RelatedPostSlide;
