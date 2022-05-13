import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>

                <div className='flex items-center'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />

                        </div>
                    </div>
                    <div className=''>
                        <h2 class="card-title">{review.name}</h2>
                        <p>{review.city}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;