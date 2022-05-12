import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    // console.log(treatment);
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">{name}</h3>

                    <form className='flex flex-col justify-center items-center gap-5 mt-10'>
                        <input type="test" name='date' className="input w-full border-base-300" value={format(date, 'PP')} disabled />

                        <select className="select w-full">
                            {
                                slots.map(slot => <option key={slot} className='text-sm'>{slot}</option>)
                            }
                        </select>

                        <input type="name" name='name' placeholder="Full Name" className="input w-full border-base-300" required />

                        <input type="number" name='number' placeholder="Phone Number" className="input w-full border-base-300" required />

                        <input type="email" name='email' placeholder="Email" className="input w-full border-base-300" required />

                        <input type='submit' value='Submit' className='btn btn-accent text-white' />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;