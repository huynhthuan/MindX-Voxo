import CommentItem from './CommentItem';

function CommentList() {
    return (
        <>
            <div className="row g-4">
                <div className="col-12 mt-4">
                    <div className="cloth-review">
                        <div className="tab-pane">
                            <div className="customer-review-box">
                                <h4>Comments (100)</h4>

                                <CommentItem />

                                <CommentItem />

                                <CommentItem />

                                <CommentItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <button className="loadMore btn btn-submit btn-full">
                    load more
                </button>
            </div>
        </>
    );
}

export default CommentList;
