function Login() {
    return (
        <>
            {/* Log In Section Start */}
            <div className="login-section">
                <div className="materialContainer">
                    <div className="box">
                        <div className="login-title">
                            <h2>Login</h2>
                        </div>
                        <div className="input">
                            <label htmlFor="name">Username</label>
                            <input type="text" name="name" id="name" required />
                            <span className="spin"></span>
                            <div className="valid-feedback">Please fill the name</div>
                        </div>

                        <div className="input">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" id="pass" />
                            <span className="spin"></span>
                        </div>

                        <a href="forgot.html" className="pass-forgot">
                            Forgot your password?
                        </a>

                        <div className="button login">
                            <button type="submit">
                                <span>Log In</span>
                                <i className="fa fa-check"></i>
                            </button>
                        </div>

                        <p className="sign-category">
                            <span>Or sign in with</span>
                        </p>

                        <div className="row gx-md-3 gy-3">
                            <div className="col-md-6">
                                <a href="www.facebook.html">
                                    <div className="social-media fb-media">
                                        <img src="/images/inner-page/facebook.png" className="img-fluid blur-up lazyload" alt="" />
                                        <h6>Facebook</h6>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="www.gmail.html">
                                    <div className="social-media google-media">
                                        <img src="/images/inner-page/google.png" className="img-fluid blur-up lazyload" alt="" />
                                        <h6>Google</h6>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <p>
                            Not a member?{' '}
                            <a href="sign-up.html" className="theme-color">
                                Sign up now
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {/* Log In Section End */}
        </>
    );
}

export default Login;
``;
