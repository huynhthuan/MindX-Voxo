function PostCardMansory({id,date,title,content,excerpt}) {
    return (
        <div className="card masonary-blog">
            <a href="blog-details.html">
                <img
                    src="/images/inner-page/product/1.jpg"
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
                    <div className="image-profile">
                        <img
                            src="/images/inner-page/review-image/1.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                        />
                    </div>

                    <div className="image-name">
                        <h3>John wike</h3>
                        <h6>15 Aug 2021</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCardMansory;
