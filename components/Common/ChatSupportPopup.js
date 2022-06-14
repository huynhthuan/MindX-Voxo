import { uniqueId } from 'lodash';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Talk from 'talkjs';

export default function ChatSupportPopup() {
    const { user: currentUser } = useSelector((state) => state.auth);
    const chatPopup = useRef();
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

            window.talkSession = new Talk.Session({
                appId: process.env.TALKJS_APP_ID,
                me: me,
            });

            let other = new Talk.User({
                id: '654321',
                name: 'Sebastian',
                email: 'Sebastian@example.com',
                photoUrl:
                    'https://pickaface.net/gallery/avatar/20120409_230759_3646_Fake.png',
                welcomeMessage: 'Hey, how can I help?',
                role: 'default',
            });

            let conversation = window.talkSession.getOrCreateConversation(
                Talk.oneOnOneId(me, other)
            );

            conversation.setParticipant(me);
            conversation.setParticipant(other);

            let popup = window.talkSession.createPopup();
            popup.select(conversation);
            popup.mount({ show: false });
        });
    }, []);

    return <div ref={chatPopup}></div>;
}
