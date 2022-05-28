import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/auth/authSlice';
import SmallCart from './MenuRight/SmallCart';
import WisList from './MenuRight/WisList';
import { useRouter } from 'next/router';

function MenuRight() {
    const { cookie, user } = useSelector((state) => state.auth);
    const router = useRouter();

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logOut());
        router.push('/');
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
                        {cookie ? (
                            <span className="avatar">
                                <img
                                    src={cookie !== null ? user.avatar : ''}
                                    alt=""
                                />
                            </span>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-user"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        )}
                        <span className="ms-1">
                            {cookie !== null ? user.username : ''}
                        </span>
                    </div>
                    <div className="onhover-div profile-dropdown">
                        <ul>
                            {cookie !== null ? (
                                <>
                                    <li>
                                        <Link href="/user-dashboard">
                                            <a className="d-block">
                                                My account
                                            </a>
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
