import React from 'react';

const HomePageService = props => {
    const { title, image, description, icon } = props.services;

    return (
        <div className="col-md-4 my-3 text-center ml-auto ">
            <div className="img d-flex justify-content-center mb-3" >
                <img src={image} alt="" />
                {
                    icon != null ? <div className="service-icon">
                        <i className={icon}></i>
                    </div> : null
                }
            </div>
            <img src="http://health.templines.org/wp-content/uploads/2018/07/3-layers5.svg" alt="" />

            <div className="service-detail">
                <h3> {title} </h3>
                <p className="text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HomePageService;