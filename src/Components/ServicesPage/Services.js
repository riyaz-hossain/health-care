import React from 'react';
import Layout from '../Layout/Layout';
import SingleService from './SingleService';
import './Service.css'
import serviceData from "../../Data/ServicePageData"

const Services = () => {




    return (
        <Layout>
            <div className="container-fluid">
                <div className="services">
                    <h3>Our Dental Services </h3>
                    <p>
                        Our Health Care Agency, we believe in treating our valued patients the way we would want to be treated at the dentist’s office – with quality customer service, reasonable prices, and high-end treatment that leaves you ready to smile. We are happy to work alongside our dedicated staff in order to help you achieve the excellent, long-lasting oral health you deserve. Contact our Boulder, CO location today to schedule your first appointment, or if we can help you with any questions you may have.
                    </p>
                </div>

                {
                    serviceData.map((data, index) =>
                        <SingleService
                            data={data}
                            id={index}
                        />)
                }

            </div>
        </Layout>
    );
};

export default Services;