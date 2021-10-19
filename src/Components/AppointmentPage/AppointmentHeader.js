import React from 'react';
import chair from '../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <div className="">
            <div className="">
                <div className="row d-flex align-items-center appointment-header">
                    <div className="col-md-6 col-sm-6">
                        <div className="pl-5">
                            <Calendar
                                onChange={handleDateChange}
                                value={new Date()}

                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 ">
                        <div className="appointment-header-right-content">
                            <img src={chair} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;