function SignUp() {
    return (
        <>
            {/* Sign Up Section Start */}
            <div className="login-section">
                <div className="materialContainer">
                    <div className="box">
                        <div className="login-title">
                            <h2>Register</h2>
                        </div>

                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                            <span className="spin"></span>
                        </div>

                        <div className="input">
                            <label htmlFor="emailname">Email Address</label>
                            <input type="text" name="name" id="emailname" />
                            <span className="spin"></span>
                        </div>

                        <div className="input">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" id="pass" />
                            <span className="spin"></span>
                        </div>

                        <div className="input">
                            <label htmlFor="compass">Confirm Password</label>
                            <input type="password" name="pass" id="compass" />
                            <span className="spin"></span>
                        </div>

                        <div className="button login">
                            <button>
                                <span>Sign Up</span>
                                <i className="fa fa-check"></i>
                            </button>
                        </div>

                        <p className="sign-category">
                            <span>Or sign up with</span>
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
                            <a href="log-in.html" className="theme-color">
                                Already have an account?
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {/*  Sign Up Section End*/}
        </>
    );
}

export default SignUp;
