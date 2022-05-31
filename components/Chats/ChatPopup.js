import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { APP_CHAT_ID } from '../../utils/const';
import CustomChannelList from './CustomChannelList';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';

export default function ChatPopup() {
    const { cookie, user } = useSelector((state) => state.auth);
    return (
        <Fragment>
            <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
            >
                Enable body scrolling
            </button>
            {cookie ? (
                <SendbirdProvider
                    appId={APP_CHAT_ID}
                    userId={user.id.toString()}
                    profileUrl={user.avatar}
                    nickname={user.username}
                >
                    <div
                        className="offcanvas offcanvas-end offcanvas-custom"
                        data-bs-scroll="true"
                        data-bs-backdrop="false"
                        tabIndex="-1"
                        id="offcanvasScrolling"
                        aria-labelledby="offcanvasScrollingLabel"
                    >
                        <div className="offcanvas-body p-0">
                            <CustomChannelList />
                        </div>
                    </div>
                </SendbirdProvider>
            ) : (
                <></>
            )}
        </Fragment>
    );
}
