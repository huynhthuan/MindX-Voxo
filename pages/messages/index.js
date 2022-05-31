import dynamic from 'next/dynamic';
import React from 'react';

const DynamicAppWithNoSSR = dynamic(
    () => import('../../components/Chats/ChatDashBoard'),
    {
        ssr: false,
        loading: () => <p>Loading</p>,
    }
);

export default function Messages() {
    return (
        <div className='warp-chat-dashboard'>
            <DynamicAppWithNoSSR />
        </div>
    );
}
