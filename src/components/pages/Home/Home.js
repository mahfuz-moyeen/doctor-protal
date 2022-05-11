import React from 'react';

import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './makeAppointment';
import Services from './Services';
import Terms from './Terms';
import Testimoials from './Testimoials';
const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Terms/>
            <MakeAppointment/>
            <Testimoials/>
        </div>
    );
};

export default Home;