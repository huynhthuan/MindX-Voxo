import React from 'react';

function SelectSize({ attributes }) {
    const handleClick = (item, key, e) => {
        const element = document.getElementsByClassName('size-item');
        Array.from(element).map((item) => item.classList.remove('active'));
        e.target.parentElement.classList.add('active');
        // router.push("/product/" + slug + "?id=" + id);
    };
    return (
        <div
            id="selectSize"
            className="addeffect-section product-description border-product"
        >
            <h6 class="product-title product-title-2 d-block">Size</h6>
            <div className="size-box">
                <ul>
                    {attributes
                        .filter((item) => item.name === 'Size')[0]
                        .options.map((item, key) => (
                            <li
                                className="size-item"
                                key={key}
                                onClick={(e) => handleClick(item, key, e)}
                            >
                                <a>{item}</a>
                            </li>
                        ))}
                </ul>
            </div>

            <h6 className="product-title product-title-2 d-block">quantity</h6>

            <div className="qty-box">
                <div className="input-group">
                    <span className="input-group-prepend">
                        <button
                            type="button"
                            className="btn quantity-left-minus"
                            data-type="minus"
                            data-field=""
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                    </span>
                    <input
                        type="text"
                        name="quantity"
                        className="form-control input-number"
                        defaultValue="1"
                    />
                    <span className="input-group-prepend">
                        <button
                            type="button"
                            className="btn quantity-right-plus"
                            data-type="plus"
                            data-field=""
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SelectSize;
