import _, { uniqueId } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import Talk from 'talkjs';
import { useSalesChat } from '../../reactQueryHook';
import ChatSupportItem from './ChatSupportItem';

export default function ChatSupportPopup() {
    const { user: currentUser } = useSelector((state) => state.auth);
    const chatPopup = useRef();
    const [me, setMe] = useState({});
    useEffect(() => {
        Talk.ready.then(() => {
            let me;
            if (currentUser.id) {
                me = new Talk.User({
                    id: currentUser.id,
                    name: currentUser.nicename,
                    email: currentUser.email,
                    photoUrl: currentUser.avatar,
                    welcomeMessage: 'Hey there! How are you? :-)',
                    role: 'default',
                });
            } else {
                me = new Talk.User({
                    id: 'guest_' + uniqueId(),
                    name: 'guest_name_' + uniqueId(),
                    email: 'guest_email@gmail.com',
                    photoUrl:
                        'https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png',
                    welcomeMessage: 'Hey there! How are you? :-)',
                    role: 'guest',
                });
            }

            setMe(me);

            window.talkSession = new Talk.Session({
                appId: process.env.TALKJS_APP_ID,
                me: me,
            });
        });
    }, []);

    const { data, isFetching, isError, isLoading, error } = useSalesChat();

    useEffect(() => {
        $('.chat-popup-btn').click(() => {
            console.log(123);
            $('.chat-popup-main').toggleClass('active');
        });

        return () => {
            $('.chat-popup-btn').off('click');
        };
    }, []);

    return (
        <div className="chat-popup-main">
            <div className="chat-popup-body">
                <ul
                    className="nav nav-pills d-none"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="pills-list-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-list"
                            type="button"
                            role="tab"
                            aria-controls="pills-list"
                            aria-selected="true"
                        >
                            list
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pills-chat-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-chat"
                            type="button"
                            role="tab"
                            aria-controls="pills-chat"
                            aria-selected="false"
                        >
                            chat
                        </button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-list"
                        role="tabpanel"
                        aria-labelledby="pills-list-tab"
                    >
                        <div className="inlist-header">
                            <div className="headet-title">Voxo Shop</div>
                            <div className="header-meta">
                                <div className="header-logo">
                                    <img src="" alt="" />
                                </div>
                                <div className="header-desc">
                                    <div className="header-short">
                                        We are ready to help. Please select a
                                        support agent to start chatting
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="chat-list-wrap">
                            <div className="chat-list-header">
                                Customer support
                            </div>
                            <div className="chat-list">
                                <div className="chat-list-scroll">
                                    {isLoading || isFetching ? (
                                        <Skeleton
                                            count={4}
                                            height={50}
                                            style={{ marginBottom: 15 }}
                                        />
                                    ) : (
                                        data.map((item, index) => (
                                            <ChatSupportItem
                                                data={item}
                                                key={index}
                                                meConverstation={me}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-chat"
                        role="tabpanel"
                        aria-labelledby="pills-chat-tab"
                    >
                        <div className="inchat-header">
                            <button
                                className="btn btn-back-list"
                                onClick={() => {
                                    $('#pills-list-tab').tab('show');
                                }}
                            >
                                Back
                            </button>
                        </div>
                        <div className="current-converstation"></div>
                    </div>
                </div>
            </div>

            <div className="chat-popup-btn">
                <div className="chat-count">0</div>
                <img
                    className="sb-icon"
                    alt=""
                    src="https://board.support/supportboard/media/button-chat.svg"
                />
                <img
                    className="sb-close"
                    alt=""
                    src="https://board.support/supportboard/media/button-close.svg"
                />
            </div>
        </div>
    );
}
