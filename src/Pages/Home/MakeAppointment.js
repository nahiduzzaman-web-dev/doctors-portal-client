import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = ({ children }) => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10 lg:p-15'>
                <h3 className='text-primary font-bold mb-1'>Appointment</h3>
                <h1 className='text-2xl font-bold text-white mb-5'>Make an Appointment Today</h1>
                <p className='text-white pb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <PrimaryButton>Get Starts</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;