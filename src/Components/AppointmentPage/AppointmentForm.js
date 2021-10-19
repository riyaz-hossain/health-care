import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, bookSubject, closeModal, date }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        data.service = bookSubject;
        data.date = date;
        data.created = new Date();
    };
    

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="text-center">
                    <h2 className='textBrand'>{bookSubject}</h2>
                    <small className='text-secondary'>ON {date.toDateString()}</small>
                </div>

                <form className='p-5' onSubmit={(e) =>handleSubmit(e , onSubmit)} >
                    <div className="form-group">
                        <input type="text"  name="name" placeholder="Your Name" className="form-control" />
                        {/* {errors.name && <span className="text-danger">This field is required</span>} */}

                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone Number" className="form-control" />
                        {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email" className="form-control" />
                        {/* {errors.email && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group row">
                        <div className="col-4  col-sm-6 col-12">

                            <select className="form-control" name="gender" >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {/* {errors.gender && <span className="text-danger">This field is required</span>} */}

                        </div>
                        <div className="col-4  col-sm-6 col-12">
                            <input  className="form-control" name="age" placeholder="Your Age" type="number" />
                            {/* {errors.age && <span className="text-danger">This field is required</span>} */}
                        </div>
                        <div className="col-4 col-sm-6 col-12">
                            <input className="form-control" name="weight" placeholder="Weight" type="number" />
                            {/* {errors.weight && <span className="text-danger">This field is required</span>} */}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn button-style">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;