import React, { useEffect, useRef } from 'react';

export default function ChatSupportItem({ saleId }) {
    const itemChat = useRef();
    useEffect(() => {
        itemChat.current.onclick = () => {
            tabChat.show();
        };
    }, []);

    return (
        <div className="chat-item btn-go-chat" ref={itemChat}>
            <div className="chat-ava">
                <img
                    src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png"
                    alt=""
                />
            </div>
            <div className="chat-meta">
                <div className="chat-item-name">Support 1</div>
                <div className="chat-meta-desc">
                    <div className="chat-item-lastmess">
                        helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                    </div>
                    <div className="chat-item-time">11:05</div>
                </div>
            </div>
        </div>
    );
}
