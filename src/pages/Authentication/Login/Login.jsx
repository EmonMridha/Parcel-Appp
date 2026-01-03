import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className='text-black h-100 p-10'>
            <h1 className='text-center text-2xl mb-10 text-yellow-700 font-bold'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">

                    <label className="label text-xl">Email</label>
                    <input className='h-10 bg-amber-50' type="email" placeholder="Email" {...register('email', { required: true })} />
                    {errors.email?.type === 'required' && <p className='text-red-700'>Email is required</p>}


                    <label className="label text-xl">Password</label>
                    <input className='h-10 bg-amber-50' type="password" placeholder="Password" {...register('password', { required: true, minLength: 6 })} />
                    {errors.password?.type === 'required' && <p className='text-red-700'>Password is required</p>}

                    {errors.password?.type === 'minLength' && <p className='text-red-700'>Password is not long enough</p>}

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;