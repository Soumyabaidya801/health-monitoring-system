import React, { useState } from "react";
import api from "../../api/axios";

const Signup = ({ setIsLogin }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            return alert("Passwords do not match");
        }

        try {

            const response = await api.post("/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            alert(response.data.message);

            setIsLogin(true);

        } catch (error) {

            console.log(error.response?.data || error.message);
            const message = error.response?.data?.message ;
            alert( message || "Signup Failed");
            if( message === "User already exists"){
              setIsLogin(true);
            }
        }
    };

    return (

        <form onSubmit={handleSubmit} className='space-y-2'>

            <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                required
                className='w-full p-2.5 sm:p-3 text-black text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'
            />

            <input
                type="email"
                name='email'
                value={formData.email}
                placeholder='Email'
                required
                onChange={handleChange}
                className='w-full p-2.5 sm:p-3 text-black text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'
            />

            <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                required
                className='w-full p-2.5 sm:p-3 text-sm text-black sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'
            />

            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                required
                className='w-full p-2.5 sm:p-3 text-sm text-black sm:text-base border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'
            />

            <button
                type="submit"
                className='w-full p-2.5 sm:p-3 text-sm sm:text-lg bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full font-medium hover:opacity-90 transition'
            >
                Sign Up
            </button>

            <p className='text-center text-white'>
                Already have an account ?

                <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className='text-cyan-300 hover:underline ml-1'
                >
                    Login
                </button>
            </p>

        </form>
    );
};

export default Signup;