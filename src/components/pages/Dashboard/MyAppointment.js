import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.message) {
                }
                else {
                    setBooking(data)
                }
            })

    }, [user])


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-center my-10'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((book, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{book.patientName}</td>
                                <td>{book.bookingName}</td>
                                <td>{book.date}</td>
                                <td>{book.time}</td>
                                <td>
                                    {(book.price && !book.paid) && <Link to={`/dashboard/payment/${book._id}`} className='btn btn-sm btn-success'>Pay Now</Link>}

                                    {(book.price && book.paid) && <p><span className='text-success'>Paid</span></p>}

                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyAppointment;