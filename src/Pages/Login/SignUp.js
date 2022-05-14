import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/appointment');
        if (data) {
            reset();
        }
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'>
            <small>{error?.message || gError?.message || updateError?.message}</small>
        </p>
    }
    if (user || gUser) {
        console.log(user || gUser);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered w-full max-w-md"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required.'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-md"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required.'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email.'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-md"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required.'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer.'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-md' type="submit" value='Sign up' />
                    </form>

                    <p className='text-xs text-center font-bold'>Allready have Account ? <Link to='/login' className='text-primary'>Login</Link></p>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline tracking-wider"><FcGoogle className='mr-2 text-lg' /> Continue with Google </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;