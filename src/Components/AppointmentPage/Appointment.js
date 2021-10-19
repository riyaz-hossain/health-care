import React, { useState } from 'react';
import './Appointment.css'
import AppointmentBook from './AppointmentBook';
import AppointmentHeader from './AppointmentHeader';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    return (
        <div>
            <AppointmentHeader 
            handleDateChange={handleDateChange}
            />
            <AppointmentBook  
            key={"1"} date={selectedDate}
            />
        </div>
    );
};

export default Appointment;