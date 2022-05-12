import React from 'react';
import appointment from '../../../assets/images/appointment.png';
const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})`, backgroundSize: 'cover' }}>
            <div className='text-center my-10 py-10'>
                <h2 className='text-xl font-bold text-primary'>Contact Us</h2>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            <div>
                <form className='flex flex-col justify-center items-center gap-5 pb-10'>
                    <input type="email" name='email' placeholder="Email Address" className="input w-full max-w-xs" />
                    <input type="text" name='Subject' placeholder="Subject" className="input w-full max-w-xs" />
                    <textarea className="textarea w-full max-w-xs" name='message' placeholder="Your message"></textarea>
                    <input type='submit' value='Submit' className='btn btn-primary text-white'/>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;