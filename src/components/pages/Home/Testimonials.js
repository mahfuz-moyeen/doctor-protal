import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonials = () => {
    const peoples = [
        {
            id: 1,
            name: 'Winson Herry',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: people1
        },
        {
            id: 2,
            name: 'Winson Herry',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: people2
        },
        {
            id: 3,
            name: 'Winson Herry',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: people3
        },
    ]
    return (
        <section className='w-11/12 mx-auto my-28'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl font-bold text-primary'>Testimonial</h2>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                {
                    peoples.map(people => <div 
                        key={people.id}
                    className="card max-w-sm lg:max-w-lg mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>{people.comment}</p>
                            <div className='flex items-center gap-5 mt-10'>
                                <div className="avatar">
                                    <div className="w-16 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={people.img} alt="" className='w-16 lg:w-24' />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>{people.name}</h1>
                                    <p>{people.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Testimonials;