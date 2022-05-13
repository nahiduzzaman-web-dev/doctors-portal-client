import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div
            style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
            class="card w-96">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length
                            ?
                            <span>{slots[0]}</span> : <span className='text-red-600'>Try Another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal" class="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;