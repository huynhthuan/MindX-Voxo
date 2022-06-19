import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchApiColorImage } from '../../../src/api/Api_vuong/fetchApi';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import PlaceHolderColorImage from './PlaceHolderColorImage';
import { errorModal } from '../Common';

function ColorImage({ list_variation = [] }) {
    const handleClick = (e) => {
        const element = document.getElementsByClassName('image-item');
        Array.from(element).map((item) => item.classList.remove('active'));
        e.target.parentElement.classList.add('active');
        // router.push("/product/" + slug + "?id=" + id);
    };

    return (
        <div className="color-image flex-column align-items-start">
            <h6 className="product-title product-title-2 d-block w-100 ">Color</h6>

            <div className="image-select">
                <div className="size-box">
                    <ul className="image-section m-0">
                        {list_variation.map(({ image }, index) => (
                            <li
                                key={index}
                                className="border rounded image-item"
                                role="button"
                                onClick={(e) => handleClick(e)}
                            >
                                <img
                                    src={image}
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ColorImage;
