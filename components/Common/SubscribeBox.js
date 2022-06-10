import { useRef, useState } from 'react';
import axios from 'axios';
import {SUBSCRIBE_EMAIL} from '../../utils/api_minhhieu/index';
import AlertNotification from './AlertNotification';

function SubscribeBox() {

    const userEmail = useRef();
    const [emailInvalid, setEmailInValid] = useState(false);
    const [alertInfor,setAlertInfo] = useState({
        result:false,
        text:'',
        displayTime:0
    }) ;

    const handleSubcribe = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.current.value))
        {
            setEmailInValid(false);
            const formData = new FormData();
            formData.append("your-email",userEmail.current.value);
            axios({
                url: SUBSCRIBE_EMAIL,
                data: formData,
                method: 'POST',
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then( res => {
                if (res.status === 200) {
                    console.log(res);
                    setAlertInfo({
                        result:true,
                        text:'Subscribe successfull',
                        displayTime:3000
                    })
                } else {
                    setAlertInfo({
                        result:false,
                        text:'Subscribe Failed',
                        displayTime:3000
                    })
                }
            })
        } else {
            setEmailInValid(true);
        }
        
    }

    return (
        <section className="subscribe-section section-b-space">
            <AlertNotification alertInfor={alertInfor}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="subscribe-details">
                            <h2 className="mb-3">Subscribe Our News</h2>
                            <h6 className="font-light">
                                Subscribe and receive our newsletters to follow
                                the news about our fresh and fantastic Products.
                            </h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                        <div className="subsribe-input">
                            <div className="input-group position-relative">
                                <div className='theme-color position-absolute bottom-100' hidden={!emailInvalid}>Email is invalid</div>
                                <input
                                    ref={userEmail}
                                    type="text"
                                    className="form-control subscribe-input"
                                    placeholder="Your Email Address"
                                />
                                <button
                                    className="btn btn-solid-default"
                                    type="button"
                                    onClick={handleSubcribe}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SubscribeBox;
