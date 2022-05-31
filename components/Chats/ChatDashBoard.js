import React from 'react';
import { useSelector } from 'react-redux';
import SendBirdApp from "@sendbird/uikit-react/App";
import { APP_CHAT_ID } from '../../utils/const';

export default function ChatDashBoard() {
    const { user } = useSelector((state) => state.auth);
    return (
        <SendBirdApp
            appId={APP_CHAT_ID}
            userId={user.id.toString()}
            profileUrl={user.avatar}
            nickname={user.username}
        />
    );
}
