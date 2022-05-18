import CommentItem from './CommentItem';
import { usePostComments } from '../../../src/api_minhhieu/postcommentsApi';
import { PostCommentsSkeleton } from '../../Skeleton_minhhieu';

function CommentList({postId}) {

    const { isLoading, error, data, isFetching } = usePostComments(postId);

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <>
            <div className="row g-4">
                <div className="col-12 mt-4">
                    <div className="cloth-review">
                        <div className="tab-pane">
                            <div className="customer-review-box">
                                {
                                   !isLoading
                                        &&
                                            <h4>Comments ({data.data.length})</h4> 
                                }
                                {
                                    isLoading                                                  
                                        ?
                                            Array(4).fill(0).map((item, index) => {
                                                return <PostCommentsSkeleton key={index}/>
                                            })
                                            
                                        :
                                            data
                                                &&
                                                    data.data.map((item,index) => {
                                                        return <CommentItem {...item} key={index}/>
                                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="load-more">
                <button className="loadMore btn btn-submit btn-full">
                    load more
                </button>
            </div> */}
        </>
    );
}

export default CommentList;
