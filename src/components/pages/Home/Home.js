import React from 'react';

import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Terms from './Terms';
const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner />
            <Info />
            <Services />
            <Terms/>
        </div>
    );
};

export default Home;