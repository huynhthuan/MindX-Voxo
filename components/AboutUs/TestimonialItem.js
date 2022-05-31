const TestimonialItem = ({image, website, name, feedback, rating}) => {

    return <div>
                <div className="testimonial-contain">
                    <div className="textimonial-image">
                        <img
                            src={image}
                            className="img-fluid"
                            alt=""
                        />
                    </div>

                    <div className="testimonial-details">
                        <ul className="rating">
                            <li>
                                <i className="fas fa-star theme-color"></i>
                            </li>
                            <li>
                                <i className="fas fa-star theme-color"></i>
                            </li>
                            <li>
                                <i className="fas fa-star theme-color"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                        </ul>
                        <h5 className="details-images">
                            <i className="fas fa-quote-left"></i>
                                {feedback}
                            <i className="fas fa-quote-right"></i>
                        </h5>
                        <h5>
                            <strong>{name}</strong> / {website}
                        </h5>
                    </div>
                </div>
            </div>          
}

export default TestimonialItem;