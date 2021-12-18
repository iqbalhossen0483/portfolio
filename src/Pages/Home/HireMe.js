import React from 'react';
import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";

const HireMe = () => {
    const { register, handleSubmit } = useForm();
    const alart = useAlert();
    const onSubmit = user => {
        user.status = "pending";

        fetch("https://md-iqbal-portfolio.herokuapp.com/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alart.show(<div className='py-10 px-5'>
                        <p>Dear, <span className='font-semibold'>{user.name}</span></p>
                        <p>Thank you soo much for contact me</p>
                        <p>I will contact you as soon possible</p>
                    </div>);
                }
            })
    };

    return (
        <div id='hire' className='py-28 pb-10 px-16 text-xl grid grid-cols-2'>
            <div>
                <p className='caption'>Let's Say, Hi</p>
                <p className='text-5xl font-bold pb-5'>Hire Me</p>
                <p>Call me directly: <span className='font-bold'>+880 18538 60483</span></p>
                <p>Contact with email: <span className='font-bold'>iqbal.hossen.senbag.bd@gmail.com</span></p>
                <form
                    className='flex flex-col mt-10 form'
                    onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder='Your name' />

                    <input type="number" {...register("number", { required: true })} placeholder='Your number' />

                    <input type="email" {...register("email", { required: true })} placeholder='Your email' />

                    <textarea rows={5} {...register("massege", { required: true })} placeholder='Your massege' />

                    <button className='btn w-52 mt-6' type="submit">
                        SUBMIT NOW
                    </button>
                </form>
            </div>
            <div className='flex justify-center'>
                <img className='ml-10 rounded-lg bg-gray-100' src="https://i.ibb.co/t29j3gB/Promo-Facebook-Ad-Carousel-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default HireMe;