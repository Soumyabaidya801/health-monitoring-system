import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import { FiX } from "react-icons/fi";

const Authpage = ({closeModal}) => {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);

    return (

        <div className='w-full min-h-screen flex items-start justify-center py-20'>

            <div className='relative w-full max-w-sm sm:max-w-md bg-blue-950 p-4 sm:p-5 rounded-2xl shadow-lg'>

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className='absolute top-4 right-4 text-sm font-mono rounded-full px-2 py-1 hover:scale-110 transition'
                >
                    <FiX size={20} />
                </button>

                {/* Header */}
                <div className='flex justify-center mb-4'>
                    <h2 className='text-2xl sm:text-3xl font-semibold text-center text-white'>
                        {isLogin ? "Login" : "Sign Up"}
                    </h2>
                </div>

                {/* Toggle */}
                <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>

                    <button
                        onClick={() => setIsLogin(true)}
                        className={`w-1/2 text-base sm:text-lg font-medium transition-all z-10 ${
                            isLogin ? "text-white" : "text-black"
                        }`}
                    >
                        Login
                    </button>

                    <button
                        onClick={() => setIsLogin(false)}
                        className={`w-1/2 text-base sm:text-lg font-medium transition-all z-10 ${
                            !isLogin ? "text-white" : "text-black"
                        }`}
                    >
                        Sign Up
                    </button>

                    <div
                        className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-300 transition-all duration-300 ${
                            isLogin ? "left-0" : "left-1/2"
                        }`}
                    ></div>

                </div>

                {/* Forms */}
                {isLogin ? (
                    <Login 
                    setIsLogin={setIsLogin} 
                    closeModal={closeModal} />
                ) : (
                    <Signup setIsLogin={setIsLogin} />
                )}

            </div>

        </div>
    );
};

export default Authpage;