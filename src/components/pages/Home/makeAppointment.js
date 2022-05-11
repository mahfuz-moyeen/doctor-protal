import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <div style={{background:`url(${appointment})`}} className='flex justify-center items-center pt-10'>
            <div className='flex-1 -mt-40 hidden lg:block'>
                <img src={doctor} alt="doctor" />
            </div>
            <div className='flex-1 p-10'>
                <h4 className='text-primary font-bold my-5'>Appointment</h4>
                <h1 className='text-white text-3xl my-5'>Make an appointment Today</h1>
                <p className='text-gray-300 my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary border-0">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;