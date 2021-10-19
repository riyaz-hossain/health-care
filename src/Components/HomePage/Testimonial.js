import React from 'react';
import wilson from '../../images/wilson.png';
import ema from '../../images/ema.png';
import aliza from '../../images/aliza.png';

const Testimonial = () => {
    const testimonialData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Wilson Harry',
            from: 'California',
            img: wilson
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Ema Gomez',
            from: 'California',
            img: ema
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Aliza Farari',
            from: 'California',
            img: aliza
        }
    ]

    return (
        <section className="testimonials py-5 my-5">
            <div className="container">
                <div className="section-header">
                    <h5 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                    <h1>What's Our Patients <br /> Says</h1>
                </div>
                <div className='row'>
                    {
                        testimonialData.map(testimonial => <div className="col-md-4 col-sm-6 col-12">
                            <div className='card shadow-sm mt-3'>
                                <div className="card-body">
                                    <p className="card-text text-center">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div className="card-footer d-flex align-item-center">
                                    <img src={testimonial.img} width="60" alt="" className="mx-3" />
                                    <div className="">
                                        <h6>{testimonial.name}</h6>
                                        <p className="m-0">{testimonial.from}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;