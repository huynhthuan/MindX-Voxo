import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Blog/Sidebar';
import SubscribeBox from '../../../components/Common/SubscribeBox';
import RelatedPostSlide from '../../../components/Posts/RelatedPostSlide';
import AuthorBox from '../../../components/Posts/AuthorBox';
import CommentList from '../../../components/Posts/Comments/CommentList';
import CommentBox from '../../../components/Posts/Comments/CommentBox';
import { useDetailPost } from '../../../src/api_minhhieu/detailPostApi';
import { useRouter } from 'next/router';
import { DetailPostSkeleton } from '../../../components/Skeleton_minhhieu/index';


function BlogDetail() {

    // Lấy id bài viết từ url
    const router = useRouter();
    const { slug } = router.query;
    
    // Hàm chuyển đổi thời gian tạo bài
    const transferDate = (date) => {
        const d = new Date(date);
        return d.getDate() + '/' + (d.getMonth() * 1 + 1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes();
    }
    
    //Get data bài viết 
    const { isLoading, error, data, isFetching } = useDetailPost(slug);

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <>
            <Head>
                <title>Blog details</title>
            </Head>
            {/* Breadcrumb section start */}
            <section className="breadcrumb-section section-b-space">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Blog Details</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item"
                                        aria-current="page"
                                    >
                                        <Link href="/blog">
                                            <a>Blog /</a>
                                        </Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Blog Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Details Blog Section Start */}
            <section className="masonary-blog-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-9 col-md-8 order-md-1 ratio_square">
                            <div className="row g-4">
                                <div className="col-12">
                                    {
                                        isLoading || !data
                                            ? 
                                                <DetailPostSkeleton/>
                                            :
                                                <>
                                                    <div className="blog-details">
                                                        <div className="blog-image-box">
                                                            <img
                                                                src={
                                                                    data.data._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url
                                                                }
                                                                alt=""
                                                                className="card-img-top"
                                                            />
                                                            {/* <div className="blog-title">
                                                                <div>
                                                                    <div className="social-media media-center">
                                                                        <a
                                                                            href="https://www.facebook.com/"
                                                                            target="new"
                                                                        >
                                                                            <div className="social-icon-box social-color">
                                                                                <i className="fab fa-facebook-f"></i>
                                                                            </div>
                                                                        </a>
                                                                        <a
                                                                            href="https://twitter.com/"
                                                                            target="new"
                                                                        >
                                                                            <div className="social-icon-box social-color">
                                                                                <i className="fab fa-twitter"></i>
                                                                            </div>
                                                                        </a>
                                                                        <a
                                                                            href="https://in.pinterest.com/"
                                                                            target="new"
                                                                        >
                                                                            <div className="social-icon-box social-color">
                                                                                <i className="fab fa-pinterest-p"></i>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                        </div>

                                                        <div className="blog-detail-contain">
                                                            <span className="font-light">
                                                                {
                                                                    transferDate(data.data.date)
                                                                }
                                                            </span>
                                                            <h2 className="card-title">
                                                                {
                                                                    data.data.title.rendered
                                                                }
                                                            </h2>
                                                            <div dangerouslySetInnerHTML={{ __html: data.data.content.rendered }}></div>
                                                        </div>
                                                    </div>

                                                    <AuthorBox {...data.data._embedded.author[0]}/>

                                                    <CommentBox postId={data.data.id}/>

                                                    <CommentList postId={data.data.id}/>
                                                </>
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            {/* Details Blog Section End */}
            {
                isLoading || !data
                    ?
                        null
                    :
                        <RelatedPostSlide info={{categoryId:data.data.categories[0],excludeId:data.data.id}}/>
            }

            <SubscribeBox />
        </>
    );
}

export default BlogDetail;
