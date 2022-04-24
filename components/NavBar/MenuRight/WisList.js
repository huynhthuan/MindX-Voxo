import Link from 'next/link';

function WisList() {
    return (
        <>
            <div className="cart-media">
                <Link href="/wishlist">
                    <a>
                        <i data-feather="heart"></i>
                        <span className="label label-theme rounded-pill">5</span>
                    </a>
                </Link>
            </div>
            <div className="onhover-div">
                <Link href="/wishlist">
                    <a>
                        <div className="wislist-empty">
                            <i className="fab fa-gratipay"></i>
                            <h6 className="mb-1">Your wislist empty !!</h6>
                            <p className="font-light mb-0">explore more and shortlist items.</p>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
}

export default WisList;
