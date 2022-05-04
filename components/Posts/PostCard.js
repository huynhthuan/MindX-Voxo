function PostCard() {
    return (
        <div className="masonary-blog box-shadow">
            <a href="blog-details.html" className="bg-size">
                <img
                    src="/images/inner-page/product/1.jpg"
                    className="card-img-top bg-img image-fit blur-up lazyload"
                    alt=""
                />
            </a>
            <div className="card-body card-body-width">
                <h6 className="masonary-name">PRODUCT UPDATE</h6>
                <a href="blog-details.html">
                    <h2 className="card-title">
                        How to make the perfect morning coffee, according to the
                        science
                    </h2>
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
                            src="/images/inner-page/review-image/1.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                        />
                    </div>

                    <div className="image-name">
                        <h3>
                            by John wike on <span>15 Aug 2021</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
