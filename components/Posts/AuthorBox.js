function AuthorBox() {
    return (
        <div className="blog-profile box-center mb-lg-5 mb-4">
            <div className="image-profile">
                <img
                    src="/images/inner-page/review-image/2.jpg"
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
            </div>

            <div className="image-name text-weight">
                <h3>John wike</h3>
                <h6>15 Aug 2021</h6>
            </div>
        </div>
    );
}

export default AuthorBox;
