import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Authpage from '../../pages/public/Authpage'


const Navbar = () => {

  const navigate = useNavigate()

  const [showLogin, setShowLogin] = useState(false)

  return (

    <>
    
      {/* Navbar */}
      <div className='fixed top-0 w-full flex justify-center z-30'>

        {/* Middle Navbar Box */}
        <div className='bg-black/20 hover:bg-white/10 backdrop-blur-md px-10 py-4 rounded-xl flex items-center gap-10 text-white shadow-lg border border-white/10'>

          <h1
            onClick={() => navigate('/')}
            className='cursor-pointer hover:text-cyan-300 transition font-semibold'
          >
            MediTrack
          </h1>

          <h1
            onClick={() => navigate('/about')}
            className='cursor-pointer hover:text-cyan-300 transition'
          >
            About
          </h1>

          <h1
            onClick={() => navigate('/contact')}
            className='cursor-pointer hover:text-cyan-300 transition'
          >
            Contact
          </h1>

        </div>

        {/* Right Side */}
        <div className='absolute right-10 top-1 flex items-center gap-5'>

          {/* Search Box */}
          <div className='flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md'>

            <input
              type="text"
              placeholder="Search..."
              className='bg-transparent outline-none text-white placeholder-gray-300 w-40'
            />

            <button className='ml-2 text-cyan-300'>
              <FiSearch size={20} />
            </button>

          </div>

          {/* Sign In Button */}
          <button
            onClick={() => setShowLogin(true)}
            className='text-white border border-white px-5 py-2 rounded-xl hover:bg-cyan-500 hover:border-cyan-500 transition duration-300'
          >

            Sign In

          </button>

        </div>

      </div>

      {/* Popup Login */}
      {showLogin && (

        <Authpage closeModal={() => setShowLogin(false)} />

      )}

    </>

  )
}

export default Navbar