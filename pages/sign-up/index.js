import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_NONE, REGISTER_ACCOUNT } from '../../utils/api';
import Swal from 'sweetalert2';

function SignUp() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

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
            console.log(resNonce);
            let res = await axios.get(REGISTER_ACCOUNT, {
                params: {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    nonce: resNonce.data.nonce,
                },
            });

            console.log(res);

            setIsLoading(false);

            // if (res.error && res.error !== null && res.error !== '') {
            //     Swal.fire({
            //         title: 'Error!',
            //         text: res.error,
            //         icon: 'error',
            //         confirmButtonText: 'Close',
            //     });
            //     return;
            // }

            // Swal.fire({
            //     title: `Login success!`,
            //     text: 'Welcome back VOXO SHOP',
            //     icon: 'success',
            //     showConfirmButton: false,
            // });

            // router.push('/login');
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

    return (
        <>
            {/* Sign Up Section Start */}
            <div className="login-section">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="materialContainer">
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
                            {errors.username?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the username.</div>}
                            {errors.username?.type === 'maxLength' && <div className="valid-feedback d-block text-danger">Username up to 64 characters long.</div>}
                            {errors.username?.type === 'minLength' && <div className="valid-feedback d-block text-danger">Minimum username length is 3 characters.</div>}

                            <div className="input">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.email?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the email.</div>}
                            {errors.email?.type === 'pattern' && <div className="valid-feedback d-block text-danger">Email format incorrect.</div>}

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
                            {errors.password?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the password.</div>}
                            {errors.password?.type === 'minLength' && <div className="valid-feedback d-block text-danger">Minimum password length is 6 characters.</div>}

                            <div className="input">
                                <label htmlFor="repassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="repassword"
                                    {...register('repassword', {
                                        required: true,
                                        validate: {
                                            mathPassword: (v) => v === getValues('password'),
                                        },
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.repassword?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the re password.</div>}
                            {errors.repassword?.type === 'mathPassword' && <div className="valid-feedback d-block text-danger">Re password not match password.</div>}

                            <div className="button login">
                                <button>
                                    {isLoading ? (
                                        <div className="spinner-border text-light spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (
                                        <span className="m-0">Sign Up</span>
                                    )}
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
                                <Link href="/login">
                                    <a className="theme-color">Already have an account?</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            {/*  Sign Up Section End*/}
        </>
    );
}

export default SignUp;
