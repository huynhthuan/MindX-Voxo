import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import SmallCart from './MenuRight/SmallCart';
import WisList from './MenuRight/WisList';

function MenuRight() {
    const { data: session, status } = useSession();
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
                        <span className="ms-1">{status === 'authenticated' && session.user.nicename}</span>
                    </div>
                    <div className="onhover-div profile-dropdown">
                        <ul>
                            {status === 'authenticated' ? (
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
