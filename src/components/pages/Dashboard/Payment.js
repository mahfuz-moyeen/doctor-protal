import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner.js/Spinner';

const Payment = () => {
    const { id } = useParams();

    const { data: appointment, isLoading } = useQuery(['payment', id], () => fetch(`http://localhost:5000/payment/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-primary text-2xl text-center my-10'>Payment Now</h1>
            {/* <h1 className='text-xl'>{appointment.bookingName}</h1>
           <p>Date: {appointment.date}</p>
           <p>Time: {appointment.time}</p>
           <p>Price: {appointment.price}</p>
           <p>Patient Name: {appointment.patientName}</p>
           <p>Email: {appointment.email}</p>
           <p>Phone: {appointment.phone}</p> */}
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <div className="card max-w-sm lg:max-w-md bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                            <h2 className="card-title">Please Pay for {appointment.bookingName}</h2>
                            <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at <span className='text-indigo-500'>{appointment.time}</span></p>
                            <p>Please pay: ${appointment.price}</p>
                        </div>
                    </div>
                    {/* <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;