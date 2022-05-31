import React from 'react';
import { useSelector } from 'react-redux';

export default function CustomChannelItem({ channel }) {
    const { user: currentUser } = useSelector((state) => state.auth);

    const otherUser = channel.members.filter(
        (user, index) => Number(user.userId) !== currentUser.id
    )[0];
    console.log(otherUser);

    return (
        <div className="chat-item">
            <div className="chat-item-avatar">
                <div className="chat-item-img">
                    <img src={channel.inviter.plainProfileUrl} alt="avatar" />
                </div>
                <div
                    className={`chat-item-status ${channel.inviter.connectionStatus}`}
                ></div>
            </div>

            <div className="chat-item-meta">
                <div className="chat-item-name">
                    {
                        otherUser
                    }
                </div>
                <div className="chat-item-last-msg"></div>
            </div>
        </div>
    );
}
