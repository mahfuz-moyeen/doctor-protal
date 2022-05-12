import React from 'react';
import ContactUs from '../ContactUs/ContactUs';

import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './makeAppointment';
import Services from './Services';
import Terms from './Terms';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Terms />
            <MakeAppointment />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;