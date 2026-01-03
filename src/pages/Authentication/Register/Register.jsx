import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.init';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, googleSignUp } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => { // Here data contains all form data. Tis is different
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                updateProfile(auth.currentUser, {

                    displayName: data.name,
                    photoURL: data.image
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
                console.log(result.user);
            })
            .catch(error => {
                Swal.fire('error occured during registration')
            })
    }

    const handleGoogleSignIn = () => {
        // Implement Google Sign-In functionality here
        googleSignUp()
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                Swal.fire('error occured during registration')
            })
    }
    return (
        <div>
            <div className='text-black  h-100 p-10'>
                <h1 className='text-center text-3xl mb-10 text-yellow-700 font-bold'>Create an Account</h1>
                <form className='bg-white p-10 rounded-2xl' onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">

                        <label className="label text-neutral-950 text-xl">Profile Picture</label>
                        <input
                            type="url" className='h-10 p-2 bg-amber-50' placeholder='photoURL'
                            {...register('image', { required: true })}
                        />
                        {errors.image && <p className='text-red-700'>Image is required</p>}


                        <label className="label text-black text-xl">Full Name</label>
                        <input placeholder='Full Name' className='h-10 bg-amber-50 p-2' type="text"  {...register('name', { required: true })} />
                        {errors.name?.type === 'required' && <p className='text-red-700'>Name is required</p>}

                        <label className="label text-neutral-950 text-xl">Email</label>
                        <input className='h-10 p-2 bg-amber-50' type="email" placeholder="Email" {...register('email', { required: true })} />
                        {errors.email?.type === 'required' && <p className='text-red-700'>Email is required</p>}


                        <label className="label text-neutral-950 text-xl">Password</label>
                        <input className='h-10 p-2 bg-amber-50' type="password" placeholder="Password" {...register('password', { required: true, minLength: 6 })} />
                        {errors.password?.type === 'required' && <p className='text-red-700'>Password is required</p>}

                        {errors.password?.type === 'minLength' && <p className='text-red-700'>Password is not long enough</p>}

                        <div>Already have an Account? <Link to='/login' className='text-blue-600 underline'>Login</Link> </div>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                        </button>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;