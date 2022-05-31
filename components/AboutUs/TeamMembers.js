const TeamMembers = ({image, job, name}) => {

    return <div>
            <div className="leader-contain">
                <div className="leader-image">
                    <img
                        src={image}
                        className="img-fluid bg-img"
                        alt=""
                    />
                    {/* <ul className="social-media">
                        <li>
                            <a href="www.facebook.html">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>

                        <li>
                            <a href="www.twitter.html">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>

                        <li>
                            <a href="www.google.html">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                    </ul> */}
                </div>
                <div className="leader-contain">
                    <h3>{name}</h3>
                    <h6>{job}</h6>
                </div>
            </div>
        </div>
}

export default TeamMembers;