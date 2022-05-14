import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    console.log(user);

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;


        setTreatment(null);
    }

    return (

        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>

                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-5 justify-center mt-10  mx-20'>

                        <input type="text" readOnly disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' value={user?.displayName || ''} disabled readOnly className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' value={user?.email || ''} disabled readOnly className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />


                        <input type="submit" value="Submit" className='btn bg-neutral d-inline-block' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;