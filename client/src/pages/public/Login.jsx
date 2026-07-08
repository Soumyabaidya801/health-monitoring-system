import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const Login = ({ setIsLogin,closeModal}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/api/auth/login", formData);

            localStorage.setItem("token", response.data.token);
            alert(response.data.message);
            closeModal && closeModal();
            navigate("/dashboard");

        } catch (error) {

            console.log(error.response?.data || error.message);
            const message = error.response?.data?.message;
            alert(message || "Login Failed");
            if(message ==="User not found"){
              setIsLogin(false);
            }
        }
    };

    return (

        <form onSubmit={handleSubmit} className='space-y-2'>

            <input
                type="email"
                name='email'
                value={formData.email}
                placeholder='Email'
                required
                onChange={handleChange}
                className='w-full p-2.5 sm:p-3 text-sm sm:text-base border-b-2 text-black border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'
            />

            <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                required
                className='w-full p-2.5 sm:p-3 text-sm sm:text-base text-black border-b-2 border-gray-300 outline-none focus:bg-white focus:rounded-xl placeholder-gray-600 transition'
            />

            <div className='text-right'>
                <p className='text-cyan-300 hover:underline cursor-pointer'>
                    Forget password
                </p>
            </div>

            <button
                type="submit"
                className='w-full p-2.5 sm:p-3 text-sm sm:text-lg bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full font-medium hover:opacity-90 transition'
            >
                Login
            </button>

            <p className='text-center text-white'>
                New User ?

                <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className='text-cyan-300 hover:underline ml-1'
                >
                    Sign Up
                </button>
            </p>

        </form>
    );
};

export default Login;