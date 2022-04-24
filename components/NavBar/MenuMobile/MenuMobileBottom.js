import Link from 'next/link';
import onClickPreventDefault from '../../../utils/helpers';

function MenuMobileBottom() {
    return (
        <div className="mobile-menu d-sm-none">
            <ul>
                <li>
                    <Link href="/">
                        <a className="active">
                            <i data-feather="home"></i>
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <a onClick={(e) => onClickPreventDefault(e)} className="toggle-category">
                        <i data-feather="align-justify"></i>
                        <span>Category</span>
                    </a>
                </li>
                <li>
                    <Link href="/cart">
                        <a>
                            <i data-feather="shopping-bag"></i>
                            <span>Cart</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/wishlist">
                        <a>
                            <i data-feather="heart"></i>
                            <span>Wishlist</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/user-dashboard">
                        <a>
                            <i data-feather="user"></i>
                            <span>Account</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MenuMobileBottom;
