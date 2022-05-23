import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import MainMenu from './NavBar/MainMenu';
import MenuLeft from './NavBar/MenuLeft';
import MenuMobileBottom from './NavBar/MenuMobile/MenuMobileBottom';
import MenuRight from './NavBar/MenuRight';
import SearchBar from './NavBar/SearchBar';

function Navbar() {
    useEffect(() => {
        feather.replace();
    }, []);

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

            <MenuMobileBottom />
        </>
    );
}

export default Navbar;
