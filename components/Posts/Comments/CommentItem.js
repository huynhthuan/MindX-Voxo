function CommentItem() {
    return (
        <div className="customer-section">
            <div className="customer-profile">
                <img
                    src="/images/inner-page/review-image/3.jpg"
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
            </div>

            <div className="customer-details">
                <h5>B. Perdue</h5>

                <p className="font-light">
                    Love the processor speed and the sensitivity of the touch
                    screen.
                </p>

                <p className="date-custo font-light">- Sep 08, 2021</p>
            </div>
        </div>
    );
}

export default CommentItem;
