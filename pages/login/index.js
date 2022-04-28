import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Login() {
    const router = useRouter();
    const { data: session, status } = useSession();
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
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        let res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        setIsLoading(false);

        if (res.error && res.error !== null && res.error !== '') {
            Swal.fire({
                title: 'Error!',
                text: res.error,
                icon: 'error',
                confirmButtonText: 'Close',
            });
            return;
        }

        Swal.fire({
            title: `Login success!`,
            text: 'Welcome back VOXO SHOP',
            icon: 'success',
            showConfirmButton: false,
        });

        router.push('/');
    };

    return (
        <>
            {/* Log In Section Start */}
            <div className="login-section">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="materialContainer">
                        <div className="box">
                            <div className="login-title">
                                <h2>Login</h2>
                            </div>
                            <div className="input">
                                <label htmlFor="email">Email</label>
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
                                    id="password"
                                    type="password"
                                    name="password"
                                    {...register('password', {
                                        required: true,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.password?.type === 'required' && <div className="valid-feedback d-block text-danger">Please fill the password.</div>}

                            <a href="forgot.html" className="pass-forgot">
                                Forgot your password?
                            </a>

                            <div className="button login">
                                <button type="submit">
                                    {isLoading ? (
                                        <div className="spinner-border text-light spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (
                                        <span className="m-0">Log In</span>
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
                                Not a member?{' '}
                                <Link href="/sign-up">
                                    <a className="theme-color">Sign up now</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            {/* Log In Section End */}
        </>
    );
}

export default Login;
``;
