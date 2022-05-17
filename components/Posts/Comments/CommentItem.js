function CommentItem({author_name,content,date}) {

    // Hàm chuyển đổi thời gian tạo bài
    const transferDate = (date) => {
        const d = new Date(date);
        return d.getDate() + '/' + (d.getMonth() * 1 + 1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes();
    }

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
                <h5>{author_name}</h5>

                <div className="font-light" dangerouslySetInnerHTML={{ __html: content.rendered }}></div>

                <p className="date-custo font-light">{transferDate(date)}</p>
            </div>
        </div>
    );
}

export default CommentItem;
