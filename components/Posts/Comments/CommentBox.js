import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { CREATE_COMMENT } from '../../../utils/api_minhhieu/index';
import { useAddPostComment } from '../../../src/api_minhhieu/postcommentsApi';

function CommentBox({postId}) {

    //Lấy thông tin người dùng
    const authState = useSelector(state => state.auth);
    const {user} = authState;

    const [comment, setComment] = useState('');
    const [loginRequirement, setLoginRequirement] = useState(false);

    const { mutate: addComment } = useAddPostComment();

    const handleSubmitComment = async () => {
        if (user.id) {
            addComment({
                post_id: postId,
                name:user.username,
                email:user.email,
                content:comment
            })
        } else {
            setLoginRequirement(true);
        }
    }

    const handleCommentChange = (event) => {
        const value = event.target.value;
        setComment(value);
    }

    return (
        <div className="row g-2">
            <div className="col-12">
                <div className="minus-spacing mb-2">
                    <h3>Leave Comments</h3>
                </div>
            </div>

            {/* <div className="col-lg-4">
                <label htmlFor="fname" className="form-label">
                    First Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Enter First Name"
                    required
                />
            </div>
            <div className="col-lg-4">
                <label htmlFor="lname" className="form-label">
                    Last Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Enter Last Name"
                    required
                />
            </div>

            <div className="col-lg-4">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@example.com"
                    required
                />
            </div> */}

            <div className="col-12">
                <label htmlFor="textarea" className="form-label">
                    Comments
                </label>
                <textarea
                    rows="3"
                    className="form-control"
                    id="textarea"
                    placeholder="Leave a comment here"
                    onChange={handleCommentChange}
                    value={comment}
                    required
                ></textarea>
            </div>

            <div className="col-12">
                <button
                    type="submit"
                    className="btn btn-solid-default btn-spacing mt-2"
                    onClick={handleSubmitComment}
                >
                    Submit
                </button>
            </div>

            <div className="col-12" hidden={!loginRequirement}>
                <div className="d-flex ">
                    <p className="alert alert-warning">
                        You must{' '}
                        <b>
                            <Link href="/login">
                                <span>login</span>
                            </Link>
                        </b>{' '}
                        to comment this post!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
