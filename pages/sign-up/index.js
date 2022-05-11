import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_NONE, REGISTER_ACCOUNT } from '../../utils/api';
import Swal from 'sweetalert2';
import authApi from '../../src/api/authApi';

function SignUp() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingFb, setIsLoadingFb] = useState(false);

    useEffect(() => {
        $(function () {
            $('.input input')
                .focus(function () {
                    $(this)
                        .parent('.input')
                        .each(function () {
                            $('label', this).css({
                                'line-height': '18px',
                                'font-weight': '100',
                                top: '0px',
                            });
                            $('.spin', this).css({
                                width: '100%',
                            });
                        });
                })
                .blur(function () {
                    $('.spin').css({
                        width: '0px',
                    });
                    if ($(this).val() == '') {
                        $(this)
                            .parent('.input')
                            .each(function () {
                                $('label', this).css({
                                    'line-height': '60px',
                                    'font-weight': '300',
                                    top: '10px',
                                });
                            });
                    }
                });
        });
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);

        try {
            let resNonce = await axios.get(GET_NONE, {
                params: {
                    controller: 'user',
                    method: 'register',
                },
            });

            let res = await axios.get(REGISTER_ACCOUNT, {
                params: {
                    username: data.username,
                    email: data.email,
                    user_pass: data.password,
                    nonce: resNonce.data.nonce,
                },
            });

            console.log(res.data);

            setIsLoading(false);

            let dataResRegister = res.data;

            if (
                dataResRegister.error &&
                dataResRegister.error !== null &&
                dataResRegister.error !== ''
            ) {
                Swal.fire({
                    title: 'Error!',
                    text: dataResRegister.error,
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
                return;
            }

            Swal.fire({
                title: `Register success!`,
                text: 'Welcome to VOXO SHOP',
                icon: 'success',
                showConfirmButton: false,
            });

            router.push('/login');
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Close',
            });

            setIsLoading(false);
        }
    };

    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '980758382812999',
                cookie: true, // Enable cookies to allow the server to access the session.
                xfbml: true, // Parse social plugins on this webpage.
                version: 'v13.0', // Use this Graph API version for this call.
            });
        };

        let googleUser = {};
        let auth2;
        let startApp = function () {
            gapi.load('auth2', function () {
                // Retrieve the singleton for the GoogleAuth library and set up the client.
                auth2 = gapi.auth2.init({
                    client_id:
                        '60776063801-jmdmevmoaab8bmta0bnf90f58rbp6u24.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                });
                attachSignin(document.getElementById('signup-google'));
            });
        };

        startApp();

        function attachSignin(element) {
            auth2.attachClickHandler(
                element,
                {},
                function (googleUser) {
                    setIsLoadingFb(false);
                    let profile = googleUser.getBasicProfile();
                    authApi.RegisterWithGoogle({
                        email: profile.getEmail(),
                        given_name: profile.getGivenName(),
                        family_name: profile.getFamilyName(),
                        id: profile.getId(),
                        full_name: profile.getName(),
                    });
                },
                function (error) {
                    setIsLoadingFb(false);
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'Close',
                    });
                }
            );
        }
    }, []);

    const registerFb = (e) => {
        setIsLoadingFb(true);
        try {
            e.preventDefault();
            FB.login(async function (response) {
                console.log(response);
                // handle the response
                const { authResponse, status } = response;

                if (status !== 'connected') {
                    setIsLoadingFb(false);
                    Swal.fire({
                        title: 'Error!',
                        text: 'An error occurred, please try again.',
                        icon: 'error',
                        confirmButtonText: 'Close',
                    });
                    return;
                }

                let res = await authApi.LoginWithFb({
                    access_token: authResponse.accessToken,
                });

                if (res.error && res.error !== null && res.error !== '') {
                    setIsLoadingFb(false);
                    Swal.fire({
                        title: 'Error!',
                        text: res.error,
                        icon: 'error',
                        confirmButtonText: 'Close',
                    });
                    return;
                }

                let { cookie_name, cookie, user, cookie_expiration } = res;

                let resWishList = await wooApi.getWishList(user.id);

                const { share_key } = resWishList.data[0];

                dispatch(
                    loginSuccess({
                        cookie,
                        cookie_expiration,
                        cookie_name,
                        user,
                        share_key,
                    })
                );

                setIsLoadingFb(false);

                Swal.fire({
                    title: `Login success!`,
                    text: 'Welcome back VOXO SHOP',
                    icon: 'success',
                    showConfirmButton: false,
                });

                router.push('/');
            });
        } catch (error) {
            setIsLoadingFb(false);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred, please try again.',
                icon: 'error',
                confirmButtonText: 'Close',
            });
        }
    };

    return (
        <>
            {/* Sign Up Section Start */}
            <div className="login-section">
                <div className="materialContainer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="box">
                            <div className="login-title">
                                <h2>Register</h2>
                            </div>

                            <div className="input">
                                <label htmlFor="username">User name</label>
                                <input
                                    type="text"
                                    {...register('username', {
                                        required: true,
                                        maxLength: 64,
                                        minLength: 3,
                                    })}
                                    id="username"
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.username?.type === 'required' && (
                                <div className="valid-feedback d-block text-danger">
                                    Please fill the username.
                                </div>
                            )}
                            {errors.username?.type === 'maxLength' && (
                                <div className="valid-feedback d-block text-danger">
                                    Username up to 64 characters long.
                                </div>
                            )}
                            {errors.username?.type === 'minLength' && (
                                <div className="valid-feedback d-block text-danger">
                                    Minimum username length is 3 characters.
                                </div>
                            )}

                            <div className="input">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="text"
                                    {...register('email', {
                                        required: true,
                                        pattern:
                                            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.email?.type === 'required' && (
                                <div className="valid-feedback d-block text-danger">
                                    Please fill the email.
                                </div>
                            )}
                            {errors.email?.type === 'pattern' && (
                                <div className="valid-feedback d-block text-danger">
                                    Email format incorrect.
                                </div>
                            )}

                            <div className="input">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.password?.type === 'required' && (
                                <div className="valid-feedback d-block text-danger">
                                    Please fill the password.
                                </div>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <div className="valid-feedback d-block text-danger">
                                    Minimum password length is 6 characters.
                                </div>
                            )}

                            <div className="input">
                                <label htmlFor="repassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="repassword"
                                    {...register('repassword', {
                                        required: true,
                                        validate: {
                                            mathPassword: (v) =>
                                                v === getValues('password'),
                                        },
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.repassword?.type === 'required' && (
                                <div className="valid-feedback d-block text-danger">
                                    Please fill the re password.
                                </div>
                            )}
                            {errors.repassword?.type === 'mathPassword' && (
                                <div className="valid-feedback d-block text-danger">
                                    Re password not match password.
                                </div>
                            )}

                            <div className="button login">
                                <button>
                                    {isLoading ? (
                                        <div
                                            className="spinner-border text-light spinner-border-sm"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="m-0">Sign Up</span>
                                    )}
                                </button>
                            </div>

                            <p className="sign-category">
                                <span>Or sign up with</span>
                            </p>

                            <div
                                className="g-signin2"
                                data-onsuccess="onSignIn"
                            ></div>

                            <div className="row gx-md-3 gy-3">
                                <div className="col-md-6">
                                    <a href="#" onClick={registerFb}>
                                        <div
                                            className="social-media fb-media"
                                            style={{ height: 51.36 }}
                                        >
                                            {isLoadingFb ? (
                                                <div
                                                    className="spinner-border text-light spinner-border-sm"
                                                    role="status"
                                                >
                                                    <span className="sr-only">
                                                        Loading...
                                                    </span>
                                                </div>
                                            ) : (
                                                <>
                                                    <img
                                                        src="/images/inner-page/facebook.png"
                                                        className="img-fluid blur-up lazyload"
                                                        alt=""
                                                    />
                                                    <h6>Facebook</h6>
                                                </>
                                            )}
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a href="#">
                                        <div
                                            className="social-media google-media"
                                            id="signup-google"
                                        >
                                            <img
                                                src="/images/inner-page/google.png"
                                                className="img-fluid blur-up lazyload"
                                                alt=""
                                            />
                                            <h6>Google</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <p>
                                <Link href="/login">
                                    <a className="theme-color">
                                        Already have an account?
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {/*  Sign Up Section End*/}
        </>
    );
}

export default SignUp;
