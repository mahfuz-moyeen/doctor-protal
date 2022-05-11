import React from 'react';

import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './makeAppointment';
import Services from './Services';
import Terms from './Terms';
const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Terms/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;