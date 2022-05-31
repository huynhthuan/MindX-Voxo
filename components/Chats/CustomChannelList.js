import React, { useEffect, useState } from 'react';
import ChannelList from '@sendbird/uikit-react/ChannelList';
import Channel from '@sendbird/uikit-react/Channel';
import ChannelSettings from '@sendbird/uikit-react/ChannelSettings';

export default function CustomChannelList() {
    const [channelSelect, setChannelSelect] = useState('');
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="chat-sidebar-list">
            <div className="channel-list-custom">
                <ChannelList
                    onChannelSelect={(channel) => {
                        if (channel && channel.url) {
                            setChannelSelect(channel.url);
                        }
                    }}
                ></ChannelList>
            </div>
            <div className="channel-custom">
                <div className="header-channel-open">
                    <button className="btn channel-back sendbird-iconbutton ">
                        <i data-feather="arrow-left"></i>
                    </button>

                    <button className="btn chat-close sendbird-iconbutton">
                        <i data-feather="x"></i>
                    </button>
                </div>
                <Channel
                    channelUrl={channelSelect}
                    onChatHeaderActionClick={() => {
                        setShowSettings(true);
                    }}
                />
            </div>
            {showSettings ? (
                <div className="setting-channel-custom">
                    <ChannelSettings
                        channelUrl={channelSelect}
                        onCloseClick={() => {
                            setShowSettings(false);
                        }}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
