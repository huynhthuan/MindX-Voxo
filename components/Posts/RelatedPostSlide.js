import { useEffect, useState } from 'react';
import { useRelatedPosts } from '../../src/api_minhhieu/relatedPostsApi';
import RelatedPostsItem from './RelatedPostsItem';

function RelatedPostSlide({info}) {

    const [finishFetching, setFinishFetching] = useState(false);

    useEffect(() => {
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
    }, []);

    const { isLoading, error, data, isFetching } = useRelatedPosts({ categoryId:info.categoryId, excludeId:info.excludeId });

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <section className="section-b-space block-shadow-space ratio3_2">
            <div className="container">
                <div className="slide-4 product-wrapper slick-lg-space">
                    {
                        isLoading || !data
                            ?
                                null
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
