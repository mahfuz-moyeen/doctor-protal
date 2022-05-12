import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const css = `
.my-selected:not([disabled]) { 
  font-weight: bold;
  border: 2px solid currentColor;
}
.my-selected:hover:not([disabled]) { 
  border-color: #0FCFEC;
  color: #0FCFEC;
}
.my-selected{ 
  border-color: #0FCFEC;
  color: #0FCFEC;
}
.my-today { 
  font-weight: bold;
  font-size: 140%; 
  color: #0FCFEC;
}
`;

const AppointmentBanner = ({date, setDate}) => {

    return (
        <section>
            <style>{css}</style>
            <div className={`hero min-h-screen px-10`} style={{ background: `url(${bg})`, backgroundSize: 'cover' }}>
                <div className="hero-content flex-col lg:flex-row-reverse gap-20" >
                    <img src={chair} alt='chair' className='lg:max-w-lg rounded-lg shadow-2xl' />
                    <div className='bg-base-100 rounded-xl shadow-lg'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: `my-today`
                            }} />
                    </div>
                </div>
            </div >
        </section>
    );
};

export default AppointmentBanner;