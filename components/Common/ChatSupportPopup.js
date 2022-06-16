import { uniqueId } from 'lodash';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Talk from 'talkjs';
import ChatSupportItem from './ChatSupportItem';

export default function ChatSupportPopup() {
    const { user: currentUser } = useSelector((state) => state.auth);
    const chatPopup = useRef();
    // useEffect(() => {
    // Talk.ready.then(() => {
    //     let me;
    //     if (currentUser.id) {
    //         me = new Talk.User({
    //             id: currentUser.id,
    //             name: currentUser.nicename,
    //             email: currentUser.email,
    //             photoUrl: currentUser.avatar,
    //             welcomeMessage: 'Hey there! How are you? :-)',
    //             role: 'default',
    //         });
    //     } else {
    //         me = new Talk.User({
    //             id: 'guest_' + uniqueId(),
    //             name: 'guest_name_' + uniqueId(),
    //             email: 'guest_email@gmail.com',
    //             photoUrl:
    //                 'https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png',
    //             welcomeMessage: 'Hey there! How are you? :-)',
    //             role: 'guest',
    //         });
    //     }
    //     window.talkSession = new Talk.Session({
    //         appId: process.env.TALKJS_APP_ID,
    //         me: me,
    //     });
    //     let other = new Talk.User({
    //         id: '654321',
    //         name: 'Sebastian',
    //         email: 'Sebastian@example.com',
    //         photoUrl:
    //             'https://pickaface.net/gallery/avatar/20120409_230759_3646_Fake.png',
    //         welcomeMessage: 'Hey, how can I help?',
    //         role: 'default',
    //     });
    //     let conversation = window.talkSession.getOrCreateConversation(
    //         Talk.oneOnOneId(me, other)
    //     );
    //     conversation.setParticipant(me);
    //     conversation.setParticipant(other);
    //     let popup = window.talkSession.createPopup();
    //     popup.select(conversation);
    //     popup.mount({ show: false });
    // });
    // }, []);

    useEffect(() => {
        let tabListEl = document.querySelector('.btn-back-list');
        let tabList = new bootstrap.Tab(tabListEl);

        $('.chat-popup-btn').click(() => {
            $('.chat-popup-main').toggleClass('active');
        });

        $('.btn-back-list').click(() => {
            tabList.show();
        });

        let tabChatEl = document.querySelector('#btn-pills-chat');
        let tabChat = new bootstrap.Tab(tabChatEl);

        // tabChat.show();
    }, []);

    return (
        <div className="chat-popup-main">
            <div className="chat-popup-body">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
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
                                    <ChatSupportItem />
                                    <ChatSupportItem />
                                    <ChatSupportItem />
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
                            <button className="btn btn-back-list">Back</button>
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
