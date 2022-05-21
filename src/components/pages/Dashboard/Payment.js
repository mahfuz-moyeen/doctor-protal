import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner.js/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1p8ACcQVA8yAkmETfwkRuFoyz5y3xpDlFcO7SauwYSOwcE1FaOpEDLqwqVBpbZYyA9kIFweD00JJfAlIHmYE2z00oq05wA4f');

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
                    <div className="card w-full my-5 max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;