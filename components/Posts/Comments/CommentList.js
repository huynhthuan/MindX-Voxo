import CommentItem from './CommentItem';
import { usePostComments } from '../../../src/api_minhhieu/postcommentsApi';
import { PostCommentsSkeleton } from '../../Skeleton_minhhieu';
import { Fragment, useState } from 'react';

function CommentList({postId}) {

    const [page, setPage] = useState(1);
    const [showLoadMore, setShowLoadMore] = useState(false);

    const { isLoading, error, data, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = usePostComments(postId);

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
                                            <h4>Comments ({data.pages[0].headers['x-wp-total']})</h4> 
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
                                                    data.pages.map((group,index) => {
                                                        return <Fragment key={index} >
                                                            {
                                                                group.data.map((item) => {
                                                                    return <CommentItem key={item.id} {...item}/>
                                                                })
                                                            }
                                                        </Fragment>
                                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-2'>
                {
                    isFetching 
                        && 
                            !isFetchingNextPage 
                                ? <PostCommentsSkeleton /> 
                                : null
                
                }
            </div>
            <div className="load-more">
                <button disabled={!hasNextPage} className="loadMore btn btn-submit btn-full" onClick={fetchNextPage}>
                    load more
                </button>
            </div>
        </>
    );
}

export default CommentList;
