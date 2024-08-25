import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner.js/Spinner';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { isLoading, data: appointments } = useQuery(('appointments'), () => fetch(`https://doctor-portal-rgekx2xd6-mahfuzmoyeens-projects.vercel.app/appointments`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    /**
       * 3 ways to store images
       * 1. Third party storage //Free open public storage is ok for Practice project 
       * 2. Your own storage in your own server (file system)
       * 3. Database: Mongodb 
       * 
       * YUP: to validate file: Search: Yup file validation for react hook form
      */
    const imageStorageKey = '86f5dca2ba21afd9927d840cd5b6d0c0';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database 
                    fetch('https://doctor-portal-rgekx2xd6-mahfuzmoyeens-projects.vercel.app/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted  => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor');
                            }
                        })

                }

            })
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-2xl text-center my-10 text-primary">Add Doctor</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    {/* email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                    </div>

                    {/* specialty  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
                            {
                                appointments.map((appointment, index) => <option
                                    value={appointment?.name}
                                    key={index}
                                    className='text-sm'
                                >{appointment?.name}</option>)
                            }
                        </select>
                    </div>
                    {/* image  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                    </div>



                    <div className="form-control mt-6">
                        <input type='submit' value='ADD' className="btn btn-accent text-base-100" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;