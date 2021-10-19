import React from 'react';

const SingleService = props => {
    const { title, image, description } = props.data;
    return (
        <div className="">
            <div className="single-service">
                <h3> {title} </h3>
                <div className={
                    props.id % 2 === 0
                        ? "row align-items-center mb-5"
                        : "row align-items-center mb-5 flex-row-reverse"
                }>
                    <div className="col-md-4">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                        <p style={{ fontSize: "19px", lineHeight: "31px" }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;