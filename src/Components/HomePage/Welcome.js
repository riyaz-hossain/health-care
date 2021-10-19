import React from 'react';
import HomePageServiceData from '../../Data/HomePageServiceData';
import HomePageService from './HomePageService';

const Welcome = () => {

    return (
        <div>
            <div className="text-center my-3 welcome-text">
                <h2>Welcome , To <b>Health Care</b> <span className="unique-text"> Agency</span> </h2>
                <p>
                    Our medical specialists care about you & your family’s health
                </p>
            </div>

            <div className="my-3 service-area">
                <div className="text-center">
                    <h5 style={{ color: "#1CC7C1", fontWeight: "700" }}>Some Of Our Services</h5>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            HomePageServiceData.map(services => <HomePageService services={services} />)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Welcome;