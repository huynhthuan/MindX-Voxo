import MostPopular from "./MostPopular";

function Sidebar() {
    return (
        <div className="category-option">
            <div className="button-close mb-3">
                <button className="btn p-0">
                    <i data-feather="arrow-left"></i> Close
                </button>
            </div>
            <div className="accordion category-name" id="accordionExample">
                <div className="accordion-item category-rating">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                        >
                            Brand
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body category-scroll">
                            <ul className="category-list">
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault1"
                                        >
                                            Zara
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault2"
                                        >
                                            Allen Solly
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault3"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault3"
                                        >
                                            Louis Philippe
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault4"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault4"
                                        >
                                            Louis Philippe Sport
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault5"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault5"
                                        >
                                            H&M
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault6"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault6"
                                        >
                                            Fila
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault7"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault7"
                                        >
                                            Puma
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault8"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault8"
                                        >
                                            Nike
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault9"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault9"
                                        >
                                            HRX
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item category-color">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                        >
                            Color
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul className="category-list">
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="undefined">
                                        <i className="fas fa-check"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item category-price">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                        >
                            Price
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <div className="range-slider category-list">
                                <input
                                    type="text"
                                    className="js-range-slider"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item category-rating">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                        >
                            Category
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                    >
                        <div className="accordion-body category-scroll">
                            <ul className="category-list">
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault10"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault10"
                                        >
                                            Shirts
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault11"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault11"
                                        >
                                            T-shirts Solly
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault12"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault12"
                                        >
                                            Kurtas
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault13"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault13"
                                        >
                                            Sweatshirts
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault14"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault14"
                                        >
                                            Jackets
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault15"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault15"
                                        >
                                            Blazers
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault16"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault16"
                                        >
                                            Puma
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault17"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault17"
                                        >
                                            Nike
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault18"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault18"
                                        >
                                            HRX
                                        </label>
                                        <p className="font-light">(25)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                        >
                            Discount Range
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul className="category-list">
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault19"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault19"
                                        >
                                            5% and above
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault20"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault20"
                                        >
                                            10% and above
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check ps-0 custome-form-check">
                                        <input
                                            className="checkbox_animated check-it"
                                            type="checkbox"
                                            id="flexCheckDefault21"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault21"
                                        >
                                            20% and above
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <MostPopular />
            </div>
        </div>
    );
}

export default Sidebar;
