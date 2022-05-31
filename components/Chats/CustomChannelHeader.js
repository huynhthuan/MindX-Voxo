import React from 'react';

export default function CustomChannelHeader() {
    return (
        <div class="offcanvas-header">
            <div className="chat-sidebar-header">
                <div className="chat-sidebar-left">
                    <div className="chat-user-ava">
                        <img src="" alt="avatar" />
                    </div>
                    <div className="chat-header-title">Messages</div>
                </div>

                <div className="chat-sidebar-right">
                    <div className="chat-sidebar-action">
                        <button
                            className="chat-action-btn btn "
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            create
                        </button>
                        <button
                            className="chat-action-btn btn "
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
