import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>

                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />

                        </div>
                    </div>
                    <div className=''>
                        <h2 className="card-title">{review.name}</h2>
                        <p>{review.city}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;