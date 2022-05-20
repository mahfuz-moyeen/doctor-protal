import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
// import Spinner from '../../Shared/Spinner.js/Spinner';

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
    // const { isLoading, data: booking } = useQuery(('available'), () => fetch(`http://localhost:5000/bookings?email=${user.email}`,{
    //     method:'GET',
    //     headers:{
    //         'authorization': `Bearer ${localStorage.getItem('token')}`
    //     }
    // })
    //     .then(res => res.json())
    // )

    // const { isLoading, data: booking } = useQuery(('available'), () => fetch(`https://doctor-portal001.herokuapp.com/bookings?email=${user.email}`,{
    //     method:'GET',
    //     headers:{
    //         'authorization': `Bearer ${localStorage.getItem('token')}`
    //     }
    // })
    //     .then(res => res.json())
    // )

    // if (isLoading) {
    //     return <Spinner />
    // }

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
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;