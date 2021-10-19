import React from 'react';

const FeatureOfService = () => {
    return (
        <div className="container feature mb-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <div className="feature-img">
                        <img src="https://i.postimg.cc/DwJhdsBC/dental-Care.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="feature-description ">
                        <h3 className="mb-3">Exceptional Dental <br />
                            Care, On your Terms
                        </h3>
                        <p style={{ fontSize: "19px", textAlign: "justify", lineHeight: "29px" }}>
                            Many Americans today enjoy excellent oral health and are keeping their natural teeth throughout their lives. But this is not the case for everyone. Cavities are still the most prevalent chronic disease of childhood.

                            Too many people mistakenly believe that they need to see a dentist only if they are in pain or think something is wrong, but they're missing the bigger picture. A dental visit means being examined by a doctor of oral health capable of diagnosing and treating conditions that can range from routine to extremely complex.
                        </p>
                        <button className="button-style my-3">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureOfService;