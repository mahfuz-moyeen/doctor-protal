import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='py-10'>
            <div className='my-10 text-center'>
                <h2 className='text-lg font-semibold text-primary'>Available Appointments on {format(date, 'PP')}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <div
                        key={service.id}
                        className="card px-5 max-w-sm lg:max-w-lg mx-auto bg-base-100 shadow-xl text-center">
                        <h1 className='text-primary text-lg font-semibold pt-5'>{service.name}</h1>
                        <div className="card-body items-center text-center pt-0">
                            <select class="select w-full max-w-xs">
                                {
                                    service.slots.map(slot => <option className='text-sm'>{slot}</option>)
                                }
                            </select>
                            <p className='text-sm font-bold'>{service.slots.length} {service.slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary border-0">Book Appointment</button>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;