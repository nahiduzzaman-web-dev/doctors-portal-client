import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {
    const dateCSS = `
    .my-today { 
        font-weight: bold;
        font-size: 140%; 
        color: red;
      }
    `
    return (
        <div
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}
            class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <style>{dateCSS}</style>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;