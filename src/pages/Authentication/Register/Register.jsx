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

    const onSubmit = (data) => { // Here data contains all form data. This is different

        createUser(data.email, data.password)
            .then(async (result) => {
                await updateProfile(auth.currentUser, {

                    displayName: data.name,
                    photoURL: profilePic
                })

                navigate('/')
                Swal.fire('Registered successfully!')

                // saving user to the database
                const userInfo = {
                    email: result.user.email,
                    role: 'user', // default role
                    created_At: new Date().toISOString()
                }

                const userRes = await axiosSecure.post('/users', userInfo) // saving user info to the database using axios secure instance

                if (userRes.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registered Successfully and added user data!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate('/')
                }

            })
            .catch(error => {
                Swal.fire('Error occurred when registering or saving user data')
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

                const userRes = await axiosSecure.post('/users', userInfo) // saving user info to the database using axios secure instance

                if (userRes.data.insertedId) {
                    Swal.fire('Successfully logged in and added user data!')
                }
            })
            .catch(error => {
                Swal.fire('error occurred during registration')
            })
    }

    const handleImageUpload = async (e) => {
        const image = e.target.files[0]; // getting the image from the file input
        const formData = new FormData();
        formData.append('image', image); // entering the image in the formData

        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`, formData)

        setProfilePic(res.data.data.url);
    }

    return (
        <div>
            <main className="w-full h-screen flex flex-col items-center justify-center px-4">
                <div className="max-w-sm w-full text-gray-600 space-y-5">
                    <div className="text-center pb-8">
                        <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                        <div className="mt-5">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Register in to your account</h3>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >

                        {/* File Upload Input */}
                        <div>
                            <label className="font-medium">
                                Your Image
                            </label>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>

                        {/* Name Input */}
                        <div>
                            <label className="font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                {...register('name', { required: true })}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {errors.name && <p className="text-red-600 text-sm mt-1">Name is required</p>}
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {errors.email && <p className="text-red-600 text-sm mt-1">Email is required</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password', { required: true, minLength: 6 })}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {errors.password && <p className="text-red-600 text-sm mt-1">Password is required (min 6 characters)</p>}
                        </div>

                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Sign up
                        </button>
                    </form>
                    <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue with Google
                    </button>
                    <p className="text-center">Already have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a></p>
                </div>
            </main>
        </div>
    );
};

export default Register;