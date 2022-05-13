import React from 'react';
import contact from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${contact})`
            }}
            className="mb-10"
        >
            <div className='py-20'>
                <div className='text-center'>
                    <h3 className='text-primary font-bold mb-1'>Contact Us</h3>
                    <h1 className='text-2xl text-white font-bold mb-5'>Stay connected with us</h1>
                </div>

                <div className='mx-auto mb-15'>
                    <div className='flex flex-col justify-center items-center'>
                        <input type="email" placeholder="Email Address" class="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Subject" class="input input-bordered input-accent w-full max-w-xs my-3" />
                        <textarea class="textarea textarea-accent w-full max-w-xs mb-5" placeholder="Your Message"></textarea>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;