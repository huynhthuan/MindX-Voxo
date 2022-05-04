function Profile() {
    return (
        <div className="tab-pane fade dashboard-profile dashboard" id="profile">
            <div className="box-head">
                <h3>Profile</h3>
                <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                    Edit
                </a>
            </div>
            <ul className="dash-profile">
                <li>
                    <div className="left">
                        <h6 className="font-light">Company Name</h6>
                    </div>
                    <div className="right">
                        <h6>Voxo Fashion</h6>
                    </div>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">Country / Region</h6>
                    </div>
                    <div className="right">
                        <h6>Downers Grove, IL</h6>
                    </div>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">Year Established</h6>
                    </div>
                    <div className="right">
                        <h6>2018</h6>
                    </div>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">Total Employees</h6>
                    </div>
                    <div className="right">
                        <h6>101 - 200 People</h6>
                    </div>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">Category</h6>
                    </div>
                    <div className="right">
                        <h6>Clothing</h6>
                    </div>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">Street Address</h6>
                    </div>
                    <div className="right">
                        <h6>549 Sulphur Springs Road</h6>
                    </div>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">City/State</h6>
                    </div>
                    <div className="right">
                        <h6>Downers Grove, IL</h6>
                    </div>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">Zip</h6>
                    </div>
                    <div className="right">
                        <h6>60515</h6>
                    </div>
                </li>
            </ul>

            <div className="box-head mt-lg-5 mt-3">
                <h3>Login Details</h3>
                <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                    Edit
                </a>
            </div>

            <ul className="dash-profile">
                <li>
                    <div className="left">
                        <h6 className="font-light">Email Address</h6>
                    </div>
                    <div className="right">
                        <h6>mark.jugal@gmail.com</h6>
                    </div>
                    <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                        Edit
                    </a>
                </li>

                <li>
                    <div className="left">
                        <h6 className="font-light">Phone No.</h6>
                    </div>
                    <div className="right">
                        <h6>+1-202-555-0198</h6>
                    </div>
                    <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                        Edit
                    </a>
                </li>

                <li className="mb-0">
                    <div className="left">
                        <h6 className="font-light">Password</h6>
                    </div>
                    <div className="right">
                        <h6>●●●●●●</h6>
                    </div>
                    <a href="undefined" data-bs-toggle="modal" data-bs-target="#resetEmail">
                        Edit
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
