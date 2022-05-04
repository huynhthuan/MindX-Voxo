function NavLeft() {
    return (
        <div className="col-lg-3">
            <ul className="nav nav-tabs custome-nav-tabs flex-column category-option" id="myTab">
                <li className="nav-item mb-2">
                    <button className="nav-link font-light active" id="tab" data-bs-toggle="tab" data-bs-target="#dash" type="button">
                        <i className="fas fa-angle-right"></i>Dashboard
                    </button>
                </li>

                <li className="nav-item mb-2">
                    <button className="nav-link font-light" id="1-tab" data-bs-toggle="tab" data-bs-target="#order" type="button">
                        <i className="fas fa-angle-right"></i>Orders
                    </button>
                </li>

                <li className="nav-item mb-2">
                    <button className="nav-link font-light" id="2-tab" data-bs-toggle="tab" data-bs-target="#wishlist" type="button">
                        <i className="fas fa-angle-right"></i>Wishlist
                    </button>
                </li>

                <li className="nav-item mb-2">
                    <button className="nav-link font-light" id="3-tab" data-bs-toggle="tab" data-bs-target="#save" type="button">
                        <i className="fas fa-angle-right"></i>Saved Address
                    </button>
                </li>

                <li className="nav-item mb-2">
                    <button className="nav-link font-light" id="4-tab" data-bs-toggle="tab" data-bs-target="#pay" type="button">
                        <i className="fas fa-angle-right"></i>Payment
                    </button>
                </li>

                <li className="nav-item mb-2">
                    <button className="nav-link font-light" id="5-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">
                        <i className="fas fa-angle-right"></i>Profile
                    </button>
                </li>

                <li className="nav-item">
                    <button className="nav-link font-light" id="6-tab" data-bs-toggle="tab" data-bs-target="#security" type="button">
                        <i className="fas fa-angle-right"></i>Security
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default NavLeft;
