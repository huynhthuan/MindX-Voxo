import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Blog/Sidebar';
import SubscribeBox from '../../../components/Common/SubscribeBox';
import RelatedPostSlide from '../../../components/Posts/RelatedPostSlide';
import AuthorBox from '../../../components/Posts/AuthorBox';
import CommentList from '../../../components/Posts/Comments/CommentList';
import CommentBox from '../../../components/Posts/Comments/CommentBox';

function BlogDetail() {
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
                                    <div className="blog-details">
                                        <div className="blog-image-box">
                                            <img
                                                src="/images/inner-page/product/10.jpg"
                                                alt=""
                                                className="card-img-top"
                                            />
                                            <div className="blog-title">
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
                                            </div>
                                        </div>

                                        <div className="blog-detail-contain">
                                            <span className="font-light">
                                                August 15 2021
                                            </span>
                                            <h2 className="card-title">
                                                Just a Standard Format Post.
                                            </h2>
                                            <p className="font-light firt-latter">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, Lorem
                                                Ipsum has been the industry's
                                                standard dummy text ever since
                                                the 1500s.looked up one of the
                                                more obscure Latin words,
                                                consectetur, from a Lorem Ipsum
                                                passage.
                                            </p>

                                            <p className="font-light">
                                                Contrary to popular belief,
                                                Lorem Ipsum is not simply random
                                                text. It has roots in a piece of
                                                classical Latin literature from
                                                45 BC, making it over 2000 years
                                                old. Richard McClintock, a Latin
                                                professor at Hampden-Sydney
                                                College in Virginia, looked up
                                                one of the more obscure Latin
                                                words, consectetur, from a Lorem
                                                Ipsum passage, and going through
                                                the cites of the word in
                                                classical literature, discovered
                                                the undoubtable source. Lorem
                                                Ipsum comes from sections
                                                1.10.32 and 1.10.33 of "de
                                                Finibus Bonorum et Malorum" (The
                                                Extremes of Good and Evil) by
                                                Cicero, written in 45 BC. This
                                                book is a treatise on the theory
                                                of ethics, very popular during
                                                the Renaissance. The first line
                                                of Lorem Ipsum, "Lorem ipsum
                                                dolor sit amet..", comes from a
                                                line in section 1.10.32. The
                                                standard chunk of Lorem Ipsum
                                                used since the 1500s is
                                                reproduced below for those
                                                interested. Sections 1.10.32 and
                                                1.10.33 from "de Finibus Bonorum
                                                et Malorum" by Cicero are also
                                                reproduced in their exact
                                                original form, accompanied by
                                                English versions from the 1914
                                                translation by H. Rackham.
                                            </p>

                                            <p className="font-light">
                                                It is a long established fact
                                                that a reader will be distracted
                                                by the readable content of a
                                                page when looking at its layout.
                                                The point of using Lorem Ipsum
                                                is that it has a more-or-less
                                                normal distribution of letters,
                                                as opposed to using 'Content
                                                here, content here', making it
                                                look like readable English. Many
                                                desktop publishing packages and
                                                web page editors now use Lorem
                                                Ipsum as their default model
                                                text, and a search for 'lorem
                                                ipsum' will uncover many web
                                                sites still in their infancy.
                                                Various versions have evolved
                                                over the years, sometimes by
                                                accident, sometimes on purpose
                                                injected humour and the like.
                                            </p>
                                        </div>
                                    </div>

                                    <AuthorBox />

                                    <CommentBox />

                                    <CommentList />
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

            <RelatedPostSlide />

            <SubscribeBox />
        </>
    );
}

export default BlogDetail;
