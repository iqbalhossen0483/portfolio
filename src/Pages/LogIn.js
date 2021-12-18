import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from './Firebase/useFirebase';


const LogIn = () => {
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();
    const { LogInWithEmain } = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.state.from.pathname || "/";

    const onSubmit = user => {
        LogInWithEmain(user.email, user.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    setError("");
                    navigate(url);
                }
            })
            .catch(err => setError(err.message))
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col form h-96 w-96 justify-center bg-white px-10 rounded-lg shadow-lg'>
                <input type="email" {...register("email", { required: true })} placeholder='Your Email' />
                <input type="password" {...register("password", { required: true })} placeholder='Your Password' />
                {error &&
                    <p className='text-red-400 text-xl'>{error}</p>
                }
                <button type='submit' className='btn mt-5'>Log In</button>
            </form>
        </div>
    );
};

export default LogIn;