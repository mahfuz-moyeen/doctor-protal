import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            title: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 2,
            title: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
    ]

    return (
        <div className='my-28'>
            <div className='text-center my-10'>
                <h3 className='text-primary font-bold text-xl'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <div
                        key={service.id}
                        class="card max-w-sm lg:max-w-lg mx-auto bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={service.icon} alt={service.title} class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{service.title}</h2>
                            <p>{service.details}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;