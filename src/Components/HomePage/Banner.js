import React from 'react';
import chair from '../../images/chair.png'
import './Home.css'
import {
    Link
} from "react-router-dom";


const Banner = () => {
    return (
        <div className="banner-area">
            <div className="">
                <div className="row d-flex justify-content-center align-items-center mt-3" >
                    <div className="col-md-6 col-sm-6 col-12 offset-sm-0">
                        <div className="banner-item">
                            <h1 style={{ color: '#3A4256' }}>Your New <span style={{ color: "#FF9800" }}>Smile</span> <br /> Starts Here</h1>
                            <p>
                                Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments
                            </p>
                            <Link to='/appointment'>
                                <button className="button-style">GET APPOINTMENT</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1 col-sm-6 col-12 offset-sm-0">
                        <div className="banner-img">
                            <img src={chair} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;