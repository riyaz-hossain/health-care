import React from 'react';
import BookingCard from './BookingCard'

const AppointmentBook = ({ date }) => {
    const bookingData = [
        {
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 13
        },
        {
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:00 AM - 11:30 AM',
            totalSpace: 11
        },
        {
            id: 3,
            subject: 'Teeth Cleaning',
            visitingHour: '12:00 PM - 1:00 PM',
            totalSpace: 17
        },
        {
            id: 4,
            subject: 'Cavity protection',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 19
        },
        {
            id: 5,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 PM - 9:00 PM',
            totalSpace: 25
        },
        {
            id: 6,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: 15
        }
    ]
    return (
        <div>
            <div className="text-center my-5 text-primary">
                <h2>Available Appointment on {date.toDateString()} </h2>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {
                        bookingData.map(data => <BookingCard bookingData={data} ></BookingCard>)
                    }
                </div>
            </div>
        </div>
    );
};



export default AppointmentBook;