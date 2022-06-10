function AuthorBox({avatar_urls,name}) {
    return (
        <div className="blog-profile box-center mb-lg-5 mb-4">
            <div className="image-profile">
                <img
                    src={
                        avatar_urls['24']
                    }
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
            </div>

            <div className="image-name text-weight">
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default AuthorBox;
