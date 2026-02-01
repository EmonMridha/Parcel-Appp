import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.init';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, googleSignUp } = useAuth();
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState('');
    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => { // Here data contains all form data. Tis is different

        createUser(data.email, data.password)
            .then(async (result) => {
                await updateProfile(auth.currentUser, {

                    displayName: data.name,
                    photoURL: profilePic
                })

                // saving user to the database
                const userInfo = {
                    email: result.user.email,
                    role: 'user', // default role
                    created_At: new Date().toISOString()
                }

                const userRes = await axiosSecure.post('/users', userInfo)


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
                Swal.fire('error occurred during registration')
            })
    }

    const handleGoogleSignIn = () => {
        // Implement Google Sign-In functionality here
        googleSignUp()
            .then(async (result) => {

                const data = result.user;

                // saving user to the database
                const userInfo = {
                    email: data.email,
                    role: 'user', // default role
                    created_At: new Date().toISOString()
                }

                const userRes = await axiosSecure.post('/users', userInfo)
                console.log(userRes.data);

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
                Swal.fire('error occurred during registration')
            })
    }

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image); // entering the image in the formData

        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`, formData)

        setProfilePic(res.data.data.url);
    }
    return (
        <div>
            <div className='text-black  h-100 p-10'>
                <h1 className='text-center text-3xl mb-10 text-yellow-700 font-bold'>Create an Account</h1>
                <form className='bg-white p-10 rounded-2xl' onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">


                        {/* File Upload Input */}
                        <label className='label text-neutral-950 text-xl '>Your Image</label>
                        <input type="file" onChange={handleImageUpload}
                            className='input bg-amber-50' placeholder='Your Profile picture' />

                        {/* name */}
                        <label className="label text-black text-xl">Full Name</label>
                        <input placeholder='Full Name' className='h-10 bg-amber-50 p-2' type="text"  {...register('name', { required: true })} />
                        {errors.name?.type === 'required' && <p className='text-red-700'>Name is required</p>}

                        {/* email */}
                        <label className="label text-neutral-950 text-xl">Email</label>
                        <input className='h-10 p-2 bg-amber-50' type="email" placeholder="Email" {...register('email', { required: true })} />
                        {errors.email?.type === 'required' && <p className='text-red-700'>Email is required</p>}

                        {/* password */}
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