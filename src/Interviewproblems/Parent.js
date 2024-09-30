import React, { useState } from 'react';

function BusBooking() {
    const [bookedSeats, setBookedSeats] = useState([1]); // Initially seat 1 is booked

    const handleBooking = (seatNumber) => {
        if (bookedSeats.includes(seatNumber)) {
            alert('Seat is already booked!');
        } else {
            setBookedSeats([...bookedSeats, seatNumber]);
            alert('Seat booked successfully!');
        }
    };

    return (
        <div>
            <button onClick={() => handleBooking(1)}>Book Seat 1</button>
            <button onClick={() => handleBooking(2)}>Book Seat 2</button>
        </div>
    );
}

export default BusBooking;
