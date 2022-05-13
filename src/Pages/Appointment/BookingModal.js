import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const BookingModal = ({ treatment }) => {
    const { name, slots } = treatment;
    return (

        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    {/* <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div> */}

                    <div className='flex flex-col justify-center items-center mt-10'>
                        <input type="text" placeholder="Full Name" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" class="input input-bordered input-accent w-full  my-3 max-w-xs" />
                        <input type="email" placeholder="Email Address" class="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" placeholder="Subject" class="input input-bordered input-accent w-full max-w-xs my-3" />

                        <input type="submit" value="Submit" className='btn bg-neutral d-inline-block' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;