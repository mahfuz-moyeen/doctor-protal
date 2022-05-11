import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    const infoItem = [
        {
            id:1,
            name: 'Opening Hours',
            detail: 'Lorem Ipsum is simply dummy text of the pri',
            icon: clock,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id:2,
            name: 'Visit our location',
            detail: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgColor: 'bg-accent'
        },
        {
            id:3,
            name: 'Contact us now',
            detail: '+000 123 456789',
            icon: phone,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]
    return (
        <div  className='w-11/12 mx-auto'>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                infoItem.map(info => <div key={info.id} class={`card lg:card-side px-0 py-5 lg:px-5 lg:py-0 shadow-xl ${info.bgColor}`}>
                    <figure><img src={info.icon} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">{info.name}</h2>
                        <p className='text-gray-200'>{info.detail}</p>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Info;