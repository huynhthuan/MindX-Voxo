import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveSetting } from '../../../../store/user/webSettingSlice';

function Profile() {
    const { user } = useSelector((state) => state.auth);
    const { theme } = useSelector((state) => state.webSetting);
    const dispatch = useDispatch();

    return (
        <div className="tab-pane fade dashboard-profile dashboard" id="profile">
            <div className="box-head">
                <h3>Avatar</h3>
            </div>
            <ul className="dash-profile">
                <li>
                    <div className="left">
                        <div className="user-avatar">
                            <img src={user.avatar} alt="avatar" />
                        </div>

                        <div className="input-group mt-3">
                            <label
                                className="input-group-text"
                                htmlFor="inputGroupFile01"
                            >
                                Upload
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputGroupFile01"
                            />
                        </div>
                    </div>
                </li>
            </ul>

            <div className="box-head mt-lg-5 mt-3">
                <h3>Settings</h3>
            </div>

            <ul className="dash-profile">
                <li>
                    <div className="left">
                        <h6 className="font-light">Theme</h6>
                    </div>
                    <div className="right d-flex">
                        <div className="label-switch me-2">Dark</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                checked={theme === 'light'}
                                onChange={() => {
                                    dispatch(
                                        saveSetting(
                                            theme === 'light'
                                                ? { theme: 'dark' }
                                                : { theme: 'light' }
                                        )
                                    );
                                }}
                            />
                        </div>
                        <div className="label-switch ms-2">Light</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
