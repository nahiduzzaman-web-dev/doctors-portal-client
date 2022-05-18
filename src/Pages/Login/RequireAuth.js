import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import emailVerifyImg from '../../assets/images/email-verify.jpg';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <div className='flex justify-center'>
                <img src={emailVerifyImg} alt="" />
            </div>
            <h3 className='text-red-500'>Your Email is not verified!!</h3>
            <h5 className='text-success font-bold'> Please Verify your email.</h5>
            <button
                className='btn btn-secondary btn-sm text-white my-2'
                onClick={async () => {
                    await sendEmailVerification();
                    toastify({
                        text: "Verification Link Send, Check your email !",
                        className: "info",
                        gravity: "top",
                        position: "center",
                        style: {
                            background: "linear-gradient(to right, #02AABD, #00CDAC)",
                            fontWeight: 'bold',
                            letterSpacing: '0.1em'
                        }
                    }).showToast();
                }}
            >
                Send Verification Email Again
            </button>

        </div>
    }
    return children;
};

export default RequireAuth;