import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './About.css'

const About = () => {
    return (
        <Layout>
            <div className="container">
                <div className="mt-3">
                    <h3>About Our <span style={{ color: "#14D1C9" }}>Health Care Agency </span></h3>
                    <p style={{ fontSize: "19px", lineHeight: "39px" }}>
                        At Health Care, we’re not interested in overselling patients or talking them into accepting unnecessary services – our doctors and staff members want to do what’s best for you each time and every time you come in. Transparency, kindness, and personalization are the cornerstones of our approach, and we never discriminate against patients either. Contact our Boulder, CO location today to schedule your first visit, or if you have any questions our team can help you with.
                    </p>
                </div>

                <div className="more-to-explore">
                    <h3 className="text-center text-success">More To Explore </h3>
                    <div className="d-md-flex justify-content-between d-sm-flex d-block text-center">
                        <div className="more-explore-btn-area">
                            <Link className="more-explore-btn" to="/services"> View All Our Services <i className="fas fa-arrow-circle-right"></i> </Link>
                        </div>
                        <div className="more-explore-btn-area">
                            <Link className="more-explore-btn" to="/services"> View All Our Services <i className="fas fa-arrow-circle-right"></i> </Link>
                        </div>
                        <div className="more-explore-btn-area">
                            <Link className="more-explore-btn" to="/services"> View All Our Services <i className="fas fa-arrow-circle-right"></i> </Link>
                        </div>
                        <div className="more-explore-btn-area">
                            <Link className="more-explore-btn" to="/services"> View All Our Services <i className="fas fa-arrow-circle-right"></i> </Link>
                        </div>
                    </div>
                </div>


            </div>

        </Layout>
    );
};

export default About;