function ForgotPassword() {
    return (
        <>
            {/* Sign Up Section Start */}
            <div className="login-section">
                <div className="materialContainer">
                    <div className="box">
                        <div className="login-title">
                            <h2>Forgot Password</h2>
                        </div>
                        <div className="input">
                            <label htmlFor="emailname">Enter Email Address</label>
                            <input type="text" name="name" className="is-invalid" id="emailname" />
                            <span className="spin"></span>
                        </div>
                        <div className="button login button-1">
                            <button>
                                <span>Send</span>
                                <i className="fa fa-check"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sign Up Section End */}
        </>
    );
}

export default ForgotPassword;
