import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
    const { name, slots } = treatment;

    const [user] = useAuthState(auth);


    const handleModalForm = event => {
        event.preventDefault();
        const date = event.target.date.value;
        const time = event.target.time.value;
        const patientName = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.number.value;

        const booking = {
            bookingName: name,
            date: date,
            time: time,
            patientName: patientName,
            email: email,
            phone: phone
        }
        fetch('https://doctor-portal001.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set, ${date} at ${time}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.time}`)
                }
                // clear form 
                event.target.reset();
                // close modal 
                setTreatment(null);
                refetch();
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>

                    <form
                        onSubmit={handleModalForm}
                        className='flex flex-col justify-center items-center gap-5 mt-10'>
                        <input type="text" name='date' className="input w-full border-base-300" value={format(date, 'PP')} disabled />

                        <select name='time' className="select w-full">
                            {
                                slots.map(slot => <option
                                    value={slot}
                                    key={slot}
                                    className='text-sm'
                                >{slot}</option>)
                            }
                        </select>

                        <input type="name" name='name' placeholder="Full Name" className="input w-full border-base-300" value={user?.displayName} disabled required />

                        <input type="email" name='email' placeholder="Email" className="input w-full border-base-300" value={user?.email} disabled required />

                        <input type="number" name='number' placeholder="Phone Number" className="input w-full border-base-300" required />

                        <input type='submit' value='Submit' className='btn btn-accent text-white' />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;