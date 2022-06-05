import CustomSearchBox from '../component_vuong/compare/CustomSearchBox'

function SearchBar() {
    return (
        <div className="search-full">
         
            <div className="input-group">
                <span className="input-group-text">
                    <i data-feather="search" className="font-light"></i>
                </span>
                <input type="text" className="form-control search-type" placeholder="Search here.." />
                <span className="input-group-text close-search">
                    <i data-feather="x" className="font-light"></i>
                </span>
            </div>
            <div className="search-suggestion">
                <ul className="custom-scroll">
                    <li>
                        <div className="product-cart media">
                            <img src="/images/electronics/product/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                            <div className="media-body">
                                <a href="undefined">
                                    <h6 className="mb-1">New Smart Watch 4 ERT2</h6>
                                </a>
                                <ul className="rating p-0">
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                                <p className="mb-0 mt-1">$28.00</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="product-cart media">
                            <img src="/images/electronics/product/5.jpg" className="img-fluid blur-up lazyload" alt="" />
                            <div className="media-body">
                                <a href="undefined">
                                    <h6 className="mb-1">Powermatic 900 W Juicer</h6>
                                </a>
                                <ul className="rating m-0 p-0">
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star theme-color"></i>
                                    </li>
                                </ul>
                                <p className="mb-0 mt-1">$35.00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;
