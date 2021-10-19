import React from 'react';
import Banner from './Banner';
import FeatureOfService from './FeatureOfService';
import Testimonial from './Testimonial';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className="container-fluid">
            <Banner />
            <Welcome />
            <FeatureOfService />
            <Testimonial />
        </div>
    );
};

export default Home;