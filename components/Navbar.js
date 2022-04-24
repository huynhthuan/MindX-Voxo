import MainMenu from './NavBar/MainMenu';
import MenuLeft from './NavBar/MenuLeft';
import MenuRight from './NavBar/MenuRight';
import SearchBar from './NavBar/SearchBar';

function Navbar() {
    return (
        <>
            {/* header start */}
            <header className="header-style-2" id="home">
                <div className="main-header navbar-searchbar">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-menu">
                                    <MenuLeft />

                                    <MainMenu />

                                    <MenuRight />

                                    <SearchBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header end */}

            {/* mobile fix menu start */}
            <div className="mobile-menu d-sm-none">
                <ul>
                    <li>
                        <a href="index.html" className="active">
                            <i data-feather="home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="undefined" className="toggle-category">
                            <i data-feather="align-justify"></i>
                            <span>Category</span>
                        </a>
                    </li>
                    <li>
                        <a href="cart.html">
                            <i data-feather="shopping-bag"></i>
                            <span>Cart</span>
                        </a>
                    </li>
                    <li>
                        <a href="wishlist.html">
                            <i data-feather="heart"></i>
                            <span>Wishlist</span>
                        </a>
                    </li>
                    <li>
                        <a href="user-dashboard.html">
                            <i data-feather="user"></i>
                            <span>Account</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* mobile fix menu end */}
        </>
    );
}

export default Navbar;
