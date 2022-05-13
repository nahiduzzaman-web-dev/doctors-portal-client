import React from 'react';
import ServiceCard from './ServiceCard';
import fluiride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceExceptional from './ServiceExceptional';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatments may offer even more significant benefits to protect teeth. These treatments can be beneficial to people at risk of tooth decay but may not be right for everyone.',
            img: fluiride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'A tooth filling is a procedure wherein the damaged and decayed part of a tooth is removed and the area is filled with a replacement material to protect against further damage and to restore the tooth’s appearance and function',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening is ideal for people who have healthy, unrestored teeth (no fillings) and gums. Individuals with yellow tones to their teeth respond best.',
            img: whitening
        },
    ]
    return (
        <div className='mt-20 px-12'>
            <div className='text-center font-bold'>
                <h4 className='text-primary'>Our Services</h4>
                <h1 className='text-xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div>
                <ServiceExceptional></ServiceExceptional>
            </div>

        </div>
    );
};

export default Services;