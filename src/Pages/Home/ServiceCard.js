import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            class="card w-96 bg-base-100">
            <figure class="pt-10">
                <img src={img} alt="Album" style={{ width: '70px' }} />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-center">{name}</h2>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default ServiceCard;