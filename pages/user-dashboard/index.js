import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavTabs from '../../components/UserDashboard/NavTabs/NavTabs';
import { useRouter } from 'next/router';

function UserDashboard() {
    const router = useRouter();
    const { cookie } = useSelector((state) => state.auth);
    useEffect(() => {
        if (!cookie) {
            router.push('/login');
        }
    }, [cookie]);

    return (
        <>
            <Head>
                <title>User Dashboard</title>
            </Head>

            {/* Breadcrumb section start */}
            <section className="breadcrumb-section section-b-space">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>User Dashboard</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <a>
                                                <i className="fas fa-home"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        / User Dashboard
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            <NavTabs />

            {/* Subscribe Section Start */}
            <section className="subscribe-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="subscribe-details">
                                <h2 className="mb-3">Subscribe Our News</h2>
                                <h6 className="font-light">
                                    Subscribe and receive our newsletters to
                                    follow the news about our fresh and
                                    fantastic Products.
                                </h6>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                            <div className="subsribe-input">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control subscribe-input"
                                        placeholder="Your Email Address"
                                    />
                                    <button
                                        className="btn btn-solid-default"
                                        type="button"
                                    >
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Subscribe Section End */}

            {/* Add Payment Modal Start */}
            <div className="modal fade payment-modal" id="addPayment">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="name" className="form-label">
                                    Card Type
                                </label>
                                <select className="form-select form-select-lg mb-4">
                                    <option defaultChecked disabled>
                                        Choose Your Card
                                    </option>
                                    <option defaultValue="1">
                                        Creadit Card
                                    </option>
                                    <option defaultValue="2">Debit Card</option>
                                    <option defaultValue="3">
                                        Debit Card and ATM
                                    </option>
                                </select>

                                <div className="mb-4">
                                    <label
                                        htmlFor="card"
                                        className="form-label"
                                    >
                                        Name On Card
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="card"
                                        placeholder="Name card"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="cAddress"
                                        className="form-label"
                                    >
                                        Card Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="cAddress"
                                        placeholder="XXXX-XXXX-XXXX-XXXX"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-8 mb-4">
                                        <label
                                            htmlFor="expiry"
                                            className="form-label"
                                        >
                                            Expiry Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control font-light"
                                            id="expiry"
                                        />
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <label
                                            htmlFor="cvv"
                                            className="form-label"
                                        >
                                            CVV
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="cvv"
                                            placeholder="XX9"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer pt-0 text-end d-block">
                            <button
                                type="button"
                                className="btn bg-secondary text-white rounded-1 modal-close-button"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                className="btn btn-solid-default rounded-1"
                                data-bs-dismiss="modal"
                            >
                                Save Card Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Payment Modal End */}

            {/* Comfirm Delete Modal Start */}
            <div className="modal delete-account-modal fade" id="deleteModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <div className="modal-body pb-3 text-center mt-4">
                            <h4>
                                Are you sure you want to delete your account?
                            </h4>
                        </div>
                        <div className="modal-footer d-block text-center mb-4">
                            <button
                                className="btn btn-solid-default btn-sm fw-bold rounded"
                                data-bs-target="#doneModal"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                            >
                                Yes Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal delete-account-modal fade" id="doneModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <div className="modal-body pb-3 text-center mt-4">
                            <h4>Done!!! Delete Your Account</h4>
                        </div>
                        <div className="modal-footer d-block text-center mb-4">
                            <button
                                className="btn btn-solid-default btn-sm fw-bold rounded"
                                data-bs-target="#exampleModalToggle"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                            >
                                Okay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Comfirm Delete Modal End */}
        </>
    );
}

export default UserDashboard;
