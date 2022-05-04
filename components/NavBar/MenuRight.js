import Link from 'next/link';
import { connect, useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/auth/authSlice';
import SmallCart from './MenuRight/SmallCart';
import WisList from './MenuRight/WisList';

function MenuRight() {
    const { cookie, user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logOut());
    };

    return (
        <div className="menu-right">
            <ul>
                <li>
                    <div className="search-box">
                        <i data-feather="search"></i>
                    </div>
                </li>
                <li className="onhover-dropdown">
                    <div className="cart-media">
                        <i data-feather="user"></i>
                        <span className="ms-1">{cookie !== null ? user.username : ''}</span>
                    </div>
                    <div className="onhover-div profile-dropdown">
                        <ul>
                            {cookie !== null ? (
                                <>
                                    <li>
                                        <Link href="/user-dashboard">
                                            <a className="d-block">My account</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            className="d-block"
                                            onClick={() => {
                                                signOut();
                                            }}
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/login">
                                            <a className="d-block">Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sign-up">
                                            <a className="d-block">Register</a>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </li>
                <li className="onhover-dropdown wislist-dropdown">
                    <WisList />
                </li>
                <li className="onhover-dropdown cart-dropdown">
                    <SmallCart />
                </li>
            </ul>
        </div>
    );
}

export default MenuRight;
